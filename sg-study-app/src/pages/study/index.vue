<template>
  <view class="sg-page page">
    <AppHeader title="微留学详情" />

    <scroll-view scroll-y class="content">
      <view class="hero">
        <image class="hero-bg" mode="aspectFill" src="/static/img/28day.webp" />
        <view class="hero-mask" />
        <view class="hero-inner text-center">
          <view class="tags justify-center">
            <text class="tag tag-gold">28天微留学</text>
            <text class="tag tag-white">全真插班</text>
          </view>

          <text class="title">新加坡微留学</text>
          <text class="subtitle">
            像当地学生一样生活，在全英环境中快速突破语言瓶颈
            <text class="subtitle-strong">全真体验新加坡中小学精英教育体系</text>
          </text>
        </view>
      </view>

      <view class="body">
        <!-- 适合怎样的家庭？ (优化布局) -->
        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <text class="section-title">适合怎样的家庭？</text>
          </view>
          <view class="fit-grid">
            <view v-for="item in fits" :key="item.title" class="fit-card">
              <view class="fit-icon-wrap">
                <SgIcon :type="item.icon" :size="24" color="#005a9c" />
              </view>
              <view class="fit-content">
                <text class="fit-title">{{ item.title }}</text>
                <text class="fit-desc">{{ item.desc }}</text>
              </view>
            </view>
          </view>
        </view>

        <!-- 核心特色 (优化布局，突出展示) -->
        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <text class="section-title">核心特色</text>
          </view>
          <view class="feature-grid">
            <view v-for="item in features" :key="item.title" class="feature-card">
              <view class="feature-header">
                <text class="feature-no">0{{ item.no }}</text>
                <text class="feature-title">{{ item.title }}</text>
              </view>
              <view class="feature-divider"></view>
              <text class="feature-desc">{{ item.desc }}</text>
            </view>
          </view>
        </view>

        <!-- 入学准备（同步 PC：申请材料 + 寄宿家庭） -->
        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <text class="section-title">入学准备</text>
          </view>

          <view class="prep-grid">
            <view class="prep-card sg-card">
              <view class="prep-title">申请材料</view>
              <view v-for="t in prepMaterials" :key="t" class="prep-li">
                <text class="prep-dot">•</text>
                <text class="prep-text">{{ t }}</text>
              </view>
            </view>

            <view class="prep-card sg-card">
              <view class="prep-title">寄宿家庭</view>
              <view v-for="t in homestayRules" :key="t" class="prep-li">
                <text class="prep-dot gold">•</text>
                <text class="prep-text">{{ t }}</text>
              </view>
            </view>
          </view>
        </view>

        <!-- 28天日程（优化为垂直时间轴 Timeline） -->
        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <text class="section-title">28天日程概览</text>
          </view>

          <view class="timeline-container">
            <view class="timeline-line"></view>
            <view v-for="(it, index) in schedule" :key="it.k" class="timeline-item">
              <view class="timeline-dot-wrap">
                <view class="timeline-dot" :class="{ 'dot-highlight': it.v.includes('课程') }"></view>
              </view>
              <view class="timeline-content sg-card" :class="{ 'content-highlight': it.v.includes('课程') }">
                <view class="timeline-header">
                  <text class="timeline-k" :class="{ 'text-highlight': it.v.includes('课程') }">{{ it.k }}</text>
                  <text class="timeline-day" :class="{ 'day-highlight': it.v.includes('课程') }">{{ it.day }}</text>
                </view>
                <text class="timeline-v" :class="{ 'text-highlight': it.v.includes('课程') }">{{ it.v }}</text>
              </view>
            </view>
          </view>

          <text class="include-tip">* 以上为概要版，具体课表与周末活动以顾问沟通为准。</text>
        </view>

        <!-- 费用标准新布局 -->
        <view class="section fee-section">
          <view class="fee-left">
            <text class="fee-title">28天微留学 · 费用标准</text>
            <view class="fee-table">
              <view class="fee-row">
                <view class="fee-cell fee-cell-label text-gold">
                  <SgIcon type="checkbox-filled" :size="14" color="#e5a663" class="fee-table-icon" />
                  包含
                </view>
                <view class="fee-cell fee-cell-content text-white">28天27晚住宿，及接送机各一次</view>
              </view>
              <view class="fee-row">
                <view class="fee-cell fee-cell-label text-gold">
                  <SgIcon type="checkbox-filled" :size="14" color="#e5a663" class="fee-table-icon" />
                  包含
                </view>
                <view class="fee-cell fee-cell-content text-white">寄宿家庭餐饮，上学日早餐及晚餐，非上学日全天寄宿家庭饮食（若非上学日外出，则餐饮费不退还）</view>
              </view>
              <view class="fee-row">
                <view class="fee-cell fee-cell-label text-gold">
                  <SgIcon type="checkbox-filled" :size="14" color="#e5a663" class="fee-table-icon" />
                  包含
                </view>
                <view class="fee-cell fee-cell-content text-white">课程费</view>
              </view>
              <view class="fee-row">
                <view class="fee-cell fee-cell-label text-gold">
                  <SgIcon type="checkbox-filled" :size="14" color="#e5a663" class="fee-table-icon" />
                  包含
                </view>
                <view class="fee-cell fee-cell-content text-white">每日上学车辆接送，外出日车辆接送</view>
              </view>
              <view class="fee-row">
                <view class="fee-cell fee-cell-label text-gray">
                  <SgIcon type="info-filled" :size="14" color="#9ca3af" class="fee-table-icon" />
                  赠送
                </view>
                <view class="fee-cell fee-cell-content text-gray">周末行程为赠送项目，可自行选择，如不参加，没有退费</view>
              </view>
              <view class="fee-row">
                <view class="fee-cell fee-cell-label text-red">
                  <SgIcon type="clear" :size="14" color="#ef4444" class="fee-table-icon" />
                  不包含
                </view>
                <view class="fee-cell fee-cell-content text-gray">以上行程中的门票（环球影城、动物园门票需额外购买），如果不参加行程，不退费</view>
              </view>
            </view>
          </view>

          <view class="fee-right-card">
            <text class="fee-tag">ALL-INCLUSIVE</text>
            <view class="fee-price-wrap">
              <text class="fee-symbol">¥</text>
              <text class="fee-price">38,600</text>
            </view>
            <text class="fee-note">* 不包含机票</text>
            <button class="fee-btn" @tap="goForm">索取详细日程单</button>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue"
import SgIcon from "@/components/SgIcon.vue"
import { navigateToByKey } from "@/utils/routes"
import { onShareAppMessage } from "@dcloudio/uni-app"

/**
 * 功能：适合人群（纯数据）。
 */
const fits = [
  { icon: "person-filled", title: "计划低龄留学的家庭", desc: "在正式决定前，让孩子提前测试对新加坡教育环境的适应能力。" },
  { icon: "chatboxes-filled", title: "需快速提升口语的学生", desc: "28天全英社交+全英课堂，强迫式开口，告别“哑巴英语”。" },
  { icon: "flag-filled", title: "提升升学竞争力的学生", desc: "海外插班经历是学生履历的一大亮点，有助于未来申请国际学校。" },
  { icon: "home-filled", title: "想体验寄宿家庭生活", desc: "与当地精英中产家庭同吃同住，深度了解社会文化与教养。" },
]

/**
 * 功能：核心特色（纯数据）。
 */
const features = [
  { no: "1", title: "全定制课程", desc: "按孩子学习水平、风格、记忆模式定制课表，匹配个人学习节奏。" },
  { no: "2", title: "独有的教学系统™", desc: "精准评估-夯实基础-靶向补漏-多维掌握-科学复习，全程动态优化。" },
  { no: "3", title: "顶尖师资", desc: "数学博士、注册教师、教育心理学家领衔，教师均有10+年经验。" },
  { no: "4", title: "能力培养", desc: "打造自主学习能力，攻克学科难点，兼顾提分与终身学习力。" },
]

/**
 * 功能：费用包含（纯数据）。
 */
const includes = ["28天27晚住宿，接送机各一次", "寄宿家庭餐饮：上学日早餐/晚餐，非上学日全天饮食", "课程费", "每日上学车辆接送，外出日车辆接送"]

/**
 * 功能：入学准备-申请材料（纯数据）。
 */
const prepMaterials = ["学生及家长的护照复印件", "学生最近的学校成绩单或完成当前年级的证明", "入学后需参加英语水平测试，用于匹配学习材料与教学方式"]

/**
 * 功能：入学准备-寄宿家庭要求（纯数据）。
 */
const homestayRules = [
  "寄宿家庭受政府严格监管，必须符合安全与居住环境的官方要求",
  "家庭成员身份：新加坡本地人或永久居民",
  "居住空间符合政府标准，家庭成员不得超过6人",
  "有固定时间给孩子安排校外活动，并定期向家长反馈学习与生活情况",
]

/**
 * 功能：28天日程概览（纯数据）。
 * 说明：与 PC「28天日程日历」语义一致，但移动端不使用横向日历，改为纵向列表。
 */
const schedule = [
  { k: "D1", v: "入境新加坡：专人接机、介绍概况、入住寄宿家庭", day: "周日" },
  { k: "D2-6", v: "新加坡本地国际学校全真课程", day: "周一 至 周五" },
  { k: "D7", v: "City Walk：参观地标、了解历史文化、品尝美食", day: "周六" },
  { k: "D8", v: "自由活动（家长陪同可选）", day: "周日" },
  { k: "D9-13", v: "新加坡本地国际学校全真课程", day: "周一 至 周五" },
  { k: "D14", v: "新加坡动物园（可选行程）", day: "周六" },
  { k: "D15", v: "自由活动（家长陪同可选）", day: "周日" },
  { k: "D16-20", v: "新加坡本地国际学校全真课程", day: "周一 至 周五" },
  { k: "D21", v: "影城及圣淘沙（可选行程）", day: "周六" },
  { k: "D22", v: "自由活动（家长陪同可选）", day: "周日" },
  { k: "D23-27", v: "新加坡本地国际学校全真课程", day: "周一 至 周五" },
  { k: "D28", v: "荣誉返程：带着收获回家", day: "周六" },
]

/**
 * 功能：不包含/说明（纯数据）。
 */
const excludes = ["不包含机票", "环球影城、动物园等门票需额外购买；若不参加相应行程不退费", "周末行程为赠送项目，可自行选择；不参加不退费"]

/**
 * 功能：跳转到表单页。
 */
const goForm = () => navigateToByKey("form")

onShareAppMessage(() => ({
  title: "狮城微留学 - 盛昌利民研学",
  path: "/pages/study/index",
}))
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  height: 560rpx;
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
  background: rgba(0, 0, 0, 0.2);
}

.hero-inner {
  position: relative;
  z-index: 1;
  padding: 28rpx 32rpx 32rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
}

.text-center {
  text-align: center;
}

.justify-center {
  justify-content: center;
}

.body {
  padding: 32rpx;
}

.tags {
  display: flex;
  gap: 16rpx;
  margin-bottom: 24rpx;
}

.tag {
  padding: 8rpx 20rpx;
  border-radius: 999rpx;
  font-size: 22rpx;
  font-weight: bold;
}

.tag-gold {
  background: #e5a663;
  color: #fff;
}

.tag-white {
  background: #ffffff;
  color: #005a9c;
}

.title {
  font-size: 56rpx;
  font-weight: 900;
  color: #fff;
  line-height: 1.25;
  margin-bottom: 24rpx;
  letter-spacing: 2rpx;
}

.subtitle {
  font-size: 28rpx;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  white-space: pre-line;
}

.subtitle-strong {
  color: #e5a663;
  font-weight: bold;
}

.price-card {
  margin-top: 24rpx;
  padding: 24rpx;
  border-radius: 24rpx;
  background: #fef2f2;
  border: 1px solid #fee2e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price-k {
  font-size: 26rpx;
  color: #4b5563;
  font-weight: 600;
}

.price-v {
  font-size: 44rpx;
  color: #ef4444;
  font-weight: 900;
}

.price-unit {
  font-size: 22rpx;
  font-weight: 500;
}

.section {
  margin-top: 40rpx;
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

.section-title {
  font-size: 30rpx;
  font-weight: 800;
}

.fit-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20rpx;
  margin-top: 24rpx;
}

.fit-card {
  display: flex;
  gap: 24rpx;
  padding: 32rpx;
  border-radius: 24rpx;
  background: #ffffff;
  border: 1px solid rgba(0, 90, 156, 0.08);
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.fit-card:active {
  transform: scale(0.98);
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.02);
}

.fit-icon-wrap {
  width: 80rpx;
  height: 80rpx;
  border-radius: 20rpx;
  background: rgba(0, 90, 156, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fit-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.fit-title {
  font-size: 28rpx;
  font-weight: 900;
  color: #1f2937;
  margin-bottom: 8rpx;
}

.fit-desc {
  font-size: 24rpx;
  color: #6b7280;
  line-height: 1.5;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24rpx;
  margin-top: 16rpx;
}

.feature-card {
  background: #ffffff;
  border-radius: 24rpx;
  padding: 32rpx;
  box-shadow: 0 8rpx 24rpx rgba(0, 90, 156, 0.06);
  border: 1px solid rgba(0, 90, 156, 0.05);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:active {
  transform: translateY(-4rpx);
  box-shadow: 0 12rpx 32rpx rgba(0, 90, 156, 0.1);
}

.feature-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20rpx;
}

.feature-no {
  font-size: 56rpx;
  font-weight: 900;
  font-style: italic;
  color: transparent;
  -webkit-text-stroke: 1px rgba(0, 90, 156, 0.2);
  letter-spacing: 2rpx;
  line-height: 1;
}

.feature-title {
  font-size: 30rpx;
  font-weight: 900;
  color: #005a9c;
  flex: 1;
  text-align: right;
}

.feature-divider {
  width: 48rpx;
  height: 6rpx;
  background: #e5a663;
  border-radius: 6rpx;
  margin-bottom: 20rpx;
}

.feature-desc {
  font-size: 24rpx;
  color: #4b5563;
  line-height: 1.6;
}

.include {
  padding: 24rpx;
  border-radius: 24rpx;
}

.include-item {
  display: flex;
  gap: 12rpx;
  align-items: flex-start;
}

.include-item + .include-item {
  margin-top: 12rpx;
}

.include-dot {
  color: $sg-color-accent;
  margin-top: 2rpx;
}

.include-text {
  font-size: 22rpx;
  color: #4b5563;
  line-height: 1.5;
}

.include-tip {
  margin-top: 12rpx;
  font-size: 20rpx;
  color: #9ca3af;
}

.prep-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16rpx;
}

.prep-card {
  padding: 24rpx;
  border-radius: 24rpx;
  background: #f9fafb;
}

.prep-title {
  font-size: 26rpx;
  font-weight: 900;
  color: $sg-color-primary;
  margin-bottom: 10rpx;
}

.prep-li {
  display: flex;
  gap: 10rpx;
  align-items: flex-start;
  margin-top: 10rpx;
}

.prep-dot {
  color: $sg-color-primary;
  margin-top: 2rpx;
}

.prep-dot.gold {
  color: $sg-color-accent;
}

.prep-text {
  flex: 1;
  font-size: 22rpx;
  color: rgba(17, 24, 39, 0.75);
  line-height: 1.5;
}

.timeline-container {
  position: relative;
  padding: 20rpx 0 20rpx 40rpx;
  margin-top: 10rpx;
}

.timeline-line {
  position: absolute;
  left: 16rpx;
  top: 30rpx;
  bottom: 20rpx;
  width: 2px;
  background: linear-gradient(to bottom, rgba(229, 166, 99, 0.2), rgba(229, 166, 99, 0.65), rgba(229, 166, 99, 0.2));
  z-index: 1;
}

.timeline-item {
  position: relative;
  display: flex;
  margin-bottom: 24rpx;
  align-items: stretch;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot-wrap {
  position: absolute;
  left: -40rpx;
  top: 20rpx;
  width: 32rpx;
  height: 32rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.timeline-dot {
  width: 16rpx;
  height: 16rpx;
  border-radius: 50%;
  background-color: #d1d5db;
  box-shadow: 0 0 0 6rpx #fff;
  transition: all 0.3s;
}

.timeline-dot.dot-highlight {
  background-color: #005a9c;
  box-shadow: 0 0 0 6rpx #e0f2fe;
}

.timeline-content {
  flex: 1;
  padding: 20rpx;
  border-radius: 16rpx;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
  border: 1px solid #f3f4f6;
  transition: all 0.3s;
}

.timeline-content.content-highlight {
  background-color: #f0f9ff;
  border-color: #bae6fd;
}

.timeline-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.timeline-day {
  font-size: 22rpx;
  color: #9ca3af;
  background-color: #f3f4f6;
  padding: 4rpx 12rpx;
  border-radius: 8rpx;
  font-weight: 500;
  transition: all 0.3s;
}

.timeline-day.day-highlight {
  color: #0369a1;
  background-color: #bae6fd;
}

.timeline-k {
  font-size: 26rpx;
  font-weight: 900;
  color: #4b5563;
  transition: color 0.3s;
}

.timeline-k.text-highlight {
  color: #005a9c;
}

.timeline-v {
  font-size: 24rpx;
  color: #6b7280;
  line-height: 1.5;
  transition: color 0.3s;
}

.timeline-v.text-highlight {
  color: #0369a1;
  font-weight: bold;
}

.fee-section {
  background-color: #215c98;
  border-radius: 24rpx;
  padding: 40rpx 32rpx;
  display: flex;
  flex-direction: column;
  gap: 40rpx;
}

.fee-left {
  flex: 1;
}

.fee-title {
  color: #ffffff;
  font-size: 36rpx;
  font-weight: 900;
  margin-bottom: 32rpx;
  display: block;
}

.fee-table {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16rpx;
  overflow: hidden;
}

.fee-row {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.fee-row:last-child {
  border-bottom: none;
}

.fee-cell {
  padding: 24rpx 20rpx;
  font-size: 24rpx;
  line-height: 1.5;
  display: flex;
  align-items: center;
}

.fee-cell-label {
  width: 180rpx;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.05);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: bold;
  gap: 8rpx;
}

.fee-cell-content {
  flex: 1;
}

.fee-table-icon {
  flex-shrink: 0;
}

.text-gold {
  color: #e5a663;
}

.text-white {
  color: #ffffff;
}

.text-gray {
  color: rgba(255, 255, 255, 0.6);
}

.text-red {
  color: #ef4444;
}

.fee-right-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24rpx;
  padding: 40rpx 32rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fee-tag {
  color: #e5a663;
  font-size: 24rpx;
  font-weight: 900;
  margin-bottom: 16rpx;
  letter-spacing: 2rpx;
}

.fee-price-wrap {
  display: flex;
  align-items: baseline;
  color: #ffffff;
  margin-bottom: 12rpx;
}

.fee-symbol {
  font-size: 40rpx;
  font-weight: bold;
  margin-right: 8rpx;
}

.fee-price {
  font-size: 72rpx;
  font-weight: 900;
  font-style: italic;
}

.fee-note {
  color: rgba(255, 255, 255, 0.6);
  font-size: 20rpx;
  margin-bottom: 32rpx;
}

.fee-btn {
  background-color: #e5a663;
  color: #ffffff;
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
  border-radius: 16rpx;
  font-size: 28rpx;
  font-weight: bold;
}
</style>
