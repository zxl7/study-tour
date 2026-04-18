<template>
	<view class="sg-page page">
		<AppHeader title="在线咨询/报名" />

		<scroll-view scroll-y class="content">
			<view class="sg-card card">
				<view class="intro">
					<text class="intro-title">填写信息</text>
					<text class="intro-sub">顾问将在24小时内与您取得联系</text>
				</view>

				<view class="form">
				<view class="field">
					<text class="label">姓名</text>
					<input v-model="form.name" class="input" placeholder="请输入您的姓名" />
				</view>

				<view class="field">
					<text class="label">联系电话</text>
					<input v-model="form.phone" class="input" type="number" placeholder="请输入您的手机号" />
				</view>

				<view class="field">
					<text class="label">咨询项目</text>
					<picker :range="projects" :value="form.projectIndex" @change="handleProjectChange">
						<view class="select">
							<text class="select-text">{{ projects[form.projectIndex] }}</text>
							<text class="select-arrow">▾</text>
						</view>
					</picker>
				</view>

				<view class="field">
					<text class="label">咨询内容</text>
					<textarea v-model="form.message" class="textarea" placeholder="请简单描述您的需求或疑问..." />
				</view>

				<label class="privacy" @tap="togglePrivacy">
					<checkbox :checked="form.privacy" />
					<text class="privacy-text">
						我已阅读并同意
						<text class="privacy-link" @tap.stop="goPrivacy">《隐私政策》</text>
						<text class="privacy-text">与</text>
						<text class="privacy-link" @tap.stop="goTerms">《服务条款》</text>
					</text>
				</label>

				<button class="submit sg-btn-primary" @tap="handleSubmit">提交申请</button>
			</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import { reactive } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import { navigateToByKey } from '@/utils/routes'
import { onShareAppMessage } from '@dcloudio/uni-app'

const projects = ['新加坡成长营 (7天)', '新加坡微留学 (28天)', '人才准证EP咨询', '国际学校体验营']

const form = reactive({
	name: '',
	phone: '',
	projectIndex: 0,
	message: '',
	privacy: false,
})

/**
 * 功能：更新咨询项目索引。
 */
const handleProjectChange = (e) => {
	const next = Number(e?.detail?.value ?? 0)
	form.projectIndex = Number.isNaN(next) ? 0 : next
}

/**
 * 功能：切换隐私协议勾选。
 */
const togglePrivacy = () => {
	form.privacy = !form.privacy
}

/**
 * 功能：纯函数校验表单，返回错误信息（无副作用）。
 * @param {typeof form} data
 * @returns {string | null}
 */
const validateForm = (data) => {
	if (!data.name?.trim()) return '请填写姓名'
	if (!data.phone?.trim()) return '请填写联系电话'
	if (!data.privacy) return '请先同意隐私政策'
	return null
}

/**
 * 功能：提交表单（当前仅做前端演示，后续可接 API）。
 */
const handleSubmit = () => {
	const error = validateForm(form)
	if (error) {
		uni.showToast({ title: error, icon: 'none' })
		return
	}
	navigateToByKey('success')
}

const goPrivacy = () => navigateToByKey('privacy')
const goTerms = () => navigateToByKey('terms')

onShareAppMessage(() => ({
	title: '在线咨询/报名 - 盛昌利民研学',
	path: '/pages/form/index',
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

.card {
	padding: 28rpx;
	border-radius: 28rpx;
}

.intro-title {
	font-size: 40rpx;
	font-weight: 900;
	color: $sg-color-text;
}

.intro-sub {
	margin-top: 8rpx;
	font-size: 22rpx;
	color: #9ca3af;
}

.form {
	margin-top: 32rpx;
	display: flex;
	flex-direction: column;
	gap: 24rpx;
}

.label {
	font-size: 20rpx;
	font-weight: 900;
	color: $sg-color-primary;
	letter-spacing: 2rpx;
}

.field {
	display: flex;
	flex-direction: column;
	gap: 12rpx;
}

.input,
.select,
.textarea {
	background: #f9fafb;
	border: 1px solid #e5e7eb;
	border-radius: 24rpx;
	padding: 0 24rpx;
	font-size: 26rpx;
	color: $sg-color-text;
}

.input,
.select {
	height: 96rpx;
	display: flex;
	align-items: center;
	box-sizing: border-box;
}

.select {
	justify-content: space-between;
}

.select-arrow {
	color: #9ca3af;
}

.textarea {
	min-height: 200rpx;
	padding: 20rpx 24rpx;
	box-sizing: border-box;
}

.privacy {
	display: flex;
	align-items: center;
	gap: 12rpx;
	padding: 8rpx 0;
}

.privacy-text {
	font-size: 20rpx;
	color: #6b7280;
}

.privacy-link {
	color: $sg-color-primary;
	text-decoration: underline;
	font-weight: 700;
}

.submit {
	margin-top: 8rpx;
	height: 112rpx;
	border-radius: 32rpx;
	font-weight: 900;
	font-size: 32rpx;
	box-shadow: 0 16rpx 40rpx rgba(15, 47, 103, 0.18);
}
</style>
