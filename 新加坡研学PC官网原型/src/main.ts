import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// 引入第三方依赖的 JS 资源
import '@/assets/js/tailwindcss.3.4.3.js'
import '@/assets/js/iconify-icon.min.1.0.7.js'

/**
 * 功能：判断是否为移动端 UA（纯函数）。
 * @param ua UserAgent 字符串
 */
const isMobileUA = (ua: string): boolean =>
	/(mobile|nokia|iphone|ipad|android|samsung|htc|blackberry)/i.test(ua)

/**
 * 功能：在“PC 官网”内做兜底跳转（移动端 → H5 系统）。
 * 说明：
 * - 这是为了解决 nginx 侧跳转未生效或被 SPA 路由兜底拦截时的情况。
 * - 你的 H5 是“另一个系统”，因此跳转地址必须是可配置的（域名/路径都可能不同）。
 * - 仅在生产环境启用，避免本地开发时误跳转影响调试。
 */
const redirectToH5WhenMobile = (): void => {
	if (!import.meta.env.PROD) return
	if (typeof window === 'undefined') return

	/**
	 * 功能：H5 系统入口地址（建议在部署时通过环境变量注入）。
	 * 约定：使用 Vite 环境变量 VITE_H5_ENTRY，例如：
	 * - https://h5.shengchanglimin.com/
	 * - https://www.shengchanglimin.com/h5/   （如果 /h5 由 nginx 反代到另一个系统）
	 */
	const H5_ENTRY = (import.meta.env.VITE_H5_ENTRY as string | undefined)?.trim()
	if (!H5_ENTRY) return

	if (isMobileUA(window.navigator.userAgent)) {
		// 说明：用 replace 避免用户点“返回”又回到 PC 站造成循环
		window.location.replace(H5_ENTRY)
	}
}

redirectToH5WhenMobile()

const app = createApp(App)
app.use(router)
app.mount('#app')
