<template>
	<view class="sg-page page">
		<AppHeader title="微留学详情" />

		<scroll-view scroll-y class="content">
			<image class="banner" mode="aspectFill" src="/static/img/28day.jpeg" />

			<view class="body">
				<view class="tags">
					<text class="tag tag-gold">28-Day Immersion</text>
					<text class="tag tag-blue">全真插班</text>
				</view>

				<text class="title">28天真实插班 · 狮城微留学</text>
				<text class="subtitle">像当地学生一样生活，在全英环境中快速突破语言瓶颈，全真体验新加坡中小学精英教育体系。</text>

				<view class="price-card">
					<text class="price-k">项目费用</text>
					<text class="price-v">¥38,600<text class="price-unit">起/人</text></text>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">适合怎样的家庭？</text>
					</view>
					<view class="fit-grid">
						<view v-for="item in fits" :key="item.title" class="fit-item">
							<text class="fit-title">{{ item.title }}</text>
							<text class="fit-desc">{{ item.desc }}</text>
						</view>
					</view>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">核心特色</text>
					</view>
					<view class="feature-list">
						<view v-for="item in features" :key="item.title" class="feature-item">
							<text class="feature-no">{{ item.no }}</text>
							<view class="feature-body">
								<text class="feature-title">{{ item.title }}</text>
								<text class="feature-desc">{{ item.desc }}</text>
							</view>
						</view>
					</view>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">费用包含</text>
					</view>
					<view class="include sg-card">
						<view v-for="t in includes" :key="t" class="include-item">
							<text class="include-dot">•</text>
							<text class="include-text">{{ t }}</text>
						</view>
					</view>
					<text class="include-tip">* 不包含机票；周末行程为赠送项目，可自行选择。</text>
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
 * 功能：适合人群（纯数据）。
 */
const fits = [
	{ title: '计划低龄留学的家庭', desc: '在正式决定前，让孩子提前测试对新加坡教育环境的适应能力。' },
	{ title: '需快速提升口语的学生', desc: '28天全英社交+全英课堂，强迫式开口，告别“哑巴英语”。' },
	{ title: '提升升学竞争力的学生', desc: '海外插班经历是学生履历的一大亮点，有助于未来申请国际学校。' },
	{ title: '想体验寄宿家庭生活', desc: '与当地精英中产家庭同吃同住，深度了解社会文化与教养。' },
]

/**
 * 功能：核心特色（纯数据）。
 */
const features = [
	{ no: '1', title: '全定制课程', desc: '按孩子学习水平、风格、记忆模式定制课表，匹配个人学习节奏。' },
	{ no: '2', title: '独有的教学系统™', desc: '精准评估-夯实基础-靶向补漏-多维掌握-科学复习，全程动态优化。' },
	{ no: '3', title: '顶尖师资', desc: '数学博士、注册教师、教育心理学家领衔，教师均有10+年经验。' },
	{ no: '4', title: '能力培养', desc: '打造自主学习能力，攻克学科难点，兼顾提分与终身学习力。' },
]

/**
 * 功能：费用包含（纯数据）。
 */
const includes = [
	'28天27晚住宿，接送机各一次',
	'寄宿家庭餐饮：上学日早餐/晚餐，非上学日全天饮食',
	'课程费',
	'每日上学车辆接送，外出日车辆接送',
]

/**
 * 功能：跳转到表单页。
 */
const goForm = () => navigateToByKey('form')
</script>

<style scoped lang="scss">
.page {
	padding-bottom: 300rpx;
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
	flex-wrap: wrap;
}

.tag {
	padding: 6rpx 16rpx;
	border-radius: 12rpx;
	font-size: 20rpx;
	font-weight: 800;
}

.tag-blue {
	background: rgba($sg-color-primary, 0.12);
	color: $sg-color-primary;
}

.tag-gold {
	background: rgba($sg-color-accent, 0.22);
	color: #7c4a1c;
}

.title {
	font-size: 40rpx;
	font-weight: 800;
	color: $sg-color-text;
	line-height: 1.25;
}

.subtitle {
	margin-top: 12rpx;
	font-size: 24rpx;
	color: $sg-color-muted;
	line-height: 1.5;
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

.fit-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16rpx;
}

.fit-item {
	padding: 20rpx;
	border-radius: 20rpx;
	background: #f9fafb;
	border: 1px solid $sg-color-border;
}

.fit-title {
	font-size: 24rpx;
	font-weight: 900;
	color: $sg-color-primary;
}

.fit-desc {
	margin-top: 8rpx;
	font-size: 20rpx;
	color: $sg-color-muted;
	line-height: 1.4;
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
	display: flex;
	gap: 16rpx;
	align-items: flex-start;
}

.feature-no {
	width: 44rpx;
	height: 44rpx;
	border-radius: 999rpx;
	background: rgba($sg-color-accent, 0.22);
	color: #7c4a1c;
	font-weight: 900;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
}

.feature-body {
	flex: 1;
	display: flex;
	flex-direction: column;
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

.include {
	padding: 24rpx;
	border-radius: 24rpx;
}

.include-item {
	display: flex;
	gap: 12rpx;
	align-items: flex-start;
}

.include-item + .include-item {
	margin-top: 12rpx;
}

.include-dot {
	color: $sg-color-accent;
	margin-top: 2rpx;
}

.include-text {
	font-size: 22rpx;
	color: #4b5563;
	line-height: 1.5;
}

.include-tip {
	margin-top: 12rpx;
	font-size: 20rpx;
	color: #9ca3af;
}

.bottom {
	position: fixed;
	left: 0;
	right: 0;
	bottom: calc(140rpx + env(safe-area-inset-bottom));
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
