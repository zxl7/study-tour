<template>
  <DocPage :data="data" />
</template>

<script setup lang="ts">
import DocPage from "@/components/DocPage.vue"
import type { DocPageData } from "@/types/docPage"

const data: DocPageData = {
  title: { zh: "隐私保护政策", en: "Privacy Policy" },
  icon: "ph:shield-check-bold",
  variant: "card",
  sections: [
    {
      title: { zh: "信息收集", en: "Information Collection" },
      content: {
        zh: "我们仅在您主动提交咨询表单、评估需求时收集必要的个人信息（如姓名、联系方式、孩子年龄、教育背景等），用于提供定制化服务方案。",
        en: "We collect only the necessary personal information when you actively submit inquiries or evaluation requests, such as your name, contact details and education-related background.",
      },
    },
    {
      title: { zh: "信息使用", en: "Use of Information" },
      content: {
        zh: "您的个人信息将严格保密，仅用于内部顾问团队的业务评估与联络。我们不会向任何第三方出售、出租或交易您的个人数据。",
        en: "Your personal information is kept confidential and used only by our internal team for assessment and communication. We do not sell, rent or trade your data to third parties.",
      },
    },
    {
      title: { zh: "数据安全", en: "Data Security" },
      content: {
        zh: "我们采用行业标准的安全技术和内部管理制度，防止您的个人信息泄露、毁损或丢失。涉及核心身份规划材料时将受更严格的保密协议保护。",
        en: "We adopt industry-standard technical and internal safeguards to prevent leakage, damage or loss of data. Sensitive materials are subject to stricter confidentiality protection.",
      },
    },
    {
      title: { zh: "您的权利", en: "Your Rights" },
      content: {
        zh: "您有权要求查看、修改或删除我们保存的个人信息。如需操作，请联系我们的客服专员。",
        en: "You may request access to, correction of or deletion of your stored personal data by contacting our service team.",
      },
    },
  ],
}
</script>
