<template>
	<view 
		:class="['sg-icon', 'icon-' + iconKey]" 
		:style="iconStyle" 
		@tap="handleClick" 
	/>
</template>

<script setup>
/**
 * 功能：统一的图标组件封装（跨 H5 / 小程序 / App）。
 * 特点：
 * 1. 采用 CSS Mask 方案，通过类名引用静态资源。
 * 2. Vite 会自动将小体积的 SVG 转换为 Base64 内联，彻底解决小程序真机路径报错问题。
 * 3. 保持了动态变色能力。
 */
import { computed } from 'vue'

const props = defineProps({
	// 图标名称（需与下方的 .icon-xxx 类名对应）
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

const iconKey = computed(() => {
	// 处理别名映射
	return {
		'staff': 'person-filled',
		'paperplane-filled': 'paperplane',
		'navigate': 'paperplane',
		'chatboxes-filled': 'chat-filled',
	}[props.type] || props.type
})

const iconStyle = computed(() => {
	const size = toPx(props.size)
	return {
		width: size,
		height: size,
		backgroundColor: props.color,
	}
})

/**
 * 功能：点击事件透传。
 */
const handleClick = (e) => emit('click', e)
</script>

<style>
/* 全局图标基础样式 */
.sg-icon {
	display: inline-block;
	vertical-align: middle;
	flex-shrink: 0;
	mask-repeat: no-repeat;
	mask-size: 100% 100%;
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-size: 100% 100%;
}

/* 图标资源类名定义 - Vite 会自动处理这些路径并进行 Base64 内联 */
.icon-home-filled {
	mask-image: url('@/static/icons/home-filled.svg');
	-webkit-mask-image: url('@/static/icons/home-filled.svg');
}
.icon-flag-filled {
	mask-image: url('@/static/icons/flag-filled.svg');
	-webkit-mask-image: url('@/static/icons/flag-filled.svg');
}
.icon-paperplane {
	mask-image: url('@/static/icons/paperplane.svg');
	-webkit-mask-image: url('@/static/icons/paperplane.svg');
}
.icon-auth-filled {
	mask-image: url('@/static/icons/auth-filled.svg');
	-webkit-mask-image: url('@/static/icons/auth-filled.svg');
}
.icon-person-filled {
	mask-image: url('@/static/icons/person-filled.svg');
	-webkit-mask-image: url('@/static/icons/person-filled.svg');
}
.icon-back {
	mask-image: url('@/static/icons/back.svg');
	-webkit-mask-image: url('@/static/icons/back.svg');
}
.icon-phone-filled {
	mask-image: url('@/static/icons/phone-filled.svg');
	-webkit-mask-image: url('@/static/icons/phone-filled.svg');
}
.icon-location-filled {
	mask-image: url('@/static/icons/location-filled.svg');
	-webkit-mask-image: url('@/static/icons/location-filled.svg');
}
.icon-locked-filled {
	mask-image: url('@/static/icons/locked-filled.svg');
	-webkit-mask-image: url('@/static/icons/locked-filled.svg');
}
.icon-star {
	mask-image: url('@/static/icons/star.svg');
	-webkit-mask-image: url('@/static/icons/star.svg');
}
.icon-medal {
	mask-image: url('@/static/icons/medal.svg');
	-webkit-mask-image: url('@/static/icons/medal.svg');
}
.icon-vip {
	mask-image: url('@/static/icons/vip.svg');
	-webkit-mask-image: url('@/static/icons/vip.svg');
}
.icon-wallet {
	mask-image: url('@/static/icons/wallet.svg');
	-webkit-mask-image: url('@/static/icons/wallet.svg');
}
.icon-chat-filled {
	mask-image: url('@/static/icons/chat-filled.svg');
	-webkit-mask-image: url('@/static/icons/chat-filled.svg');
}
.icon-help {
	mask-image: url('@/static/icons/help.svg');
	-webkit-mask-image: url('@/static/icons/help.svg');
}
.icon-info-filled {
	mask-image: url('@/static/icons/info-filled.svg');
	-webkit-mask-image: url('@/static/icons/info-filled.svg');
}
.icon-clear {
	mask-image: url('@/static/icons/clear.svg');
	-webkit-mask-image: url('@/static/icons/clear.svg');
}
.icon-map {
	mask-image: url('@/static/icons/map.svg');
	-webkit-mask-image: url('@/static/icons/map.svg');
}
.icon-email-filled {
	mask-image: url('@/static/icons/email-filled.svg');
	-webkit-mask-image: url('@/static/icons/email-filled.svg');
}
.icon-checkbox-filled {
	mask-image: url('@/static/icons/checkbox-filled.svg');
	-webkit-mask-image: url('@/static/icons/checkbox-filled.svg');
}
</style>
