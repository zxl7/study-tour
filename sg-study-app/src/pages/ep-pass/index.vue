<template>
  <view class="sg-page page">
    <AppHeader title="EP人才准证" />

    <scroll-view scroll-y class="content">
      <view class="hero">
        <image class="hero-bg" mode="aspectFill" src="/static/img/EP_Banner.jpg" />
        <view class="hero-mask" />
        <view class="hero-inner">
          <text class="hero-en">Singapore Employment Pass</text>
          <text class="hero-title">精英人才准证 · 移居新加坡的最优路径</text>
          <view class="hero-aud">
            <view v-for="t in audiences" :key="t" class="aud-item">
              <text class="aud-dot">•</text>
              <text class="aud-text">{{ t }}</text>
            </view>
          </view>
        </view>
      </view>

      <view class="body">
        <view class="policy sg-card">
          <text class="policy-title">2026 EP政策要点</text>
          <view class="policy-item">
            <text class="policy-k">COMPASS 评估体系</text>
            <text class="policy-v">从薪资、学历、企业多元化及本地支持等维度综合打分。</text>
          </view>
          <view class="policy-item">
            <text class="policy-k">教育红利与身份同步</text>
            <text class="policy-v">持EP子女可申请DP，更低门槛入读政府中小学，并可衔接PR规划。</text>
          </view>
        </view>

        <view class="policy-figure sg-card">
          <image class="policy-img" mode="aspectFit" src="/static/img/EP.png" />
          <text class="policy-tip">COMPASS评估框架示意</text>
        </view>

        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <text class="section-title">政策解析</text>
          </view>
          <text class="section-text">新加坡就业准证（EP）是为管理人员、高管、专业人员制定的工作准证。通过在新加坡注册公司，以高管身份申请，是目前最为主流、稳健的移居途径。</text>
        </view>

        <view class="benefit">
          <text class="benefit-title">核心权益优势</text>
          <view class="benefit-list">
            <view v-for="b in benefits" :key="b" class="benefit-item">
              <text class="benefit-icon">●</text>
              <text class="benefit-text">{{ b }}</text>
            </view>
          </view>
        </view>

        <!-- 为何选择新加坡EP（同步 PC：四大优势卡片） -->
        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <text class="section-title">为何选择新加坡EP</text>
          </view>

          <view class="adv-grid">
            <view v-for="a in advantages" :key="a.title" class="adv-item sg-card">
              <text class="adv-title">{{ a.title }}</text>
              <view class="adv-list">
                <view v-for="t in a.items" :key="t" class="adv-li">
                  <text class="adv-dot">•</text>
                  <text class="adv-text">{{ t }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>

        <!-- 选择我们，快速直达（同步 PC：四项卖点） -->
        <view class="section section-blue">
          <view class="section-hd">
            <view class="section-bar white" />
            <text class="section-title white">选择我们，快速直达</text>
          </view>
          <view class="fast-grid">
            <view v-for="f in fastTrack" :key="f.title" class="fast-item">
              <text class="fast-title">{{ f.title }}</text>
              <text class="fast-desc">{{ f.desc }}</text>
            </view>
          </view>
        </view>

        <!-- 标准化办理流程（同步 PC：6步流程） -->
        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <text class="section-title">标准化一站式办理流程</text>
          </view>
          <view class="process sg-card">
            <view v-for="p in process" :key="p.no" class="process-item">
              <view class="process-no" :class="p.noCls">{{ p.no }}</view>
              <view class="process-body">
                <text class="process-title">{{ p.title }}</text>
                <text class="process-sub">{{ p.sub }}</text>
              </view>
            </view>
          </view>
        </view>

        <!-- <view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">申请条件 (Compass)</text>
					</view>

					<view class="cond-list">
						<view v-for="c in conditions" :key="c.k" class="cond-item sg-card">
							<text class="cond-k">{{ c.k }}</text>
							<text class="cond-v">{{ c.v }}</text>
						</view>
					</view>
				</view> -->
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue"
import { navigateToByKey } from "@/utils/routes"
import { onShareAppMessage } from "@dcloudio/uni-app"

/**
 * 功能：适合人群（纯数据）。
 */
const audiences = ["寻求税务优化与资产配置的企业主及高管", "计划海外拓展与设立总部的企业家", "重视子女教育、规划家族未来的高净值人士"]

/**
 * 功能：权益列表（纯数据）。
 */
const benefits = [
  "自由通行：无限次进出，最长连续停留 2 年。",
  "家庭团聚：配偶/子女可申请家属准证(DP)，父母可申请长期探访证(LTVP)。",
  "精英教育：子女可更低门槛申请政府中小学。",
  "黄金跳板：是申请新加坡永居(PR)及公民身份的重要通道。",
]

/**
 * 功能：四大优势卡片（纯数据）。
 */
const advantages = [
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
 * 功能：快速直达卖点（纯数据）。
 */
const fastTrack = [
  { title: "门槛低", desc: "无强制学历与年龄要求，提供专业的背景优化指导。" },
  { title: "周期短", desc: "专业团队全程负责，办理周期仅需 30-60 天。" },
  { title: "通过率高", desc: "资深文案与顶尖法律团队保驾护航，确保极高的获批率。" },
  { title: "一站式全包", desc: "20万新币一价全包，涵盖签证、公司注册、银行开户等核心环节。" },
]

/**
 * 功能：标准化办理流程（纯数据）。
 */
const process = [
  { no: "01", noCls: "a", title: "初步咨询", sub: "评估与方案制定" },
  { no: "02", noCls: "b", title: "准备签约", sub: "确认方案，签署协议" },
  { no: "03", noCls: "a", title: "材料准备", sub: "我方全程代办新加坡端手续" },
  { no: "04", noCls: "b", title: "递交申请", sub: "向新加坡人力部(MOM)提交" },
  { no: "05", noCls: "a", title: "获批领卡", sub: "申请通过，安排面试领取EP卡" },
  { no: "06", noCls: "b", title: "安家服务", sub: "协助银行开户、家庭证件办理等" },
]

/**
 * 功能：条件列表（纯数据）。
 */
const conditions = [
  { k: "薪资要求", v: "S$5,000+ /月" },
  { k: "学历背景", v: "本科及以上" },
  { k: "打分要求", v: "满足 40 分" },
]

/**
 * 功能：跳转到表单页。
 */
const goForm = () => navigateToByKey("form")

onShareAppMessage(() => ({
  title: "EP人才准证 - 盛昌利民研学",
  path: "/pages/ep-pass/index",
}))
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  padding: 72rpx 40rpx 56rpx;
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
}

.hero-en {
  font-size: 34rpx;
  font-weight: 900;
  letter-spacing: 2rpx;
  text-transform: uppercase;
}

.hero-title {
  margin-top: 14rpx;
  font-size: 28rpx;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);
}

.hero-aud {
  margin-top: 18rpx;
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}

.aud-item {
  display: flex;
  align-items: flex-start;
  gap: 10rpx;
  color: rgba(255, 255, 255, 0.85);
}

.aud-dot {
  color: $sg-color-accent;
  margin-top: 2rpx;
}

.aud-text {
  font-size: 22rpx;
  line-height: 1.45;
}

.body {
  padding: 32rpx;
}

.policy {
  padding: 24rpx;
  border-radius: 24rpx;
}

.policy-figure {
  margin-top: 16rpx;
  padding: 22rpx;
  border-radius: 24rpx;
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

.policy-title {
  font-size: 28rpx;
  font-weight: 900;
  color: $sg-color-primary;
}

.policy-item {
  margin-top: 16rpx;
  padding-top: 16rpx;
  border-top: 1px solid $sg-color-border;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.policy-k {
  font-size: 24rpx;
  font-weight: 800;
  color: $sg-color-text;
}

.policy-v {
  font-size: 22rpx;
  color: $sg-color-muted;
  line-height: 1.5;
}

.section {
  margin-top: 24rpx;
}

.section-hd {
  display: flex;
  align-items: center;
  gap: 16rpx;
  margin-bottom: 20rpx;
}

.section-bar {
  width: 8rpx;
  height: 32rpx;
  background: $sg-color-primary;
  border-radius: 8rpx;
}

.section-bar.white {
  background: rgba(255, 255, 255, 0.9);
}

.section-title {
  font-size: 30rpx;
  font-weight: 800;
  color: $sg-color-text;
}

.section-title.white {
  color: #fff;
}

.section-text {
  font-size: 26rpx;
  color: #4b5563;
  line-height: 1.6;
  text-align: justify;
}

.section-blue {
  padding: 28rpx;
  border-radius: 32rpx;
  background: $sg-color-primary;
  color: #fff;
}

.benefit {
  margin-top: 32rpx;
  padding: 28rpx;
  border-radius: 32rpx;
  background: #fffbeb;
  border: 1px solid #fef3c7;
}

.benefit-title {
  font-size: 26rpx;
  font-weight: 900;
  color: #92400e;
}

.benefit-list {
  margin-top: 16rpx;
  display: flex;
  flex-direction: column;
  gap: 14rpx;
}

.benefit-item {
  display: flex;
  gap: 12rpx;
  align-items: flex-start;
}

.benefit-icon {
  color: #f59e0b;
  margin-top: 4rpx;
}

.benefit-text {
  font-size: 22rpx;
  color: #374151;
  font-weight: 600;
  line-height: 1.5;
}

.cond-list {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.adv-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16rpx;
}

.adv-item {
  padding: 22rpx;
  border-radius: 24rpx;
}

.adv-title {
  font-size: 26rpx;
  font-weight: 900;
  color: $sg-color-primary;
}

.adv-list {
  margin-top: 12rpx;
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}

.adv-li {
  display: flex;
  gap: 10rpx;
  align-items: flex-start;
}

.adv-dot {
  color: $sg-color-accent;
  margin-top: 2rpx;
}

.adv-text {
  flex: 1;
  font-size: 22rpx;
  color: rgba(17, 24, 39, 0.75);
  line-height: 1.5;
}

.fast-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14rpx;
}

.fast-item {
  padding: 18rpx;
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
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.45;
}

.process {
  padding: 10rpx 22rpx;
  border-radius: 24rpx;
}

.process-item {
  display: flex;
  gap: 16rpx;
  align-items: center;
  padding: 18rpx 0;
  border-top: 1px solid $sg-color-border;
}

.process-item:first-child {
  border-top: none;
}

.process-no {
  width: 72rpx;
  height: 72rpx;
  border-radius: 999rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22rpx;
  font-weight: 900;
  flex-shrink: 0;
}

.process-no.a {
  background: $sg-color-primary;
}

.process-no.b {
  background: $sg-color-accent;
}

.process-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.process-title {
  font-size: 24rpx;
  font-weight: 900;
  color: $sg-color-text;
}

.process-sub {
  font-size: 22rpx;
  color: $sg-color-muted;
}

.cond-item {
  padding: 24rpx;
  border-radius: 20rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cond-k {
  font-size: 24rpx;
  color: #4b5563;
}

.cond-v {
  font-size: 24rpx;
  color: $sg-color-primary;
  font-weight: 800;
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
