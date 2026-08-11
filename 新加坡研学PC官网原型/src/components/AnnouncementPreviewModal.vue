<template>
  <Teleport to="body">
    <Transition name="announcement-fade">
      <div v-if="visible && file" class="announcement-mask" @click="close">
        <section class="announcement-panel" aria-modal="true" role="dialog" :aria-labelledby="titleId" @click.stop>
          <button type="button" class="close-button" aria-label="关闭公告预览" @click="close">
            <iconify-icon icon="ph:x-bold"></iconify-icon>
          </button>

          <div class="preview-header">
            <div>
              <p class="notice-kicker">Announcement Preview</p>
              <h2 :id="titleId" class="preview-title">{{ file.title }}</h2>
            </div>
            <a class="download-link" :href="file.url" download>
              <iconify-icon icon="ph:download-simple-bold"></iconify-icon>
              下载原文
            </a>
          </div>

          <div class="preview-shell">
            <div v-if="isLoading" class="preview-state">
              <iconify-icon icon="ph:circle-notch-bold" class="loading-icon"></iconify-icon>
              <span>正在加载公告预览...</span>
            </div>
            <div v-else-if="hasError" class="preview-state error-state">
              <iconify-icon icon="ph:warning-circle-bold"></iconify-icon>
              <span>公告预览加载失败，请下载原文查看。</span>
            </div>
            <div ref="previewContainerRef" class="docx-preview-container"></div>
          </div>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from "vue"
import { renderAsync } from "docx-preview"
import type { AnnouncementFile } from "@/data/announcements"

const props = defineProps<{
  visible: boolean
  file: AnnouncementFile | null
}>()

const emit = defineEmits<{
  (e: "close"): void
}>()

const titleId = "announcement-preview-title"
const isLoading = ref(false)
const hasError = ref(false)
const previewContainerRef = ref<HTMLElement | null>(null)

const close = () => {
  emit("close")
}

const renderDocument = async () => {
  if (!props.visible || !props.file) return
  isLoading.value = true
  hasError.value = false

  await nextTick()
  const container = previewContainerRef.value
  if (!container) return
  container.innerHTML = ""

  try {
    // 公告中心的文件列表来自静态配置；点击预览时按文件 URL 拉取 Word 并渲染到弹框内。
    const response = await fetch(props.file.url)
    if (!response.ok) {
      throw new Error(`Announcement document request failed: ${response.status}`)
    }
    const documentBuffer = await response.arrayBuffer()
    await renderAsync(documentBuffer, container, undefined, {
      className: "announcement-docx",
      inWrapper: true,
      ignoreWidth: false,
      ignoreHeight: false,
      breakPages: true,
    })
  } catch (error) {
    console.error("Failed to preview announcement document", error)
    hasError.value = true
  } finally {
    isLoading.value = false
  }
}

watch(
  () => [props.visible, props.file?.id],
  () => {
    renderDocument()
  },
  { immediate: true }
)
</script>

<style scoped>
.announcement-mask {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(6, 16, 32, 0.62);
  backdrop-filter: blur(10px);
}

.announcement-panel {
  position: relative;
  width: min(920px, 100%);
  max-height: min(82vh, 780px);
  overflow: hidden;
  border: 1px solid rgba(229, 166, 99, 0.28);
  border-radius: 24px;
  background: linear-gradient(145deg, #ffffff 0%, #f8fbff 58%, #fff7ed 100%);
  box-shadow: 0 30px 90px rgba(0, 45, 78, 0.28);
}

.close-button {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 2;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  color: #64748b;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1);
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}

.close-button:hover {
  color: #0f172a;
  background: #ffffff;
  transform: translateY(-1px);
}

.notice-kicker {
  margin: 0 0 10px;
  color: #e5a663;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.preview-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 34px 72px 20px 34px;
  border-bottom: 1px solid #e2e8f0;
}

.preview-title {
  margin: 0;
  color: #005a9c;
  font-size: 26px;
  font-weight: 800;
  line-height: 1.25;
}

.download-link {
  display: inline-flex;
  flex: 0 0 auto;
  min-width: 116px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  color: #ffffff;
  background: #005a9c;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.download-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 32px rgba(229, 166, 99, 0.32);
}

.preview-shell {
  position: relative;
  height: min(62vh, 600px);
  overflow: auto;
  background: #eef3f8;
}

.docx-preview-container {
  min-height: 100%;
  padding: 22px;
}

.preview-state {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #475569;
  background: rgba(238, 243, 248, 0.92);
  font-weight: 700;
}

.error-state {
  color: #b91c1c;
}

.loading-icon {
  animation: spin 0.9s linear infinite;
}

:deep(.announcement-docx-wrapper),
:deep(.docx-wrapper) {
  padding: 0;
  background: transparent;
}

:deep(.announcement-docx) {
  margin: 0 auto 22px;
  box-shadow: 0 16px 38px rgba(15, 23, 42, 0.12);
}

.announcement-fade-enter-active,
.announcement-fade-leave-active {
  transition: opacity 0.28s ease;
}

.announcement-fade-enter-from,
.announcement-fade-leave-to {
  opacity: 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 640px) {
  .announcement-mask {
    padding: 12px;
  }

  .announcement-panel {
    max-height: 88vh;
    border-radius: 18px;
  }

  .preview-header {
    display: block;
    padding: 30px 58px 18px 20px;
  }

  .preview-title {
    font-size: 22px;
  }

  .download-link {
    margin-top: 14px;
  }

  .preview-shell {
    height: 58vh;
  }

  .docx-preview-container {
    padding: 12px;
  }
}
</style>
