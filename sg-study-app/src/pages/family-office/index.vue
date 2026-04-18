<template>
	<view class="sg-page page">
		<AppHeader title="家族办公室" />

		<scroll-view scroll-y class="content">
			<view class="hero">
				<image
					class="hero-bg"
					mode="aspectFill"
					src="/static/img/Office_Environment.jpg"
				/>
				<view class="hero-mask" />
				<view class="hero-inner">
					<text class="hero-title">家族办公室</text>
					<text class="hero-sub">为您实现财富传承与全球化资产配置，打造百年家族基业。</text>
				</view>
			</view>

			<view class="sg-section sg-card section">
				<view class="sg-section-hd">
					<view class="sg-section-bar" />
					<view class="sg-section-txt">
						<text class="sg-section-title">专业架构设计</text>
						<text class="sg-section-sub">合规、安全、可持续的财富管理中心</text>
					</view>
				</view>
				<text class="sg-p">结合新加坡得天独厚的税务优势与金融环境，为您量身定制安全、合规的家族财富管理中心（13O/13U）。</text>
				<view class="sg-list list">
					<view v-for="t in items" :key="t" class="sg-li">
						<text class="sg-dot">•</text>
						<text class="sg-li-text">{{ t }}</text>
					</view>
				</view>
			</view>

			<view class="sg-section sg-card section">
				<view class="sg-section-hd">
					<view class="sg-section-bar" />
					<view class="sg-section-txt">
						<text class="sg-section-title">专属服务团队</text>
						<text class="sg-section-sub">律所 / 私人银行 / 税务师协同</text>
					</view>
				</view>
				<text class="sg-p">我们联合新加坡本地顶尖律所、私人银行与资深税务师，提供全方位的保驾护航。</text>
				<button class="btn sg-btn-primary" @tap="goForm">预约资深顾问咨询</button>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { navigateToByKey } from '@/utils/routes'
import { onShareAppMessage } from '@dcloudio/uni-app'

const items = ['资产保护与风险隔离', '跨代财富平稳传承', '优化全球税务筹划']
const goForm = () => navigateToByKey('form')

onShareAppMessage(() => ({
	title: '家族办公室 - 盛昌利民研学',
	path: '/pages/family-office/index',
}))
</script>

<style scoped lang="scss">
.page {
	background: $sg-color-bg;
}

.content {
	 
	padding: 32rpx;
	box-sizing: border-box;
}

.hero {
	height: 320rpx;
	border-radius: 28rpx;
	overflow: hidden;
	position: relative;
}

.hero-bg {
	width: 100%;
	height: 100%;
}

.hero-mask {
	position: absolute;
	inset: 0;
	background: rgba(17, 24, 39, 0.55);
}

.hero-inner {
	position: absolute;
	inset: 0;
	padding: 28rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.hero-title {
	font-size: 40rpx;
	font-weight: 900;
	color: $sg-color-accent;
}

.hero-sub {
	margin-top: 10rpx;
	font-size: 22rpx;
	color: rgba(255, 255, 255, 0.86);
	line-height: 1.6;
}

.list {
	margin-top: 12rpx;
}

.btn {
	margin-top: 16rpx;
	height: 92rpx;
	line-height: 92rpx;
	border-radius: 20rpx;
	font-size: 26rpx;
	font-weight: 900;
}
</style>
