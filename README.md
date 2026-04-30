# 项目仓库说明

本仓库包含 **两个子项目**：

1. `sg-study-app`：uni-app 多端项目（主要用于微信小程序 / H5）
2. `新加坡研学PC官网原型`：Vue3 + Vite 的 PC 官网静态站点

仓库还提供统一的部署脚本 `deploy.sh`，用于将 H5/PC 的构建产物发布到服务器 `/app` 下（支持版本目录与 `current` 软链切换）。

---

## 目录结构

```text
./
  sg-study-app/                 # 小程序/H5 子项目（见其 README）
  新加坡研学PC官网原型/          # PC 官网子项目（见其 README）
  deploy.sh                     # 一键部署脚本（h5/pc/all）
  .env / .env.local             # 本地环境变量（建议只放本地，不提交）
```

---

## 快速开始

### 1) 小程序/H5（sg-study-app）

进入目录查看详细说明：

```bash
cd sg-study-app
cat README.md
```

常用（示例）：

```bash
npm ci
npm run build:mp-weixin
```

### 2) PC 官网（新加坡研学PC官网原型）

进入目录查看详细说明：

```bash
cd "新加坡研学PC官网原型"
cat README.md
```

常用（示例）：

```bash
npm ci
npm run build
```

---

## 一键部署（deploy.sh）

> 建议使用 SSH Key；如暂时只有密码，可通过本地 `.env.local` 设置 `DEPLOY_PASSWORD`，不要把密码写进脚本或提交到仓库。

### 环境变量（建议写到仓库根目录 `.env.local`，并加入 .gitignore）

示例：

```ini
DEPLOY_HOST=root@120.76.96.112
DEPLOY_PORT=22
DEPLOY_PASSWORD=***
```

### 部署 PC

```bash
./deploy.sh deploy pc --build \
  --pc-project "./新加坡研学PC官网原型" \
  --pc-dist dist \
  --pc-dir /app/pc
```

### 部署 H5

```bash
./deploy.sh deploy h5 --build \
  --h5-project ./sg-study-app \
  --h5-dist dist/build/h5 \
  --h5-dir /app/h5
```

### 同时部署 H5 + PC

```bash
./deploy.sh deploy all --build \
  --h5-project ./sg-study-app \
  --pc-project "./新加坡研学PC官网原型"
```

---

## 维护建议

- 小程序主包体积：优先把“分包页面专用图片”放到分包 `pkg/static`，主包图片尽量压缩/转 WebP/或走 CDN。
- 系统 tabBar 页面必须在主包：保留系统 tabBar 的前提下，主包最小集合就是 tabBar 页面本身 + 其依赖资源。

