<template>
  <div class="page-container">
    <header class="relative pt-20 h-[500px] flex items-center bg-gray-900 overflow-hidden">
      <img :alt="t(data.hero.title)" class="absolute inset-0 w-full h-full object-cover opacity-40" :src="data.hero.bg" />
      <div class="relative z-10 max-w-[1440px] mx-auto px-8 w-full text-center">
        <h1 class="text-6xl font-bold text-white mb-6 uppercase tracking-widest">{{ t(data.hero.title) }}</h1>
        <h2 class="text-3xl font-light text-luxury-gold mb-8">{{ t(data.hero.subtitle) }}</h2>
        <p class="text-gray-300 max-w-5xl mx-auto text-lg leading-relaxed tracking-wide flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-4">
          <template v-for="(bullet, idx) in data.hero.bullets" :key="t(bullet)">
            <span class="flex items-center">
              <iconify-icon class="text-luxury-gold mr-2" icon="mdi:circle-small"></iconify-icon>
              {{ t(bullet) }}
            </span>
            <span v-if="idx < data.hero.bullets.length - 1" class="hidden md:block text-luxury-gold/30">|</span>
          </template>
        </p>
      </div>
    </header>

    <section class="py-8 bg-white">
      <div class="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20 items-center">
        <div>
          <h2 class="text-4xl font-bold text-sg-blue mb-8">{{ t(data.policyTitle) }}</h2>
          <div class="space-y-6">
            <div
              v-for="card in data.policyCards"
              :key="t(card.title)"
              class="p-6 bg-slate-50"
              :class="card.borderColor === 'blue' ? 'border-l-4 border-sg-blue' : 'border-l-4 border-luxury-gold'"
            >
              <h4 class="font-bold mb-2">{{ t(card.title) }}</h4>
              <p class="text-gray-500 text-sm">{{ t(card.desc) }}</p>
            </div>
          </div>
        </div>
        <div class="bg-sg-blue/5 p-10 rounded-2xl border border-sg-blue/10">
          <img :alt="t(data.policyImageCaption)" class="w-full rounded-lg shadow-md mb-6" :src="data.policyImage" />
          <p class="text-center text-sm text-gray-400 italic">{{ t(data.policyImageCaption) }}</p>
        </div>
      </div>
    </section>

    <section class="py-8 bg-white">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">{{ t(data.advantagesTitle) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p class="text-gray-500 max-w-2xl mx-auto italic text-lg">{{ t(data.advantagesSubtitle) }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div class="lg:col-span-5 bg-slate-50 rounded-3xl p-12 border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col justify-center h-full">
            <div class="absolute -right-10 -bottom-10 text-blue-100/50">
              <iconify-icon class="text-[250px]" icon="ph:identification-card-bold"></iconify-icon>
            </div>

            <div class="relative z-10">
              <h3 class="text-2xl font-bold text-sg-blue mb-4 flex items-center">
                <iconify-icon class="mr-3 text-3xl" icon="mdi:help-circle-outline"></iconify-icon>
                {{ t(data.advantagesLeftTitle) }}
              </h3>
              <p class="text-gray-600 text-lg mb-10 leading-relaxed border-l-4 border-luxury-gold pl-4">{{ t(data.advantagesLeftDesc) }}</p>

              <h3 class="text-2xl font-bold text-sg-blue mb-6 flex items-center">
                <iconify-icon class="mr-3 text-3xl" icon="mdi:star-circle"></iconify-icon>
                {{ t(data.advantagesLeftRightsTitle) }}
              </h3>
              <ul class="space-y-6 text-gray-600 text-lg">
                <li v-for="item in data.advantagesLeftRights" :key="t(item)" class="flex items-start">
                  <span class="w-2 h-2 rounded-full bg-luxury-gold mt-2.5 mr-4 flex-shrink-0"></span>
                  <p>{{ t(item) }}</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="card in data.advantagesCards"
              :key="t(card.title)"
              class="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
            >
              <div class="w-14 h-14 bg-blue-50 text-sg-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-sg-blue group-hover:text-white transition-colors">
                <iconify-icon class="text-3xl" :icon="card.icon"></iconify-icon>
              </div>
              <h3 class="text-xl font-bold text-sg-blue mb-6">{{ t(card.title) }}</h3>
              <ul class="space-y-3 text-gray-600">
                <li v-for="item in card.items" :key="t(item)" class="flex items-start">
                  <iconify-icon class="text-luxury-gold mt-1 mr-2" icon="mdi:check-circle-outline"></iconify-icon>
                  <p>{{ t(item) }}</p>
                </li>
              </ul>
            </div>
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
          <div class="w-24 h-1 bg-luxury-gold mx-auto"></div>
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

    <section class="py-16 bg-slate-50">
      <div class="max-w-[1440px] mx-auto px-8">
        <h2 class="text-4xl font-bold text-sg-blue mb-20 text-center">{{ t(data.processTitle) }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div v-for="step in data.processSteps" :key="step.no" class="ep-process-step text-center px-2 relative">
            <div
              class="relative z-10 w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg"
              :class="step.tone === 'blue' ? 'bg-sg-blue' : 'bg-luxury-gold'"
            >
              {{ step.no }}
            </div>
            <h4 class="font-bold mb-2">{{ t(step.title) }}</h4>
            <p class="text-xs text-gray-500">{{ t(step.desc) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-8">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-bold text-sg-blue mb-6">{{ t(data.guaranteeTitle) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto"></div>
        </div>

        <div class="space-y-16">
          <div
            v-for="(item, idx) in data.guarantees"
            :key="t(item.title)"
            class="flex flex-col md:flex-row items-center gap-12 group"
            :class="idx % 2 === 1 ? 'md:flex-row-reverse' : ''"
          >
            <div class="w-full md:w-1/2 relative">
              <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-lg relative overflow-hidden group-hover:shadow-xl transition-shadow">
                <img :src="item.image" :alt="t(item.title)" class="w-full h-64 object-cover rounded-xl opacity-90" />
                <div
                  v-if="item.badgeIcon"
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center border-4 border-white shadow-xl"
                >
                  <iconify-icon class="text-3xl text-white" :icon="item.badgeIcon"></iconify-icon>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 text-center md:text-left" :class="idx % 2 === 1 ? 'md:text-right md:pr-10' : 'md:pl-10'">
              <h3 class="text-3xl font-bold text-sg-blue mb-6">{{ t(item.title) }}</h3>
              <p class="text-gray-500 text-xl leading-relaxed">{{ t(item.desc) }}</p>
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
import type { EpPassPageData } from "@/types/epPass"

const data: EpPassPageData = {
  hero: {
    bg: "/img/EP_Banner.jpg",
    title: { zh: "Singapore Employment Pass", en: "Singapore Employment Pass" },
    subtitle: { zh: "精英人才准证 · 移居新加坡的最优路径", en: "Elite Talent Pass · A Preferred Path to Singapore" },
    bullets: [
      { zh: "寻求税务优化与资产配置的企业主及高管", en: "Business owners and executives seeking tax efficiency and asset allocation" },
      { zh: "计划海外拓展与设立总部的企业家", en: "Entrepreneurs planning overseas expansion or regional headquarters" },
      { zh: "重视子女教育、规划家族未来的高净值人士", en: "High-net-worth families focused on education and long-term planning" },
    ],
  },

  policyTitle: { zh: "2026 EP政策最新解读", en: "2026 EP Policy Update" },
  policyCards: [
    {
      title: { zh: "什么是 COMPASS 评估体系？", en: "What Is the COMPASS Framework?" },
      desc: {
        zh: "自 2023 年起，EP 申请需通过互补专才评估框架，从薪资、学历、企业多元化及本地支持等维度综合打分。",
        en: "Since 2023, EP applications must pass the COMPASS framework, which evaluates salary, qualifications, diversity and local support.",
      },
      borderColor: "blue",
    },
    {
      title: { zh: "教育红利与身份同步", en: "Education Benefits with Identity Planning" },
      desc: {
        zh: "持 EP 准证，子女可申请 DP 家属准证，以更低门槛进入新加坡学校体系，并为后续 PR 申请打基础。",
        en: "With EP status, children may obtain Dependant Passes and access Singapore's education system with stronger long-term residency prospects.",
      },
      borderColor: "gold",
    },
  ],
  policyImage: "/img/EP.png",
  policyImageCaption: { zh: "COMPASS评估框架", en: "COMPASS Framework" },

  advantagesTitle: { zh: "为何选择新加坡EP", en: "Why Choose Singapore EP" },
  advantagesSubtitle: { zh: "新加坡为吸引外国专业人才设立的最高等级工作准证", en: "A top-tier work pass designed for global professionals and entrepreneurs" },
  advantagesLeftTitle: { zh: "什么是EP？", en: "What Is EP?" },
  advantagesLeftDesc: {
    zh: "EP 是新加坡为吸引外国专业人才设立的高等级工作准证，也是全球化资产配置与身份规划的重要通道。",
    en: "EP is a high-level work pass for global professionals and a strategic route for residency and international asset planning.",
  },
  advantagesLeftRightsTitle: { zh: "核心权益", en: "Core Benefits" },
  advantagesLeftRights: [
    { zh: "自由通行：无限次进出，最长连续停留可达 2 年", en: "Free travel in and out, with long legal stay duration" },
    { zh: "家庭团聚：配偶、子女可申请 DP，父母可申请 LTVP", en: "Family reunification via Dependant Pass and Long-Term Visit Pass" },
    { zh: "精英教育：子女可衔接新加坡教育体系", en: "Access to Singapore's highly regarded education ecosystem" },
    { zh: "黄金跳板：是申请新加坡 PR 的主要路径之一", en: "A strong pathway toward Singapore PR" },
  ],
  advantagesCards: [
    {
      icon: "ph:piggy-bank-bold",
      title: { zh: "税务避风港", en: "Tax Efficiency" },
      items: [
        { zh: "个税税率相对更优", en: "Competitive personal tax structure" },
        { zh: "企业所得税率稳定", en: "Stable and attractive corporate tax environment" },
        { zh: "更便利地进行国际银行账户配置", en: "Better access to global banking setup" },
        { zh: "适合合规的全球资产布局", en: "Helpful for compliant international asset planning" },
      ],
    },
    {
      icon: "ph:graduation-cap-bold",
      title: { zh: "子女教育及亲属探访", en: "Family & Education" },
      items: [
        { zh: "配偶和子女可申请 DP", en: "Spouse and children may apply for DP" },
        { zh: "父母可申请长期探访准证", en: "Parents may apply for long-term visit arrangements" },
        { zh: "更有利于子女在新加坡学习与适应", en: "Helps children adapt and study in Singapore" },
        { zh: "减少海外教育身份衔接成本", en: "Reduces friction in overseas education planning" },
      ],
    },
    {
      icon: "ph:buildings-bold",
      title: { zh: "企业运营体验", en: "Business Operations" },
      items: [
        { zh: "更便于参与本地公司管理", en: "Greater convenience in local business management" },
        { zh: "提升公司决策与执行效率", en: "Improved speed in decision making and execution" },
        { zh: "更适合总部化与区域化布局", en: "Supports regional expansion and headquarters planning" },
        { zh: "增强企业经营稳定性", en: "Improves operational stability" },
      ],
    },
    {
      icon: "ph:t-shirt-bold",
      title: { zh: "社会福利与生活品质", en: "Quality of Life" },
      items: [
        { zh: "优质医疗与公共服务环境", en: "High-quality healthcare and public services" },
        { zh: "国际化、安全、宜居的城市环境", en: "Safe, international and livable city environment" },
        { zh: "可搭配商业保险完善保障", en: "Insurance options for broader protection" },
        { zh: "更平衡的家庭与事业发展空间", en: "Better balance between family and career planning" },
      ],
    },
  ],

  chooseUsTitle: { zh: "选择我们，快速直达", en: "Why Work With Us" },
  chooseUsFeatures: [
    {
      icon: "ph:door-open-bold",
      title: { zh: "门槛低", en: "Practical Threshold" },
      desc: { zh: "提供专业背景梳理与优化建议，帮助提升匹配度。", en: "We help optimize your profile and application positioning." },
    },
    {
      icon: "ph:clock-countdown-bold",
      title: { zh: "周期短", en: "Faster Timeline" },
      desc: { zh: "团队全程协同推进，缩短从准备到递交的周期。", en: "A coordinated process reduces the end-to-end preparation timeline." },
    },
    {
      icon: "ph:chart-line-up-bold",
      title: { zh: "通过率高", en: "Higher Approval Confidence" },
      desc: { zh: "由资深文案与法律团队协同把控重点环节。", en: "Experienced legal and application teams focus on the critical details." },
    },
    {
      icon: "ph:handshake-bold",
      title: { zh: "一站式全包", en: "One-Stop Service" },
      desc: { zh: "从签证、公司设立到后续安家服务统一协调。", en: "From visa application to company setup and relocation support, all under one workflow." },
    },
  ],

  processTitle: { zh: "标准化一站式办理流程", en: "Standardized End-to-End Process" },
  processSteps: [
    { no: "01", title: { zh: "初步咨询", en: "Initial Consultation" }, desc: { zh: "评估与方案制定", en: "Assessment & planning" }, tone: "blue" },
    { no: "02", title: { zh: "准备签约", en: "Proposal & Engagement" }, desc: { zh: "确认方案，签署协议", en: "Confirm strategy and engagement" }, tone: "gold" },
    { no: "03", title: { zh: "材料准备", en: "Documentation" }, desc: { zh: "我方全程代办新加坡端手续", en: "Prepare and organize key documents" }, tone: "blue" },
    { no: "04", title: { zh: "递交申请", en: "Application Submission" }, desc: { zh: "向新加坡人力部递交", en: "Submit to MOM" }, tone: "gold" },
    { no: "05", title: { zh: "获批领卡", en: "Approval & Issuance" }, desc: { zh: "申请通过并办理领卡", en: "Approval and pass issuance" }, tone: "blue" },
    { no: "06", title: { zh: "安家服务", en: "Settlement Support" }, desc: { zh: "协助开户、家属证件办理等", en: "Banking, relocation and family support" }, tone: "gold" },
  ],

  guaranteeTitle: { zh: "您的安全，我们保障", en: "Your Security, Our Commitment" },
  guarantees: [
    {
      title: { zh: "权威授权", en: "Official Authorization" },
      desc: { zh: "海南盛昌利民为新加坡老牌咨询机构“JK新时代”大中华区唯一总代理。", en: "Authorized cooperation with an established Singapore consulting partner." },
      image: "https://loremflickr.com/1200/800/certificate,document,signature",
      badgeIcon: "ph:certificate-bold",
    },
    {
      title: { zh: "资金合规", en: "Compliance Assurance" },
      desc: { zh: "由专业律所提供全流程合规支持，确保关键环节合法、清晰、可追溯。", en: "Legal professionals support compliance review throughout the process." },
      image: "/img/Law_Firm_Compliance.jpg",
    },
    {
      title: { zh: "行胜于言", en: "Results Matter" },
      desc: { zh: "以真实案例与流程透明度建立信任，并通过清晰服务承诺降低决策风险。", en: "Trust is built through real cases, transparent workflows and clear service commitments." },
      image: "/img/Approved_Documents.jpg",
      badgeIcon: "ph:lock-key-bold",
    },
  ],
}

const injectedLang = inject("lang") as Ref<Lang> | undefined
const lang = computed<Lang>(() => injectedLang?.value ?? "zh")

/**
 * 功能：按当前语言取文案（对模板暴露）。
 */
const t = (text: I18nText) => pickText(text, lang.value)
</script>

<style scoped>
@media (min-width: 1024px) {
  .ep-process-step:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 50%;
    width: calc(100% + 1.5rem);
    border-top: 2px dashed #e5a663;
    z-index: 0;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .ep-process-step:not(:nth-child(3n))::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 50%;
    width: calc(100% + 1.5rem);
    border-top: 2px dashed #e5a663;
    z-index: 0;
  }
}

@media (max-width: 767px) {
  .ep-process-step:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 4rem;
    left: 50%;
    height: calc(100% - 2rem);
    border-left: 2px dashed #e5a663;
    z-index: 0;
  }
}
</style>

