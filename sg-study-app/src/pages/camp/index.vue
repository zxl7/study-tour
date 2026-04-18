<template>
	<view class="sg-page page">
		<AppHeader title="成长营详情" />

		<scroll-view scroll-y class="content">
			<image class="banner" mode="aspectFill" src="/static/img/Camp_Banner.jpg" />

			<view class="body">
				<view class="tags">
					<text class="tag tag-blue">官方招募</text>
					<text class="tag tag-amber">7天6夜</text>
				</view>

				<text class="title">“未来领袖”新加坡名校探秘成长营</text>

				<view class="price-card">
					<text class="price-k">项目费用</text>
					<text class="price-v">¥18,800<text class="price-unit">/人</text></text>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">项目介绍</text>
					</view>
					<text class="section-text">
						成长营专注于培养孩子的自主生活能力与跨文化交流视野。我们将深度探访南洋理工大学(NTU)及新加坡国立大学(NUS)，邀请名校导师进行互动式授课，在体验狮城科技之美的同时，激发对未来的无限渴望。
					</text>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">行程安排</text>
					</view>
					<view class="timeline">
						<view v-for="item in timeline" :key="item.day" class="tl-item">
							<view class="tl-dot" />
							<view class="tl-body">
								<text class="tl-title">{{ item.day }}</text>
								<text class="tl-desc">{{ item.desc }}</text>
							</view>
						</view>
					</view>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">费用包含</text>
					</view>
					<view class="include-grid">
						<view v-for="text in includes" :key="text" class="include-item">
							<text class="include-icon">✓</text>
							<text class="include-text">{{ text }}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom">
			<view class="bottom-left">
				<text class="bottom-k">项目单价</text>
				<text class="bottom-v">¥18,800</text>
			</view>
			<view class="bottom-btn sg-btn-primary" @tap="goForm">立即报名</view>
		</view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { navigateToByKey } from '@/utils/routes'

/**
 * 功能：行程安排（纯数据）。
 */
const timeline = [
	{ day: 'Day 1：抵达狮城，开启航程', desc: '机场接机，入住四星级营地酒店，破冰晚餐。' },
	{ day: 'Day 2：名校访学 - 南洋理工大学', desc: '参观黑川纪章设计的蜂巢大楼，体验机器人科技课程。' },
	{ day: 'Day 3：环保与可持续发展探索', desc: '参观新生水厂，学习新加坡的水资源循环智慧。' },
]

/**
 * 功能：费用包含（纯数据）。
 */
const includes = ['精品四星酒店住宿', '全程营养配餐', '名校导师授课费', '高额境外研学保险']

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

.tag-amber {
	background: rgba(245, 158, 11, 0.14);
	color: #92400e;
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

.timeline {
	margin-left: 8rpx;
	padding-left: 24rpx;
	border-left: 1px dashed rgba(15, 47, 103, 0.2);
	display: flex;
	flex-direction: column;
	gap: 28rpx;
}

.tl-item {
	position: relative;
	display: flex;
	gap: 16rpx;
}

.tl-dot {
	position: absolute;
	left: -30rpx;
	top: 8rpx;
	width: 20rpx;
	height: 20rpx;
	border-radius: 999rpx;
	background: $sg-color-primary;
}

.tl-body {
	display: flex;
	flex-direction: column;
	gap: 6rpx;
}

.tl-title {
	font-size: 26rpx;
	font-weight: 800;
}

.tl-desc {
	font-size: 22rpx;
	color: $sg-color-muted;
}

.include-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16rpx 20rpx;
}

.include-item {
	display: flex;
	align-items: center;
	gap: 12rpx;
}

.include-icon {
	color: #10b981;
	font-weight: 900;
}

.include-text {
	font-size: 22rpx;
	color: #4b5563;
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
