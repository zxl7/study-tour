/**
 * 功能：统一管理页面路由（避免散落 hardcode），便于后续做埋点/权限/平台差异处理。
 * 说明：这里保持纯函数 + 常量映射的形式，方便测试与复用。
 */

export const ROUTES = Object.freeze({
	home: '/pages/index/index',
	camp: '/pages/camp/index',
	study: '/pages/study/index',
	epPass: '/pages/ep-pass/index',
	school: '/pages/school/index',
	form: '/pages/form/index',
	success: '/pages/success/index',
	about: '/pages/about/index',
})

/**
 * 功能：根据 key 跳转到指定页面（navigateTo）。
 * @param {keyof typeof ROUTES} key 页面 key
 */
export const navigateToByKey = (key) => {
	const url = ROUTES[key]
	if (!url) return
	uni.navigateTo({ url })
}

/**
 * 功能：模拟 Tab 行为（reLaunch），用于“底部导航”跳转时清空页面栈。
 * @param {keyof typeof ROUTES} key 页面 key
 */
export const reLaunchByKey = (key) => {
	const url = ROUTES[key]
	if (!url) return
	uni.reLaunch({ url })
}

