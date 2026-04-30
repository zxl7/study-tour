# 新加坡研学 PC 官网原型

基于 **Vue 3 + TypeScript + Vite** 的 PC 官网静态站点项目。

---

## 环境要求

- Node.js（建议 18+）
- npm（本项目使用 `package-lock.json`）

---

## 安装依赖

在项目目录下执行：

```bash
npm ci
```

---

## 本地开发

```bash
npm run dev
```

---

## 构建产物

```bash
npm run build
```

构建输出目录：

```text
dist/
```

本地预览：

```bash
npm run preview
```

---

## 部署说明（静态资源）

### 方式 A：手动部署

将 `dist/` 目录上传到服务器 Nginx 对应的静态目录（例如 `/app/pc` 或你实际配置的目录）。

> 注意：如果你使用了版本目录 + `current` 软链切换，那么 Nginx 的 `root` 通常应指向 `.../current`。

### 方式 B：使用仓库根目录的 `deploy.sh`（推荐）

仓库根目录提供了 `deploy.sh`，支持 `releases/<tag> + current` 软链切换部署方式。

示例（在仓库根目录执行；路径含中文建议加引号）：

```bash
# 先确保本地已经 build 出 dist/
./deploy.sh deploy pc \
  --pc-project "./新加坡研学PC官网原型" \
  --pc-dist dist \
  --pc-dir /app/pc
```

如果你把服务器信息写在根目录 `.env.local`，脚本也支持自动读取（不建议把密码写进仓库）。

---

## 常见问题

### 1) 服务器上页面 404

优先检查：

- Nginx 配置的 `root/alias` 是否指向你部署的目录（以及是否指向 `current`）
- `dist/index.html` 是否存在
- Nginx 是否需要 reload（脚本支持 `--reload-nginx`）

