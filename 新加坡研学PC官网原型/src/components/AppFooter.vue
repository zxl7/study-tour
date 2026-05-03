<template>
  <footer class="bg-gray-900 text-gray-400 py-8">
    <div class="max-w-[1440px] mx-auto px-8">
      <div class="grid grid-cols-1 gap-12 mb-8 md:grid-cols-2 xl:grid-cols-5">
        <div class="xl:col-span-2">
          <div class="flex items-center space-x-2 mb-8">
            <img src="/img/logo.jpg" alt="logo" class="w-6 h-6 rounded-sm" />
            <span class="text-xl font-bold text-white tracking-wider">{{ t(data.brandName) }}</span>
          </div>
          <p class="leading-relaxed mb-8 max-w-[520px] xl:pr-12">
            {{ t(data.brandDesc) }}
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              v-for="social in data.socials"
              :key="social.icon"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sg-blue transition-all"
              :href="social.href"
              :aria-label="t(social.label)"
              :title="t(social.label)">
              <iconify-icon :icon="social.icon"></iconify-icon>
            </a>
          </div>
        </div>

        <div v-for="group in data.linkGroups" :key="t(group.title)">
          <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-sm">{{ t(group.title) }}</h4>
          <ul class="space-y-4">
            <li v-for="link in group.links" :key="link.to">
              <router-link class="hover:text-luxury-gold transition-all" :to="link.to">
                {{ t(link.label) }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-gray-800 text-sm flex flex-col gap-3 items-center justify-center md:flex-row">
        <span>{{ data.icp }}</span>
        <span class="hidden md:inline">·</span>
        <p>{{ t(data.copyright) }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, inject } from "vue"
import type { Ref } from "vue"
import { pickText, type I18nText, type Lang } from "@/i18n/types"
import type { FooterData } from "@/types/aboutFooter"

const data: FooterData = {
  brandName: { zh: "盛昌利民 · 狮城研学", en: "Shengchang Limin · SG Study" },
  brandDesc: {
    zh: "作为海南领先的精英教育咨询机构，我们致力于整合全球优质教育资源，为中国家庭提供全方位的研学、升学及移民规划服务。",
    en: "We integrate global education resources to provide study tours, admissions planning and immigration support for Chinese families.",
  },
  socials: [
    { icon: "ri:wechat-fill", href: "#", label: { zh: "微信", en: "WeChat" } },
    { icon: "ri:qq-fill", href: "#", label: { zh: "QQ", en: "QQ" } },
    { icon: "ri:instagram-fill", href: "#", label: { zh: "Instagram", en: "Instagram" } },
  ],
  linkGroups: [
    {
      title: { zh: "研学项目", en: "Programs" },
      links: [
        { to: "/growth-camp", label: { zh: "新加坡成长营", en: "Growth Camp" } },
        { to: "/mini-study", label: { zh: "新加坡微留学", en: "Mini Study" } },
        { to: "/school-camp", label: { zh: "国际学校体验营", en: "School Camp" } },
      ],
    },
    {
      title: { zh: "教育移民", en: "Identity Planning" },
      links: [
        { to: "/ep-pass", label: { zh: "人才准证 EP", en: "EP Pass" } },
        { to: "/family-office", label: { zh: "家族办公室", en: "Family Office" } },
        { to: "/self-employed-pass", label: { zh: "自雇准证办理", en: "Self-Employed EP" } },
        { to: "/pr-application", label: { zh: "PR 永居申请", en: "PR Application" } },
      ],
    },
    {
      title: { zh: "关于我们", en: "About" },
      links: [
        { to: "/about", label: { zh: "集团简介", en: "About Us" } },
        { to: "/terms", label: { zh: "服务条款", en: "Terms" } },
        { to: "/privacy", label: { zh: "隐私政策", en: "Privacy" } },
        { to: "/partnership", label: { zh: "合作咨询", en: "Partnership" } },
      ],
    },
  ],
  icp: "琼ICP备2026005428号-1",
  copyright: {
    zh: "2026 盛昌利民 · 狮城研学",
    en: "2026 Shengchang Limin · SG Study",
  },
}

const injectedLang = inject("lang") as Ref<Lang> | undefined
const lang = computed<Lang>(() => injectedLang?.value ?? "zh")

/**
 * 功能：根据当前语言返回底部文案（纯函数包装，便于模板直接调用）。
 * @param text 双语文案
 */
const t = (text: I18nText) => pickText(text, lang.value)
</script>
