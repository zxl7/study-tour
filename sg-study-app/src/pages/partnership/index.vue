<template>
	<view class="sg-page page">
		<AppHeader title="合作咨询" />

		<scroll-view scroll-y class="content">
			<view class="hero sg-card">
				<SgIcon type="staff-filled" :size="28" color="#e5a663" />
				<text class="hero-title">合作与咨询</text>
				<text class="hero-sub">我们期待与国内外优秀的教育机构、留学中介、财富管理机构及各界伙伴建立长期共赢的合作关系。</text>
			</view>

			<view class="grid">
				<view class="left sg-card">
					<text class="card-title">成为渠道代理</text>
					<text class="card-desc">
						依托我们强大的新加坡本土资源和履约能力，为您拓展高净值客户服务边界。我们提供丰厚的佣金回报与全套业务培训。
					</text>
					<view class="bullets sg-list">
						<view class="sg-li">
							<text class="sg-dot">•</text>
							<text class="sg-li-text">共享狮城教育资源</text>
						</view>
						<view class="sg-li">
							<text class="sg-dot">•</text>
							<text class="sg-li-text">专属渠道经理对接</text>
						</view>
						<view class="sg-li">
							<text class="sg-dot">•</text>
							<text class="sg-li-text">丰厚透明的返佣机制</text>
						</view>
					</view>
					<button class="btn sg-btn-primary" @tap="goForm">申请渠道合作</button>
				</view>

				<view class="right sg-card">
					<text class="card-title primary">联系方式</text>
					<view class="info">
						<view class="row">
							<SgIcon type="phone-filled" :size="20" color="#e5a663" />
							<view class="row-bd">
								<text class="row-k">服务热线</text>
								<text class="row-v">{{ SITE.hotline }} (全国服务咨询热线)</text>
							</view>
						</view>
						<view class="row">
							<SgIcon type="email-filled" :size="20" color="#e5a663" />
							<view class="row-bd">
								<text class="row-k">商务邮箱</text>
								<text class="row-v">{{ SITE.bizEmail }}</text>
							</view>
						</view>
						<view class="row">
							<SgIcon type="location-filled" :size="20" color="#e5a663" />
							<view class="row-bd">
								<text class="row-k">公司地址</text>
								<text class="row-v">{{ SITE.bizAddress }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import SgIcon from '@/components/SgIcon.vue'
import { SITE } from '@/config/site'
import { navigateToByKey } from '@/utils/routes'
import { onShareAppMessage } from '@dcloudio/uni-app'

const goForm = () => navigateToByKey('form')

onShareAppMessage(() => ({
	title: '合作咨询 - 盛昌利民研学',
	path: '/pages/partnership/index',
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
	padding: 26rpx 24rpx;
	border-radius: 28rpx;
	text-align: center;
}

.hero-title {
	margin-top: 12rpx;
	font-size: 34rpx;
	font-weight: 900;
	color: $sg-color-text;
}

.hero-sub {
	margin-top: 10rpx;
	font-size: 22rpx;
	color: $sg-color-muted;
	line-height: 1.6;
}

.grid {
	margin-top: 20rpx;
	display: flex;
	flex-direction: column;
	gap: 16rpx;
}

.left {
	border-radius: 28rpx;
	padding: 26rpx;
	box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.08);
}

.card-title {
	font-size: 30rpx;
	font-weight: 900;
}

.card-title.primary {
	color: $sg-color-primary;
}

.card-desc {
	margin-top: 10rpx;
	font-size: 22rpx;
	color: $sg-color-muted;
	line-height: 1.6;
}

.bullets {
	margin-top: 14rpx;
}

.btn {
	margin-top: 18rpx;
	height: 88rpx;
	line-height: 88rpx;
	border-radius: 18rpx;
	font-weight: 900;
}

.right {
	border-radius: 28rpx;
	padding: 26rpx;
}

.info {
	margin-top: 16rpx;
	display: flex;
	flex-direction: column;
	gap: 16rpx;
}

.row {
	display: flex;
	gap: 14rpx;
	align-items: flex-start;
}

.row-bd {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 6rpx;
}

.row-k {
	font-size: 22rpx;
	font-weight: 900;
	color: $sg-color-text;
}

.row-v {
	font-size: 22rpx;
	color: #4b5563;
	line-height: 1.5;
}
</style>
