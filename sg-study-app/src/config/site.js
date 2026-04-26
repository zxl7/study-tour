/**
 * 功能：全站基础信息（与 PC 端官网保持一致）。
 * 说明：
 * - 统一维护热线、地址、邮箱、顾问信息，避免各页面硬编码导致数据不一致。
 * - 如 PC 端后续有变更，只需改这里即可同步到小程序/H5。
 */

export const SITE = Object.freeze({
	brandCN: '盛昌利民 · 狮城研学',
	brandEN: 'Shengchang Limin · Singapore Study Tour',
	companyCN: '海南盛昌利民传媒有限公司',

	hotline: '0898-65392581',
	hotlineHint: '全国服务咨询热线',

	// PC 首页「咨询报名」模块中的地址文案
	chinaOfficeAddress:
		'中国运营中心：海南省海口市美兰区国兴街道国兴大道15A号，全球贸易之窗9003室',

	// PC「合作咨询」页中的地址/邮箱
	bizEmail: 'shengchanglimin@163.com',
	bizAddress: '海南省海口市美兰区国兴大道15A号全球贸易之窗30楼',

	advisors: [
		{ name: 'Jason', phone: '166 8978 0303', qr: '/static/img/QR_Code-J.jpg' },
		{ name: 'Adela', phone: '173 3083 5386', qr: '/static/img/QR_Code-A.jpg' },
		{ name: 'Joey', phone: '19907618131', qr: '/static/img/QR_Code-O.jpg' },
	],
})
