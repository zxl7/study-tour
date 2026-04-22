<template>
  <view class="sg-page page">
    <AppHeader title="成长营详情" />

    <scroll-view scroll-y class="content">
      <!-- 顶部 Banner（同步 PC 视觉结构，但按移动端重排） -->
      <view class="hero">
        <image class="hero-bg" mode="aspectFill" src="/static/img/Camp_Banner.jpg" />
        <view class="hero-mask" />
        <view class="hero-inner text-center">
          <view class="tags justify-center">
            <text class="tag tag-gold">7天6晚</text>
            <text class="tag tag-white">适龄 3-15岁</text>
          </view>

          <text class="title">新加坡成长营</text>
          <text class="subtitle">
            别让孩子的假期只停留在屏幕里 \n
            <text class="subtitle-strong">带娃实地来新加坡，看不一样的世界</text>
          </text>
        </view>
      </view>

      <view class="body">
        <!-- 项目亮点（PC：痛点-解决方案） -->
        <view class="section">
          <view class="">
            <!-- <view class="section-bar" /> -->
            <view class="section-txt">
              <h2 class="highlight-title text-center">补习班太枯燥，纯旅游没收获？</h2>
              <text class="section-sub text-center" style="margin-bottom: 16px">不如来新加坡成长营，给孩子一个真正有价值的假期</text>
            </view>
          </view>

          <view class="highlight-grid">
            <view v-for="item in highlights" :key="item.title" class="highlight-item sg-card">
              <image class="highlight-img" :src="item.img" mode="aspectFill" />
              <p class="highlight-title">{{ item.title }}</p>
              <text class="highlight-desc">{{ item.desc }}</text>
            </view>
          </view>
        </view>

        <!-- 我们为您护航（PC：大段+图片；移动端：卡片叙事） -->
        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <view class="section-txt">
              <text class="section-title">您在身边，我们为您护航</text>
              <text class="section-sub">第一次出国，我们陪您和孩子一起迈出第一步</text>
            </view>
          </view>

          <view class="guard-media">
            <image class="guard-img" mode="aspectFill" src="/static/img/Family_Travel.jpg" />
            <view class="guard-float sg-card">
              <text class="guard-float-title">360° 安全保障</text>
              <text class="guard-float-desc">让家长的每一次陪伴都轻松愉悦，见证孩子的每一个成长瞬间。</text>
            </view>
          </view>

          <view class="guard sg-card">
            <view v-for="g in guards" :key="g.title" class="guard-item">
              <view class="guard-icon">
                <SgIcon :type="g.icon" :size="22" color="#005a9c" />
              </view>
              <view class="guard-body">
                <text class="guard-title">{{ g.title }}</text>
                <text class="guard-desc">{{ g.desc }}</text>
              </view>
            </view>
          </view>
        </view>

        <!-- 学校介绍（同步 PC：四校介绍） -->
        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <view class="section-txt">
              <text class="section-title">学校介绍</text>
              <text class="section-sub">携手新加坡四大知名国际学校，定制专属菁英课程</text>
            </view>
          </view>

          <view class="school-grid">
            <view v-for="s in schools" :key="s.name" class="school-card sg-card">
              <view class="school-img-wrap">
                <image class="school-img" mode="aspectFill" :src="s.img" />
                <view class="school-mask" />
                <text class="school-name">{{ s.name }}</text>
              </view>
              <view class="school-bd">
                <text class="school-desc">{{ s.desc }}</text>
              </view>
            </view>
          </view>
        </view>

        <!-- 课程设置（同步 PC：四块课程） -->
        <view class="section section-blue">
          <view class="section-hd">
            <view class="section-bar white" />
            <view class="section-txt">
              <text class="section-title white">课程设置</text>
              <text class="section-sub white-sub">多维度沉浸式体验，全面激发孩子潜能</text>
            </view>
          </view>

          <view class="course-grid">
            <view v-for="c in courses" :key="c.tag" class="course-card">
              <image class="course-img" mode="aspectFill" :src="c.img" />
              <view class="course-tag" :style="{ background: c.tagBg }">{{ c.tag }}</view>
              <text class="course-desc">{{ c.desc }}</text>
            </view>
          </view>
        </view>

        <!-- 7天日程（同步 PC：每日主题） -->
        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <view class="section-txt">
              <text class="section-title">7天深度研学日程表</text>
              <text class="section-sub">每一分钟的规划都服务于孩子的成长逻辑</text>
            </view>
          </view>

          <view class="timeline">
            <view v-for="item in timeline" :key="item.day" class="tl-item sg-card">
              <view class="tl-hd">
                <text class="tl-day">{{ item.day }}</text>
                <text class="tl-theme">{{ item.theme }}</text>
              </view>
              <text class="tl-desc">{{ item.desc }}</text>
              <image v-if="item.img" class="tl-img" :src="item.img" mode="aspectFill" />
            </view>
          </view>
        </view>

        <!-- 食宿标准（同步 PC：住宿/饮食） -->
        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <view class="section-txt">
              <text class="section-title">星级服务标准 · 全方位保障</text>
              <text class="section-sub">住得舒适、吃得放心，才有更好的学习与探索状态</text>
            </view>
          </view>

          <view class="service-grid">
            <view v-for="card in services" :key="card.title" class="service-card">
              <image class="service-img" mode="aspectFill" :src="card.img" />
              <view class="service-mask" />
              <view class="service-bd">
                <text class="service-title">{{ card.title }}</text>
                <text class="service-desc">{{ card.desc }}</text>
              </view>
            </view>
          </view>
        </view>

        <!-- 费用包含（同步 PC：费用模块的“包含项”抽取） -->
        <view class="section">
          <view class="section-hd">
            <view class="section-bar" />
            <view class="section-txt">
              <text class="section-title">费用包含</text>
              <text class="section-sub">清晰透明，避免隐性支出</text>
            </view>
          </view>
          <view class="include-grid">
            <view v-for="text in includes" :key="text" class="include-item">
              <text class="include-icon">✓</text>
              <text class="include-text">{{ text }}</text>
            </view>
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
 * 功能：项目亮点（纯数据）。
 * 说明：与 PC「补习班太枯燥，纯旅游没收获？」模块保持一致。
 */
const highlights = [
  {
    title: "本地学校/正规营地",
    desc: "甄选新加坡顶尖国际学校与官方认证营地，共享世界级教育硬件设施与学术资源。",
    img: "/static/img/School_Campus.jpg",
  },
  {
    title: "沉浸式英文环境",
    desc: "全天候英语母语导师陪伴，打破哑巴英语，在真实交流中建立语言自信。",
    img: "/static/img/English_Environment.jpg",
  },
  {
    title: "研学+游玩+能力提升",
    desc: "科学配比学习与探索时间，玩中学、学中玩，提升独立思考与跨文化交际能力。",
    img: "/static/img/Study_and_Play.jpg",
  },
]

/**
 * 功能：7天日程（纯数据）。
 * 说明：PC 端使用的部分示例图为网络占位图；移动端改为使用本地静态资源，保证一致性与可离线预览。
 */
const timeline = [
  {
    day: "Day.1",
    theme: "大学城",
    desc: "初抵狮城，入住营地。随后探访新加坡顶级学府（如新加坡国立大学/南洋理工大学），感受世界级大学的学术氛围与校园文化。",
    img: "/static/img/Day_1_University.jpg",
  },
  {
    day: "Day.2",
    theme: "甘榜格南 & 小印度",
    desc: "开启多元文化探索之旅：穿梭阿拉伯风情街区，走进“小印度”体验异域文化，感受新加坡种族和谐的魅力。",
    img: "/static/img/Day_2_Kampong_Glam_Little_India.jpg",
  },
  {
    day: "Day.3",
    theme: "动物园",
    desc: "前往世界闻名的新加坡动物园（或夜间野生动物园），在近乎自然的生态环境中观察野生动物，学习生物多样性保护。",
    img: "/static/img/Day_3_Zoo.jpg",
  },
  {
    day: "Day.4",
    theme: "艺术科学博物馆",
    desc: "参观形似莲花的艺术科学博物馆：艺术、科学、设计、媒体与技术交融，激发孩子跨学科的创新思维。",
    img: "/static/img/Science_Center.jpg",
  },
  {
    day: "Day.5",
    theme: "环球影城",
    desc: "畅游东南亚首个好莱坞电影主题公园——新加坡环球影城，在七大主题区中尽情释放天性，体验沉浸式欢乐与刺激。",
    img: "/static/img/4.jpg",
  },
  {
    day: "Day.6",
    theme: "城市环游",
    desc: "打卡鱼尾狮公园、滨海湾金沙、市政区历史建筑等地标。在城市漫步中了解新加坡的发展奇迹与城市规划。",
    img: "/static/img/Day_6_City_Tour.jpg",
  },
  {
    day: "Day.7",
    theme: "星耀樟宜机场",
    desc: "参观将自然与现代建筑完美结合的星耀樟宜（Jewel Changi），观赏震撼的室内瀑布雨漩涡。带着满满的收获，登机返程。",
    img: "/static/img/Day_7_Jewel_Changi.jpg",
  },
]

/**
 * 功能：家长陪伴与安全保障（纯数据）。
 * 说明：加入 icon 字段，用于更直观的移动端信息组织。
 */
const guards = [
  { icon: "paperplane", title: "机酒全含，领队同机", desc: "安心从第一刻开始，行程安排更省心。" },
  { icon: "map", title: "私享专人接送", desc: "每日酒店专属车辆接送孩子上下学，减少奔波。" },
  { icon: "home-filled", title: "高星酒店，家长同住", desc: "孩子与家长同住，起居皆在星级酒店，配套齐全。" },
]

/**
 * 功能：费用包含（纯数据）。
 */
const includes = ["精品四星酒店住宿", "全程营养配餐", "名校导师授课费", "高额境外研学保险"]

/**
 * 功能：学校介绍（纯数据）。
 * 说明：与 PC「学校介绍」四校卡片文案保持一致。
 */
const schools = [
  {
    name: "新加坡斯坦福美国国际学校",
    img: "/static/img/sitanfu.jpg",
    desc: "新加坡顶尖美式国际学校之一，以双课程体系（IB + AP）、顶级设施和多元文化著称。耗资3亿新币打造，含奥运泳池、3图书馆、攀岩墙、科技中心；提供10种母语课程（含中文），95%毕业生进全球前100大学。",
  },
  {
    name: "新加坡瑞士学校",
    img: "/static/img/ruishi.jpg",
    desc: "新加坡历史最悠久的国际学校之一，以纯正瑞士教育、三语环境（德/法/英）和“小而美”的温馨氛围著称；是UWCSEA联盟校，小学毕业可直升。",
  },
  {
    name: "UWC 世界联合书院",
    img: "/static/img/uwc.jpg",
    desc: "被誉为“藤校收割机”的 UWCSEA 是全球规模最大的UWC校区之一，K-12全龄IB体系与全球105国生源构成“联合国式”多元社区，以强学术+全人教育为核心。",
  },
  {
    name: "XCL 加慧世界书院",
    img: "/static/img/XCL.jpg",
    desc: "个性化菁英教育的典范学府。提供丰富且极具挑战的学术、艺术及体育特色课程，旨在精准发掘并放大每一个孩子身上独一无二的闪光点。",
  },
]

/**
 * 功能：课程设置（纯数据）。
 */
const courses = [
  { tag: "STEAM", tagBg: "rgba(14,165,233,0.92)", desc: "编码机器人、虚拟现实、3D打印和工程", img: "/static/img/STEAM_Education.jpg" },
  { tag: "综合活动", tagBg: "rgba(59,130,246,0.92)", desc: "木材制作、园艺、烘焙、运动", img: "/static/img/play.jpg" },
  { tag: "多重冒险", tagBg: "rgba(20,184,166,0.92)", desc: "射箭、跑酷、定向越野、攀岩、无人机", img: "/static/img/study.png" },
  { tag: "英语强化", tagBg: "rgba(99,102,241,0.92)", desc: "语言游戏、趣味活动、听说读写", img: "/static/img/english.png" },
]

/**
 * 功能：食宿标准（纯数据）。
 */
const services = [
  {
    title: "住宿：四星级酒店/学生公寓",
    desc: "2人标准间，配备24小时保安及中文生活老师。确保孩子在舒适的环境中休息，恢复精力。",
    img: "/static/img/Hotel.jpg",
  },
  {
    title: "饮食：多元狮城美食+中餐",
    desc: "体验娘惹菜、海南鸡饭等特色美食，并合理搭配营养均衡的中式餐食，适应中国孩子的口味。",
    img: "/static/img/Food.jpg",
  },
]

/**
 * 功能：跳转到表单页。
 */
const goForm = () => navigateToByKey("form")

onShareAppMessage(() => ({
  title: "新加坡成长营 - 盛昌利民研学",
  path: "/pages/camp/index",
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
  background: rgba(0, 0, 0, 0.2); /* 减弱背景遮罩，使背景更通透 */
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
  border-radius: 999rpx; /* 圆角变成胶囊形 */
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
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.22);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price-k {
  font-size: 26rpx;
  color: rgba(255, 255, 255, 0.82);
  font-weight: 700;
}

.price-v {
  font-size: 44rpx;
  color: $sg-color-accent;
  font-weight: 900;
}

.price-unit {
  font-size: 22rpx;
  font-weight: 700;
}

.section {
  margin-top: 40rpx;
}

.section-blue {
  padding: 28rpx;
  border-radius: 32rpx;
  background: $sg-color-primary;
  color: #fff;
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

.section-txt {
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.section-title {
  font-size: 30rpx;
  font-weight: 800;
}

.section-title.white {
  color: #fff;
}

.section-sub {
  font-size: 22rpx;
  color: #6b7280;
  line-height: 1.4;
}

.section-sub.white-sub {
  color: rgba(255, 255, 255, 0.82);
}

.section-text {
  font-size: 26rpx;
  color: #4b5563;
  line-height: 1.6;
  text-align: justify;
}

.highlight-grid {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.highlight-item {
  padding: 24rpx;
  border-radius: 28rpx;
}

.highlight-img {
  width: 100%;
  height: 220rpx;
  border-radius: 20rpx;
}

.highlight-title {
  margin-top: 16rpx;
  font-size: 28rpx;
  font-weight: 900;
  color: $sg-color-primary;
}

.highlight-desc {
  margin-top: 8rpx;
  font-size: 22rpx;
  color: $sg-color-muted;
  line-height: 1.5;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
}

.tl-item {
  padding: 22rpx;
  border-radius: 28rpx;
}

.tl-hd {
  display: flex;
  align-items: baseline;
  gap: 16rpx;
}

.tl-day {
  font-size: 26rpx;
  font-weight: 900;
  color: $sg-color-primary;
}

.tl-theme {
  font-size: 24rpx;
  font-weight: 900;
  color: $sg-color-text;
}

.tl-desc {
  margin-top: 10rpx;
  font-size: 22rpx;
  color: rgba(17, 24, 39, 0.75);
  line-height: 1.55;
}

.tl-img {
  margin-top: 12rpx;
  width: 100%;
  height: 220rpx;
  border-radius: 18rpx;
}

.guard-media {
  position: relative;
  height: 420rpx;
  border-radius: 32rpx;
  overflow: hidden;
}

.guard-img {
  width: 100%;
  height: 100%;
}

.guard-float {
  position: absolute;
  left: 20rpx;
  right: 20rpx;
  bottom: 20rpx;
  padding: 22rpx;
  border-radius: 28rpx;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
}

.guard-float-title {
  font-size: 26rpx;
  font-weight: 900;
  color: $sg-color-primary;
}

.guard-float-desc {
  margin-top: 8rpx;
  font-size: 22rpx;
  color: rgba(17, 24, 39, 0.72);
  line-height: 1.45;
}

.guard {
  padding: 24rpx;
  border-radius: 28rpx;
  margin-top: 16rpx;
}

.guard-item {
  display: flex;
  gap: 16rpx;
  align-items: flex-start;
  padding: 18rpx 0;
  border-top: 1px solid $sg-color-border;
}

.guard-item:first-child {
  border-top: none;
  padding-top: 0;
}

.guard-icon {
  width: 72rpx;
  height: 72rpx;
  border-radius: 18rpx;
  background: rgba($sg-color-primary, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.guard-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.guard-title {
  font-size: 26rpx;
  font-weight: 900;
  color: $sg-color-primary;
}

.guard-desc {
  font-size: 22rpx;
  color: $sg-color-muted;
  line-height: 1.5;
}

.school-grid {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
}

.school-card {
  border-radius: 32rpx;
  overflow: hidden;
}

.school-img-wrap {
  position: relative;
  height: 240rpx;
}

.school-img {
  width: 100%;
  height: 100%;
}

.school-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.55));
}

.school-name {
  position: absolute;
  left: 22rpx;
  right: 22rpx;
  bottom: 18rpx;
  color: #fff;
  font-size: 26rpx;
  font-weight: 900;
}

.school-bd {
  padding: 22rpx;
}

.school-desc {
  font-size: 22rpx;
  color: rgba(17, 24, 39, 0.72);
  line-height: 1.6;
  text-align: justify;
}

.course-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14rpx;
}

.course-card {
  position: relative;
  border-radius: 24rpx;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
}

.course-img {
  width: 100%;
  height: 220rpx;
}

.course-tag {
  position: absolute;
  top: 14rpx;
  left: 14rpx;
  padding: 8rpx 14rpx;
  border-radius: 999rpx;
  color: #fff;
  font-size: 20rpx;
  font-weight: 900;
}

.course-desc {
  padding: 16rpx 16rpx 18rpx;
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.86);
  line-height: 1.45;
}

.service-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16rpx;
}

.service-card {
  position: relative;
  height: 320rpx;
  border-radius: 32rpx;
  overflow: hidden;
}

.service-img {
  width: 100%;
  height: 100%;
}

.service-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.78));
}

.service-bd {
  position: absolute;
  left: 22rpx;
  right: 22rpx;
  bottom: 22rpx;
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}

.service-title {
  color: #fff;
  font-size: 26rpx;
  font-weight: 900;
}

.service-desc {
  color: rgba(255, 255, 255, 0.82);
  font-size: 22rpx;
  line-height: 1.45;
}

.include-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rpx 20rpx;
}

.include-item {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.include-icon {
  color: #10b981;
  font-weight: 900;
}

.include-text {
  font-size: 22rpx;
  color: #4b5563;
}

.bottom {
  position: fixed;
  left: 0;
  right: 0;
	bottom: calc(120rpx + env(safe-area-inset-bottom));
  height: 140rpx;
  padding: 16rpx 32rpx calc(16rpx + env(safe-area-inset-bottom));
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-top: 1px solid $sg-color-border;
  box-sizing: border-box;
}

.bottom-left {
  display: flex;
  flex-direction: column;
}

.bottom-k {
  font-size: 20rpx;
  color: #9ca3af;
}

.bottom-v {
  font-size: 32rpx;
  color: #ef4444;
  font-weight: 900;
  margin-top: 4rpx;
}

.bottom-btn {
  height: 88rpx;
  padding: 0 48rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}
</style>
