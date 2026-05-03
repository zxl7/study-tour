<template>
  <div class="py-24 px-8 max-w-[1200px] mx-auto text-center">
    <h1 class="text-4xl font-bold text-sg-blue mb-8">{{ t(data.title) }}</h1>
    <div class="w-20 h-1 bg-luxury-gold mx-auto mb-12"></div>
    <p class="text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
      {{ t(data.introA) }}
    </p>
    <p class="text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
      {{ t(data.introB) }}
    </p>

    <section class="py-16">
      <div class="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article
          v-for="card in data.cards"
          :key="t(card.title)"
          class="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
        >
          <h2 class="text-2xl font-bold text-sg-blue mb-4">{{ t(card.title) }}</h2>
          <p class="text-gray-600 leading-relaxed">{{ t(card.desc) }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue"
import type { Ref } from "vue"
import { pickText, type I18nText, type Lang } from "@/i18n/types"
import type { AboutPageData } from "@/types/aboutFooter"

const data: AboutPageData = {
  title: { zh: "集团简介", en: "About Us" },
  introA: {
    zh: "海南盛昌利民传媒有限公司致力于为家庭与学生提供专业、高效、值得信赖的一站式留学与移民支持服务。依托本地化服务优势及丰富的合作资源，我们帮助客户明确发展方向，享受安心的办理过程，并获得切实落地的服务体验。",
    en: "Hainan Shengchang Limin is committed to providing professional, efficient and trustworthy one-stop education and immigration support for families and students.",
  },
  introB: {
    zh: "核心服务覆盖从幼儿园到大学的升学规划、身份规划、签证申请、出行安排、职业发展及企业出海等全流程需求。公司始终秉持专业、诚信与责任，陪伴客户从咨询、申请到落地衔接的每一步。",
    en: "Our services span study planning, identity planning, visa support, travel arrangements, career development and business expansion with a practical and responsible approach.",
  },
  cards: [
    {
      title: { zh: "服务定位", en: "Service Positioning" },
      desc: {
        zh: "坚持教育目标与家庭需求并重，围绕“可落地、可执行、可持续”设计方案，避免短期化决策。",
        en: "We balance education goals with family needs and build plans that are practical, executable and sustainable.",
      },
    },
    {
      title: { zh: "团队协同", en: "Team Collaboration" },
      desc: {
        zh: "国内顾问与新加坡在地执行团队联动，覆盖前期评估、材料准备、申请执行与后续跟踪。",
        en: "China-based advisors and Singapore-based execution teams work together across assessment, documentation and delivery.",
      },
    },
    {
      title: { zh: "价值标准", en: "Value Standard" },
      desc: {
        zh: "以透明流程、真实反馈和责任交付为底线，持续优化服务体验与结果质量。",
        en: "We value transparent workflows, honest feedback and responsible delivery to continuously improve outcomes.",
      },
    },
  ],
}

const injectedLang = inject("lang") as Ref<Lang> | undefined
const lang = computed<Lang>(() => injectedLang?.value ?? "zh")
const t = (text: I18nText) => pickText(text, lang.value)
</script>

