/**
 * 功能：通用格式化工具（保持纯函数，便于复用与测试）。
 * 说明：
 * - 仅做“数据 -> 文案”的转换，不依赖页面/组件状态。
 * - 约定：函数不直接读写 uni / window 等外部对象，避免副作用。
 */

/**
 * 功能：把金额格式化为人民币展示字符串（不做汇率换算）。
 * @param {number|string} amount 金额（支持数字或数字字符串）
 * @param {{ prefix?: string, suffix?: string }} [opts] 可选前后缀
 * @returns {string} 例如：¥18,800
 */
export const formatCNY = (amount, opts = {}) => {
	const n = Number(amount)
	if (!Number.isFinite(n)) return ''

	const prefix = opts.prefix ?? '¥'
	const suffix = opts.suffix ?? ''

	// 说明：使用 toLocaleString 做千分位，保持纯函数无副作用
	return `${prefix}${n.toLocaleString('zh-CN')}${suffix}`
}

/**
 * 功能：把字符串数组拼接为多行文本（适用于 text 的 white-space: pre-line）。
 * @param {string[]} lines 多行文本数组
 * @returns {string}
 */
export const joinLines = (lines) => (Array.isArray(lines) ? lines.filter(Boolean).join('\n') : '')

