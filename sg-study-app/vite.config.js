import { defineConfig } from "vite"
import uni from "@dcloudio/vite-plugin-uni"
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  /**
   * 功能：修复 H5 部署在 /h5/ 子路径时资源 404 的问题。
   * 方案：无论开发还是构建，统一使用 /h5/ 作为基础路径，保持环境一致性。
   */
  base: "/h5/",

  /**
   * 功能：兼容较老版本 iOS Safari（常见于 iOS 12/13 低版本）。
   * 背景：
   * - Vite 默认 target=modules，会产出更“现代”的语法（如可选链/空值合并等），
   *   低版本 iOS Safari 可能直接语法报错，导致 uni-app H5 白屏并出现“内容显示超时”。
   * - 这里把构建目标降到 es2015，提升兼容性（代价：产物略大一点点）。
   */
  build: {
    target: "es2015",
  },
  esbuild: {
    target: "es2015",
  },

  css: {
    preprocessorOptions: {
      scss: {
        /**
         * 功能：为每个 <style lang="scss"> 自动注入全局变量，避免各页面重复 import。
         * 直接内联变量而非 @import，避免 additionalData 注入到 uni-ui 等第三方库时
         * 触发路径解析失败（ENOENT: /static/uniicons/uniicons.css）。
         * silenceDeprecations 静默 uni-app 内部依赖旧 Sass API 产生的废弃警告。
         */
        additionalData: `
$sg-color-primary: #005a9c;
$sg-color-accent: #e5a663;
$sg-color-bg: #f8fafc;
$sg-color-border: #f1f5f9;
$sg-color-text: #111827;
$sg-color-muted: #6b7280;
`,
        silenceDeprecations: ["legacy-js-api", "import"],
      },
    },
  },
  plugins: [uni()],
}))
