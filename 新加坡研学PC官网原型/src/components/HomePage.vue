<template>
  <div class="page-container">
    <section class="relative h-[800px] flex items-center pt-20">
      <div class="absolute inset-0 z-0 overflow-hidden">
        <img :alt="t(data.hero.title)" class="w-full h-full object-cover" :src="data.hero.bg" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#005A9C]/90 to-transparent"></div>
      </div>
      <div class="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <div class="max-w-2xl text-white">
          <span class="inline-block px-4 py-1 border border-luxury-gold text-luxury-gold font-semibold text-sm mb-6 rounded-full">
            {{ t(data.hero.badge) }}
          </span>
          <h1 class="text-6xl font-bold leading-tight mb-6">
            {{ t(data.hero.title) }}
            <br />
            <span class="text-luxury-gold">{{ t(data.hero.titleAccent) }}</span>
          </h1>
          <p class="text-xl text-gray-100 mb-10 leading-relaxed border-l-4 border-luxury-gold pl-6 whitespace-pre-line">
            {{ t(data.hero.desc) }}
          </p>
          <div class="flex space-x-6">
            <a class="bg-luxury-gold hover:bg-[#d49552] text-white px-10 py-4 rounded font-bold text-lg shadow-xl transition-all" href="#projects">
              {{ t(data.hero.primaryCta) }}
            </a>
            <router-link class="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded font-bold text-lg transition-all" to="/ep-pass">
              {{ t(data.hero.secondaryCta) }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">{{ t(data.singaporeTitle) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p class="text-gray-500 max-w-2xl mx-auto italic text-lg">{{ t(data.singaporeSubtitle) }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div
            v-for="item in data.singaporeReasons"
            :key="t(item.title)"
            class="bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center"
          >
            <div class="w-16 h-16 bg-blue-100 text-sg-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <iconify-icon class="text-3xl" :icon="item.icon"></iconify-icon>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ t(item.title) }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed">{{ t(item.desc) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-sg-blue relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full border-[40px] border-white"></div>
        <div class="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full border-[60px] border-white"></div>
      </div>

      <div class="max-w-[1200px] mx-auto px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">{{ t(data.chooseUsTitle) }}</h2>
          <div class="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p class="text-blue-100 text-lg">{{ t(data.chooseUsSubtitle) }}</p>
        </div>

        <div class="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/20 shadow-2xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div v-for="item in data.chooseUsFeatures" :key="t(item.title)" class="flex items-start group">
              <div class="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mr-6 group-hover:bg-luxury-gold transition-colors flex-shrink-0">
                <iconify-icon class="text-3xl text-white" :icon="item.icon"></iconify-icon>
              </div>
              <div>
                <h4 class="text-2xl font-bold text-white mb-3">{{ t(item.title) }}</h4>
                <p class="text-blue-100 text-lg leading-relaxed">{{ t(item.desc) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-50" id="projects">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="flex justify-between items-end mb-16">
          <div>
            <h2 class="text-4xl font-bold text-sg-blue mb-4">{{ t(data.projectsTitle) }}</h2>
            <p class="text-gray-500">{{ t(data.projectsSubtitle) }}</p>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-8">
          <div v-for="project in data.projects" :key="project.to" class="bg-white rounded-2xl overflow-hidden card-shadow group">
            <div class="h-64 overflow-hidden relative">
              <img :alt="t(project.title)" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" :src="project.image" />
              <div class="absolute top-4 left-4 bg-sg-blue text-white px-3 py-1 rounded text-sm font-bold">{{ t(project.badge) }}</div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-3">{{ t(project.title) }}</h3>
              <p class="text-gray-500 mb-6">{{ t(project.desc) }}</p>
              <div class="flex items-center space-x-4 mb-6">
                <span class="flex items-center text-sm text-gray-400">
                  <iconify-icon class="mr-1" :icon="project.metaAIcon"></iconify-icon>
                  {{ t(project.metaA) }}
                </span>
                <span class="flex items-center text-sm text-gray-400">
                  <iconify-icon class="mr-1" :icon="project.metaBIcon"></iconify-icon>
                  {{ t(project.metaB) }}
                </span>
              </div>
              <router-link class="block w-full text-center py-3 border border-sg-blue text-sg-blue font-bold rounded hover:bg-sg-blue hover:text-white transition-all" :to="project.to">
                {{ t(project.cta) }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white relative overflow-hidden">
      <div class="max-w-[1200px] mx-auto px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">{{ t(data.compareTitle) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p class="text-gray-500 italic text-lg">{{ t(data.compareSubtitle) }}</p>
        </div>

        <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg text-center md:text-left">
          <div class="grid grid-cols-1 md:grid-cols-12 bg-sg-blue text-white border-b-2 border-sg-blue">
            <div class="md:col-span-2 p-4 md:p-6 font-bold text-xl flex items-center justify-center border-b md:border-b-0 md:border-r border-white/20">
              {{ lang === "zh" ? "项目定位" : "Positioning" }}
            </div>
            <div class="md:col-span-5 p-4 md:p-6 font-bold text-2xl flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/20 bg-sg-blue/90">
              {{ t(data.compareLeft.title) }}
              <span class="text-base font-normal text-blue-100 mt-1">{{ t(data.compareLeft.subtitle) }}</span>
            </div>
            <div class="md:col-span-5 p-4 md:p-6 font-bold text-2xl flex flex-col justify-center bg-teal-700 text-white">
              {{ t(data.compareRight.title) }}
              <span class="text-base font-normal text-teal-100 mt-1">{{ t(data.compareRight.subtitle) }}</span>
            </div>
          </div>

          <div
            v-for="(row, index) in data.compareRows"
            :key="t(row.dimension)"
            class="grid grid-cols-1 md:grid-cols-12 border-b border-slate-100"
            :class="index % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'"
          >
            <div class="md:col-span-2 p-4 md:p-6 font-bold text-lg text-sg-blue flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50">
              {{ t(row.dimension) }}
            </div>
            <div class="md:col-span-5 p-4 md:p-6 border-b md:border-b-0 md:border-r border-slate-100">
              <h4 class="font-bold text-gray-800 text-lg mb-3">{{ t(row.left.title) }}</h4>
              <ul class="text-gray-600 text-sm space-y-2 list-disc pl-4 marker:text-sg-blue">
                <li v-for="bullet in row.left.bullets" :key="t(bullet)">{{ t(bullet) }}</li>
              </ul>
            </div>
            <div class="md:col-span-5 p-4 md:p-6">
              <h4 class="font-bold text-gray-800 text-lg mb-3">{{ t(row.right.title) }}</h4>
              <ul class="text-gray-600 text-sm space-y-2 list-disc pl-4 marker:text-teal-600">
                <li v-for="bullet in row.right.bullets" :key="t(bullet)">{{ t(bullet) }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-sg-blue text-white relative overflow-hidden">
      <div class="absolute right-0 top-0 opacity-10">
        <iconify-icon class="text-[600px]" icon="ph:seal-check"></iconify-icon>
      </div>
      <div class="max-w-[1440px] mx-auto px-8 relative z-10">
        <div class="grid grid-cols-2 gap-20 items-center">
          <div>
            <h2 class="text-4xl font-bold mb-8">{{ t(data.expertsTitle) }}</h2>
            <div class="grid grid-cols-3 gap-8">
              <div v-for="stat in data.stats" :key="stat.label.zh" class="text-center">
                <p class="text-4xl font-bold text-luxury-gold mb-2">{{ stat.value }}</p>
                <p class="text-sm text-blue-200">{{ t(stat.label) }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(cert, idx) in data.certs"
              :key="cert.image"
              class="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20"
              :class="idx === 2 ? 'col-span-2' : ''"
            >
              <img :alt="t(cert.label)" class="h-48 mx-auto mb-4" :src="cert.image" />
              <p class="text-center text-sm">{{ t(cert.label) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="bg-slate-50 rounded-[40px] overflow-hidden flex shadow-2xl">
          <div class="w-1/2 p-16">
            <h2 class="text-4xl font-bold text-sg-blue mb-6">{{ t(data.contactTitle) }}</h2>
            <p class="text-gray-500 mb-10 text-lg">{{ t(data.contactDesc) }}</p>
            <form class="space-y-6">
              <div class="grid grid-cols-2 gap-6">
                <input class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-sg-blue" :placeholder="t(data.formNamePlaceholder)" type="text" />
                <input class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-sg-blue" :placeholder="t(data.formPhonePlaceholder)" type="tel" />
              </div>
              <select class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-sg-blue text-gray-400">
                <option>{{ t(data.formProjectPlaceholder) }}</option>
                <option v-for="option in data.formOptions" :key="t(option)">{{ t(option) }}</option>
              </select>
              <textarea class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-sg-blue" :placeholder="t(data.formDemandPlaceholder)" rows="4"></textarea>
              <button type="button" @click.prevent="openContactModal" class="w-full bg-sg-blue hover:bg-[#004a80] text-white font-bold py-5 rounded-lg text-lg shadow-lg transition-all">
                {{ t(data.formSubmit) }}
              </button>
            </form>
          </div>
          <div class="w-1/2 bg-sg-blue p-16 text-white flex flex-col justify-between">
            <div class="mb-12">
              <h3 class="text-2xl font-bold mb-6 flex items-center">
                <iconify-icon class="mr-3 text-luxury-gold" icon="ph:phone-call-fill"></iconify-icon>
                {{ t(data.hotlineTitle) }}
              </h3>
              <p class="text-4xl font-bold text-luxury-gold mb-2">{{ data.hotlineValue }}</p>
              <p class="text-blue-200">{{ t(data.hotlineTime) }}</p>
            </div>
            <div class="mb-12">
              <h3 class="text-2xl font-bold mb-6 flex items-center">
                <iconify-icon class="mr-3 text-luxury-gold" icon="ph:map-pin-fill"></iconify-icon>
                {{ t(data.addressTitle) }}
              </h3>
              <p>{{ t(data.addressValue) }}</p>
            </div>
            <div class="flex flex-wrap gap-8 items-center">
              <div v-for="advisor in data.advisors" :key="advisor.image" class="text-center">
                <img :alt="t(advisor.label)" class="w-24 h-24 bg-white p-2 rounded mb-2 object-contain" :class="advisor.image.includes('QR_Code-O') ? 'p-1' : ''" :src="advisor.image" />
                <p class="text-xs text-blue-200">{{ t(advisor.label) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue"
import type { Ref } from "vue"
import { pickText, type I18nText, type Lang } from "@/i18n/types"
import type { HomePageData } from "@/types/home"

const data: HomePageData = {
  hero: {
    badge: { zh: "2026年夏季报名开启", en: "Summer 2026 Applications Open" },
    title: { zh: "2026新加坡研学 |", en: "SG Study 2026 |" },
    titleAccent: { zh: "一站式精英教育服务", en: "One-Stop Elite Education Services" },
    desc: {
      zh: "本土插班 · 双语研学 · 国际教育 · 移民规划\n为中国精英家庭定制最具深度的狮城成长之旅。",
      en: "Local school immersion · Bilingual study tours · International education · Immigration planning\nTailored growth journeys in Singapore for ambitious families.",
    },
    primaryCta: { zh: "探索研学项目", en: "Explore Programs" },
    secondaryCta: { zh: "了解移民准证", en: "Learn About EP" },
    bg: "/img/bg.jpg",
  },
  singaporeTitle: { zh: "为什么选择新加坡？", en: "Why Singapore?" },
  singaporeSubtitle: {
    zh: "“花园城市”下的顶层教育逻辑，为孩子构建全球竞争力的第一站",
    en: "A global education hub where safety, bilingualism and world-class resources come together.",
  },
  singaporeReasons: [
    {
      icon: "mdi:shield-check",
      title: { zh: "全球安全环境", en: "A Safe Global Environment" },
      desc: { zh: "低犯罪率，完善的法律保障，让孩子在安全的环境中探索世界。", en: "Low crime and strong systems help children explore in a secure environment." },
    },
    {
      icon: "mdi:translate",
      title: { zh: "极致双语教育", en: "Bilingual Excellence" },
      desc: { zh: "母语般的中英双语环境，在浸润式学习中掌握核心语言能力。", en: "A deep Chinese-English environment that builds practical language ability." },
    },
    {
      icon: "mdi:trophy-variant",
      title: { zh: "世界顶尖资源", en: "Top Academic Resources" },
      desc: { zh: "汇集NUS、NTU等亚洲顶尖学府资源，接触前沿科技与学术。", en: "Access to leading universities and frontier learning resources." },
    },
    {
      icon: "mdi:earth",
      title: { zh: "国际化大视野", en: "International Perspective" },
      desc: { zh: "多元文化交融，培养具备全球胜任力的未来国际公民。", en: "A multicultural context that helps children develop global competence." },
    },
    {
      icon: "mdi:airplane-landing",
      title: { zh: "无时差零距离", en: "Close to China" },
      desc: { zh: "距离中国近，无时差困扰，家长陪读或探视极度便利。", en: "Convenient distance and time zone for family support and visits." },
    },
  ],
  chooseUsTitle: { zh: "为什么选择我们", en: "Why Work With Us" },
  chooseUsSubtitle: { zh: "专业、靠谱、一站式的海外教育与身份规划专家", en: "Professional, reliable, one-stop education and residency planning" },
  chooseUsFeatures: [
    {
      icon: "ph:certificate-bold",
      title: { zh: "官方权威认证", en: "Official Accreditation" },
      desc: { zh: "合作学校与项目经过严格筛选，确保研学/留学规划合法合规。", en: "Programs and partner schools are carefully selected for quality and compliance." },
    },
    {
      icon: "ph:users-three-bold",
      title: { zh: "本土化资深团队", en: "Local Ground Team" },
      desc: { zh: "中新双总部运营，在新加坡拥有在地资源与 7x24 小时响应能力。", en: "Dual-country operations with strong local networks and responsive support." },
    },
    {
      icon: "ph:student-bold",
      title: { zh: "全定制化教育", en: "Tailored Planning" },
      desc: { zh: "不是走马观花式游学，而是一人一课表的精细化成长设计。", en: "Not generic tourism, but tailored learning paths and growth design." },
    },
    {
      icon: "ph:diamonds-four-bold",
      title: { zh: "高端圈层赋能", en: "Family-Level Empowerment" },
      desc: { zh: "同步覆盖教育、身份、置业、税务等高净值服务需求。", en: "Support beyond education, including identity, property and tax planning." },
    },
  ],
  projectsTitle: { zh: "研学·教育·移民项目矩阵", en: "Programs Matrix" },
  projectsSubtitle: { zh: "满足不同年龄段、不同目标的精准化需求定制", en: "Tailored for different ages and family goals" },
  projects: [
    {
      image: "/img/1.jpg",
      badge: { zh: "7天体验", en: "7-Day Program" },
      title: { zh: "新加坡成长营", en: "Growth Camp" },
      desc: { zh: "与顶级国际学校合作，深度融入狮城文化，培养独立思考与团队协作。", en: "A short but meaningful immersion focused on culture, confidence and teamwork." },
      metaA: { zh: "适龄：小学-初中", en: "Age: Primary–Junior High" },
      metaB: { zh: "班期：寒暑假", en: "Season: School Holidays" },
      metaAIcon: "ph:user-bold",
      metaBIcon: "ph:calendar-bold",
      to: "/growth-camp",
      cta: { zh: "查看详情", en: "View Details" },
    },
    {
      image: "/img/2.jpg",
      badge: { zh: "21天深度", en: "21-Day Depth" },
      title: { zh: "新加坡微留学", en: "Mini Study" },
      desc: { zh: "真实入读新加坡优质学校，沉浸式体验全英文课堂与本地学习节奏。", en: "A deeper local-school experience with real immersion in English learning." },
      metaA: { zh: "适龄：全学段", en: "Age: All Stages" },
      metaB: { zh: "班期：学期中", en: "Season: School Term" },
      metaAIcon: "ph:user-bold",
      metaBIcon: "ph:calendar-bold",
      to: "/mini-study",
      cta: { zh: "查看详情", en: "View Details" },
    },
    {
      image: "/img/3.jpg",
      badge: { zh: "教育移民", en: "Education & Residency" },
      title: { zh: "人才准证EP", en: "EP Pass" },
      desc: { zh: "面向企业主与高管的长期规划，同步解决子女教育与家长身份问题。", en: "A strategic path for executives and founders planning education plus residency." },
      metaA: { zh: "针对：企业主/高管", en: "For: Founders / Executives" },
      metaB: { zh: "优势：全家规划", en: "Benefit: Family Planning" },
      metaAIcon: "ph:briefcase-bold",
      metaBIcon: "ph:check-circle-bold",
      to: "/ep-pass",
      cta: { zh: "查看详情", en: "View Details" },
    },
  ],
  compareTitle: { zh: "微留学 VS 夏令营", en: "Mini Study VS Summer Camp" },
  compareSubtitle: { zh: "根据孩子的适应能力与成长目标，科学选择研学模式", en: "Choose the right path based on the child's goals and readiness" },
  compareLeft: { title: { zh: "微留学", en: "Mini Study" }, subtitle: { zh: "深度沉浸，学术导向", en: "Deep immersion, academic focus" } },
  compareRight: { title: { zh: "夏令营", en: "Summer Camp" }, subtitle: { zh: "活力体验，兴趣导向", en: "Energetic experience, interest-led" } },
  compareRows: [
    {
      dimension: { zh: "环境与节奏", en: "Environment & Rhythm" },
      left: {
        title: { zh: "模拟真实留学生态", en: "Real Overseas Study Simulation" },
        bullets: [
          { zh: "入住寄宿家庭，参与真实生活", en: "Stay with host families and join daily life" },
          { zh: "进入当地学校插班，遵循学术节奏", en: "Attend local school classes and follow real schedules" },
        ],
      },
      right: {
        title: { zh: "打造专属团队空间", en: "A Shared Camp Experience" },
        bullets: [
          { zh: "入住酒店或营地宿舍，集体氛围更强", en: "Hotel or dorm accommodation with stronger group vibes" },
          { zh: "以主题活动和素质拓展为主", en: "More focused on themed activities and exploration" },
        ],
      },
    },
    {
      dimension: { zh: "社交模式", en: "Social Mode" },
      left: {
        title: { zh: "跨文化深度链接", en: "Cross-Cultural Integration" },
        bullets: [
          { zh: "离开母语舒适区，锻炼真实沟通能力", en: "Practice communication outside the mother-tongue comfort zone" },
          { zh: "与本地家庭及同学建立长期联系", en: "Build longer-term links with local families and peers" },
        ],
      },
      right: {
        title: { zh: "同龄人高频互动", en: "High-Frequency Peer Interaction" },
        bullets: [
          { zh: "与同龄学生快速破冰", en: "Fast bonding with peers" },
          { zh: "在团队任务中积累短期友谊", en: "Short-term but intense teamwork friendships" },
        ],
      },
    },
    {
      dimension: { zh: "核心价值", en: "Core Value" },
      left: {
        title: { zh: "留学规划的试金石", en: "A Trial Run for Study Abroad" },
        bullets: [
          { zh: "低成本试错，判断是否适合", en: "A lower-risk way to test fit" },
          { zh: "通过真实反馈定位后续方向", en: "Use real feedback to refine future planning" },
        ],
      },
      right: {
        title: { zh: "潜能激发的万花筒", en: "A Catalyst for Interests" },
        bullets: [
          { zh: "高密度活动拓宽认知边界", en: "Multiple activities broaden exposure" },
          { zh: "短时间接触多个领域，探索特长", en: "Explore different areas and discover strengths" },
        ],
      },
    },
    {
      dimension: { zh: "心智成长", en: "Mindset Growth" },
      left: {
        title: { zh: "抗压能力的淬炼", en: "Resilience Building" },
        bullets: [
          { zh: "经历完整的适应周期", en: "Experience a full adaptation cycle" },
          { zh: "建立面对陌生环境的掌控感", en: "Build confidence in new environments" },
        ],
      },
      right: {
        title: { zh: "快乐自信的建立", en: "Confidence Through Enjoyment" },
        bullets: [
          { zh: "高频正向反馈，建立成就感", en: "Frequent positive feedback builds confidence" },
          { zh: "在鼓励式活动中增强自我认同", en: "Encouraging activities help strengthen self-belief" },
        ],
      },
    },
    {
      dimension: { zh: "最终收获", en: "Outcome" },
      left: {
        title: { zh: "独立人格与学术衔接", en: "Independence & Academic Transition" },
        bullets: [
          { zh: "获得真实海外生存技能", en: "Gain real-world overseas living skills" },
          { zh: "缩短未来正式留学适应期", en: "Reduce the adjustment period of future overseas study" },
        ],
      },
      right: {
        title: { zh: "美好回忆与全球思维", en: "Memories & Global Perspective" },
        bullets: [
          { zh: "收获珍贵旅程与国际友谊", en: "Gain memorable experiences and friendships" },
          { zh: "通过游历打开世界大门", en: "Open the door to a broader world" },
        ],
      },
    },
  ],
  expertsTitle: { zh: "专家领衔 · 权威护航", en: "Expert-Led, Officially Supported" },
  stats: [
    { value: "15+", label: { zh: "教育行业积淀(年)", en: "Years in Education" } },
    { value: "50+", label: { zh: "优质合作院校", en: "Partner Institutions" } },
    { value: "5000+", label: { zh: "服务成功家庭", en: "Families Served" } },
  ],
  certs: [
    { image: "/img/资质证书.jpg", label: { zh: "资质证书", en: "Qualification Certificate" } },
    { image: "/img/授权信.jpg", label: { zh: "授权信", en: "Authorization Letter" } },
    { image: "/img/营业执照.jpg", label: { zh: "营业执照", en: "Business License" } },
  ],
  contactTitle: { zh: "规划狮城教育蓝图", en: "Plan Your Singapore Education Journey" },
  contactDesc: { zh: "留下您的联系方式，我们的资深规划师将在24小时内为您定制专属研学方案。", en: "Leave your contact details and our advisors will respond within 24 hours." },
  formNamePlaceholder: { zh: "您的姓名", en: "Your Name" },
  formPhonePlaceholder: { zh: "手机号码", en: "Phone Number" },
  formProjectPlaceholder: { zh: "意向项目：请选择", en: "Interested Program: Please Select" },
  formDemandPlaceholder: { zh: "您的具体需求或孩子的年级情况...", en: "Your needs or your child's grade and background..." },
  formOptions: [
    { zh: "新加坡成长营 (7天)", en: "Growth Camp (7 Days)" },
    { zh: "新加坡微留学 (21天)", en: "Mini Study (21 Days)" },
    { zh: "人才准证EP咨询", en: "EP Pass Consultation" },
    { zh: "国际学校体验营", en: "School Camp" },
  ],
  formSubmit: { zh: "提交申请 · 免费领取规划手册", en: "Submit · Get the Free Planning Guide" },
  hotlineTitle: { zh: "官方热线", en: "Official Hotline" },
  hotlineValue: "0898-65392581",
  hotlineTime: { zh: "周一至周日 09:00 - 21:00", en: "Mon–Sun 09:00 - 21:00" },
  addressTitle: { zh: "办公地址", en: "Office Address" },
  addressValue: {
    zh: "中国运营中心：海南省海口市美兰区国兴街道国兴大道15A号，全球贸易之窗9003室",
    en: "China Operations Center: Room 9003, Global Trade Window, 15A Guoxing Avenue, Meilan District, Haikou, Hainan",
  },
  advisors: [
    { image: "/img/QR_Code-J.jpg", label: { zh: "研学顾问：Jason", en: "Advisor: Jason" } },
    { image: "/img/QR_Code-A.jpg", label: { zh: "研学顾问：Adela", en: "Advisor: Adela" } },
    { image: "/img/QR_Code-O.jpg", label: { zh: "研学顾问：Joey", en: "Advisor: Joey" } },
  ],
}

const openContactModal = inject("openContactModal") as (() => void) | undefined
const injectedLang = inject("lang") as Ref<Lang> | undefined
const lang = computed<Lang>(() => injectedLang?.value ?? "zh")
const t = (text: I18nText) => pickText(text, lang.value)
</script>
