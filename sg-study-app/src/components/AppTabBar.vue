<template>
	<view class="tabbar">
		<view
			v-for="item in items"
			:key="item.key"
			class="tab-item"
			:class="{ active: item.key === active }"
			@tap="() => handleTap(item.key)"
		>
			<text class="icon">{{ item.icon }}</text>
			<text class="label">{{ item.label }}</text>
		</view>
	</view>
</template>

<script setup>
/**
 * 功能：底部导航栏（仅用于“首页/我的”等需要常驻导航的页面）。
 * 说明：这里用字符图标占位，后续可替换为图片或 iconfont。
 */
import { computed } from 'vue'
import { reLaunchByKey } from '@/utils/routes'

const props = defineProps({
	active: { type: String, default: 'home' },
})

const items = computed(() => [
	{ key: 'home', label: '首页', icon: '⌂' },
	{ key: 'camp', label: '发现', icon: '☰' },
	{ key: 'form', label: '报名', icon: '✎' },
	{ key: 'about', label: '我的', icon: '☺' },
])

const handleTap = (key) => {
	if (!key || key === props.active) return
	reLaunchByKey(key)
}
</script>

<style scoped lang="scss">
.tabbar {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 140rpx;
	padding: 16rpx 32rpx calc(16rpx + env(safe-area-inset-bottom));
	display: flex;
	align-items: center;
	justify-content: space-around;
	background: #fff;
	border-top: 1px solid $sg-color-border;
	box-sizing: border-box;
}

.tab-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #9ca3af;
}

.tab-item.active {
	color: $sg-color-primary;
}

.icon {
	font-size: 44rpx;
	line-height: 1;
}

.label {
	margin-top: 8rpx;
	font-size: 20rpx;
}
</style>

