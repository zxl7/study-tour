<template>
  <nav class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20" style="background-color: #fff">
    <div class="max-w-[1440px] mx-auto h-full flex items-center justify-between px-8">
      <router-link to="/home" class="flex items-center space-x-2 cursor-pointer transition-opacity hover:opacity-80">
        <img src="/img/logo.jpg" alt="logo" class="w-10 h-10" />

        <div class="flex flex-col">
          <span class="text-xl font-bold text-sg-blue tracking-wider">{{ pick(brandName) }}</span>
          <span class="text-[10px] text-luxury-gold tracking-widest uppercase font-semibold">Shengchang Limin · Singapore Study Tour</span>
        </div>
      </router-link>
      <div class="flex items-center space-x-10 font-medium">
        <router-link v-for="item in navItems" :key="item.to" class="nav-link text-gray-600 hover:text-sg-blue" active-class="text-sg-blue" :to="item.to">
          {{ pick(item.label) }}
        </router-link>
      </div>
      <div class="flex items-center space-x-4">
        <div class="text-right mr-4 border-r pr-4 border-gray-200">
          <p class="text-xs text-gray-400">{{ pick(hotlineLabel) }}</p>
          <p class="text-lg font-bold text-sg-blue">0898-65392581</p>
        </div>

        <button type="button" @click="openContactModal" class="bg-luxury-gold hover:bg-[#d49552] text-white px-6 py-2.5 rounded shadow-lg transition-all font-semibold">
          {{ pick(contactCta) }}
        </button>
        <!-- <button
          type="button"
          @click="toggleLang"
          class="border border-gray-200 hover:border-sg-blue text-gray-600 hover:text-sg-blue px-3 py-2 rounded transition-all text-sm font-semibold"
          title="切换语言 / Switch language">
          {{ lang === "zh" ? "EN" : "中文" }}
        </button> -->
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, inject } from "vue"
import { pickText, type I18nText, type Lang } from "@/i18n/types"

const openContactModal = inject("openContactModal") as () => void

const injectedLang = inject("lang") as { value: Lang } | undefined
const injectedToggle = inject("toggleLang") as (() => void) | undefined

const lang = computed<Lang>(() => injectedLang?.value ?? "zh")
const toggleLang = () => injectedToggle?.()
console.log("%c Line:49 🍬 toggleLang", "color:#2eafb0", toggleLang);

/**
 * 功能：按当前语言取文案（对模板暴露）。
 */
const pick = (text: I18nText) => pickText(text, lang.value)

const brandName: I18nText = {
  zh: "盛昌利民 · 狮城研学",
  en: "盛昌利民 · 狮城研学",
}

const hotlineLabel: I18nText = {
  zh: "全国服务咨询热线",
  en: "Hotline",
}

const contactCta: I18nText = {
  zh: "立即预约咨询",
  en: "Book a Consultation",
}

const navItems: Array<{ to: string; label: I18nText }> = [
  { to: "/home", label: { zh: "首页", en: "Home" } },
  { to: "/growth-camp", label: { zh: "新加坡成长营", en: "Growth Camp" } },
  { to: "/mini-study", label: { zh: "新加坡微留学", en: "Mini Study" } },
  { to: "/ep-pass", label: { zh: "人才准证EP", en: "EP Pass" } },
  { to: "/school-camp", label: { zh: "国际学校体验营", en: "School Camp" } },
]
</script>
