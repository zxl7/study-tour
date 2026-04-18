<template>
	<view class="sg-page page">
		<view class="hero">
			<view class="hero-icon">司</view>
			<text class="hero-title">盛昌利民研学 · EDU QUEST</text>
			<text class="hero-sub">Professional Education Global Link</text>
		</view>

		<scroll-view scroll-y class="content">
			<view class="section">
				<text class="section-title">机构简介</text>
				<text class="section-text">
					盛昌利民研学总部位于新加坡滨海湾金融中心，是新加坡教育部及旅游局双重认证的优质教育服务机构。我们专注于为亚洲中产及以上家庭提供高品质的研学、微留学及身份规划一站式服务。
				</text>
			</view>

			<view class="contact sg-card">
				<text class="section-title">联系我们</text>

				<view class="contact-item">
					<text class="contact-k">服务热线</text>
					<text class="contact-v">{{ phone }}</text>
				</view>
				<view class="contact-item">
					<text class="contact-k">总部地址</text>
					<text class="contact-v">
						10 Marina Blvd, Marina Bay Financial Centre, Singapore
					</text>
				</view>
				<view class="contact-item">
					<text class="contact-k">官方邮箱</text>
					<text class="contact-v">contact@sg-edu-quest.com</text>
				</view>
			</view>

			<image class="office-img" mode="aspectFill" src="/static/img/Office_Environment.jpg" />
		</scroll-view>

		<AppTabBar active="about" />
	</view>
</template>

<script setup>
import { onShareAppMessage } from '@dcloudio/uni-app'
import AppTabBar from '@/components/AppTabBar.vue'

/**
 * 功能：展示联系方式（纯数据）。
 */
const phone = '400-888-9999'

onShareAppMessage(() => ({
	title: '关于我们 - 盛昌利民研学',
	path: '/pages/about/index',
}))
</script>

<style scoped lang="scss">
.page {
	padding-bottom: 180rpx;
}

.hero {
	height: calc(320rpx + var(--status-bar-height));
	background: $sg-color-primary;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: var(--status-bar-height) 32rpx 0;
	box-sizing: border-box;
}

.hero-icon {
	width: 128rpx;
	height: 128rpx;
	border-radius: 999rpx;
	background: rgba(255, 255, 255, 0.18);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 52rpx;
	font-weight: 800;
	margin-bottom: 16rpx;
}

.hero-title {
	font-size: 32rpx;
	font-weight: 800;
	text-align: center;
}

.hero-sub {
	margin-top: 8rpx;
	font-size: 20rpx;
	letter-spacing: 2rpx;
	color: rgba(255, 255, 255, 0.7);
}

.content {
	height: calc(100vh - 320rpx - var(--status-bar-height));
	padding: 32rpx 32rpx 160rpx;
	box-sizing: border-box;
}

.section-title {
	font-size: 30rpx;
	font-weight: 800;
	color: $sg-color-text;
}

.section-text {
	margin-top: 16rpx;
	font-size: 26rpx;
	color: #4b5563;
	line-height: 1.6;
	text-align: justify;
}

.contact {
	margin-top: 32rpx;
	padding: 32rpx;
	border-radius: 32rpx;
	background: #f9fafb;
}

.contact-item {
	margin-top: 24rpx;
	display: flex;
	flex-direction: column;
	gap: 8rpx;
}

.contact-k {
	font-size: 20rpx;
	color: #9ca3af;
}

.contact-v {
	font-size: 26rpx;
	font-weight: 700;
	color: $sg-color-text;
}

.office-img {
	margin-top: 32rpx;
	width: 100%;
	height: 256rpx;
	border-radius: 24rpx;
}
</style>
