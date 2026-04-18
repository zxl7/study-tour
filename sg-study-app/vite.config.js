import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
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
  plugins: [
    uni(),
  ],
})
