import { ROUTES, switchTabByKey } from './routes'

/**
 * 功能：安全返回（修复“页面栈为空/只有 1 层时返回失效”的问题）。
 * 规则：
 * - 如果当前页面栈大于 1，正常 navigateBack
 * - 否则，兜底 reLaunch 到首页
 */
export const safeBack = () => {
	// eslint-disable-next-line no-undef
	const pages = typeof getCurrentPages === 'function' ? getCurrentPages() : []
	if (Array.isArray(pages) && pages.length > 1) {
		uni.navigateBack({ delta: 1 })
		return
	}
	// 说明：TabBar 应用兜底返回到“首页（第一个 Tab）”
	switchTabByKey('home')
}
