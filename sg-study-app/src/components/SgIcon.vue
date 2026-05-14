<template>
	<view class="sg-icon" :style="iconStyle" @tap="handleClick" />
</template>

<script setup>
/**
 * 功能：统一的图标组件封装（跨 H5 / 小程序 / App）。
 * 特点：
 * 1. 资源本地化：使用 src/static/icons 目录下的 SVG 文件。
 * 2. 灵活变色：通过 CSS mask-image 实现，支持 currentColor 或自定义颜色。
 * 3. 极度轻量：按需加载 SVG，不引入庞大的图标字体包。
 */
import { computed } from 'vue'

const props = defineProps({
	// 图标名称（需与 src/static/icons 下的文件名对应，不含后缀）
	type: { type: String, default: 'help' },
	// 图标尺寸
	size: { type: [Number, String], default: 22 },
	// 图标颜色
	color: { type: String, default: 'currentColor' },
})

const emit = defineEmits(['click'])

const toPx = (v) => {
	const n = Number(v)
	return Number.isFinite(n) ? `${n}px` : String(v || '')
}

/**
 * 功能：生成图标样式。
 * 说明：使用 mask-image 遮罩技术实现单色图标变色。
 */
const iconStyle = computed(() => {
	const size = toPx(props.size)
	// 处理一些别名映射，确保向后兼容
	const iconName = {
		'staff': 'staff-filled',
		'paperplane-filled': 'paperplane',
		'navigate': 'paperplane',
		'chatboxes-filled': 'chat-filled',
	}[props.type] || props.type

	return {
		width: size,
		height: size,
		backgroundColor: props.color,
		// 微信小程序及主流浏览器均支持 mask 属性
		maskImage: `url(/static/icons/${iconName}.svg)`,
		'-webkit-mask-image': `url(/static/icons/${iconName}.svg)`,
		maskRepeat: 'no-repeat',
		'-webkit-mask-repeat': 'no-repeat',
		maskSize: '100% 100%',
		'-webkit-mask-size': '100% 100%',
		display: 'inline-block',
		verticalAlign: 'middle',
	}
})

/**
 * 功能：点击事件透传。
 */
const handleClick = (e) => emit('click', e)
</script>

<style scoped>
.sg-icon {
	/* 默认样式 */
	flex-shrink: 0;
}
</style>
