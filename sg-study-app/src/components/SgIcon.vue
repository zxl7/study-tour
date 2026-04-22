<template>
	<!--
		说明：
		- 为了让“自定义 TabBar”在各端都稳定显示图标，这里不直接依赖 uni-ui 组件内部的字体引用路径
		- 而是使用已在 uni.scss 中全局引入的 uniicons 字体与 uniicons.css（属于三方组件库 uni-ui 的资源）
	-->
	<text
		class="uni-icons"
		:class="[`uniui-${type}`]"
		:style="styleText"
		@tap="handleClick"
	></text>
</template>

<script setup>
/**
 * 功能：统一的图标组件封装（跨 H5 / 小程序）。
 * 说明：
 * - 通过 uni-ui 的 uniicons 字体（在 uni.scss 做了本地化引入）渲染图标。
 * - 仅做“props -> 样式字符串”的转换，不读写外部状态，避免副作用。
 */
import { computed } from 'vue'

const props = defineProps({
	type: { type: String, default: 'help' },
	size: { type: [Number, String], default: 22 },
	color: { type: String, default: '#111827' },
})

const emit = defineEmits(['click'])

/**
 * 功能：把 size 转为 px 字符串。
 * @param {number|string} v
 * @returns {string}
 */
const toPx = (v) => {
	const n = Number(v)
	return Number.isFinite(n) ? `${n}px` : String(v || '')
}

const styleText = computed(() => `color:${props.color};font-size:${toPx(props.size)};`)

/**
 * 功能：点击事件透传（保持组件无状态）。
 */
const handleClick = (e) => emit('click', e)
</script>
