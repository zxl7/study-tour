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
