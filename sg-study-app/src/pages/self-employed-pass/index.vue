<template>
	<view class="sg-page page">
		<AppHeader title="自雇准证办理" />

		<scroll-view scroll-y class="content">
			<view class="hero sg-card">
				<text class="sg-h2">自雇准证办理 (Self-Employed EP)</text>
				<text class="sg-section-sub">快速落地新加坡，拓展海外业务版图，全家获取居住身份</text>
			</view>

			<view class="sg-section">
				<view class="sg-section-hd">
					<view class="sg-section-bar" />
					<view class="sg-section-txt">
						<text class="sg-section-title">一站式办理步骤</text>
						<text class="sg-section-sub">按流程拆解，让每一步可落地、可追踪</text>
					</view>
				</view>

				<view class="steps">
				<view v-for="s in steps" :key="s.no" class="step sg-card">
					<view class="no" :class="s.no % 2 === 0 ? 'no-gold' : 'no-blue'">{{ s.no }}</view>
					<view class="bd">
						<text class="title">{{ s.title }}</text>
						<text class="desc">{{ s.desc }}</text>
					</view>
				</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom">
			<view class="bottom-btn sg-btn-primary" @tap="goForm">获取方案评估</view>
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
		title: '商业企划与公司注册',
		desc: '协助规划并撰写符合新加坡人力部(MOM)要求的商业计划书。在新加坡本地快速注册公司，提供法定秘书服务，并协助开立企业银行对公账户。',
	},
	{
		no: 2,
		title: '准证材料准备与递交',
		desc: '根据您的背景进行COMPASS打分评估及提分指导。专业文案团队整理全套申请材料，确保合规准确，并正式向MOM递交EP申请。',
	},
	{
		no: 3,
		title: '获批与家属准证办理',
		desc: '实时追踪审批进度。EP获批后，安排登录新加坡完成制卡。同时协助配偶和子女申请家属准证(DP)及父母的长期探访准证(LTVP)。',
	},
]

/**
 * 功能：跳转到表单页。
 */
const goForm = () => navigateToByKey('form')

onShareAppMessage(() => ({
	title: '自雇准证办理 - 盛昌利民研学',
	path: '/pages/self-employed-pass/index',
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
	padding: 28rpx;
	border-radius: 28rpx;
}

.steps {
	display: flex;
	flex-direction: column;
	gap: 16rpx;
}

.step {
	padding: 22rpx;
	border-radius: 28rpx;
	display: flex;
	gap: 18rpx;
	align-items: flex-start;
}

.no {
	width: 72rpx;
	height: 72rpx;
	border-radius: 22rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 34rpx;
	font-weight: 900;
	color: #fff;
	flex-shrink: 0;
}

.no-blue {
	background: $sg-color-primary;
}

.no-gold {
	background: $sg-color-accent;
}

.bd {
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
