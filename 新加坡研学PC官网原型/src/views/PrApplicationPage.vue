<template>
  <ProcessStepsPage :data="data" />
</template>

<script setup lang="ts">
import ProcessStepsPage from "@/components/ProcessStepsPage.vue"
import type { ProcessPageData } from "@/types/simplePages"

const data: ProcessPageData = {
  title: { zh: "新加坡 PR 永居申请", en: "Singapore PR Application" },
  subtitle: {
    zh: "量身定制移民方案，助力全家扎根狮城",
    en: "Tailored immigration planning to help your family settle in Singapore.",
  },
  steps: [
    {
      no: "1",
      tone: "blue",
      title: { zh: "深度背景评估", en: "In-Depth Profile Assessment" },
      desc: {
        zh: "全面分析教育背景、行业经验、薪资水平及在新停留时间，制定专属申请策略。",
        en: "Assess education, experience, salary level and time spent in Singapore to build a tailored PR strategy.",
      },
    },
    {
      no: "2",
      tone: "blue",
      title: { zh: "申请材料精修", en: "Application Materials Refinement" },
      desc: {
        zh: "深挖个人与家庭亮点，撰写更有说服力的自荐信与社会贡献材料。",
        en: "Refine the full application package, including cover letters and supporting contribution narratives.",
      },
    },
    {
      no: "3",
      tone: "blue",
      title: { zh: "ICA系统递交", en: "ICA Submission" },
      desc: {
        zh: "全程代办 ICA 在线递交与状态跟踪，必要时协助补件。",
        en: "Handle ICA submission, status follow-up and any required supplementary documentation.",
      },
    },
    {
      no: "4",
      tone: "blue",
      title: { zh: "获批及手续办理", en: "Approval & Final Processing" },
      desc: {
        zh: "协助预约体检及面签，完成最终 PR 手续，顺利领取新加坡蓝卡。",
        en: "Support medical check, appointments and final PR completion steps after approval.",
      },
    },
  ],
  cta: { zh: "获取PR评估", en: "Get PR Assessment" },
}
</script>
