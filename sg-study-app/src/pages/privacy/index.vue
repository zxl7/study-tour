<template>
	<view class="sg-page page">
		<AppHeader title="隐私政策" />

		<scroll-view scroll-y class="content">
			<view class="sg-card sg-doc">
				<view class="title-row">
					<SgIcon type="locked-filled" :size="22" color="#005a9c" />
					<text class="title">隐私保护政策</text>
				</view>

				<view class="block">
					<text class="sg-doc-h">信息收集</text>
					<text class="sg-doc-p">我们仅在您主动提交咨询表单、评估需求时收集必要的个人信息（如姓名、联系方式、孩子年龄、教育背景等），用于为您提供定制化的服务方案。</text>
				</view>

				<view class="block">
					<text class="sg-doc-h">信息使用</text>
					<text class="sg-doc-p">您的个人信息将被严格保密，仅限于内部顾问团队进行业务评估与联络。我们承诺，绝不向任何第三方出售、出租或交易您的个人数据。</text>
				</view>

				<view class="block">
					<text class="sg-doc-h">数据安全</text>
					<text class="sg-doc-p">我们采用行业标准的安全技术和内部管理制度，防止您的个人信息泄露、毁损或丢失。所有涉及核心身份规划的材料均受严格的保密协议(NDA)保护。</text>
				</view>

				<view class="block">
					<text class="sg-doc-h">您的权利</text>
					<text class="sg-doc-p">您有权随时要求查看、修改或删除我们在系统中保存的您的个人信息。如需操作，请联系我们的客服专员。</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import SgIcon from '@/components/SgIcon.vue'
import { onShareAppMessage } from '@dcloudio/uni-app'

onShareAppMessage(() => ({
	title: '隐私政策 - 盛昌利民研学',
	path: '/pages/privacy/index',
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

.title-row {
	display: flex;
	align-items: center;
	gap: 12rpx;
	padding-bottom: 16rpx;
	border-bottom: 1px solid $sg-color-border;
}

.title {
	font-size: 34rpx;
	font-weight: 900;
	color: $sg-color-primary;
}

.block {
	margin-top: 16rpx;
}
</style>
