<template>
  <div class="py-24 px-8 max-w-[1000px] mx-auto">
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-sg-blue mb-6">{{ t(data.title) }}</h1>
      <p class="text-gray-500 text-lg">{{ t(data.subtitle) }}</p>
    </div>
    <div class="space-y-6 relative">
      <div class="absolute left-14 top-10 bottom-10 w-1 bg-blue-100 hidden md:block"></div>

      <div
        v-for="step in data.steps"
        :key="step.no"
        class="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl flex flex-col md:flex-row items-start md:items-center relative z-10 hover:border-sg-blue transition-colors"
      >
        <div
          class="w-16 h-16 text-white rounded-2xl flex items-center justify-center font-bold mb-4 md:mb-0 md:mr-8 text-2xl shadow-md shrink-0"
          :class="step.tone === 'gold' ? 'bg-luxury-gold' : 'bg-sg-blue'"
        >
          {{ step.no }}
        </div>
        <div>
          <h3 class="font-bold text-2xl mb-2 text-gray-800">{{ t(step.title) }}</h3>
          <p class="text-gray-500 leading-relaxed">{{ t(step.desc) }}</p>
        </div>
      </div>
    </div>

    <div v-if="data.cta" class="mt-12 text-center">
      <button
        type="button"
        @click="openContactModal"
        class="bg-luxury-gold text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-600 transition-colors shadow-lg"
      >
        {{ t(data.cta) }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue"
import type { Ref } from "vue"
import { pickText, type I18nText, type Lang } from "@/i18n/types"
import type { ProcessPageData } from "@/types/simplePages"

defineProps<{
  data: ProcessPageData
}>()

const openContactModal = inject("openContactModal") as (() => void) | undefined
const injectedLang = inject("lang") as Ref<Lang> | undefined
const lang = computed<Lang>(() => injectedLang?.value ?? "zh")
const t = (text: I18nText) => pickText(text, lang.value)
</script>

