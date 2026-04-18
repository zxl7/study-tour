<template>
	<view class="sg-page page">
		<AppHeader title="PR永居申请" />

		<scroll-view scroll-y class="content">
			<view class="hero sg-card">
				<text class="sg-h2">新加坡 PR 永居申请</text>
				<text class="sg-section-sub">量身定制移民方案，助力全家扎根狮城</text>
			</view>

			<view class="sg-section">
				<view class="sg-section-hd">
					<view class="sg-section-bar" />
					<view class="sg-section-txt">
						<text class="sg-section-title">办理步骤</text>
						<text class="sg-section-sub">把复杂申请拆成清晰可执行的阶段</text>
					</view>
				</view>

				<view class="timeline">
					<view v-for="s in steps" :key="s.no" class="tl-item sg-card">
						<view class="tl-no" :class="s.no % 2 === 0 ? 'b' : 'a'">{{ s.no }}</view>
						<view class="tl-bd">
							<text class="title">{{ s.title }}</text>
							<text class="desc">{{ s.desc }}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom">
			<view class="bottom-btn sg-btn-primary" @tap="goForm">获取PR评估</view>
		</view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { navigateToByKey } from '@/utils/routes'
import { onShareAppMessage } from '@dcloudio/uni-app'

const steps = [
	{
		no: 1,
		title: '深度背景评估',
		desc: '全面分析您的教育背景、行业经验、薪资水平及在新停留时间，客观评估获批概率，制定专属申请策略与时间轴。',
	},
	{
		no: 2,
		title: '申请材料精修',
		desc: '指导收集全套必备文件。专业文案团队深度挖掘个人及家庭亮点，撰写强有力的自荐信(Cover Letter)及社会贡献证明，提升通过率。',
	},
	{
		no: 3,
		title: 'ICA系统递交',
		desc: '我方全程代办新加坡移民局(ICA)在线系统的填表与上传手续，确保信息准确无误。实时跟踪最新状态并及时补充材料。',
	},
	{
		no: 4,
		title: '获批及手续办理',
		desc: '收到原则性批准信(IPA)后，协助预约ICA体检及面签，陪同完成最终PR手续，顺利拿到新加坡蓝卡。',
	},
]

/**
 * 功能：跳转到表单页。
 */
const goForm = () => navigateToByKey('form')

onShareAppMessage(() => ({
	title: 'PR永居申请 - 盛昌利民研学',
	path: '/pages/pr-application/index',
}))
</script>

<style scoped lang="scss">
.page {
	background: $sg-color-bg;
	padding-bottom: 220rpx;
}

.content {
	 
	padding: 32rpx;
	box-sizing: border-box;
}

.hero {
	padding: 22rpx;
	border-radius: 28rpx;
	text-align: center;
}

.timeline {
	margin-top: 18rpx;
	display: flex;
	flex-direction: column;
	gap: 16rpx;
}

.tl-item {
	padding: 22rpx;
	border-radius: 28rpx;
	display: flex;
	gap: 16rpx;
	align-items: flex-start;
}

.tl-no {
	width: 72rpx;
	height: 72rpx;
	border-radius: 22rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26rpx;
	font-weight: 900;
	color: #fff;
	flex-shrink: 0;
}

.tl-no.a {
	background: $sg-color-primary;
}

.tl-no.b {
	background: $sg-color-accent;
}

.tl-bd {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 10rpx;
}

.title {
	font-size: 28rpx;
	font-weight: 900;
	color: $sg-color-text;
}

.desc {
	font-size: 24rpx;
	color: #4b5563;
	line-height: 1.65;
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
