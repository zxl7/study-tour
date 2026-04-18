<template>
	<UniIcons :type="type" :size="size" :color="color" />
</template>

<script setup>
/**
 * 功能：统一的图标组件封装（跨 H5 / 小程序）。
 * 说明：
 * - 当前使用 @dcloudio/uni-ui 的 uni-icons（字体图标，矢量效果），避免图片图标在不同端的兼容/资源问题。
 * - 后续如果你提供阿里 iconfont 在线链接/zip，可以在这里替换实现，而不影响业务页面代码。
 */
import UniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'

defineProps({
	type: { type: String, default: 'help' },
	size: { type: [Number, String], default: 22 },
	color: { type: String, default: '#111827' },
})
</script>

