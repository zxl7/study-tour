<template>
	<!-- #ifdef MP-WEIXIN -->
	<text class="sg-mp-icon" :style="styleText" @tap="handleClick">{{ mpChar }}</text>
	<!-- #endif -->

	<!-- #ifndef MP-WEIXIN -->
	<UniIcons :type="type" :size="size" :color="color" fontFamily="uniicons" @click="handleClick" />
	<!-- #endif -->
</template>

<script setup>
/**
 * 功能：统一的图标组件封装（跨 H5 / 小程序）。
 * 说明：
 * - H5：使用 @dcloudio/uni-ui 的 uni-icons。
 * - 微信小程序：用轻量字符图标替代（避免引入图标字体导致包体增大）。
 * - 组件无状态：只透传 props 与 click 事件，符合函数式思想。
 */
import { computed } from 'vue'

// #ifndef MP-WEIXIN
import UniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
// #endif

const props = defineProps({
	type: { type: String, default: 'help' },
	size: { type: [Number, String], default: 22 },
	color: { type: String, default: '#111827' },
})

const emit = defineEmits(['click'])

const toPx = (v) => {
	const n = Number(v)
	return Number.isFinite(n) ? `${n}px` : String(v || '')
}

const styleText = computed(() => `color:${props.color};font-size:${toPx(props.size)};line-height:1;`)

/**
 * 功能：微信小程序端的轻量“字符图标”映射。
 * 说明：只覆盖当前项目用到的少数 icon；未命中则返回空字符。
 */
const mpChar = computed(() => {
	const map = {
		back: '‹',
		'home-filled': '⌂',
		'flag-filled': '⚑',
		'paperplane-filled': '✈',
		'auth-filled': '🪪',
		'person-filled': '👤',
		'locked-filled': '🔒',
		staff: '👥',
		star: '★',
		navigate: '➤',
		medal: '🏅',
		vip: 'VIP',
		wallet: '💼',
		'phone-filled': '☎',
		'location-filled': '⌖',
	}
	return map[props.type] ?? ''
})

/**
 * 功能：点击事件透传（保持组件无状态）。
 */
const handleClick = (e) => emit('click', e)
</script>

<style scoped>
.sg-mp-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
}
</style>
