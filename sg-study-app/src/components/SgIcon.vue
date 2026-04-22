<template>
	<UniIcons :type="type" :size="size" :color="color" fontFamily="uniicons" @click="handleClick" />
</template>

<script setup>
/**
 * 功能：统一的图标组件封装（跨 H5 / 小程序）。
 * 说明：
 * - 使用三方组件库 @dcloudio/uni-ui 的 uni-icons，避免自行维护图标映射表。
 * - 组件无状态：只透传 props 与 click 事件，符合函数式思想。
 */
import UniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'

const props = defineProps({
	type: { type: String, default: 'help' },
	size: { type: [Number, String], default: 22 },
	color: { type: String, default: '#111827' },
})

const emit = defineEmits(['click'])

/**
 * 功能：点击事件透传（保持组件无状态）。
 */
const handleClick = (e) => emit('click', e)
</script>
