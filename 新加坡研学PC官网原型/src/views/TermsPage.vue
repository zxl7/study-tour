<template>
  <DocPage :data="data" />
</template>

<script setup lang="ts">
import DocPage from "@/components/DocPage.vue"
import type { DocPageData } from "@/types/docPage"

const data: DocPageData = {
  title: { zh: "服务条款", en: "Terms of Service" },
  subtitle: {
    zh: "欢迎访问盛昌利民·狮城研学官方网站。在使用我们的服务之前，请您仔细阅读以下条款。",
    en: "Welcome to Shengchang Limin · SG Study. Please read the following terms carefully before using our services.",
  },
  variant: "plain",
  sections: [
    {
      title: { zh: "1. 服务内容", en: "1. Services" },
      content: {
        zh: "我们提供包括但不限于新加坡研学营、微留学、国际学校体验、家族办公室设立、自雇准证办理及PR申请咨询等服务。具体服务内容以双方签订的正式合同为准。",
        en: "Our services may include study camps, mini study programs, international school visits, family office setup, self-employed EP and PR consultation. Specific service scope is subject to signed agreements.",
      },
    },
    {
      title: { zh: "2. 用户责任", en: "2. User Responsibilities" },
      content: {
        zh: "用户在提交咨询或办理业务时，应保证所提供的信息真实、准确、完整。因提供虚假信息导致服务延误或被拒的，责任由用户自行承担。",
        en: "Users must provide truthful, accurate and complete information. Any delay or refusal caused by inaccurate or false information shall be borne by the user.",
      },
    },
    {
      title: { zh: "3. 费用与退款", en: "3. Fees and Refunds" },
      content: {
        zh: "各项服务收费会在签约前明确告知。如遇不可抗力或触发合同中的兜底条款，退款将按双方约定执行。",
        en: "Fees will be clearly communicated before engagement. Refunds, where applicable, are handled based on contract terms and relevant force majeure clauses.",
      },
    },
    {
      title: { zh: "4. 知识产权", en: "4. Intellectual Property" },
      content: {
        zh: "本网站中的文字、图片、Logo 及版面设计等内容版权均归盛昌利民所有。未经书面授权，任何人不得转载或使用。",
        en: "All content on this website, including text, images, logos and layout design, is owned by Shengchang Limin and may not be reused without written authorization.",
      },
    },
  ],
  footerNote: { zh: "最后更新日期：2026年1月1日", en: "Last updated: January 1, 2026" },
}
</script>
