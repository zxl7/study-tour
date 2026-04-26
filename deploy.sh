#!/usr/bin/env bash
set -euo pipefail

# ==============
# 自动部署脚本（h5 / PC）
# 目标：Nginx 静态目录（通过 SSH + rsync 上传）
#
# 设计原则：
# - 配置通过参数/环境变量注入
# - 逻辑拆成小函数，可复用、易读
# - 默认不执行 build（需要显式 --build）
#
# 常用命令示例：
#   # 快速部署 PC（跳过 build）
#   ./deploy.sh deploy pc --no-build
#
#   # 部署并 reload nginx
#   ./deploy.sh deploy all --build --reload-nginx
#
#   # 预览会执行什么（不实际操作）
#   ./deploy.sh deploy all --dry-run
# ==============

#######################################
# 函数：打印用法
#######################################
usage() {
  cat <<'EOF'
用法：
  ./deploy.sh deploy <h5|pc|all> [--build|--no-build] [--reload-nginx] [--dry-run]

快捷命令（已内置路径）：
  ./deploy.sh deploy pc --no-build      # 部署 PC（跳过 build）
  ./deploy.sh deploy h5 --no-build      # 部署 H5（跳过 build）
  ./deploy.sh deploy all --no-build     # 部署 PC + H5
  ./deploy.sh deploy all --build        # 构建 + 部署
  ./deploy.sh deploy all --dry-run      # 预览（不实际操作）

选项：
  --build         执行本地构建
  --no-build      跳过构建（使用已有 dist）
  --reload-nginx  部署后 reload nginx
  --dry-run       仅预览，不实际执行
  --host user@ip  服务器地址（默认：root@120.76.96.112）
  --keep N        保留最近 N 个版本（默认：5）

版本回滚：
  ./deploy.sh rollback <h5|pc|all>     # 回滚到上一版本
  ./deploy.sh rollback <h5|pc|all> --tag 20260326-143000  # 回滚到指定版本

内置路径：
  PC → ./新加坡研学PC官网原型/dist -> /app/dist/
  H5 → ./sg-study-app/dist/build/h5 -> /app/h5/
EOF
}

#######################################
# 函数：输出错误并退出
# 参数：
#   $1 - 错误信息
#######################################
die() {
  echo "[ERROR] $1" >&2
  exit 1
}

#######################################
# 函数：检查命令是否存在
# 参数：
#   $1 - 命令名
#######################################
require_cmd() {
  command -v "$1" >/dev/null 2>&1 || die "缺少依赖命令：$1"
}

#######################################
# 函数：按需加载 .env/.env.local（不执行任意 shell 代码）
# 支持格式：
#   KEY=value
#   KEY="value with spaces"
# 会忽略空行与 # 注释行
# 参数：
#   $1 - 文件路径
#######################################
load_env_file() {
  local file="$1"
  [[ -f "$file" ]] || return 0

  # 逐行解析，避免 source 带来的任意代码执行风险
  while IFS= read -r line || [[ -n "$line" ]]; do
    [[ -z "$line" ]] && continue
    [[ "$line" =~ ^[[:space:]]*# ]] && continue
    [[ "$line" =~ ^[A-Za-z_][A-Za-z0-9_]*= ]] || continue

    local key="${line%%=*}"
    local val="${line#*=}"
    # 去掉首尾空格
    val="${val#"${val%%[![:space:]]*}"}"
    val="${val%"${val##*[![:space:]]}"}"
    # 去掉可能的成对引号
    if [[ "$val" =~ ^\".*\"$ ]]; then
      val="${val:1:${#val}-2}"
    elif [[ "$val" =~ ^\'.*\'$ ]]; then
      val="${val:1:${#val}-2}"
    fi

    # shellcheck disable=SC2163
    export "${key}=${val}"
  done < "$file"
}

#######################################
# 函数：生成 rsync 的远端 shell 字符串（用于 rsync -e）
# 参数：
#   $1 - port
# 输出：远端 shell 字符串
#######################################
rsync_remote_shell() {
  local port="$1"
  if [[ -n "${DEPLOY_PASSWORD:-}" ]]; then
    require_cmd sshpass
    # 注意：这里需要给 rsync 一个"远端 shell"，并在其中嵌入 sshpass
    # 密码仍从 SSHPASS（环境变量）读取
    echo "sshpass -e ssh -p ${port}"
  else
    echo "ssh -p ${port}"
  fi
}

#######################################
# 函数：生成时间戳（用于版本目录）
# 输出：timestamp
#######################################
now_ts() {
  date +"%Y%m%d-%H%M%S"
}

#######################################
# 函数：安全执行（支持 dry-run）
# 参数：
#   $1 - dry_run(true/false)
#   $@ - 命令及参数
#######################################
run() {
  local dry_run="$1"; shift
  if [[ "$dry_run" == "true" ]]; then
    printf '[DRY] %q ' "$@"
    printf '\n'
  else
    "$@"
  fi
}

#######################################
# 函数：ssh 执行（支持 dry-run）
# 参数：
#   $1 - dry_run(true/false)
#   $2 - host
#   $3 - port
#   $4 - 远端命令字符串
#######################################
ssh_run() {
  local dry_run="$1"
  local host="$2"
  local port="$3"
  local cmd="$4"

  # 如果使用 sshpass -e，需要把密码放到 SSHPASS
  if [[ -n "${DEPLOY_PASSWORD:-}" ]]; then
    require_cmd sshpass
    SSHPASS="${DEPLOY_PASSWORD}" run "$dry_run" sshpass -e ssh -p "$port" "$host" "$cmd"
  else
    run "$dry_run" ssh -p "$port" "$host" "$cmd"
  fi
}

#######################################
# 函数：rsync 上传目录到远端版本目录（支持 dry-run）
# 参数：
#   $1 - dry_run(true/false)
#   $2 - port
#   $3 - src_dir（本地 dist）
#   $4 - host
#   $5 - dest_dir（远端版本目录）
#######################################
rsync_dir() {
  local dry_run="$1"
  local port="$2"
  local src_dir="$3"
  local host="$4"
  local dest_dir="$5"

  [[ -d "$src_dir" ]] || die "本地目录不存在：$src_dir"
  # 获取绝对路径并加引号，防止中文路径问题
  src_dir="$(realpath "$src_dir")"
  local remote_shell
  remote_shell="$(rsync_remote_shell "$port")"
  if [[ -n "${DEPLOY_PASSWORD:-}" ]]; then
    SSHPASS="${DEPLOY_PASSWORD}" run "$dry_run" rsync -az --delete -e "${remote_shell}" --rsync-path="rsync" "${src_dir}/" "${host}:${dest_dir}/"
  else
    run "$dry_run" rsync -az --delete -e "${remote_shell}" --rsync-path="rsync" "${src_dir}/" "${host}:${dest_dir}/"
  fi
}

#######################################
# 函数：本地 build（可按需替换为你的命令）
# 参数：
#   $1 - dry_run(true/false)
#   $2 - target(h5|pc|all)
#   $3 - h5_project_dir
#   $4 - pc_project_dir
#######################################
build_local() {
  local dry_run="$1"
  local target="$2"
  local h5_project_dir="${3:-}"
  local pc_project_dir="${4:-}"

  require_cmd bash

  # 你可以按实际项目改成 pnpm / yarn / npm
  case "$target" in
    h5)
      [[ -n "$h5_project_dir" ]] || die "缺少 --h5-project（因为你开启了 --build）"
      run "$dry_run" bash -lc "cd \"${h5_project_dir}\" && npm run build:h5"
      ;;
    pc)
      [[ -n "$pc_project_dir" ]] || die "缺少 --pc-project（因为你开启了 --build）"
      run "$dry_run" bash -lc "cd \"${pc_project_dir}\" && npm run build"
      ;;
    all)
      [[ -n "$h5_project_dir" ]] || die "缺少 --h5-project（因为你开启了 --build）"
      [[ -n "$pc_project_dir" ]] || die "缺少 --pc-project（因为你开启了 --build）"
      run "$dry_run" bash -lc "cd \"${h5_project_dir}\" && npm run build:h5"
      run "$dry_run" bash -lc "cd \"${pc_project_dir}\" && npm run build"
      ;;
    *) die "未知 target：$target" ;;
  esac
}

#######################################
# 函数：解析 dist 的真实路径
# 规则：
# - dist_path 若为绝对路径：直接返回
# - dist_path 若为相对路径，且 project_dir 不为空：以 project_dir 为基准
# - 否则：以当前工作目录为基准
# 参数：
#   $1 - project_dir（可为空）
#   $2 - dist_path（相对/绝对）
# 输出：绝对路径
#######################################
resolve_dist_dir() {
  local project_dir="${1:-}"
  local dist_path="${2:-}"
  [[ -n "$dist_path" ]] || die "dist 路径不能为空"

  # 兼容：优先 realpath；否则用 python3 做路径归一化
  if command -v realpath >/dev/null 2>&1; then
    if [[ "$dist_path" = /* ]]; then
      realpath "$dist_path"
    elif [[ -n "$project_dir" ]]; then
      realpath "${project_dir}/${dist_path}"
    else
      realpath "$dist_path"
    fi
    return 0
  fi

  require_cmd python3
  python3 - <<PY
import os,sys
project_dir = ${project_dir@Q}
dist_path = ${dist_path@Q}
if os.path.isabs(dist_path):
  print(os.path.realpath(dist_path))
elif project_dir:
  print(os.path.realpath(os.path.join(project_dir, dist_path)))
else:
  print(os.path.realpath(dist_path))
PY
}

#######################################
# 函数：部署单个产物（h5 或 pc）
# 策略：
#   - 远端创建 releases/<ts>
#   - rsync 上传到该版本目录
#   - current -> releases/<ts>（软链切换，原子性更好）
# 参数：
#   $1 - dry_run(true/false)
#   $2 - host
#   $3 - port
#   $4 - name(h5|pc)
#   $5 - dist_dir（本地）
#   $6 - deploy_dir（远端，nginx 指向 deploy_dir/current）
#   $7 - release_tag（版本号/时间戳）
#   $8 - keep_releases（保留最近 N 个版本；0 表示不清理）
#######################################
deploy_one() {
  local dry_run="$1"
  local host="$2"
  local port="$3"
  local name="$4"
  local dist_dir="$5"
  local deploy_dir="$6"
  local release_tag="$7"
  local keep_releases="${8:-0}"

  [[ -d "$dist_dir" ]] || die "dist 不存在：$dist_dir（请先 build 或检查 --*-dist）"
  [[ -n "$release_tag" ]] || die "release_tag 不能为空"

  local releases_dir="${deploy_dir}/releases"
  local release_dir="${releases_dir}/${release_tag}"
  local current_link="${deploy_dir}/current"

  echo "[INFO] 部署 ${name}: ${dist_dir} -> ${host}:${current_link} (release=${release_tag})"

  ssh_run "$dry_run" "$host" "$port" "mkdir -p '${releases_dir}' && mkdir -p '${release_dir}'"
  rsync_dir "$dry_run" "$port" "$dist_dir" "$host" "$release_dir"
  # 原子切换：ln -sfn
  ssh_run "$dry_run" "$host" "$port" "ln -sfn '${release_dir}' '${current_link}'"

  # 可选：清理旧版本（仅保留最近 N 个）
  if [[ "$keep_releases" != "0" ]]; then
    ssh_run "$dry_run" "$host" "$port" "cd '${releases_dir}' && ls -1dt */ 2>/dev/null | tail -n +$((keep_releases+1)) | xargs -r rm -rf"
  fi
}

#######################################
# 函数：可选的 nginx reload
#######################################
reload_nginx() {
  local dry_run="$1"
  local host="$2"
  local port="$3"
  echo "[INFO] reload nginx"
  ssh_run "$dry_run" "$host" "$port" "nginx -t && nginx -s reload"
}

#######################################
# 函数：简单同步（H5 直传，不走版本管理）
#######################################
simple_sync() {
  local dry_run="$1"
  local port="$2"
  local src_dir="$3"
  local host="$4"
  local dest_dir="$5"

  [[ -d "$src_dir" ]] || die "本地目录不存在：$src_dir"
  src_dir="$(realpath "$src_dir")"
  local remote_shell
  remote_shell="$(rsync_remote_shell "$port")"

  echo "[INFO] 同步 ${src_dir} -> ${host}:${dest_dir}"
  if [[ -n "${DEPLOY_PASSWORD:-}" ]]; then
    SSHPASS="${DEPLOY_PASSWORD}" run "$dry_run" rsync -az --delete -e "${remote_shell}" "${src_dir}/" "${host}:${dest_dir}/"
  else
    run "$dry_run" rsync -az --delete -e "${remote_shell}" "${src_dir}/" "${host}:${dest_dir}/"
  fi
}

#######################################
# 函数：列出可用版本
#######################################
list_releases() {
  local host="$1"
  local port="$2"
  local deploy_dir="$3"
  local name="$4"

  echo "=== ${name} 可用版本 ==="
  ssh_run "false" "$host" "$port" "ls -1dt '${deploy_dir}/releases'/*/ 2>/dev/null | head -10 | xargs -I{} basename {}"
}

#######################################
# 函数：回滚到指定版本
#######################################
rollback_one() {
  local dry_run="$1"
  local host="$2"
  local port="$3"
  local name="$4"
  local deploy_dir="$5"
  local target_tag="${6:-}"

  local releases_dir="${deploy_dir}/releases"
  local current_link="${deploy_dir}/current"

  # 获取可用版本列表
  echo "=== ${name} 可用版本 ==="
  ssh_run "$dry_run" "$host" "$port" "ls -1dt '${releases_dir}'/*/ 2>/dev/null | head -10 | cat -n"

  # 确定目标版本
  local release_dir
  if [[ -n "$target_tag" ]]; then
    release_dir="${releases_dir}/${target_tag}"
  else
    # 默认回滚到上一个版本（current 指向的不算）
    release_dir=$(ssh_run "false" "$host" "$port" "ls -1dt '${releases_dir}'/*/ 2>/dev/null | sed -n '2p'" | tr -d '/')
    [[ -z "$release_dir" ]] && die "没有可回滚的版本"
    release_dir="${releases_dir}/${release_dir}"
  fi

  echo "[INFO] 回滚 ${name}: ${current_link} -> ${release_dir}"
  ssh_run "$dry_run" "$host" "$port" "ln -sfn '${release_dir}' '${current_link}'"
  echo "[OK] ${name} 已回滚到：$(basename "$release_dir")"
}

#######################################
# 函数：主逻辑（命令分发）
#######################################
main() {
  if [[ "${1:-}" == "-h" || "${1:-}" == "--help" || "${1:-}" == "help" ]]; then
    usage
    exit 0
  fi

  load_env_file ".env"
  load_env_file ".env.local"

  local cmd="${1:-}"; shift || true
  local target="${1:-}"; shift || true

  case "${cmd}" in
    deploy)   main_deploy "$target" "$@" ;;
    rollback) main_rollback "$target" "$@" ;;
    list)     main_list "$target" "$@" ;;
    *)        usage; die "未知命令：${cmd}（支持：deploy / rollback / list）" ;;
  esac
}

#######################################
# 子命令：deploy
#######################################
main_deploy() {
  local target="${1:-}"; shift || true

  local host="${DEPLOY_HOST:-root@120.76.96.112}"
  local port="${DEPLOY_PORT:-22}"
  local deploy_password="${DEPLOY_PASSWORD:-}"
  local h5_project="${H5_PROJECT:-$(pwd)/sg-study-app}"
  local pc_project="${PC_PROJECT:-$(pwd)/新加坡研学PC官网原型}"
  local h5_dist="${H5_DIST:-dist/build/h5}"
  local pc_dist="${PC_DIST:-dist}"
  local h5_dir="${H5_DIR:-/app/h5}"
  local pc_dir="${PC_DIR:-/app/dist}"
  local release_tag="${DEPLOY_TAG:-}"
  local keep_releases="${DEPLOY_KEEP:-5}"
  local do_build="${DEPLOY_BUILD:-false}"
  local do_reload="false"
  local dry_run="false"

  while [[ $# -gt 0 ]]; do
    case "$1" in
      --host) host="${2:-}"; shift 2 ;;
      --port) port="${2:-}"; shift 2 ;;
      --h5-project) h5_project="${2:-}"; shift 2 ;;
      --pc-project) pc_project="${2:-}"; shift 2 ;;
      --h5-dist) h5_dist="${2:-}"; shift 2 ;;
      --pc-dist) pc_dist="${2:-}"; shift 2 ;;
      --h5-dir) h5_dir="${2:-}"; shift 2 ;;
      --pc-dir) pc_dir="${2:-}"; shift 2 ;;
      --tag) release_tag="${2:-}"; shift 2 ;;
      --keep) keep_releases="${2:-}"; shift 2 ;;
      --build) do_build="true"; shift ;;
      --no-build) do_build="false"; shift ;;
      --reload-nginx) do_reload="true"; shift ;;
      --dry-run) dry_run="true"; shift ;;
      -h|--help) usage; exit 0 ;;
      *) die "未知参数：$1" ;;
    esac
  done

  DEPLOY_PASSWORD="${deploy_password}"
  [[ -n "${target}" ]] || { usage; die "缺少 target：h5|pc|all"; }

  require_cmd ssh
  require_cmd rsync

  # 统一版本号
  [[ -n "$release_tag" ]] || release_tag="$(now_ts)"

  # 密码登录检查
  [[ -n "${DEPLOY_PASSWORD:-}" ]] && require_cmd sshpass

  # Build
  if [[ "${do_build}" == "true" ]]; then
    require_cmd npm
    echo "[INFO] 构建：${target}"
    build_local "${dry_run}" "${target}" "${h5_project}" "${pc_project}"
  else
    echo "[INFO] 跳过构建"
  fi

  # 部署
  case "${target}" in
    h5)
      # H5 直接同步到目标目录
      ssh_run "${dry_run}" "${host}" "${port}" "mkdir -p '${h5_dir}'"
      simple_sync "${dry_run}" "${port}" "$(resolve_dist_dir "${h5_project}" "${h5_dist}")" "${host}" "${h5_dir}"
      ;;
    pc)
      # PC 直接同步到目标目录
      ssh_run "${dry_run}" "${host}" "${port}" "mkdir -p '${pc_dir}'"
      simple_sync "${dry_run}" "${port}" "$(resolve_dist_dir "${pc_project}" "${pc_dist}")" "${host}" "${pc_dir}"
      ;;
    all)
      # H5 直接同步
      ssh_run "${dry_run}" "${host}" "${port}" "mkdir -p '${h5_dir}'"
      simple_sync "${dry_run}" "${port}" "$(resolve_dist_dir "${h5_project}" "${h5_dist}")" "${host}" "${h5_dir}"
      # PC 直接同步
      ssh_run "${dry_run}" "${host}" "${port}" "mkdir -p '${pc_dir}'"
      simple_sync "${dry_run}" "${port}" "$(resolve_dist_dir "${pc_project}" "${pc_dist}")" "${host}" "${pc_dir}"
      ;;
    *) die "target 只能是：h5|pc|all" ;;
  esac

  [[ "${do_reload}" == "true" ]] && reload_nginx "${dry_run}" "${host}" "${port}"

  echo "[OK] 部署完成：${release_tag}"
}

#######################################
# 子命令：rollback
#######################################
main_rollback() {
  local target="${1:-}"; shift || true

  local host="${DEPLOY_HOST:-root@120.76.96.112}"
  local port="${DEPLOY_PORT:-22}"
  local h5_dir="${H5_DIR:-/app/h5}"
  local pc_dir="${PC_DIR:-/app/dist}"
  local rollback_tag=""

  while [[ $# -gt 0 ]]; do
    case "$1" in
      --host) host="${2:-}"; shift 2 ;;
      --port) port="${2:-}"; shift 2 ;;
      --tag) rollback_tag="${2:-}"; shift 2 ;;
      -h|--help) usage; exit 0 ;;
      *) die "未知参数：$1" ;;
    esac
  done

  [[ -n "${target}" ]] || { usage; die "缺少 target：h5|pc|all"; }
  require_cmd ssh

  case "${target}" in
    h5)  rollback_one "false" "${host}" "${port}" "h5" "${h5_dir}" "${rollback_tag}" ;;
    pc)  rollback_one "false" "${host}" "${port}" "pc" "${pc_dir}" "${rollback_tag}" ;;
    all)
      rollback_one "false" "${host}" "${port}" "h5" "${h5_dir}" "${rollback_tag}"
      rollback_one "false" "${host}" "${port}" "pc" "${pc_dir}" "${rollback_tag}"
      ;;
    *) die "target 只能是：h5|pc|all" ;;
  esac
}

#######################################
# 子命令：list
#######################################
main_list() {
  local target="${1:-}"; shift || true

  local host="${DEPLOY_HOST:-root@120.76.96.112}"
  local port="${DEPLOY_PORT:-22}"
  local h5_dir="${H5_DIR:-/app/h5}"
  local pc_dir="${PC_DIR:-/app/dist}"

  while [[ $# -gt 0 ]]; do
    case "$1" in
      --host) host="${2:-}"; shift 2 ;;
      --port) port="${2:-}"; shift 2 ;;
      -h|--help) usage; exit 0 ;;
      *) die "未知参数：$1" ;;
    esac
  done

  [[ -n "${target}" ]] || { usage; die "缺少 target：h5|pc|all"; }
  require_cmd ssh

  case "${target}" in
    h5)  list_releases "${host}" "${port}" "${h5_dir}" "H5" ;;
    pc)  list_releases "${host}" "${port}" "${pc_dir}" "PC" ;;
    all)
      list_releases "${host}" "${port}" "${h5_dir}" "H5"
      list_releases "${host}" "${port}" "${pc_dir}" "PC"
      ;;
    *) die "target 只能是：h5|pc|all" ;;
  esac
}

main "$@"
