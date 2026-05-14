<template>
  <view class="sg-page page">
    <AppHeader title="EP人才准证" />

    <scroll-view scroll-y class="content">
      <view class="hero">
        <SgImage class="hero-bg" mode="aspectFill" src="banner/EP_Banner.webp" />
        <view class="hero-mask" />
        <view class="hero-inner">
          <text class="hero-en">Singapore Employment Pass</text>
          <text class="hero-title">精英人才准证 · 移居新加坡的最优路径</text>
          <view class="hero-aud">
            <view v-for="(t, i) in audiences" :key="i" class="aud-item">
              <text class="aud-dot">•</text>
              <text class="aud-text">{{ t }}</text>
            </view>
          </view>
        </view>
      </view>

      <view class="body">
        <!-- 2026 EP政策要点 -->
        <view class="sg-section">
          <view class="sg-section-hd">
            <view class="sg-section-bar" />
            <text class="sg-section-title">2026 EP政策要点</text>
          </view>
          <view class="policy sg-card">
            <view class="policy-item" style="border-top: none; margin-top: 0; padding-top: 0;">
              <text class="policy-k">COMPASS 评估体系</text>
              <text class="policy-v">从薪资、学历、企业多元化及本地支持等维度综合打分。</text>
            </view>
            <view class="policy-item">
              <text class="policy-k">教育红利与身份同步</text>
              <text class="policy-v">持EP子女可申请DP，更低门槛入读政府中小学，并可衔接PR规划。</text>
            </view>
          </view>
        </view>

        <!-- 示意图 -->
        <view class="sg-section">
          <view class="policy-figure sg-card">
            <SgImage class="policy-img" mode="aspectFit" src="project/EP.jpg" />
            <text class="policy-tip">COMPASS评估框架示意</text>
          </view>
        </view>

        <!-- 政策解析 -->
        <view class="sg-section">
          <view class="sg-section-hd">
            <view class="sg-section-bar" />
            <text class="sg-section-title">政策解析</text>
          </view>
          <text class="section-text">新加坡就业准证（EP）是为管理人员、高管、专业人员制定的工作准证。通过在新加坡注册公司，以高管身份申请，是目前最为主流、稳健的移居途径。</text>
        </view>

        <!-- 适合人群 -->
        <view class="sg-section">
          <view class="sg-section-hd">
            <view class="sg-section-bar" />
            <text class="sg-section-title">适合人群</text>
          </view>
          <view class="policy sg-card">
            <view class="policy-list">
              <view v-for="(a, i) in audiences" :key="i" class="policy-item" :style="i === 0 ? 'border-top: none; margin-top: 0; padding-top: 0;' : ''">
                <text class="policy-v">{{ a }}</text>
              </view>
            </view>
          </view>
        </view>

        <!-- 核心权益 -->
        <view class="sg-section">
          <view class="sg-section-hd">
            <view class="sg-section-bar" />
            <text class="sg-section-title">核心权益优势</text>
          </view>
          <view class="benefit sg-card">
            <view class="benefit-list">
              <view v-for="(b, i) in benefits" :key="i" class="benefit-item">
                <text class="benefit-icon">●</text>
                <text class="benefit-text">{{ b }}</text>
              </view>
            </view>
          </view>
        </view>

        <!-- 为何选择新加坡EP -->
        <view class="sg-section">
          <view class="sg-section-hd">
            <view class="sg-section-bar" />
            <text class="sg-section-title">为何选择新加坡EP</text>
          </view>

          <view class="adv-grid">
            <view v-for="(a, i) in epAdvantages" :key="i" class="adv-item sg-card">
              <text class="adv-title">{{ a.title }}</text>
              <view class="adv-list">
                <view v-for="(t, j) in a.items" :key="j" class="adv-li">
                  <text class="adv-dot">•</text>
                  <text class="adv-text">{{ t }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>

        <!-- 选择我们，快速直达 -->
        <view class="sg-section">
          <view class="sg-section-hd">
            <view class="sg-section-bar" />
            <text class="sg-section-title">选择我们，快速直达</text>
          </view>
          <view class="section-blue">
            <view class="fast-grid">
              <view v-for="(f, i) in sellingPoints" :key="i" class="fast-item">
                <text class="fast-title">{{ f.title }}</text>
                <text class="fast-desc">{{ f.desc }}</text>
              </view>
            </view>
          </view>
        </view>

        <!-- 标准化办理流程 -->
        <view class="sg-section">
          <view class="sg-section-hd">
            <view class="sg-section-bar" />
            <text class="sg-section-title">标准化一站式办理流程</text>
          </view>
          <view class="process sg-card">
            <view v-for="(p, i) in flowSteps" :key="i" class="process-item">
              <view class="process-no" :class="p.noCls">{{ p.no }}</view>
              <view class="process-body">
                <text class="process-title">{{ p.title }}</text>
                <text class="process-sub">{{ p.sub }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>

    <AppTabBar current="epPass" />
  </view>
</template>

<script setup>
/**
 * 页面：EP人才准证 (Singapore Employment Pass)
 * 功能：展示 EP 政策要点、核心权益、办理流程等信息。
 * 规范：遵循函数式数据流，使用全局 sg- 样式组件。
 */

import { onShareAppMessage, onShow } from "@dcloudio/uni-app"
import AppHeader from "@/components/AppHeader.vue"
import AppTabBar from "@/components/AppTabBar.vue"
import SgImage from "@/components/SgImage.vue"

/**
 * 适合人群数据
 * @type {string[]}
 */
const audiences = [
  "寻求税务优化与资产配置的企业主及高管",
  "计划海外拓展与设立总部的企业家",
  "重视子女教育、规划家族未来的高净值人士",
]

/**
 * 核心权益优势数据
 * @type {string[]}
 */
const benefits = [
  "自由出入新加坡，无需签证",
  "符合条件可申请永久居民 (PR)",
  "享受全球领先的医疗与教育资源",
  "合法规划个人及企业全球税务",
  "配偶及子女可申请家属准证 (DP)",
]

/**
 * EP 优势列表 (税务、教育、运营、福利)
 * @type {Array<{title: string, items: string[]}>}
 */
const epAdvantages = [
  {
    title: "税务避风港",
    items: ["个税税率极低（0-22%阶梯）", "企业所得税仅17%", "拥有新加坡税号更容易开户", "合理规避CRS信息交换", "享受与公民同等的税务抵扣"],
  },
  {
    title: "子女教育及亲属探访",
    items: ["配偶和子女可申请DP家属准证", "父母可申请长期探访准证LTVP", "子女更低门槛入读政府中小学", "免去留学签证烦恼", "居住满2年可规划PR"],
  },
  {
    title: "企业运营体验",
    items: ["自主担任本地董事", "不再依赖挂名董事", "公司决策效率翻倍", "运营成本直线下降", "银行账户安全更有保障"],
  },
  {
    title: "社会福利全享受",
    items: ["优质医疗体系覆盖", "完善公共服务设施", "可购买商业保险补充", "生活质量直线上升"],
  },
]

/**
 * 服务卖点
 * @type {Array<{title: string, desc: string}>}
 */
const sellingPoints = [
  { title: "门槛低", desc: "无强制学历与年龄要求，提供专业的背景优化指导。" },
  { title: "周期短", desc: "专业团队全程负责，办理周期仅需 30-60 天。" },
  { title: "通过率高", desc: "资深文案与顶尖法律团队保驾护航，确保极高的获批率。" },
  { title: "一站式全包", desc: "20万新币一价全包，涵盖签证、公司注册、银行开户等核心环节。" },
]

/**
 * 办理流程步骤
 * @type {Array<{no: string, noCls: string, title: string, sub: string}>}
 */
const flowSteps = [
  { no: "01", noCls: "a", title: "初步咨询", sub: "评估与方案制定" },
  { no: "02", noCls: "b", title: "准备签约", sub: "确认方案，签署协议" },
  { no: "03", noCls: "a", title: "材料准备", sub: "我方全程代办新加坡端手续" },
  { no: "04", noCls: "b", title: "递交申请", sub: "向新加坡人力部(MOM)提交" },
  { no: "05", noCls: "a", title: "获批领卡", sub: "申请通过，安排面试领取EP卡" },
  { no: "06", noCls: "b", title: "安家服务", sub: "协助银行开户、家庭证件办理等" },
]

/**
 * 生命周期：页面显示时隐藏原生 TabBar
 */
onShow(() => {
  uni.hideTabBar()
})

/**
 * 小程序分享配置
 */
onShareAppMessage(() => ({
  title: "EP人才准证 - 盛昌利民研学",
  path: "/pages/ep-pass/index",
}))
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  padding: 72rpx 32rpx 56rpx;
  color: #fff;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-mask {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
}

.hero-inner {
  position: relative;
  z-index: 1;
  padding-left: 24rpx; /* 与下方 section title 对齐：body padding(32) + bar(8) + gap(16) = 56 */
}

.hero-en {
  font-size: 34rpx;
  font-weight: 900;
  letter-spacing: 2rpx;
  text-transform: uppercase;
  display: block;
}

.hero-title {
  margin-top: 14rpx;
  font-size: 28rpx;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);
  display: block;
}

.hero-aud {
  margin-top: 24rpx;
  display: flex;
  flex-direction: column;
  gap: 12rpx;
}

.aud-item {
  display: flex;
  align-items: flex-start;
  gap: 12rpx;
  color: rgba(255, 255, 255, 0.85);
}

.aud-dot {
  color: $sg-color-accent;
  font-size: 20rpx;
  margin-top: 4rpx;
}

.aud-text {
  flex: 1;
  font-size: 22rpx;
  line-height: 1.5;
}

.body {
  padding: 32rpx;
}

.policy {
  padding: 24rpx;
}

.policy-figure {
  margin-top: 16rpx;
  padding: 22rpx;
}

.policy-img {
  width: 100%;
  height: 320rpx;
}

.policy-tip {
  margin-top: 10rpx;
  font-size: 20rpx;
  color: #9ca3af;
  text-align: center;
}

.policy-item {
  margin-top: 20rpx;
  padding-top: 20rpx;
  border-top: 1px solid $sg-color-border;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.policy-k {
  font-size: 24rpx;
  font-weight: 800;
  color: $sg-color-text;
}

.policy-v {
  font-size: 22rpx;
  color: $sg-color-muted;
  line-height: 1.6;
}

.section-text {
  font-size: 26rpx;
  color: #4b5563;
  line-height: 1.65;
  text-align: justify;
  padding: 0 24rpx;
}

.section-blue {
  padding: 28rpx;
  border-radius: 32rpx;
  background: $sg-color-primary;
  color: #fff;
}

.benefit {
  padding: 28rpx;
  background: #fffbeb;
  border: 1px solid #fef3c7;
}

.benefit-list {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.benefit-item {
  display: flex;
  gap: 12rpx;
  align-items: flex-start;
}

.benefit-icon {
  color: #f59e0b;
  margin-top: 6rpx;
  font-size: 20rpx;
}

.benefit-text {
  font-size: 22rpx;
  color: #374151;
  font-weight: 600;
  line-height: 1.5;
}

.adv-grid {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.adv-item {
  padding: 24rpx;
}

.adv-title {
  font-size: 26rpx;
  font-weight: 900;
  color: $sg-color-primary;
}

.adv-list {
  margin-top: 16rpx;
  display: flex;
  flex-direction: column;
  gap: 12rpx;
}

.adv-li {
  display: flex;
  gap: 12rpx;
  align-items: flex-start;
}

.adv-dot {
  color: $sg-color-accent;
  margin-top: 6rpx;
  font-size: 18rpx;
}

.adv-text {
  flex: 1;
  font-size: 22rpx;
  color: rgba(17, 24, 39, 0.75);
  line-height: 1.55;
}

.fast-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16rpx;
}

.fast-item {
  padding: 20rpx;
  border-radius: 24rpx;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.fast-title {
  font-size: 24rpx;
  font-weight: 900;
  color: $sg-color-accent;
}

.fast-desc {
  margin-top: 8rpx;
  font-size: 20rpx;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.85);
}

.process {
  padding: 32rpx 24rpx;
}

.process-item {
  display: flex;
  gap: 24rpx;
  margin-bottom: 32rpx;

  &:last-child {
    margin-bottom: 0;
  }
}

.process-no {
  width: 48rpx;
  height: 48rpx;
  border-radius: 12rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  font-weight: 900;

  &.a {
    background: rgba($sg-color-primary, 0.1);
    color: $sg-color-primary;
  }

  &.b {
    background: rgba($sg-color-accent, 0.15);
    color: #b45309;
  }
}

.process-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}

.process-title {
  font-size: 26rpx;
  font-weight: 800;
  color: $sg-color-text;
}

.process-sub {
  font-size: 22rpx;
  color: $sg-color-muted;
}
</style>
