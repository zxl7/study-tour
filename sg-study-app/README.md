# sg-study-app

基于 **uni-app + Vue3 + Vite** 的多端项目，当前主要用于：

- **微信小程序（mp-weixin）**
- **H5（uni build）**

本仓库已做过一次「**主包瘦身 + 分包**」改造：在保留 **系统 tabBar** 的前提下，把非 tabBar 页面放入分包，并对静态图片做 WebP/迁移，确保微信小程序主包体积可控。

---

## 目录结构（关键）

```text
sg-study-app/
  src/
    pages/                 # 主包页面（含 tabBar 页面）
    pkg/                   # 分包 root（对应 pages.json 的 subPackages.root = "pkg"）
      pages/               # 分包页面
      static/img/          # 分包专用图片（不会进主包）
    static/
      img/                 # 主包静态资源（tabBar 页面用到的图片通常会进主包）
      tabbar/              # tabBar 图标（必须在主包）
  dist/build/mp-weixin/    # 微信小程序构建产物（导入微信开发者工具）
  _backups/                # 备份目录（迁移/清理图片时会放这里，便于回滚）
```

---

## 环境要求

- Node.js（建议 18+）
- npm（本项目使用 package-lock.json）
- 微信开发者工具（用于导入/预览/上传）

---

## 安装依赖

```bash
npm ci
```

---

## 常用命令

### 1) 微信小程序构建

```bash
npm run build:mp-weixin
```

构建成功后，用微信开发者工具导入：

```text
dist/build/mp-weixin
```

### 2) H5 构建

```bash
npm run build:h5
```

H5 输出目录通常为：

```text
dist/build/h5
```

> 说明：不同 uni-app 版本/配置可能会影响输出目录，以你本机实际构建结果为准。

---

## 分包说明（保留系统 tabBar）

微信小程序限制：**系统 tabBar 页面必须在主包**，因此无法“只保留首页在主包”。

当前主包页面（tabBar）：

- `pages/index/index`
- `pages/camp/index`
- `pages/study/index`
- `pages/ep-pass/index`
- `pages/about/index`

非 tabBar 页面已放入分包 `pkg`（见 `src/pages.json` 的 `subPackages` 配置）：

- `pkg/pages/school/index`
- `pkg/pages/form/index`
- `pkg/pages/success/index`
- `pkg/pages/terms/index`
- `pkg/pages/privacy/index`
- `pkg/pages/partnership/index`
- `pkg/pages/family-office/index`
- `pkg/pages/self-employed-pass/index`
- `pkg/pages/pr-application/index`

### 路由/跳转

统一路由常量集中在：

- `src/utils/routes.js`

分包页面路径以 `/pkg/pages/...` 为准。

---

## 主包瘦身策略（实践结论）

主包体积主要由 `src/static/img` 的图片占用，代码文件通常不是瓶颈。

建议策略：

1. **分包页面专用图片放到 `src/pkg/static/img`**（避免进主包）
2. 主包图片优先：
   - 转 WebP（在体积变小的前提下）
   - 或进一步压缩（降低质量、裁剪尺寸）
   - 或改成 CDN/线上资源（更彻底）
3. 未引用图片建议移动到 `_backups/` 备份目录后从主包剔除

---

## 部署（可选）

如果你需要把构建后的静态文件部署到服务器（Nginx 静态目录），仓库外层提供过一个示例脚本：

- `../deploy.sh`

该脚本支持：

- 部署 `h5 / pc / all`
- 远端 `releases/<tag> + current` 软链切换
- 从 `.env.local` 读取环境变量（不把密码写入脚本）

> 安全提示：建议使用 **SSH Key** 部署，避免密码登录依赖 `sshpass`。

---

## 常见问题

### 1) 为什么系统 tabBar 不能放分包？

微信小程序规定：系统 tabBar 的页面必须在主包，否则会报错或无法正常打开。

### 2) 打包时报资源找不到？

优先检查：

- 图片是否在对应包的 `static` 目录中
- 分包页面引用图片时尽量用相对路径（例如 `../../static/img/xxx.jpg`），避免被构建器当成模块导入

---

## 维护建议

- 新增页面时：默认放分包，除非必须做 tabBar
- 新增图片时：优先放分包 `src/pkg/static/img` 或走 CDN
- 定期检查 `src/static/img`：避免“无用大图”进入主包

