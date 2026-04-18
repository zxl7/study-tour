<template>
	<view class="sg-page page">
		<!-- 顶部导航栏（自定义） -->
		<view class="navbar">
			<view class="brand">
				<view class="brand-dot">
					<text class="brand-text">盛昌</text>
				</view>
				<text class="brand-title">盛昌利民研学 EDU</text>
			</view>
			<view class="nav-actions">
				<SgIcon type="search" :size="20" color="#4b5563" />
				<SgIcon type="more" :size="20" color="#4b5563" />
			</view>
		</view>

		<!-- 内容区域 -->
		<scroll-view scroll-y class="content">
			<!-- Banner -->
			<view class="banner">
				<image class="banner-img" mode="aspectFill" src="/static/img/bg.jpg" />
				<view class="banner-mask">
					<text class="banner-title">2026新加坡研学 |\n一站式精英教育服务</text>
					<text class="banner-sub">本土插班 · 双语研学 · 国际教育 · 移民规划</text>
				</view>
			</view>

			<!-- 金刚区 -->
			<view class="grid">
				<view class="grid-item" @tap="() => go('camp')">
					<view class="grid-icon grid-icon-blue">营</view>
					<text class="grid-text">成长营</text>
				</view>
				<view class="grid-item" @tap="() => go('study')">
					<view class="grid-icon grid-icon-amber">学</view>
					<text class="grid-text">微留学</text>
				</view>
				<view class="grid-item" @tap="() => go('epPass')">
					<view class="grid-icon grid-icon-emerald">证</view>
					<text class="grid-text">EP准证</text>
				</view>
				<view class="grid-item" @tap="() => go('school')">
					<view class="grid-icon grid-icon-purple">校</view>
					<text class="grid-text">体验营</text>
				</view>
			</view>

			<!-- 优势 -->
			<view class="section">
				<view class="section-hd">
					<text class="section-title">为何选择新加坡？</text>
					<text class="section-more">查看更多 ></text>
				</view>
				<view class="adv-list">
					<view v-for="item in advantages" :key="item.title" class="adv-item sg-card">
						<view class="adv-icon">
							<SgIcon :type="item.icon" :size="22" color="#005a9c" />
						</view>
						<view class="adv-body">
							<text class="adv-title">{{ item.title }}</text>
							<text class="adv-desc">{{ item.desc }}</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 推荐 -->
			<view class="section">
				<text class="section-title">精选推荐项目</text>
				<view class="recommend" @tap="() => go('camp')">
					<image class="recommend-img" mode="aspectFill" src="/static/img/Science_Center.jpg" />
					<view class="recommend-bd">
						<view class="recommend-row">
							<text class="recommend-title">新加坡名校成长营 · 暑期档</text>
							<text class="recommend-price">¥18,800起</text>
						</view>
						<text class="recommend-desc sg-text-muted">南洋理工/国大深度访学 + 环球影城科技日</text>
					</view>
				</view>
			</view>
		</scroll-view>

		<!-- 悬浮按钮 -->
		<view class="float-btn" @tap="goForm">
			<SgIcon type="headphones" :size="22" color="#ffffff" />
			<text class="float-text">咨询</text>
		</view>
	</view>
</template>

<script setup>
import { onShareAppMessage } from '@dcloudio/uni-app'
import { navigateToByKey } from '@/utils/routes'
import SgIcon from '@/components/SgIcon.vue'

/**
 * 功能：首页卡片数据（纯数据驱动渲染）。
 */
const advantages = [
	{
		icon: 'shield-filled',
		title: '全球安全环境',
		desc: '低犯罪率，完善的法律保障，让孩子在安全的环境中探索世界。',
	},
	{
		icon: 'staff',
		title: '极致双语教育',
		desc: '母语般的中英双语环境，在浸润式学习中掌握核心语言能力。',
	},
	{
		icon: 'star-filled',
		title: '世界顶尖资源',
		desc: '汇集NUS、NTU等亚洲顶尖学府资源，接触前沿科技与学术。',
	},
	{
		icon: 'world-filled',
		title: '国际化大视野',
		desc: '多元文化交融，培养具备全球胜任力的未来国际公民。',
	},
	{
		icon: 'paperplane-filled',
		title: '无时差零距离',
		desc: '距离中国近，无时差困扰，家长陪读或探视极度便利。',
	},
]

/**
 * 功能：统一路由跳转（保持模板层尽量无逻辑）。
 * @param {'camp'|'study'|'epPass'|'school'} key
 */
const go = (key) => navigateToByKey(key)

/**
 * 功能：跳转到报名/咨询页面。
 */
const goForm = () => navigateToByKey('form')

onShareAppMessage(() => ({
	title: '盛昌利民研学',
	path: '/pages/index/index',
}))
</script>

<style scoped lang="scss">
.page {
	// 预留 TabBar 安全区
	padding-bottom: calc(160rpx + env(safe-area-inset-bottom));
}

.navbar {
	position: sticky;
	top: 0;
	z-index: 10;
	height: calc(112rpx + var(--status-bar-height));
	padding: var(--status-bar-height) 32rpx 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: rgba(255, 255, 255, 0.86);
	backdrop-filter: blur(10px);
	border-bottom: 1px solid $sg-color-border;
	box-sizing: border-box;
}

.brand {
	display: flex;
	align-items: center;
	gap: 16rpx;
}

.brand-dot {
	width: 64rpx;
	height: 64rpx;
	border-radius: 999rpx;
	background: $sg-color-primary;
	display: flex;
	align-items: center;
	justify-content: center;
}

.brand-text {
	color: #fff;
	font-size: 20rpx;
	font-weight: 700;
}

.brand-title {
	font-weight: 700;
	font-size: 28rpx;
}

.nav-actions {
	display: flex;
	gap: 20rpx;
}

.content {
	height: calc(100vh - 112rpx - var(--status-bar-height));
	padding: 0 32rpx 260rpx;
	box-sizing: border-box;
}

.banner {
	margin-top: 24rpx;
	height: 360rpx;
	border-radius: 32rpx;
	overflow: hidden;
	position: relative;
	box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.08);
}

.banner-img {
	width: 100%;
	height: 100%;
}

.banner-mask {
	position: absolute;
	inset: 0;
	padding: 48rpx 40rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: linear-gradient(90deg, rgba(15, 47, 103, 0.72), rgba(15, 47, 103, 0));
}

.banner-title {
	color: #fff;
	font-size: 40rpx;
	font-weight: 800;
	line-height: 1.2;
	white-space: pre-line;
}

.banner-sub {
	margin-top: 16rpx;
	color: rgba(255, 255, 255, 0.8);
	font-size: 22rpx;
	line-height: 1.4;
}

.grid {
	margin-top: 40rpx;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 16rpx;
}

.grid-item {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.grid-icon {
	width: 96rpx;
	height: 96rpx;
	border-radius: 24rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 32rpx;
	font-weight: 700;
}

.grid-icon-blue {
	background: rgba(15, 47, 103, 0.08);
	color: $sg-color-primary;
}

.grid-icon-amber {
	background: rgba(245, 158, 11, 0.12);
	color: #b45309;
}

.grid-icon-emerald {
	background: rgba(16, 185, 129, 0.12);
	color: #047857;
}

.grid-icon-purple {
	background: rgba(139, 92, 246, 0.12);
	color: #6d28d9;
}

.grid-text {
	margin-top: 12rpx;
	font-size: 22rpx;
	color: #374151;
}

.section {
	margin-top: 56rpx;
}

.section-hd {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24rpx;
}

.section-title {
	font-size: 32rpx;
	font-weight: 800;
}

.section-more {
	font-size: 22rpx;
	color: $sg-color-primary;
}

.adv-list {
	display: flex;
	flex-direction: column;
	gap: 20rpx;
}

.adv-item {
	padding: 24rpx;
	display: flex;
	gap: 24rpx;
	align-items: flex-start;
	box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.04);
}

.adv-icon {
	width: 80rpx;
	height: 80rpx;
	border-radius: 999rpx;
	background: rgba($sg-color-primary, 0.12);
	display: flex;
	align-items: center;
	justify-content: center;
}

.adv-body {
	flex: 1;
	display: flex;
	flex-direction: column;
}

.adv-title {
	font-size: 26rpx;
	font-weight: 800;
}

.adv-desc {
	margin-top: 8rpx;
	font-size: 22rpx;
	color: $sg-color-muted;
	line-height: 1.4;
}

.recommend {
	margin-top: 24rpx;
	border-radius: 32rpx;
	overflow: hidden;
	border: 1px solid $sg-color-border;
	background: #fff;
}

.recommend-img {
	width: 100%;
	height: 256rpx;
}

.recommend-bd {
	padding: 24rpx;
}

.recommend-row {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 20rpx;
}

.recommend-title {
	font-size: 26rpx;
	font-weight: 800;
	flex: 1;
}

.recommend-price {
	font-size: 24rpx;
	font-weight: 800;
	color: #ef4444;
	white-space: nowrap;
}

.recommend-desc {
	margin-top: 8rpx;
	font-size: 22rpx;
}

.float-btn {
	position: fixed;
	right: 32rpx;
	bottom: 260rpx;
	width: 112rpx;
	height: 112rpx;
	border-radius: 999rpx;
	background: $sg-color-primary;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: 0 16rpx 40rpx rgba(15, 47, 103, 0.35);
}

.float-text {
	margin-top: 6rpx;
	font-size: 20rpx;
	font-weight: 700;
}
</style>
