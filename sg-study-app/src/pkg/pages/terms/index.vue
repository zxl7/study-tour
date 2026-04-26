<template>
	<view class="sg-page page">
		<AppHeader title="服务条款" />

		<scroll-view scroll-y class="content">
			<view class="sg-card sg-doc">
				<text class="sg-doc-title">服务条款 (Terms of Service)</text>
				<text class="sg-doc-p">欢迎访问盛昌利民·狮城研学官方网站。在使用我们的服务之前，请您仔细阅读以下条款。</text>

				<text class="sg-doc-h">1. 服务内容</text>
				<text class="sg-doc-p">
					我们提供包括但不限于新加坡研学营、微留学、国际学校体验、家族办公室设立、自雇准证办理及PR申请咨询等服务。具体服务内容以双方签订的正式合同为准。
				</text>

				<text class="sg-doc-h">2. 用户责任</text>
				<text class="sg-doc-p">
					用户在提交咨询或办理业务时，应保证所提供的信息真实、准确、完整。因提供虚假信息导致服务延误或被拒的，责任由用户自行承担。
				</text>

				<text class="sg-doc-h">3. 费用与退款</text>
				<text class="sg-doc-p">
					各项服务的收费标准会在签约前明确告知。如遇不可抗力或我方承诺的兜底条款触发，退款流程将严格按照合同约定执行。
				</text>

				<text class="sg-doc-h">4. 知识产权</text>
				<text class="sg-doc-p">本网站上的所有内容，包括文字、图片、Logo及版面设计，版权均归盛昌利民所有。未经书面授权，任何人不得非法转载或使用。</text>

				<text class="sg-doc-foot">最后更新日期：2026年1月1日</text>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { onShareAppMessage } from '@dcloudio/uni-app'

onShareAppMessage(() => ({
	title: '服务条款 - 盛昌利民研学',
	path: '/pkg/pages/terms/index',
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
</style>

