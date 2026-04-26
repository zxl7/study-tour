<template>
  <view class="sg-page page">
    <AppHeader title="盛昌利民·狮城研学" :showBack="false" />

    <!-- 顶部导航栏（移动端简化 PC Header） -->
    <!-- <view class="navbar">
      <view class="brand">
        <view class="brand-dot">
          <img src="/src/assets/logo.jpg" alt="logo" style="width: 32px; height: 32px;" />
        </view>
        <view class="brand-meta">
          <text class="brand-title">盛昌利民 · 狮城研学</text>
          <text class="brand-sub">Shengchang Limin · Singapore Study Tour</text>
        </view>
      </view>
      <button class="nav-cta" @tap="goForm">预约咨询</button>
    </view> -->

    <scroll-view scroll-y class="content">
      <!-- 首屏 Banner -->
      <view class="hero">
        <image class="hero-img" mode="aspectFill" src="/static/img/bg.jpg" />
        <view class="hero-mask" />
        <view class="hero-inner">
          <text class="hero-badge">2026年夏季报名开启</text>
          <text class="hero-title">
            2026新加坡研学 |
            <text class="hero-title-gold">\n一站式精英教育服务</text>
          </text>
          <text class="hero-desc">本土插班 · 双语研学 · 国际教育 · 移民规划 \n为中国精英家庭定制最具深度的狮城成长之旅。</text>
          <view class="hero-actions">
            <button class="btn btn-gold" @tap="scrollToProjects">探索研学项目</button>
            <button class="btn btn-ghost" @tap="goEp">了解移民准证</button>
          </view>
        </view>
      </view>

      <!-- 核心优势 -->
      <view class="section">
        <view class="section-center">
          <text class="section-title-lg">为什么选择新加坡？</text>
          <view class="section-line" />
          <text class="section-sub">“花园城市”下的顶层教育逻辑，为孩子构建全球竞争力的第一站</text>
        </view>
        <view class="adv-grid">
          <view v-for="item in advantages" :key="item.title" class="adv-card">
            <view class="adv-circle">
              <SgIcon :type="item.icon" :size="22" color="#005a9c" />
            </view>
            <text class="adv-card-title">{{ item.title }}</text>
            <text class="adv-card-desc">{{ item.desc }}</text>
          </view>
        </view>
      </view>

      <!-- 为什么选择我们 -->
      <view class="section section-blue">
        <view class="section-center">
          <text class="section-title-lg white">为什么选择我们</text>
          <view class="section-line gold" />
          <text class="section-sub white-sub">专业、靠谱、一站式的海外教育与身份规划专家</text>
        </view>
        <view class="why-list">
          <view v-for="w in whyUs" :key="w.title" class="why-item">
            <view class="why-icon">
              <SgIcon :type="w.icon" :size="22" color="#ffffff" />
            </view>
            <view class="why-body">
              <text class="why-title">{{ w.title }}</text>
              <text class="why-desc">{{ w.desc }}</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 项目矩阵 -->
      <view class="section" :id="projectsAnchor">
        <view class="section-hd">
          <view>
            <h2 class="section-title-lg">研学·教育·移民项目矩阵</h2>
            <text class="section-sub2">满足不同年龄段、不同目标的精准化需求定制</text>
          </view>
        </view>
        <view class="project-list">
          <view v-for="p in projects" :key="p.title" class="project-card">
            <view class="project-img-wrap">
              <image class="project-img" mode="aspectFill" :src="p.img" />
              <text class="project-tag" :class="p.tagCls">{{ p.tag }}</text>
            </view>
            <view class="project-bd">
              <h3 class="project-title">{{ p.title }}</h3>
              <text class="project-desc">{{ p.desc }}</text>
              <view class="project-meta">
                <text class="meta-item">{{ p.meta1 }}</text>
                <text class="meta-sep">·</text>
                <text class="meta-item">{{ p.meta2 }}</text>
              </view>
              <button class="project-btn" @tap="() => goTab(p.to)">查看详情</button>
            </view>
          </view>
        </view>
      </view>

      <!-- 微留学 VS 夏令营 -->
      <view class="section">
        <view class="section-center">
          <text class="section-title-lg">微留学 VS 夏令营</text>
          <view class="section-line" />
          <text class="section-sub">根据孩子的适应能力与成长目标，科学选择研学模式</text>
        </view>
        <view class="compare">
          <view v-for="row in compareRows" :key="row.title" class="compare-row">
            <text class="compare-title">{{ row.title }}</text>
            <view class="compare-cols">
              <view class="compare-col compare-left">
                <text class="compare-col-title">微留学</text>
                <view v-for="t in row.left" :key="t" class="compare-li">
                  <text class="compare-dot left-dot">•</text>
                  <text class="compare-txt">{{ t }}</text>
                </view>
              </view>
              <view class="compare-col compare-right">
                <text class="compare-col-title">夏令营</text>
                <view v-for="t in row.right" :key="t" class="compare-li">
                  <text class="compare-dot right-dot">•</text>
                  <text class="compare-txt">{{ t }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>

      <!-- 专家领衔 · 权威护航 -->
      <view class="section section-blue">
        <view class="section-hd">
          <text class="section-title-lg white">专家领衔 · 权威护航</text>
        </view>
        <view class="stats">
          <view v-for="s in stats" :key="s.label" class="stat-item">
            <text class="stat-val">{{ s.val }}</text>
            <text class="stat-label">{{ s.label }}</text>
          </view>
        </view>
        <view class="certs">
          <view class="cert">
            <image class="cert-img" mode="aspectFit" src="../../static/img/资质证书.webp" />
            <text class="cert-t">资质证书</text>
          </view>
          <view class="cert">
            <image class="cert-img" mode="aspectFit" src="../../static/img/授权信.webp" />
            <text class="cert-t">授权信</text>
          </view>
          <view class="cert cert-wide">
            <image class="cert-img" mode="aspectFit" src="../../static/img/营业执照.webp" />
            <text class="cert-t">营业执照</text>
          </view>
        </view>
      </view>

      <!-- 咨询报名/联系方式 (新版深蓝背景卡片) -->
      <view class="section">
        <view class="contact-card">
          <view class="contact-header">
            <view class="contact-title-wrap">
              <SgIcon name="phone-filled" size="20" color="#E5A663" class="contact-icon" />
              <text class="contact-title">官方热线</text>
            </view>
            <text class="contact-hotline">{{ SITE.hotline }}</text>
            <text class="contact-time">周一至周日 09:00 - 21:00</text>
          </view>

          <view class="contact-address-wrap">
            <view class="contact-title-wrap">
              <SgIcon name="location-filled" size="20" color="#E5A663" class="contact-icon" />
              <text class="contact-title">办公地址</text>
            </view>
            <text class="contact-address">中国运营中心：{{ SITE.chinaOfficeAddress }}</text>
          </view>

          <view class="contact-qr-wrap">
            <view v-for="a in SITE.advisors" :key="a.name" class="contact-qr-item">
              <view class="qr-box">
                <image v-if="a.qr" class="qr-img" mode="aspectFit" :src="a.qr" />
                <view v-else class="qr-fallback">
                  <text class="qr-fallback-title">电话</text>
                  <text class="qr-fallback-phone">{{ a.phone }}</text>
                </view>
              </view>
              <text class="qr-name">研学顾问：{{ a.name }}</text>
              <text class="qr-phone">{{ a.phone }}</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { onShareAppMessage } from "@dcloudio/uni-app"
import AppHeader from "@/components/AppHeader.vue"
import SgIcon from "@/components/SgIcon.vue"
import { navigateToByKey, switchTabByKey } from "@/utils/routes"
import { SITE } from "@/config/site"

const projectsAnchor = "projects"

const advantages = [
  { icon: "locked-filled", title: "全球安全环境", desc: "低犯罪率，完善的法律保障，让孩子在安全的环境中探索世界。" },
  { icon: "staff", title: "极致双语教育", desc: "母语般的中英双语环境，在浸润式学习中掌握核心语言能力。" },
  { icon: "star", title: "世界顶尖资源", desc: "汇集NUS、NTU等亚洲顶尖学府资源，接触前沿科技与学术。" },
  { icon: "navigate", title: "国际化大视野", desc: "多元文化交融，培养具备全球胜任力的未来国际公民。" },
  { icon: "paperplane", title: "无时差零距离", desc: "距离中国近，无时差困扰，家长陪读或探视极度便利。" },
]

const whyUs = [
  { icon: "medal", title: "官方权威认证", desc: "合作学校均获得新加坡教育部(MOE)认证，确保合法合规。" },
  { icon: "person-filled", title: "本土化资深团队", desc: "中新双总部运营，提供7x24小时在地响应与安全保障。" },
  { icon: "vip", title: "全定制化教育", desc: "提供“一人一课表”的精细化排班，匹配不同年龄段需求。" },
  { icon: "wallet", title: "高端圈层赋能", desc: "同步提供身份规划(EP)、置业、税务等高净值服务。" },
]

const projects = [
  {
    title: "新加坡成长营",
    desc: "针对3-15岁的孩子，与顶级国际学校合作深度融入狮城文化，培养独立思考与团队协作能力。",
    tag: "7天体验",
    tagCls: "tag-blue",
    img: "/static/img/1.webp",
    meta1: "适龄：小学-初中",
    meta2: "班期：寒暑假",
    to: "camp",
  },
  {
    title: "新加坡微留学",
    desc: "真实入读新加坡政府中小学/优质私立校，沉浸式体验全英文教学环境。",
    tag: "28天深度",
    tagCls: "tag-gold",
    img: "/static/img/2.jpg",
    meta1: "适龄：全学段",
    meta2: "班期：学期中",
    to: "study",
  },
  {
    title: "人才准证EP",
    desc: "为高端精英家庭定制长期规划，同步解决子女教育与家长身份问题。",
    tag: "教育移民",
    tagCls: "tag-dark",
    img: "/static/img/3.webp",
    meta1: "针对：企业主/高管",
    meta2: "优势：全家移民",
    to: "epPass",
  },
]

const compareRows = [
  {
    title: "环境与节奏",
    left: ["入住寄宿家庭，作为家庭成员参与生活", "进入当地学校插班，遵循严谨真实的学术节奏"],
    right: ["入住星级酒店或营地宿舍，享受集体生活乐趣", "以主题游览、素质拓展为主，氛围轻松活跃"],
  },
  {
    title: "社交模式",
    left: ["离开母语舒适区，锻炼沟通能力", "与本地家庭及同学建立长期海外联系"],
    right: ["与来自各地同龄参与者快速破冰", "在团队协作任务中建立短期友谊"],
  },
  {
    title: "核心价值",
    left: ["低成本试错：体验教学风格与文化适配", "精准定位：通过课程反馈为后续升学做参考"],
    right: ["开阔视野：高密度多元活动拓宽认知边界", "兴趣探索：短时间接触多个领域发现特长"],
  },
  {
    title: "心智成长",
    left: ["经历“新鲜→挑战→适应→掌控”的完整情绪周期", "建立心理韧性与对陌生环境的掌控感"],
    right: ["无忧行程确保正向情绪的高频反馈", "鼓励式拓展中收获成就感与自我认同"],
  },
  {
    title: "最终收获",
    left: ["获得真实海外生存技能，塑造独立人格", "提前预演留学生活，缩短未来适应期"],
    right: ["收获美好旅程与珍贵国际友谊", "通过游历打开世界大门，种下全球思维种子"],
  },
]

const stats = [
  { val: "15+", label: "教育行业积淀(年)" },
  { val: "50+", label: "优质合作院校" },
  { val: "5000+", label: "服务成功家庭" },
]

const goForm = () => navigateToByKey("form")
const goTab = (key) => switchTabByKey(key)
const goEp = () => switchTabByKey("epPass")

const scrollToProjects = () => {
  // #ifdef H5
  const el = document.getElementById(projectsAnchor)
  el?.scrollIntoView?.({ behavior: "smooth" })
  // #endif
}

onShareAppMessage(() => ({
  title: "盛昌利民研学",
  path: "/pages/index/index",
}))
</script>

<style scoped lang="scss">
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  height: calc(112rpx + var(--status-bar-height));
  padding: var(--status-bar-height) 32rpx 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid $sg-color-border;
  box-sizing: border-box;
}

.brand {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.brand-dot {
  width: 64rpx;
  height: 64rpx;
  border-radius: 999rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-text {
  color: #fff;
  font-size: 20rpx;
  font-weight: 700;
}

.brand-meta {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-weight: 900;
  font-size: 26rpx;
}

.brand-sub {
  margin-top: 2rpx;
  font-size: 18rpx;
  letter-spacing: 2rpx;
  color: rgba(17, 24, 39, 0.5);
}

.nav-cta {
  height: 72rpx;
  line-height: 72rpx;
  padding: 0 24rpx;
  border-radius: 999rpx;
  background: rgba($sg-color-accent, 0.95);
  color: #fff;
  font-size: 24rpx;
  font-weight: 900;
}

.content {
   
  padding: 0 32rpx 32rpx;
  box-sizing: border-box;
}

.hero {
  margin-top: 24rpx;
  height: 420rpx;
  border-radius: 32rpx;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.08);
}

.hero-img {
  width: 100%;
  height: 100%;
}

.hero-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0, 90, 156, 0.92), rgba(0, 90, 156, 0.25), rgba(0, 90, 156, 0));
}

.hero-inner {
  position: absolute;
  inset: 0;
  padding: 44rpx 40rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-badge {
  align-self: flex-start;
  padding: 10rpx 18rpx;
  border-radius: 999rpx;
  border: 1px solid rgba($sg-color-accent, 0.95);
  color: $sg-color-accent;
  font-size: 22rpx;
  font-weight: 900;
  margin-bottom: 18rpx;
}

.hero-title {
  color: #fff;
  font-size: 44rpx;
  font-weight: 900;
  line-height: 1.4;
  white-space: pre-line;
}

.hero-title-gold {
  color: $sg-color-accent;
}

.hero-desc {
  margin-top: 16rpx;
  padding-left: 18rpx;
  border-left: 6rpx solid rgba($sg-color-accent, 0.9);
  color: rgba(255, 255, 255, 0.88);
  font-size: 22rpx;
  line-height: 1.55;
  white-space: pre-line;
}

.hero-actions {
  margin-top: 22rpx;
  display: flex;
  gap: 16rpx;
}

.btn {
  height: 64rpx;
  line-height: 64rpx;
  border-radius: 18rpx;
  padding: 0 28rpx;
  font-size: 26rpx;
  font-weight: 900;
}

.btn-gold {
  background: $sg-color-accent;
  color: #fff;
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
}

.section {
  margin-top: 56rpx;
}

.section-blue {
  padding: 40rpx 28rpx;
  border-radius: 32rpx;
  background: $sg-color-primary;
  color: #fff;
}

.section-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section-title-lg {
  font-size: 34rpx;
  font-weight: 900;
  color: $sg-color-text;
}

.section-title-lg.white {
  color: #fff;
}

.section-line {
  margin-top: 14rpx;
  width: 120rpx;
  height: 6rpx;
  border-radius: 999rpx;
  background: $sg-color-accent;
}

.section-line.gold {
  background: $sg-color-accent;
}

.section-sub {
  margin-top: 14rpx;
  font-size: 22rpx;
  color: $sg-color-muted;
  line-height: 1.5;
}

.section-sub.white-sub {
  color: rgba(255, 255, 255, 0.86);
}

.section-hd {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 24rpx;
}

.section-sub2 {
  margin-top: 10rpx;
  font-size: 22rpx;
  color: $sg-color-muted;
}

.adv-grid {
  margin-top: 22rpx;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rpx;
}

.adv-card {
  background: #fff;
  border: 1px solid $sg-color-border;
  border-radius: 24rpx;
  padding: 22rpx;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.adv-circle {
  width: 72rpx;
  height: 72rpx;
  border-radius: 999rpx;
  background: rgba($sg-color-primary, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.adv-card-title {
  margin-top: 14rpx;
  font-size: 26rpx;
  font-weight: 900;
  color: $sg-color-text;
}

.adv-card-desc {
  margin-top: 8rpx;
  font-size: 22rpx;
  color: $sg-color-muted;
  line-height: 1.45;
}

.why-list {
  margin-top: 18rpx;
  display: flex;
  flex-direction: column;
  gap: 18rpx;
}

.why-item {
  display: flex;
  gap: 18rpx;
  align-items: flex-start;
  padding: 18rpx;
  border-radius: 24rpx;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.why-icon {
  width: 72rpx;
  height: 72rpx;
  border-radius: 18rpx;
  background: rgba(255, 255, 255, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.why-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.why-title {
  font-size: 26rpx;
  font-weight: 900;
  color: #fff;
}

.why-desc {
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.5;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.project-card {
  overflow: hidden;
  background: #fff;
  border-radius: 28rpx;
  border: 1px solid $sg-color-border;
}

.project-img-wrap {
  position: relative;
  height: 260rpx;
}

.project-img {
  width: 100%;
  height: 100%;
}

.project-tag {
  position: absolute;
  top: 18rpx;
  left: 18rpx;
  padding: 10rpx 16rpx;
  border-radius: 14rpx;
  color: #fff;
  font-size: 20rpx;
  font-weight: 900;
}

.tag-blue {
  background: rgba($sg-color-primary, 0.95);
}
.tag-gold {
  background: rgba($sg-color-accent, 0.95);
}
.tag-dark {
  background: rgba(17, 24, 39, 0.92);
}

.project-bd {
  padding: 24rpx 24rpx 28rpx;
}

.project-title {
  font-size: 30rpx;
  font-weight: 900;
  color: $sg-color-text;
}

.project-desc {
  margin-top: 10rpx;
  font-size: 22rpx;
  color: $sg-color-muted;
  line-height: 1.55;
}

.project-meta {
  margin-top: 12rpx;
  display: flex;
  align-items: center;
  gap: 12rpx;
  color: #9ca3af;
  font-size: 20rpx;
}

.meta-sep {
  opacity: 0.6;
}

.project-btn {
  margin-top: 16rpx;
  height: 84rpx;
  line-height: 84rpx;
  border-radius: 18rpx;
  border: 1px solid rgba($sg-color-primary, 0.95);
  color: $sg-color-primary;
  font-weight: 900;
  background: #fff;
}

.compare {
  margin-top: 22rpx;
  display: flex;
  flex-direction: column;
  gap: 18rpx;
}

.compare-row {
  border: 1px solid $sg-color-border;
  background: #fff;
  border-radius: 24rpx;
  padding: 18rpx;
}

.compare-title {
  font-size: 26rpx;
  font-weight: 900;
  color: $sg-color-primary;
}

.compare-cols {
  margin-top: 12rpx;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12rpx;
}

.compare-col {
  border-radius: 18rpx;
  padding: 14rpx;
  border: 1px solid $sg-color-border;
}

.compare-left {
  background: rgba($sg-color-primary, 0.06);
}

.compare-right {
  background: rgba(5, 150, 105, 0.06);
}

.compare-col-title {
  font-size: 22rpx;
  font-weight: 900;
  color: $sg-color-text;
  margin-bottom: 8rpx;
}

.compare-li {
  display: flex;
  align-items: flex-start;
  gap: 8rpx;
  margin-top: 6rpx;
}

.compare-dot {
  margin-top: 2rpx;
}

.left-dot {
  color: $sg-color-primary;
}

.right-dot {
  color: #059669;
}

.compare-txt {
  font-size: 20rpx;
  color: rgba(17, 24, 39, 0.75);
  line-height: 1.45;
}

.stats {
  margin-top: 18rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12rpx;
}

.stat-item {
  padding: 16rpx;
  border-radius: 24rpx;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rpx;
}

.stat-val {
  font-size: 34rpx;
  font-weight: 900;
  color: $sg-color-accent;
}

.stat-label {
  font-size: 20rpx;
  color: rgba(255, 255, 255, 0.82);
  text-align: center;
}

.certs {
  margin-top: 18rpx;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12rpx;
}

.cert {
  border-radius: 24rpx;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rpx;
}

.cert-wide {
  /* 说明：第三张证件在移动端占满一行，避免单列孤立导致视觉不平衡 */
  grid-column: 1 / -1;
}

.cert-img {
  width: 100%;
  height: 240rpx;
  border-radius: 18rpx;
  background: rgba(255, 255, 255, 0.06);
}

.cert-t {
  font-size: 20rpx;
  color: rgba(255, 255, 255, 0.82);
}

.contact-card {
  background-color: #1d5b91;
  border-radius: 28rpx;
  padding: 40rpx 36rpx;
  display: flex;
  flex-direction: column;
  gap: 60rpx;
}

.contact-title-wrap {
  display: flex;
  align-items: center;
  gap: 12rpx;
  margin-bottom: 20rpx;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-title {
  color: #fff;
  font-size: 32rpx;
  font-weight: 900;
}

.contact-header {
  display: flex;
  flex-direction: column;
}

.contact-hotline {
  color: #e5a663;
  font-size: 56rpx;
  font-weight: 900;
  margin-bottom: 12rpx;
}

.contact-time {
  color: rgba(255, 255, 255, 0.8);
  font-size: 24rpx;
}

.contact-address-wrap {
  display: flex;
  flex-direction: column;
}

.contact-address {
  color: #fff;
  font-size: 24rpx;
  line-height: 1.6;
}

.contact-qr-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 28rpx;
}

.contact-qr-item {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  width: 30%;
}

.qr-box {
  background-color: #fff;
  border-radius: 12rpx;
  padding: 12rpx;
  width: 160rpx;
  height: 160rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-img {
  width: 100%;
  height: 100%;
}

.qr-name {
  color: rgba(255, 255, 255, 0.8);
  font-size: 20rpx;
}

.qr-phone {
  color: rgba(255, 255, 255, 0.92);
  font-size: 22rpx;
  font-weight: 800;
}

.qr-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rpx;
}

.qr-fallback-title {
  color: #6b7280;
  font-size: 20rpx;
  font-weight: 800;
}

.qr-fallback-phone {
  color: #111827;
  font-size: 22rpx;
  font-weight: 900;
}
</style>
