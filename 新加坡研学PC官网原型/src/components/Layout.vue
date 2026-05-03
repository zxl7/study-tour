<template>
  <div class="app-layout">
    <AppHeader />

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="cross-fade">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </main>

    <AppFooter />
    
    <ContactModal :visible="isContactModalVisible" @close="isContactModalVisible = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from "vue"
import { useRoute } from "vue-router"
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import ContactModal from '@/components/ContactModal.vue'
import { pickText } from "@/i18n/types"
import type { I18nText } from "@/i18n/types"
import { useLang } from "@/i18n/useLang"

const isContactModalVisible = ref(false)

const openContactModal = () => {
  isContactModalVisible.value = true
}

provide('openContactModal', openContactModal)

// ======
// 简易双语：在 Layout 提供全局语言状态，子组件（如 AppHeader）通过 inject 获取
// ======
const { lang, setLang, toggleLang } = useLang()
provide("lang", lang)
provide("setLang", setLang)
provide("toggleLang", toggleLang)

/**
 * 功能：根据路由 meta.title 更新 document.title。
 * 说明：当语言切换时也会触发更新（不需要更换 URL）。
 */
const route = useRoute()
watch(
  [() => route.meta?.title, lang],
  ([title]) => {
    if (!title) return
    if (typeof title === "string") {
      document.title = title
      return
    }
    document.title = pickText(title as I18nText, lang.value)
  },
  { immediate: true }
)
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  /* 采用 Grid 布局，使新旧组件在同一区域叠加 */
  display: grid;
}

.main-content > * {
  /* 保证新旧页面在动画期间占据同一空间，不引发高度跳动 */
  grid-area: 1 / 1;
}

/* 优雅的交叉淡入淡出（Cross-fade）过渡 */
.cross-fade-enter-active,
.cross-fade-leave-active {
  transition: opacity 0.4s ease;
}

.cross-fade-enter-from,
.cross-fade-leave-to {
  opacity: 0;
}
</style>
