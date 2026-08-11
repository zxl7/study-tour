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
            <iframe v-if="file.previewType === 'pdf'" class="pdf-preview-frame" :src="file.url" :title="file.title"></iframe>
            <div v-else ref="previewContainerRef" class="docx-preview-container"></div>
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
  hasError.value = false

  await nextTick()
  const container = previewContainerRef.value

  // PDF 公告使用浏览器原生预览；只有 Word 公告才进入 docx-preview 渲染流程。
  if (props.file.previewType === "pdf") {
    isLoading.value = false
    return
  }

  try {
    if (!container) return
    container.innerHTML = ""
    isLoading.value = true
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
  width: 80vw;
  height: 95vh;
  max-height: 95vh;
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
  margin: 0 0 4px;
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
  padding: 18px 64px 12px 24px;
  border-bottom: 1px solid #e2e8f0;
}

.preview-title {
  margin: 0;
  color: #005a9c;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.25;
}

.download-link {
  display: inline-flex;
  flex: 0 0 auto;
  min-width: 116px;
  min-height: 36px;
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
  height: calc(95vh - 68px);
  overflow: auto;
  background: #eef3f8;
}

.docx-preview-container {
  min-height: 100%;
  padding: 22px;
}

.pdf-preview-frame {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #ffffff;
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
    width: 94vw;
    height: 95vh;
    max-height: 95vh;
    border-radius: 18px;
  }

  .preview-header {
    display: block;
    padding: 18px 58px 12px 18px;
  }

  .preview-title {
    font-size: 20px;
  }

  .download-link {
    margin-top: 14px;
  }

  .preview-shell {
    height: calc(95vh - 105px);
  }

  .docx-preview-container {
    padding: 12px;
  }
}
</style>
