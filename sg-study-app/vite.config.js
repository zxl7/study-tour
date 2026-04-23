import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  /**
   * 功能：修复 H5 部署在 /h5/ 子路径时资源 404 被 SPA 回退成 index.html 的问题。
   * 原因：默认产物会生成以 /assets/ 开头的绝对路径，部署到 /h5/ 后会请求到站点根路径 /assets/，从而返回 HTML（text/html）导致模块脚本加载报错。
   * 方案：仅在 build 时把 base 改为 ./，让产物使用相对路径 assets/xxx.js，从而在 /h5/ 下正确请求 /h5/assets/xxx.js。
   */
  base: command === 'build' ? './' : '/',

  /**
   * 功能：兼容较老版本 iOS Safari（常见于 iOS 12/13 低版本）。
   * 背景：
   * - Vite 默认 target=modules，会产出更“现代”的语法（如可选链/空值合并等），
   *   低版本 iOS Safari 可能直接语法报错，导致 uni-app H5 白屏并出现“内容显示超时”。
   * - 这里把构建目标降到 es2015，提升兼容性（代价：产物略大一点点）。
   */
  build: {
    target: 'es2015',
  },
  esbuild: {
    target: 'es2015',
  },

  css: {
    preprocessorOptions: {
      scss: {
        /**
         * 功能：为每个 <style lang="scss"> 自动注入全局变量，避免各页面重复 import。
         */
        additionalData: '@import "@/styles/vars.scss";',
      },
    },
  },
  plugins: [uni()],
}))
