<template>
  <div
    class="py-24 px-8 max-w-[900px] mx-auto"
    :class="data.variant === 'card' ? 'bg-slate-50 rounded-3xl mt-10 mb-20 shadow-sm border border-slate-100' : 'bg-white'"
  >
    <h1
      class="text-3xl font-bold mb-10"
      :class="data.variant === 'card' ? 'text-sg-blue flex items-center' : 'text-gray-900 border-b pb-4'"
    >
      <iconify-icon v-if="data.icon" :icon="data.icon" class="mr-3 text-4xl"></iconify-icon>
      {{ t(data.title) }}
    </h1>

    <div v-if="data.variant === 'plain'" class="prose prose-slate max-w-none text-gray-600 space-y-6">
      <p v-if="data.subtitle">{{ t(data.subtitle) }}</p>
      <template v-for="section in data.sections" :key="t(section.title)">
        <h3 class="text-xl font-bold text-gray-800 mt-8">{{ t(section.title) }}</h3>
        <p>{{ t(section.content) }}</p>
      </template>
      <p v-if="data.footerNote" class="text-sm text-gray-400 mt-12 pt-8 border-t">{{ t(data.footerNote) }}</p>
    </div>

    <div v-else class="space-y-8 text-gray-600">
      <div v-for="section in data.sections" :key="t(section.title)" class="bg-white p-6 rounded-xl shadow-sm">
        <h3 class="text-lg font-bold text-gray-800 mb-3">{{ t(section.title) }}</h3>
        <p>{{ t(section.content) }}</p>
      </div>
      <p v-if="data.footerNote" class="text-sm text-gray-400 pt-6 border-t">{{ t(data.footerNote) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue"
import type { Ref } from "vue"
import { pickText, type I18nText, type Lang } from "@/i18n/types"
import type { DocPageData } from "@/types/docPage"

defineProps<{
  data: DocPageData
}>()

const injectedLang = inject("lang") as Ref<Lang> | undefined
const lang = computed<Lang>(() => injectedLang?.value ?? "zh")
const t = (text: I18nText) => pickText(text, lang.value)
</script>

