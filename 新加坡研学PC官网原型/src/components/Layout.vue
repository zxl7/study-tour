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
  </div>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
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
