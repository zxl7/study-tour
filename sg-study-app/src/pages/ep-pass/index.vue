<template>
	<view class="sg-page page">
		<AppHeader title="EP人才准证" />

		<scroll-view scroll-y class="content">
			<view class="hero">
				<image class="hero-bg" mode="aspectFill" src="/static/img/EP_Banner.jpg" />
				<view class="hero-mask" />
				<view class="hero-inner">
					<text class="hero-en">Singapore Employment Pass</text>
					<text class="hero-title">精英人才准证 · 移居新加坡的最优路径</text>
					<view class="hero-aud">
						<view v-for="t in audiences" :key="t" class="aud-item">
							<text class="aud-dot">•</text>
							<text class="aud-text">{{ t }}</text>
						</view>
					</view>
				</view>
			</view>

			<view class="body">
				<view class="policy sg-card">
					<text class="policy-title">2026 EP政策要点</text>
					<view class="policy-item">
						<text class="policy-k">COMPASS 评估体系</text>
						<text class="policy-v">从薪资、学历、企业多元化及本地支持等维度综合打分。</text>
					</view>
					<view class="policy-item">
						<text class="policy-k">教育红利与身份同步</text>
						<text class="policy-v">持EP子女可申请DP，更低门槛入读政府中小学，并可衔接PR规划。</text>
					</view>
				</view>

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
 * 功能：适合人群（纯数据）。
 */
const audiences = [
	'寻求税务优化与资产配置的企业主及高管',
	'计划海外拓展与设立总部的企业家',
	'重视子女教育、规划家族未来的高净值人士',
]

/**
 * 功能：权益列表（纯数据）。
 */
const benefits = [
	'自由通行：无限次进出，最长连续停留 2 年。',
	'家庭团聚：配偶/子女可申请家属准证(DP)，父母可申请长期探访证(LTVP)。',
	'精英教育：子女可更低门槛申请政府中小学。',
	'黄金跳板：是申请新加坡永居(PR)及公民身份的重要通道。',
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
	padding-bottom: 300rpx;
}

.content {
	height: calc(100vh - 112rpx - var(--status-bar-height));
}

.hero {
	position: relative;
	padding: 72rpx 40rpx 56rpx;
	color: #fff;
	overflow: hidden;
}

.hero-bg {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
}

.hero-mask {
	position: absolute;
	inset: 0;
	background: rgba(0, 0, 0, 0.55);
}

.hero-inner {
	position: relative;
	z-index: 1;
}

.hero-en {
	font-size: 34rpx;
	font-weight: 900;
	letter-spacing: 2rpx;
	text-transform: uppercase;
}

.hero-title {
	margin-top: 14rpx;
	font-size: 28rpx;
	font-weight: 800;
	color: rgba(255, 255, 255, 0.9);
}

.hero-aud {
	margin-top: 18rpx;
	display: flex;
	flex-direction: column;
	gap: 10rpx;
}

.aud-item {
	display: flex;
	align-items: flex-start;
	gap: 10rpx;
	color: rgba(255, 255, 255, 0.85);
}

.aud-dot {
	color: $sg-color-accent;
	margin-top: 2rpx;
}

.aud-text {
	font-size: 22rpx;
	line-height: 1.45;
}

.body {
	padding: 32rpx;
}

.policy {
	padding: 24rpx;
	border-radius: 24rpx;
}

.policy-title {
	font-size: 28rpx;
	font-weight: 900;
	color: $sg-color-primary;
}

.policy-item {
	margin-top: 16rpx;
	padding-top: 16rpx;
	border-top: 1px solid $sg-color-border;
	display: flex;
	flex-direction: column;
	gap: 6rpx;
}

.policy-k {
	font-size: 24rpx;
	font-weight: 800;
	color: $sg-color-text;
}

.policy-v {
	font-size: 22rpx;
	color: $sg-color-muted;
	line-height: 1.5;
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
	bottom: calc(140rpx + env(safe-area-inset-bottom));
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
