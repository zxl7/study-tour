<template>
	<view class="header">
		<view v-if="showBack" class="back" @tap="handleBack">
			<SgIcon type="back" :size="22" :color="colors.text" />
		</view>
		<view v-else class="back-placeholder" />

		<text class="title">{{ title }}</text>

		<view class="right-placeholder" />
	</view>
</template>

<script setup>
/**
 * 功能：通用顶部标题栏（用于“详情/表单”页面）。
 * 特点：组件无状态，依赖 props + 事件，符合函数式组件思想。
 */
import { computed } from 'vue'
import { safeBack } from '@/utils/nav'
import SgIcon from '@/components/SgIcon.vue'

const props = defineProps({
	title: { type: String, default: '' },
	showBack: { type: Boolean, default: true },
})

const canGoBack = computed(() => props.showBack)
const colors = computed(() => ({
	text: '#111827',
}))

const handleBack = () => {
	if (!canGoBack.value) return
	safeBack()
}
</script>

<style scoped lang="scss">
.header {
	height: calc(112rpx + var(--status-bar-height));
	padding: var(--status-bar-height) 32rpx 0;
	display: flex;
	align-items: center;
	background: #fff;
	border-bottom: 1px solid $sg-color-border;
	box-sizing: border-box;
}

.back,
.back-placeholder,
.right-placeholder {
	width: 64rpx;
	height: 64rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.back-text {
	font-size: 44rpx;
	color: $sg-color-text;
	line-height: 1;
}

.title {
	flex: 1;
	text-align: center;
	font-weight: 700;
	color: $sg-color-text;
	font-size: 32rpx;
}
</style>
