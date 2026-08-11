<template>
  <router-view />
  <AnnouncementModal :visible="isAnnouncementVisible" @close="isAnnouncementVisible = false" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import AnnouncementModal from "@/components/AnnouncementModal.vue"

const ANNOUNCEMENT_SESSION_KEY = "sg-study-announcement-v1-seen"
const isAnnouncementVisible = ref(false)

onMounted(() => {
  // 用 sessionStorage 控制同一浏览器会话只自动弹出一次，关闭会话后再次访问会重新提示。
  if (window.sessionStorage.getItem(ANNOUNCEMENT_SESSION_KEY)) return
  window.sessionStorage.setItem(ANNOUNCEMENT_SESSION_KEY, "1")
  isAnnouncementVisible.value = true
})
</script>
