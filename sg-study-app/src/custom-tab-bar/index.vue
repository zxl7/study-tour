<template>
	<view class="tabbar">
		<view
			v-for="item in items"
			:key="item.key"
			class="tab-item"
			:class="{ active: item.key === activeKey }"
			@tap="() => handleSwitch(item)"
			hover-class="tap-active"
		>
			<SgIcon :type="item.icon" :size="24" :color="item.key === activeKey ? colors.active : colors.inactive" />
			<text class="label">{{ item.label }}</text>
		</view>
	</view>
</template>

<script setup>
/**
 * 功能：UniApp 自定义 TabBar（按 PC 的“项目模块”结构）。
 * 说明：
 * - 通过 pages.json 配置 tabBar.custom=true 后生效。
 * - 使用 uni.switchTab 切换，符合小程序 TabBar 预期交互。
 */
import { computed, ref, onMounted } from 'vue'
import SgIcon from '@/components/SgIcon.vue'

const colors = Object.freeze({
	active: '#005a9c',
	inactive: '#9ca3af',
})

const items = Object.freeze([
	{ key: 'home', label: '首页', icon: 'home-filled', url: '/pages/index/index' },
	{ key: 'camp', label: '成长营', icon: 'flag-filled', url: '/pages/camp/index' },
	{ key: 'study', label: '微留学', icon: 'paperplane-filled', url: '/pages/study/index' },
	{ key: 'epPass', label: '人才EP', icon: 'auth-filled', url: '/pages/ep-pass/index' },
	{ key: 'about', label: '我的', icon: 'person-filled', url: '/pages/about/index' },
])

const activeKey = ref('home')

/**
 * 功能：根据当前页面路由推导激活 tab。
 */
const syncActive = () => {
	// eslint-disable-next-line no-undef
	const pages = typeof getCurrentPages === 'function' ? getCurrentPages() : []
	const current = pages?.[pages.length - 1]
	const route = current?.route ? `/${current.route}` : ''
	const match = items.find((it) => it.url === route)
	if (match) activeKey.value = match.key
}

onMounted(() => {
	syncActive()
})

/**
 * 功能：切换 Tab。
 * @param {{key:string,url:string}} item
 */
const handleSwitch = (item) => {
	if (!item?.url) return
	activeKey.value = item.key
	uni.switchTab({ url: item.url })
}
</script>

<style scoped lang="scss">
.tabbar {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	/**
	 * 说明：
	 * - 之前 height + padding 会叠加，导致“底部实际高度”比预期更大，从而出现页面底部留白/遮挡不一致。
	 * - 这里统一把 safe-area 与 padding 收进 height，并开启 border-box，保证总高度可控。
	 */
	/* 说明：tabbar 由 50px（约 100rpx）提升为 60px（约 120rpx） */
	height: calc(120rpx + env(safe-area-inset-bottom));
	padding: 10rpx 28rpx calc(10rpx + env(safe-area-inset-bottom));
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
	gap: 8rpx;
	padding: 8rpx 16rpx;
	border-radius: 18rpx;
}

.label {
	font-size: 20rpx;
	color: #9ca3af;
}

.tab-item.active .label {
	color: $sg-color-primary;
	font-weight: 800;
}

.tap-active {
	background: rgba(0, 0, 0, 0.03);
}
</style>
