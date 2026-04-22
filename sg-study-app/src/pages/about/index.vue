<template>
  <view class="sg-page page">
    <view class="hero">
      <view class="hero-card">
        <img src="/src/assets/logo.jpg" alt="logo" style="width: 32px; height: 32px" />

        <view class="hero-info">
          <text class="hero-title">盛昌利民·狮城研学</text>
          <text class="hero-sub">Shengchang Limin · Singapore Study Tour</text>
        </view>
      </view>
    </view>

    <scroll-view scroll-y class="content">
      <view class="panel sg-card">
        <text class="panel-title">核心服务</text>
        <view class="panel-grid">
          <view class="panel-item">
            <text class="panel-k">成长营</text>
            <text class="panel-v">7天6晚</text>
          </view>
          <view class="panel-item">
            <text class="panel-k">微留学</text>
            <text class="panel-v">28天插班</text>
          </view>
          <view class="panel-item">
            <text class="panel-k">人才EP</text>
            <text class="panel-v">政策解读</text>
          </view>
          <view class="panel-item">
            <text class="panel-k">咨询报名</text>
            <text class="panel-v">在线提交</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">集团简介</text>
        <text class="section-text">海南盛昌利民传媒有限公司</text>
        <text class="section-text">作为海南领先的精英教育咨询机构，我们致力于整合全球优质教育资源，为中国家庭提供全方位的研学、升学及移民规划服务。</text>
      </view>

      <view class="cards">
        <view v-for="c in cards" :key="c.title" class="card sg-card">
          <text class="card-title">{{ c.title }}</text>
          <text class="card-desc">{{ c.desc }}</text>
        </view>
      </view>

      <view class="contact sg-card">
        <text class="section-title">联系我们</text>
        <view class="contact-item">
          <text class="contact-k">服务热线</text>
          <text class="contact-v">{{ phone }}</text>
        </view>
        <view class="contact-item">
          <text class="contact-k">公司地址</text>
          <text class="contact-v">{{ address }}</text>
        </view>
        <view class="contact-item">
          <text class="contact-k">商务邮箱</text>
          <text class="contact-v">{{ email }}</text>
        </view>

        <!-- <button class="contact-btn sg-btn-primary" @tap="goForm">预约咨询</button> -->
      </view>

      <view class="more sg-card">
        <text class="section-title">更多</text>
        <view class="menu">
          <view class="menu-item" @tap="go('familyOffice')">
            <text class="menu-text">家族办公室</text>
            <text class="menu-arrow">›</text>
          </view>
          <view class="menu-item" @tap="go('selfEmployedPass')">
            <text class="menu-text">自雇准证办理</text>
            <text class="menu-arrow">›</text>
          </view>
          <view class="menu-item" @tap="go('prApplication')">
            <text class="menu-text">PR永居申请</text>
            <text class="menu-arrow">›</text>
          </view>
          <view class="menu-item" @tap="go('partnership')">
            <text class="menu-text">合作咨询</text>
            <text class="menu-arrow">›</text>
          </view>
          <view class="menu-item" @tap="go('privacy')">
            <text class="menu-text">隐私政策</text>
            <text class="menu-arrow">›</text>
          </view>
          <view class="menu-item" @tap="go('terms')">
            <text class="menu-text">服务条款</text>
            <text class="menu-arrow">›</text>
          </view>
        </view>
      </view>

      <!-- 说明：移动端允许合并裁剪模块，办公环境大图收起（如需可恢复展示） -->
    </scroll-view>
  </view>
</template>

<script setup>
import { onShareAppMessage } from "@dcloudio/uni-app"
import { SITE } from "@/config/site"
import { navigateToByKey } from "@/utils/routes"

/**
 * 功能：展示联系方式（纯数据）。
 */
const phone = SITE.hotline
const email = SITE.bizEmail
const address = SITE.chinaOfficeAddress

const cards = [
  { title: "服务定位", desc: "坚持教育目标与家庭需求并重，围绕“可落地、可执行、可持续”设计方案，避免短期化决策。" },
  { title: "团队协同", desc: "国内顾问与新加坡在地执行团队联动，覆盖前期评估、材料准备、申请执行与后续跟踪。" },
  { title: "价值标准", desc: "以透明流程、真实反馈和责任交付为底线，持续优化服务体验与结果质量。" },
]

const go = (key) => navigateToByKey(key)
const goForm = () => navigateToByKey("form")

onShareAppMessage(() => ({
  title: "关于我们 - 盛昌利民研学",
  path: "/pages/about/index",
}))
</script>

<style scoped lang="scss">
.page {
  // 预留 TabBar 安全区
}

.hero {
  height: calc(320rpx + var(--status-bar-height));
  background: $sg-color-primary;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--status-bar-height) 32rpx 0;
  box-sizing: border-box;
}

.hero-card {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20rpx;
  padding: 0 32rpx;
  box-sizing: border-box;
}

.avatar {
  width: 112rpx;
  height: 112rpx;
  border-radius: 999rpx;
  background: rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  font-weight: 900;
  letter-spacing: 2rpx;
}

.hero-info {
  display: flex;
  flex-direction: column;
}

.hero-title {
  font-size: 36rpx;
  font-weight: 900;
}

.hero-sub {
  margin-top: 6rpx;
  font-size: 20rpx;
  letter-spacing: 3rpx;
  color: rgba(255, 255, 255, 0.75);
}

.content {
  padding: 32rpx 32rpx 260rpx;
  box-sizing: border-box;
}

.panel {
  padding: 28rpx;
  border-radius: 32rpx;
  margin-bottom: 28rpx;
}

.panel-title {
  font-size: 28rpx;
  font-weight: 900;
  color: $sg-color-text;
}

.panel-grid {
  margin-top: 18rpx;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rpx;
}

.panel-item {
  background: #f9fafb;
  border: 1px solid $sg-color-border;
  border-radius: 22rpx;
  padding: 18rpx;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.panel-k {
  font-size: 22rpx;
  color: #6b7280;
  font-weight: 700;
}

.panel-v {
  font-size: 26rpx;
  color: $sg-color-primary;
  font-weight: 900;
}

.section-title {
  font-size: 30rpx;
  font-weight: 800;
  color: $sg-color-text;
}

.section-text {
  margin-top: 16rpx;
  font-size: 26rpx;
  color: #4b5563;
  line-height: 1.6;
  text-align: justify;
}

.cards {
  margin-top: 28rpx;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16rpx;
}

.card {
  padding: 28rpx;
  border-radius: 32rpx;
}

.card-title {
  font-size: 28rpx;
  font-weight: 900;
  color: $sg-color-primary;
}

.card-desc {
  margin-top: 10rpx;
  font-size: 24rpx;
  color: $sg-color-muted;
  line-height: 1.6;
}

.contact {
  margin-top: 32rpx;
  padding: 32rpx;
  border-radius: 32rpx;
  background: #f9fafb;
}

.contact-btn {
  margin-top: 18rpx;
  height: 92rpx;
  line-height: 92rpx;
  border-radius: 999rpx;
  font-weight: 900;
}

.more {
  margin-top: 28rpx;
  padding: 28rpx;
  border-radius: 32rpx;
}

.menu {
  margin-top: 16rpx;
  display: flex;
  flex-direction: column;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18rpx 6rpx;
  border-top: 1px solid $sg-color-border;
}

.menu-item:first-child {
  border-top: none;
}

.menu-text {
  font-size: 24rpx;
  color: $sg-color-text;
  font-weight: 800;
}

.menu-arrow {
  color: #9ca3af;
  font-size: 34rpx;
  line-height: 1;
}

.contact-item {
  margin-top: 24rpx;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.contact-k {
  font-size: 20rpx;
  color: #9ca3af;
}

.contact-v {
  font-size: 26rpx;
  font-weight: 700;
  color: $sg-color-text;
}
</style>
