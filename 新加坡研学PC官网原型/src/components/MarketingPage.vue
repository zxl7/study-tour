<template>
  <div class="page-container">
    <!-- Hero -->
    <header class="relative pt-20 h-[500px] flex items-center text-white overflow-hidden">
      <img
        :alt="t(data.hero.title)"
        class="absolute inset-0 w-full h-full object-cover"
        :src="data.hero.bg"
      />
      <div class="absolute inset-0 bg-teal-900/60"></div>
      <div class="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <h1 class="text-5xl font-bold mb-6">{{ t(data.hero.title) }}</h1>
        <p v-if="data.hero.subtitle" class="text-2xl text-teal-50 italic mb-8">
          {{ t(data.hero.subtitle) }}
        </p>
        <div v-if="data.hero.tags?.length" class="flex space-x-4">
          <span
            v-for="tag in data.hero.tags"
            :key="t(tag)"
            class="bg-white/20 px-4 py-1 rounded-full border border-white/40"
          >
            {{ t(tag) }}
          </span>
        </div>
      </div>
    </header>

    <!-- 国际学校插班课程 -->
    <section v-if="data.courseSection" class="py-24 bg-white relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">{{ t(data.courseSection.title) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <div v-if="data.courseSection.badges?.length" class="flex justify-center gap-4 mb-8">
            <span
              v-for="b in data.courseSection.badges"
              :key="t(b)"
              class="bg-blue-50 text-sg-blue px-4 py-1.5 rounded-full text-sm font-bold shadow-sm"
            >
              {{ t(b) }}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            v-for="card in data.courseSection.cards"
            :key="t(card.title)"
            class="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-luxury-gold text-white rounded-xl flex items-center justify-center mr-4">
                <iconify-icon class="text-2xl" :icon="card.icon"></iconify-icon>
              </div>
              <h3 class="text-2xl font-bold text-sg-blue">{{ t(card.title) }}</h3>
            </div>
            <p class="text-gray-600 mb-8 leading-relaxed">{{ t(card.desc) }}</p>
            <div class="grid grid-cols-2 gap-4">
              <img :src="card.images.left" alt="" class="w-full h-40 object-cover rounded-xl shadow-md" />
              <img :src="card.images.right" alt="" class="w-full h-40 object-cover rounded-xl shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 国际学校同步课程 -->
    <section v-if="data.syncSection" class="py-16 bg-sg-blue relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">{{ t(data.syncSection.title) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="card in data.syncSection.cards"
            :key="t(card.title)"
            class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-white"
          >
            <div class="flex items-center mb-6">
              <iconify-icon class="text-3xl text-luxury-gold mr-3" :icon="card.icon"></iconify-icon>
              <h3 class="text-2xl font-bold">{{ t(card.title) }}</h3>
            </div>
            <p class="text-blue-100 mb-6 leading-relaxed">{{ t(card.desc) }}</p>
            <img :src="card.image" alt="" class="w-full h-48 object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- 行程样例 -->
    <section v-if="data.timelineSection" class="py-24 bg-slate-50 relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">{{ t(data.timelineSection.title) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p v-if="data.timelineSection.subtitle" class="text-gray-500 italic text-lg">
            {{ t(data.timelineSection.subtitle) }}
          </p>
        </div>

        <div class="relative max-w-5xl mx-auto">
          <div class="timeline-line"></div>

          <div class="space-y-16">
            <div
              v-for="(d, idx) in data.timelineSection.days"
              :key="d.day"
              class="flex flex-col md:flex-row items-center justify-between relative group"
              :class="idx % 2 === 1 ? 'md:flex-row-reverse' : ''"
            >
              <div
                class="hidden md:block w-5/12"
                :class="idx % 2 === 1 ? 'text-left pl-12' : 'text-right pr-12'"
              >
                <div v-if="d.images?.length" class="grid grid-cols-2 gap-2">
                  <img
                    v-for="img in d.images.slice(0, 2)"
                    :key="img"
                    :src="img"
                    alt=""
                    class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div class="timeline-dot"></div>

              <div
                class="w-full md:w-5/12 pl-20 md:pl-12"
                :class="idx % 2 === 1 ? 'md:pr-12 md:pl-0 text-left md:text-right' : ''"
              >
                <h3 class="text-3xl font-bold text-luxury-gold mb-2" style="font-family: serif">
                  {{ d.day }}
                </h3>
                <h4 class="text-xl font-bold text-sg-blue mb-3">【{{ t(d.title) }}】</h4>
                <p class="text-gray-600 leading-relaxed">{{ t(d.desc) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 美食 & 酒店 -->
    <section v-if="data.cuisineHotelSection" class="py-24 bg-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-1/3 h-full bg-blue-50/50 rounded-r-[200px] z-0"></div>
      <div class="absolute top-1/4 -left-20 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl z-0"></div>

      <div class="max-w-[1440px] mx-auto px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div class="lg:col-span-7">
            <div class="mb-16">
              <p class="text-sg-blue font-bold tracking-widest uppercase mb-2 text-xl">
                {{ t(data.cuisineHotelSection.eyebrow) }}
              </p>
              <h2 class="text-5xl font-bold text-sg-blue mb-6">{{ t(data.cuisineHotelSection.title) }}</h2>
              <p class="text-gray-600 text-lg leading-relaxed">{{ t(data.cuisineHotelSection.desc) }}</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              <div v-for="c in data.cuisineHotelSection.cuisines" :key="t(c.name)" class="text-center group">
                <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-luxury-gold shadow-lg mb-4">
                  <img :src="c.image" alt="" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 class="font-bold text-sg-blue">{{ t(c.name) }}</h4>
              </div>
            </div>

            <div>
              <p class="text-sg-blue font-bold tracking-widest uppercase mb-2 text-xl">COOPERATIVE HOTELS</p>
              <h2 class="text-4xl font-bold text-sg-blue mb-8">{{ t(data.cuisineHotelSection.hotelsTitle) }}</h2>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div
                  v-for="h in data.cuisineHotelSection.hotels"
                  :key="t(h.name)"
                  class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-all duration-300"
                >
                  <img
                    :src="`https://www.google.com/s2/favicons?sz=128&domain=${h.faviconDomain}`"
                    alt=""
                    class="h-10 w-10 mx-auto object-contain mb-3"
                  />
                  <div class="font-bold text-sm text-gray-700">{{ t(h.name) }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 relative">
            <div class="h-full w-full rounded-[40px] overflow-hidden shadow-2xl relative">
              <img :src="data.cuisineHotelSection.highlightImage" alt="" class="w-full h-full object-cover min-h-[600px]" />
              <div class="absolute inset-0 bg-gradient-to-t from-sg-blue/90 via-sg-blue/40 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-10 text-white">
                <p class="font-bold text-luxury-gold tracking-widest mb-2 text-sm">UNESCO</p>
                <h3 class="text-4xl font-bold mb-4">
                  {{ t(data.cuisineHotelSection.highlightTitle) }}
                </h3>
                <div class="w-12 h-1 bg-luxury-gold mb-6"></div>
                <p class="text-white/90 leading-relaxed text-sm">
                  {{ t(data.cuisineHotelSection.highlightDesc) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 收费 -->
    <section v-if="data.pricingSection" class="py-24 bg-teal-900 text-white">
      <div class="max-w-[1440px] mx-auto px-8 text-center">
        <h2 class="text-4xl font-bold mb-10 text-luxury-gold">{{ t(data.pricingSection.title) }}</h2>
        <div class="bg-white text-gray-800 p-12 rounded-3xl max-w-2xl mx-auto shadow-2xl">
          <p class="text-5xl font-black text-sg-blue mb-4">
            {{ t(data.pricingSection.price) }}
            <span class="text-lg">{{ t(data.pricingSection.unit) }}</span>
          </p>
          <div class="grid grid-cols-2 gap-6 text-left mb-10">
            <div v-for="f in data.pricingSection.features" :key="t(f)" class="flex items-center">
              <iconify-icon class="text-teal-600 mr-2" icon="ph:check-circle-bold"></iconify-icon>
              {{ t(f) }}
            </div>
          </div>
          <button
            type="button"
            @click="openContactModal"
            class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl text-xl shadow-lg transition-all"
          >
            {{ t(data.pricingSection.cta) }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue"
import type { Ref } from "vue"
import { pickText, type I18nText, type Lang } from "@/i18n/types"
import type { MarketingPageData } from "@/types/marketing"

defineProps<{
  data: MarketingPageData
}>()

const openContactModal = inject("openContactModal") as (() => void) | undefined

const injectedLang = inject("lang") as Ref<Lang> | undefined
const lang = computed<Lang>(() => injectedLang?.value ?? "zh")

/**
 * 功能：按当前语言取文案（对模板暴露）。
 */
const t = (text: I18nText) => pickText(text, lang.value)
</script>

<style scoped>
.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2rem;
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(229, 166, 99, 0.2),
    rgba(229, 166, 99, 0.65),
    rgba(229, 166, 99, 0.2)
  );
  z-index: 1;
}

.timeline-dot {
  position: absolute;
  left: 2rem;
  width: 1.25rem;
  height: 1.25rem;
  transform: translateX(-50%);
  border-radius: 9999px;
  background-color: #e5a663;
  border: 4px solid #ffffff;
  box-shadow: 0 8px 16px rgba(0, 90, 156, 0.15);
  z-index: 10;
}

@media (min-width: 768px) {
  .timeline-line {
    left: 50%;
    transform: translateX(-50%);
  }

  .timeline-dot {
    left: 50%;
  }
}
</style>

