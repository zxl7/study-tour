#!/usr/bin/env bash
set -euo pipefail

# ==============
# 自动部署脚本（h5 / PC）
# 目标：Nginx 静态目录（通过 SSH + rsync 上传）
#
# 设计原则（尽量函数式）：
# - 配置通过参数/环境变量注入，函数尽量“输入 -> 输出/副作用”清晰
# - 逻辑拆成小函数，可复用、可测试（至少易读）
# - 默认不执行 build（符合“不要主动 build 项目”），需要显式 --build
#
# 安全说明：
# - 不要把服务器密码写进脚本/仓库
# - 如需走密码登录：建议仅通过环境变量 DEPLOY_PASSWORD，并启用 sshpass
# - 更推荐改用 SSH Key（更安全、更稳定）
# ==============

#######################################
# 函数：打印用法
# 参数：无
# 返回：无（输出到 stdout）
#######################################
usage() {
  cat <<'EOF'
用法：
  ./deploy.sh deploy <h5|pc|all> [--build] [--reload-nginx] [--dry-run]
                      [--host user@ip] [--port 22]
                      [--h5-project path] [--pc-project path]
                      [--h5-dist path] [--pc-dist path]
                      [--h5-dir  /app/h5] [--pc-dir /app/pc]

示例：
  # 只部署 h5（不 build，直接上传 dist）
  ./deploy.sh deploy h5 --host root@120.76.96.112 --h5-project ./sg-study-app --h5-dist dist --h5-dir /app/h5

  # 部署 all，并在本地先 build
  DEPLOY_PASSWORD='***' ./deploy.sh deploy all --build --host root@120.76.96.112 \
    --h5-project ./sg-study-app --pc-project "./新加坡研学PC官网原型" \
    --h5-dist dist --pc-dist dist \
    --h5-dir /app/h5 --pc-dir /app/pc

环境变量（可选）：
  DEPLOY_HOST, DEPLOY_PORT
  DEPLOY_PASSWORD（如需密码登录，不建议；建议改用 SSH Key）
  H5_PROJECT, PC_PROJECT
  H5_DIST, PC_DIST
  H5_DIR,  PC_DIR

要求：
  - 本机：bash, ssh, rsync（可选：sshpass）
  - 远端：可写入目标目录；如需 --reload-nginx，需有 nginx reload 权限
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
# 函数：生成 rsync 的远端 shell 字符串（用于 rsync -e）
# 参数：
#   $1 - port
# 输出：远端 shell 字符串
#######################################
rsync_remote_shell() {
  local port="$1"
  if [[ -n "${DEPLOY_PASSWORD:-}" ]]; then
    require_cmd sshpass
    # 注意：这里需要给 rsync 一个“远端 shell”，并在其中嵌入 sshpass
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
  # 注意：src_dir 末尾加 /，表示同步“目录内容”而不是目录本身
  local remote_shell
  remote_shell="$(rsync_remote_shell "$port")"
  if [[ -n "${DEPLOY_PASSWORD:-}" ]]; then
    SSHPASS="${DEPLOY_PASSWORD}" run "$dry_run" rsync -az --delete -e "${remote_shell}" "${src_dir}/" "${host}:${dest_dir}/"
  else
    run "$dry_run" rsync -az --delete -e "${remote_shell}" "${src_dir}/" "${host}:${dest_dir}/"
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

  [[ -n "$h5_project_dir" || "$target" == "pc" ]] || true
  [[ -n "$pc_project_dir" || "$target" == "h5" ]] || true

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

  require_cmd realpath

  if [[ "$dist_path" = /* ]]; then
    realpath "$dist_path"
    return 0
  fi

  if [[ -n "$project_dir" ]]; then
    realpath "${project_dir}/${dist_path}"
  else
    realpath "$dist_path"
  fi
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
#######################################
deploy_one() {
  local dry_run="$1"
  local host="$2"
  local port="$3"
  local name="$4"
  local dist_dir="$5"
  local deploy_dir="$6"

  local ts
  ts="$(now_ts)"

  local releases_dir="${deploy_dir}/releases"
  local release_dir="${releases_dir}/${ts}"
  local current_link="${deploy_dir}/current"

  echo "[INFO] 部署 ${name}: ${dist_dir} -> ${host}:${current_link} (release=${ts})"

  ssh_run "$dry_run" "$host" "$port" "mkdir -p '${releases_dir}' && mkdir -p '${release_dir}'"
  rsync_dir "$dry_run" "$port" "$dist_dir" "$host" "$release_dir"
  # 原子切换：ln -sfn
  ssh_run "$dry_run" "$host" "$port" "ln -sfn '${release_dir}' '${current_link}'"
}

#######################################
# 函数：可选的 nginx reload
# 参数：
#   $1 - dry_run(true/false)
#   $2 - host
#   $3 - port
#######################################
reload_nginx() {
  local dry_run="$1"
  local host="$2"
  local port="$3"
  echo "[INFO] reload nginx"
  ssh_run "$dry_run" "$host" "$port" "nginx -t && nginx -s reload"
}

#######################################
# 函数：主逻辑（副作用集中在这里）
#######################################
main() {
  local cmd="${1:-}"; shift || true
  local target="${1:-}"; shift || true

  local host="${DEPLOY_HOST:-root@120.76.96.112}"
  local port="${DEPLOY_PORT:-22}"
  local deploy_password="${DEPLOY_PASSWORD:-}"
  local h5_project="${H5_PROJECT:-}"
  local pc_project="${PC_PROJECT:-}"
  local h5_dist="${H5_DIST:-dist}"
  local pc_dist="${PC_DIST:-dist}"
  local h5_dir="${H5_DIR:-/app/h5}"
  local pc_dir="${PC_DIR:-/app/pc}"
  local do_build="false"
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
      --build) do_build="true"; shift ;;
      --reload-nginx) do_reload="true"; shift ;;
      --dry-run) dry_run="true"; shift ;;
      -h|--help) usage; exit 0 ;;
      *) die "未知参数：$1（用 --help 查看用法）" ;;
    esac
  done

  # 仅把密码留在变量/环境中，不要输出
  DEPLOY_PASSWORD="${deploy_password}"

  [[ "${cmd}" == "deploy" ]] || { usage; die "仅支持命令：deploy"; }
  [[ -n "${target}" ]] || { usage; die "缺少 target：h5|pc|all"; }
  [[ -n "${host}" ]] || die "缺少 --host 或环境变量 DEPLOY_HOST"

  require_cmd ssh
  require_cmd rsync

  if [[ "${do_build}" == "true" ]]; then
    require_cmd npm
    echo "[INFO] 开始本地 build：${target}"
    build_local "${dry_run}" "${target}" "${h5_project}" "${pc_project}"
  else
    echo "[INFO] 跳过 build（如需 build 请加 --build）"
  fi

  case "${target}" in
    h5)
      deploy_one "${dry_run}" "${host}" "${port}" "h5" "$(resolve_dist_dir "${h5_project}" "${h5_dist}")" "${h5_dir}"
      ;;
    pc)
      deploy_one "${dry_run}" "${host}" "${port}" "pc" "$(resolve_dist_dir "${pc_project}" "${pc_dist}")" "${pc_dir}"
      ;;
    all)
      deploy_one "${dry_run}" "${host}" "${port}" "h5" "$(resolve_dist_dir "${h5_project}" "${h5_dist}")" "${h5_dir}"
      deploy_one "${dry_run}" "${host}" "${port}" "pc" "$(resolve_dist_dir "${pc_project}" "${pc_dist}")" "${pc_dir}"
      ;;
    *) usage; die "target 只能是：h5|pc|all" ;;
  esac

  if [[ "${do_reload}" == "true" ]]; then
    reload_nginx "${dry_run}" "${host}" "${port}"
  fi

  echo "[OK] 完成"
}

main "$@"
