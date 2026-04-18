<template>
	<view class="sg-page page">
		<AppHeader title="EP人才准证" />

		<scroll-view scroll-y class="content">
			<view class="hero">
				<text class="hero-title">新加坡自雇EP</text>
				<text class="hero-sub">EMPLOYMENT PASS POLICY</text>
				<view class="hero-tags">
					<text v-for="t in heroTags" :key="t" class="hero-tag">{{ t }}</text>
				</view>
			</view>

			<view class="body">
				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">政策解析</text>
					</view>
					<text class="section-text">
						新加坡就业准证（EP）是为管理人员、高管、专业人员制定的工作准证。通过在新加坡注册公司，以高管身份申请，是目前最为主流、稳健的移居途径。
					</text>
				</view>

				<view class="benefit">
					<text class="benefit-title">核心权益优势</text>
					<view class="benefit-list">
						<view v-for="b in benefits" :key="b" class="benefit-item">
							<text class="benefit-icon">●</text>
							<text class="benefit-text">{{ b }}</text>
						</view>
					</view>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">申请条件 (Compass)</text>
					</view>

					<view class="cond-list">
						<view v-for="c in conditions" :key="c.k" class="cond-item sg-card">
							<text class="cond-k">{{ c.k }}</text>
							<text class="cond-v">{{ c.v }}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom">
			<view class="bottom-btn sg-btn-primary" @tap="goForm">获取专业评估</view>
		</view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { navigateToByKey } from '@/utils/routes'

/**
 * 功能：头图标签（纯数据）。
 */
const heroTags = ['税务优惠', '全家移民', '快速获批']

/**
 * 功能：权益列表（纯数据）。
 */
const benefits = [
	'一人申请，三代移居：可携带配偶、子女及父母。',
	'子女教育：持有EP者子女可直接申请公立学校。',
	'税制优势：享受新加坡极低个人所得税。',
]

/**
 * 功能：条件列表（纯数据）。
 */
const conditions = [
	{ k: '薪资要求', v: 'S$5,000+ /月' },
	{ k: '学历背景', v: '本科及以上' },
	{ k: '打分要求', v: '满足 40 分' },
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

.hero {
	padding: 56rpx 40rpx;
	background: $sg-color-primary;
	color: #fff;
}

.hero-title {
	font-size: 44rpx;
	font-weight: 900;
}

.hero-sub {
	margin-top: 12rpx;
	font-size: 20rpx;
	letter-spacing: 4rpx;
	color: rgba(255, 255, 255, 0.65);
	font-style: italic;
}

.hero-tags {
	margin-top: 24rpx;
	display: flex;
	gap: 16rpx;
}

.hero-tag {
	padding: 6rpx 16rpx;
	border-radius: 12rpx;
	border: 1px solid rgba(255, 255, 255, 0.3);
	font-size: 20rpx;
}

.body {
	padding: 32rpx;
}

.section {
	margin-top: 24rpx;
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
	color: $sg-color-text;
}

.section-text {
	font-size: 26rpx;
	color: #4b5563;
	line-height: 1.6;
	text-align: justify;
}

.benefit {
	margin-top: 32rpx;
	padding: 28rpx;
	border-radius: 32rpx;
	background: #fffbeb;
	border: 1px solid #fef3c7;
}

.benefit-title {
	font-size: 26rpx;
	font-weight: 900;
	color: #92400e;
}

.benefit-list {
	margin-top: 16rpx;
	display: flex;
	flex-direction: column;
	gap: 14rpx;
}

.benefit-item {
	display: flex;
	gap: 12rpx;
	align-items: flex-start;
}

.benefit-icon {
	color: #f59e0b;
	margin-top: 4rpx;
}

.benefit-text {
	font-size: 22rpx;
	color: #374151;
	font-weight: 600;
	line-height: 1.5;
}

.cond-list {
	display: flex;
	flex-direction: column;
	gap: 16rpx;
}

.cond-item {
	padding: 24rpx;
	border-radius: 20rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.cond-k {
	font-size: 24rpx;
	color: #4b5563;
}

.cond-v {
	font-size: 24rpx;
	color: $sg-color-primary;
	font-weight: 800;
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
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 900;
}
</style>
