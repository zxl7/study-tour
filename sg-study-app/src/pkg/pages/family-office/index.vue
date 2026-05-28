<template>
	<view class="sg-page page">
		<AppHeader title="家族办公室" />

    <scroll-view scroll-y class="content">
      <view class="hero">
        <view class="hero-inner">
          <text class="hero-en">Singapore Family Office</text>
          <text class="hero-title">新加坡家族办公室 · 财富传承的顶层设计</text>
        </view>
      </view>

      <view class="body">
        <view class="sg-section">
          <view class="sg-section-hd">
            <view class="sg-section-bar" />
            <text class="sg-section-title">什么是家族办公室？</text>
          </view>
          <text class="section-text"
            >家族办公室（Family Office）是为高净值家族提供全方位财富管理和家族服务、使其资产的长期发展符合家族的预期和期望、并使其资产能够顺利地跨代传承和保值增值的机构。</text
          >
        </view>

        <!-- 架构图 -->
        <view class="sg-section">
          <view class="sg-section-hd">
            <view class="sg-section-bar" />
            <text class="sg-section-title">13O / 13U 架构解析</text>
          </view>
          <view class="policy-figure sg-card">
            <image class="policy-img" mode="aspectFit" :src="img('project/3.jpg')" @tap="previewImg('project/3.jpg')" />
            <text class="policy-tip">家族办公室标准架构示意</text>
          </view>
        </view>

        <!-- 核心优势 -->
        <view class="sg-section">
          <view class="sg-section-hd">
            <view class="sg-section-bar" />
            <text class="sg-section-title">核心优势</text>
          </view>
          <view class="benefit-list">
            <view v-for="t in items" :key="t" class="benefit-item sg-card">
              <text class="benefit-dot">•</text>
              <text class="benefit-text">{{ t }}</text>
            </view>
          </view>
        </view>

        <view class="sg-section">
          <text class="sg-p"
            >我们联合新加坡本地顶尖律所、私人银行与资深税务师，提供全方位的保驾护航。</text
          >
          <button class="btn sg-btn-primary" @tap="goForm">预约资深顾问咨询</button>
        </view>
      </view>
    </scroll-view>
    <SgImagePreview
      v-model:show="previewState.show"
      :urls="previewState.urls"
      :current="previewState.current"
    />
  </view>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue"
import SgImagePreview from "@/components/SgImagePreview.vue"
import { img, previewImg, previewState } from "@/utils/img"
import { navigateToByKey } from "@/utils/routes"
import { onShareAppMessage } from "@dcloudio/uni-app"

const items = ["资产保护与风险隔离", "跨代财富平稳传承", "优化全球税务筹划"]
const goForm = () => navigateToByKey("form")

onShareAppMessage(() => ({
  title: "家族办公室 - 盛昌利民研学",
  path: "/pkg/pages/family-office/index",
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
	background: linear-gradient(135deg, #0f3d63 0%, #0b5f8f 100%);
}

.hero-inner {
	height: 100%;
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
