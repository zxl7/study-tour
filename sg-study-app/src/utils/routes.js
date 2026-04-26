/**
 * 功能：统一管理页面路由（避免散落 hardcode），便于后续做埋点/权限/平台差异处理。
 * 说明：这里保持纯函数 + 常量映射的形式，方便测试与复用。
 */

export const ROUTES = Object.freeze({
	// 说明：应用入口为 TabBar 首页。
	home: '/pages/index/index',
	camp: '/pages/camp/index',
	study: '/pages/study/index',
	epPass: '/pages/ep-pass/index',
	school: '/pkg/pages/school/index',
	form: '/pkg/pages/form/index',
	success: '/pkg/pages/success/index',
	about: '/pages/about/index',
	familyOffice: '/pkg/pages/family-office/index',
	selfEmployedPass: '/pkg/pages/self-employed-pass/index',
	prApplication: '/pkg/pages/pr-application/index',
	terms: '/pkg/pages/terms/index',
	privacy: '/pkg/pages/privacy/index',
	partnership: '/pkg/pages/partnership/index',
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

/**
 * 功能：用于 TabBar 页面切换（switchTab）。
 * @param {keyof typeof ROUTES} key 页面 key
 */
export const switchTabByKey = (key) => {
	const url = ROUTES[key]
	if (!url) return
	uni.switchTab({ url })
}
