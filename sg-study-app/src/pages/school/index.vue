<template>
	<view class="sg-page page">
		<AppHeader title="体验营详情" />

		<scroll-view scroll-y class="content">
			<image class="banner" mode="aspectFill" src="/static/img/School_Banner.jpg" />

			<view class="body">
				<view class="tags">
					<text class="tag tag-purple">名校直通</text>
					<text class="tag tag-sky">深度考察</text>
				</view>

				<text class="title">新加坡顶级国际学校访校体验营</text>

				<view class="price-card">
					<text class="price-k">项目费用</text>
					<text class="price-v">¥12,800<text class="price-unit">/人</text></text>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">项目介绍</text>
					</view>
					<text class="section-text">
						专为计划赴新升学的家庭定制。我们将带领家长与学生实地访问 SAS（美制）、UWC（世界联合学院）、Tanglin Trust（英制）等全球顶尖名校。
					</text>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">访校名单</text>
					</view>
					<view class="school-list">
						<view v-for="name in schools" :key="name" class="school-item">
							<text class="school-dot">◎</text>
							<text class="school-name">{{ name }}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom">
			<view class="bottom-btn" @tap="goForm">预约名校走访</view>
		</view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { navigateToByKey } from '@/utils/routes'

/**
 * 功能：访校名单（纯数据）。
 */
const schools = [
	'UWC South East Asia',
	'Singapore American School',
	'Stamford American Intl School',
]

/**
 * 功能：跳转到表单页。
 */
const goForm = () => navigateToByKey('form')
</script>

<style scoped lang="scss">
.page {
	padding-bottom: 160rpx;
}

.content {
	height: calc(100vh - 112rpx - var(--status-bar-height));
}

.banner {
	width: 100%;
	height: 448rpx;
}

.body {
	padding: 32rpx;
}

.tags {
	display: flex;
	gap: 16rpx;
	margin-bottom: 16rpx;
}

.tag {
	padding: 6rpx 16rpx;
	border-radius: 12rpx;
	font-size: 20rpx;
	font-weight: 800;
}

.tag-purple {
	background: rgba(139, 92, 246, 0.12);
	color: #6d28d9;
}

.tag-sky {
	background: rgba(14, 165, 233, 0.12);
	color: #0369a1;
}

.title {
	font-size: 40rpx;
	font-weight: 800;
	color: $sg-color-text;
	line-height: 1.25;
}

.price-card {
	margin-top: 24rpx;
	padding: 24rpx;
	border-radius: 24rpx;
	background: #fef2f2;
	border: 1px solid #fee2e2;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.price-k {
	font-size: 26rpx;
	color: #4b5563;
	font-weight: 600;
}

.price-v {
	font-size: 44rpx;
	color: #ef4444;
	font-weight: 900;
}

.price-unit {
	font-size: 22rpx;
	font-weight: 500;
}

.section {
	margin-top: 40rpx;
}

.section-hd {
	display: flex;
	align-items: center;
	gap: 16rpx;
	margin-bottom: 20rpx;
}

.section-bar {
	width: 8rpx;
	height: 32rpx;
	background: $sg-color-primary;
	border-radius: 8rpx;
}

.section-title {
	font-size: 30rpx;
	font-weight: 800;
}

.section-text {
	font-size: 26rpx;
	color: #4b5563;
	line-height: 1.6;
	text-align: justify;
}

.school-list {
	display: flex;
	flex-direction: column;
	gap: 16rpx;
}

.school-item {
	padding: 20rpx;
	background: #f9fafb;
	border-radius: 20rpx;
	display: flex;
	align-items: center;
	gap: 12rpx;
}

.school-dot {
	color: $sg-color-primary;
}

.school-name {
	font-size: 24rpx;
	color: #374151;
	font-weight: 600;
}

.bottom {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 140rpx;
	padding: 16rpx 32rpx calc(16rpx + env(safe-area-inset-bottom));
	background: #fff;
	border-top: 1px solid $sg-color-border;
	box-sizing: border-box;
	display: flex;
	align-items: center;
}

.bottom-btn {
	width: 100%;
	height: 88rpx;
	border-radius: 999rpx;
	background: #6d28d9;
	color: #fff;
	font-weight: 800;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
