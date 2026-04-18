<template>
	<view class="sg-page page">
		<AppHeader title="微留学详情" />

		<scroll-view scroll-y class="content">
			<image class="banner" mode="aspectFill" src="/static/img/Study_Banner.jpg" />

			<view class="body">
				<view class="tags">
					<text class="tag tag-blue">插班体验</text>
					<text class="tag tag-indigo">2-4周可选</text>
				</view>

				<text class="title">新加坡政府/国际学校深度插班项目</text>

				<view class="price-card">
					<text class="price-k">项目费用</text>
					<text class="price-v">¥26,800<text class="price-unit">起/人</text></text>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">项目介绍</text>
					</view>
					<text class="section-text">
						这是为期2至4周的深度全真课堂体验。学生将匹配对应年级的班级，与本地学生共同学习数学、英语、艺术及科学课程，体验最原汁新加坡菁英教育。
					</text>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">课程特色</text>
					</view>
					<view class="feature-list">
						<view v-for="item in features" :key="item.title" class="feature-item">
							<text class="feature-title">{{ item.title }}</text>
							<text class="feature-desc">{{ item.desc }}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom">
			<view class="bottom-left">
				<text class="bottom-k">起拍价</text>
				<text class="bottom-v">¥26,800</text>
			</view>
			<view class="bottom-btn sg-btn-primary" @tap="goForm">立即报名</view>
		</view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { navigateToByKey } from '@/utils/routes'

/**
 * 功能：课程特色（纯数据）。
 */
const features = [
	{ title: '100%全英环境', desc: '24小时沉浸式语言环境，大幅提升口语表达自信。' },
	{ title: '“学伴”计划', desc: '每位留学生配备一名本地Buddy，辅助跟课及融入校园生活。' },
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

.tag-blue {
	background: rgba(15, 47, 103, 0.1);
	color: $sg-color-primary;
}

.tag-indigo {
	background: rgba(99, 102, 241, 0.12);
	color: #3730a3;
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

.feature-list {
	display: flex;
	flex-direction: column;
	gap: 20rpx;
}

.feature-item {
	padding: 24rpx;
	border-radius: 24rpx;
	background: #f9fafb;
}

.feature-title {
	font-size: 26rpx;
	font-weight: 800;
}

.feature-desc {
	margin-top: 8rpx;
	font-size: 22rpx;
	color: $sg-color-muted;
}

.bottom {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 140rpx;
	padding: 16rpx 32rpx calc(16rpx + env(safe-area-inset-bottom));
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #fff;
	border-top: 1px solid $sg-color-border;
	box-sizing: border-box;
}

.bottom-left {
	display: flex;
	flex-direction: column;
}

.bottom-k {
	font-size: 20rpx;
	color: #9ca3af;
}

.bottom-v {
	font-size: 32rpx;
	color: #ef4444;
	font-weight: 900;
	margin-top: 4rpx;
}

.bottom-btn {
	height: 88rpx;
	padding: 0 48rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 800;
}
</style>
