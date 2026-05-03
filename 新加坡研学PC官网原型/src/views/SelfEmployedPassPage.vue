<template>
  <ProcessStepsPage :data="data" />
</template>

<script setup lang="ts">
import ProcessStepsPage from "@/components/ProcessStepsPage.vue"
import type { ProcessPageData } from "@/types/simplePages"

const data: ProcessPageData = {
  title: { zh: "自雇准证办理 (Self-Employed EP)", en: "Self-Employed EP" },
  subtitle: {
    zh: "快速落地新加坡，拓展海外业务版图，全家获取居住身份",
    en: "Land in Singapore faster, expand overseas and secure family residency planning.",
  },
  steps: [
    {
      no: "1",
      tone: "blue",
      title: { zh: "商业企划与公司注册", en: "Business Planning & Company Setup" },
      desc: {
        zh: "协助撰写符合 MOM 要求的商业计划书，并完成公司注册、秘书服务及企业账户开立。",
        en: "Prepare a MOM-aligned business plan and complete company incorporation, secretarial services and bank account setup.",
      },
    },
    {
      no: "2",
      tone: "gold",
      title: { zh: "准证材料准备与递交", en: "Application Preparation & Submission" },
      desc: {
        zh: "根据背景进行 COMPASS 评估及提分指导，整理全套材料并向 MOM 正式递交。",
        en: "Assess your COMPASS profile, optimize key points and prepare a complete submission to MOM.",
      },
    },
    {
      no: "3",
      tone: "blue",
      title: { zh: "获批与家属准证办理", en: "Approval & Family Passes" },
      desc: {
        zh: "跟踪审批进度，安排登录制卡，并协助配偶、子女及父母办理相关家属证件。",
        en: "Track approval, complete card issuance and support family pass arrangements for spouse, children and parents.",
      },
    },
  ],
  cta: { zh: "获取方案评估", en: "Get an Assessment" },
}
</script>
