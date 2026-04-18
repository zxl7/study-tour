<template>
	<view class="sg-page page">
		<view class="wrap">
			<view class="icon">✓</view>
			<text class="title">提交成功</text>
			<text class="desc">
				我们将尽快为您匹配资深教育顾问，并在24小时内通过电话与您联系。
			</text>

			<button class="btn sg-btn-primary" @tap="goHome">返回首页</button>
			<text class="tip">如有紧急需求，可直接致电 {{ SITE.hotline }}</text>
		</view>
	</view>
</template>

<script setup>
import { switchTabByKey } from '@/utils/routes'
import { SITE } from '@/config/site'
import { onShareAppMessage } from '@dcloudio/uni-app'

/**
 * 功能：返回首页并清空栈。
 */
const goHome = () => switchTabByKey('home')

onShareAppMessage(() => ({
	title: '提交成功 - 盛昌利民研学',
	path: '/pages/success/index',
}))
</script>

<style scoped lang="scss">
.page {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 48rpx;
	box-sizing: border-box;
}

.wrap {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.icon {
	width: 160rpx;
	height: 160rpx;
	border-radius: 999rpx;
	background: rgba(16, 185, 129, 0.14);
	color: #10b981;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 88rpx;
	font-weight: 900;
}

.title {
	margin-top: 28rpx;
	font-size: 44rpx;
	font-weight: 900;
	color: $sg-color-text;
}

.desc {
	margin-top: 12rpx;
	font-size: 26rpx;
	color: #6b7280;
	text-align: center;
	line-height: 1.6;
}

.btn {
	margin-top: 72rpx;
	width: 100%;
	height: 96rpx;
	border-radius: 999rpx;
	font-size: 28rpx;
	font-weight: 900;
}

.tip {
	margin-top: 24rpx;
	font-size: 20rpx;
	color: #9ca3af;
	text-align: center;
}
</style>
