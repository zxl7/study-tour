<template>
	<view class="sg-page page">
		<view class="hero">
			<view class="hero-card">
				<view class="avatar">盛昌</view>
				<view class="hero-info">
					<text class="hero-title">盛昌利民研学</text>
					<text class="hero-sub">Elite Education Global</text>
				</view>
			</view>
		</view>

		<scroll-view scroll-y class="content">
			<view class="panel sg-card">
				<text class="panel-title">我的服务</text>
				<view class="panel-grid">
					<view class="panel-item">
						<text class="panel-k">成长营</text>
						<text class="panel-v">7天6晚</text>
					</view>
					<view class="panel-item">
						<text class="panel-k">微留学</text>
						<text class="panel-v">28天插班</text>
					</view>
					<view class="panel-item">
						<text class="panel-k">人才EP</text>
						<text class="panel-v">政策解读</text>
					</view>
					<view class="panel-item">
						<text class="panel-k">咨询报名</text>
						<text class="panel-v">在线提交</text>
					</view>
				</view>
			</view>

			<view class="section">
				<text class="section-title">机构简介</text>
				<text class="section-text">
					盛昌利民研学总部位于新加坡滨海湾金融中心，专注为中国精英家庭提供研学、微留学及身份规划的一站式服务。
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
	</view>
</template>

<script setup>
import { onShareAppMessage } from '@dcloudio/uni-app'

/**
 * 功能：展示联系方式（纯数据）。
 */
const phone = '400-888-2026'

onShareAppMessage(() => ({
	title: '关于我们 - 盛昌利民研学',
	path: '/pages/about/index',
}))
</script>

<style scoped lang="scss">
.page {
	// 预留 TabBar 安全区
	padding-bottom: calc(160rpx + env(safe-area-inset-bottom));
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

.hero-card {
	width: 100%;
	display: flex;
	align-items: center;
	gap: 20rpx;
	padding: 0 32rpx;
	box-sizing: border-box;
}

.avatar {
	width: 112rpx;
	height: 112rpx;
	border-radius: 999rpx;
	background: rgba(255, 255, 255, 0.18);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28rpx;
	font-weight: 900;
	letter-spacing: 2rpx;
}

.hero-info {
	display: flex;
	flex-direction: column;
}

.hero-title {
	font-size: 36rpx;
	font-weight: 900;
}

.hero-sub {
	margin-top: 6rpx;
	font-size: 20rpx;
	letter-spacing: 3rpx;
	color: rgba(255, 255, 255, 0.75);
}

.content {
	height: calc(100vh - 320rpx - var(--status-bar-height));
	padding: 32rpx 32rpx 260rpx;
	box-sizing: border-box;
}

.panel {
	padding: 28rpx;
	border-radius: 32rpx;
	margin-bottom: 28rpx;
}

.panel-title {
	font-size: 28rpx;
	font-weight: 900;
	color: $sg-color-text;
}

.panel-grid {
	margin-top: 18rpx;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16rpx;
}

.panel-item {
	background: #f9fafb;
	border: 1px solid $sg-color-border;
	border-radius: 22rpx;
	padding: 18rpx;
	display: flex;
	flex-direction: column;
	gap: 8rpx;
}

.panel-k {
	font-size: 22rpx;
	color: #6b7280;
	font-weight: 700;
}

.panel-v {
	font-size: 26rpx;
	color: $sg-color-primary;
	font-weight: 900;
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
