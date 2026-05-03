<template>
  <div class="py-24 px-8 max-w-[1000px] mx-auto text-center">
    <iconify-icon icon="ph:handshake-bold" class="text-7xl text-luxury-gold mb-6"></iconify-icon>
    <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ t(data.heroTitle) }}</h1>
    <p class="text-xl text-gray-500 mb-16 max-w-2xl mx-auto">{{ t(data.heroDesc) }}</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
      <div class="bg-sg-blue text-white p-10 rounded-3xl shadow-xl">
        <h3 class="text-2xl font-bold mb-6">{{ t(data.channelTitle) }}</h3>
        <p class="text-blue-100 mb-8 leading-relaxed">{{ t(data.channelDesc) }}</p>
        <ul class="space-y-3 mb-8">
          <li v-for="item in data.features" :key="t(item)" class="flex items-center">
            <iconify-icon icon="ph:check-circle" class="mr-2"></iconify-icon>
            {{ t(item) }}
          </li>
        </ul>
        <button
          type="button"
          @click="openContactModal"
          class="bg-white text-sg-blue font-bold px-6 py-3 rounded-lg w-full hover:bg-gray-100 transition-colors"
        >
          {{ t(data.channelCta) }}
        </button>
      </div>

      <div class="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        <h3 class="text-2xl font-bold mb-6 text-sg-blue">{{ t(data.contactTitle) }}</h3>
        <div class="space-y-6 text-gray-600">
          <div class="flex items-start">
            <iconify-icon icon="ph:phone-call-fill" class="text-2xl text-luxury-gold mr-4 mt-1"></iconify-icon>
            <div>
              <p class="font-bold text-gray-800">{{ t(data.hotlineLabel) }}</p>
              <p>{{ data.hotlineValue }}</p>
            </div>
          </div>
          <div class="flex items-start">
            <iconify-icon icon="ph:envelope-simple-fill" class="text-2xl text-luxury-gold mr-4 mt-1"></iconify-icon>
            <div>
              <p class="font-bold text-gray-800">{{ t(data.emailLabel) }}</p>
              <p>{{ data.emailValue }}</p>
            </div>
          </div>
          <div class="flex items-start">
            <iconify-icon icon="ph:map-pin-fill" class="text-2xl text-luxury-gold mr-4 mt-1"></iconify-icon>
            <div>
              <p class="font-bold text-gray-800">{{ t(data.addressLabel) }}</p>
              <p>{{ t(data.addressValue) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue"
import type { Ref } from "vue"
import { pickText, type I18nText, type Lang } from "@/i18n/types"
import type { PartnershipPageData } from "@/types/simplePages"

const data: PartnershipPageData = {
  heroTitle: { zh: "合作与咨询", en: "Partnership & Consulting" },
  heroDesc: {
    zh: "我们期待与国内外优秀的教育机构、留学中介、财富管理机构及各界伙伴建立长期共赢的合作关系。",
    en: "We welcome long-term partnerships with education institutions, agencies and wealth management partners worldwide.",
  },
  channelTitle: { zh: "成为渠道代理", en: "Become a Channel Partner" },
  channelDesc: {
    zh: "依托我们强大的新加坡本土资源和履约能力，为您拓展高净值客户服务边界。我们提供丰厚的佣金回报与全套业务培训。",
    en: "Leverage our Singapore-based resources and delivery capability to expand premium client services with clear incentives and training support.",
  },
  features: [
    { zh: "共享狮城教育资源", en: "Shared Singapore education resources" },
    { zh: "专属渠道经理对接", en: "Dedicated channel manager support" },
    { zh: "丰厚透明的返佣机制", en: "Transparent and attractive commission structure" },
  ],
  channelCta: { zh: "申请渠道合作", en: "Apply for Partnership" },
  contactTitle: { zh: "联系方式", en: "Contact" },
  hotlineLabel: { zh: "服务热线", en: "Hotline" },
  hotlineValue: "0898-65392581 (全国服务咨询热线)",
  emailLabel: { zh: "商务邮箱", en: "Business Email" },
  emailValue: "shengchanglimin@163.com",
  addressLabel: { zh: "公司地址", en: "Office Address" },
  addressValue: {
    zh: "海南省海口市美兰区国兴大道15A号全球贸易之窗30楼",
    en: "30F, Global Trade Window, 15A Guoxing Avenue, Meilan District, Haikou, Hainan",
  },
}

const openContactModal = inject("openContactModal") as (() => void) | undefined
const injectedLang = inject("lang") as Ref<Lang> | undefined
const lang = computed<Lang>(() => injectedLang?.value ?? "zh")
const t = (text: I18nText) => pickText(text, lang.value)
</script>

