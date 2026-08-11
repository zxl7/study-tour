<template>
  <Teleport to="body">
    <Transition name="announcement-fade">
      <div v-if="visible" class="announcement-mask" @click="close">
        <section
          class="announcement-panel"
          :class="viewMode === 'preview' ? 'is-preview' : 'is-notice'"
          aria-modal="true"
          role="dialog"
          aria-labelledby="announcement-title"
          @click.stop>
          <button type="button" class="close-button" aria-label="关闭公告" @click="close">
            <iconify-icon icon="ph:x-bold"></iconify-icon>
          </button>

          <template v-if="viewMode === 'notice'">
            <div class="notice-mark">
              <iconify-icon icon="ph:megaphone-simple-bold"></iconify-icon>
            </div>
            <p class="notice-kicker">Announcement</p>
            <h2 id="announcement-title" class="notice-title">最新公告</h2>
            <p class="notice-copy">{{ latestAnnouncement.description }}</p>

            <div class="notice-actions">
              <button type="button" class="primary-action" @click="openPreview">
                <iconify-icon icon="ph:file-doc-bold"></iconify-icon>
                查看公告
              </button>
              <button type="button" class="secondary-action" @click="close">稍后查看</button>
            </div>
          </template>

          <template v-else>
            <div class="preview-header">
              <div>
                <p class="notice-kicker">Latest Notice</p>
                <h2 id="announcement-title" class="preview-title">{{ latestAnnouncement.title }}</h2>
              </div>
              <a class="download-link" :href="announcementUrl" download>
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
              <iframe
                v-if="latestAnnouncement.previewType === 'pdf'"
                class="pdf-preview-frame"
                :src="announcementUrl"
                :title="latestAnnouncement.title"></iframe>
              <div v-else ref="previewContainerRef" class="docx-preview-container"></div>
            </div>
          </template>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue"
import { renderAsync } from "docx-preview"
import { latestAnnouncement } from "@/data/announcements"

defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: "close"): void
}>()

const announcementUrl = latestAnnouncement.url
const viewMode = ref<"notice" | "preview">("notice")
const isLoading = ref(false)
const hasError = ref(false)
const previewContainerRef = ref<HTMLElement | null>(null)

const close = () => {
  emit("close")
}

const openPreview = async () => {
  viewMode.value = "preview"
  hasError.value = false

  await nextTick()
  const container = previewContainerRef.value

  // 最新公告为 PDF 时直接使用浏览器原生预览，不再进入 Word 渲染链路。
  if (latestAnnouncement.previewType === "pdf") {
    isLoading.value = false
    return
  }

  try {
    if (!container) return
    container.innerHTML = ""
    isLoading.value = true
    // 拉取 public 目录下的 Word 文件，并交给 docx-preview 在站内弹框中渲染。
    const response = await fetch(announcementUrl)
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
  width: min(620px, 100%);
  max-height: min(82vh, 720px);
  overflow: hidden;
  border: 1px solid rgba(229, 166, 99, 0.28);
  border-radius: 24px;
  background: linear-gradient(145deg, #ffffff 0%, #f8fbff 58%, #fff7ed 100%);
  box-shadow: 0 30px 90px rgba(0, 45, 78, 0.28);
}

.announcement-panel.is-preview {
  width: 80vw;
  height: 95vh;
  max-height: 95vh;
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

.notice-mark {
  display: flex;
  width: 72px;
  height: 72px;
  align-items: center;
  justify-content: center;
  margin: 64px auto 22px;
  border-radius: 24px;
  color: #ffffff;
  background: linear-gradient(135deg, #005a9c, #0f8ac6);
  box-shadow: 0 18px 40px rgba(0, 90, 156, 0.28);
  font-size: 36px;
}

.notice-kicker {
  margin: 0 0 10px;
  color: #e5a663;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-align: center;
  text-transform: uppercase;
}

.notice-title {
  margin: 0;
  color: #005a9c;
  font-size: 34px;
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
}

.notice-copy {
  max-width: 520px;
  margin: 18px auto 0;
  color: #475569;
  font-size: 17px;
  line-height: 1.8;
  text-align: center;
}

.notice-actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin: 34px 32px 58px;
  flex-wrap: wrap;
}

.primary-action,
.secondary-action,
.download-link {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.primary-action {
  border: 0;
  padding: 0 24px;
  color: #ffffff;
  background: #e5a663;
  box-shadow: 0 14px 28px rgba(229, 166, 99, 0.28);
}

.primary-action:hover,
.download-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 32px rgba(229, 166, 99, 0.32);
}

.secondary-action {
  border: 1px solid #dbe5ef;
  padding: 0 22px;
  color: #475569;
  background: rgba(255, 255, 255, 0.72);
}

.secondary-action:hover {
  color: #005a9c;
  background: #ffffff;
}

.preview-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 64px 12px 24px;
  border-bottom: 1px solid #e2e8f0;
}

.preview-header .notice-kicker {
  margin-bottom: 4px;
  text-align: left;
}

.preview-title {
  margin: 0;
  color: #005a9c;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.25;
}

.download-link {
  flex: 0 0 auto;
  min-width: 116px;
  min-height: 36px;
  padding: 0 14px;
  color: #ffffff;
  background: #005a9c;
  font-size: 14px;
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
  background: transparent;
  padding: 0;
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
    width: min(94vw, 620px);
    border-radius: 18px;
  }

  .announcement-panel.is-preview {
    width: 94vw;
    height: 95vh;
    max-height: 95vh;
  }

  .notice-mark {
    margin-top: 52px;
  }

  .notice-title {
    font-size: 28px;
  }

  .notice-copy {
    padding: 0 24px;
    font-size: 16px;
  }

  .notice-actions {
    margin-bottom: 42px;
  }

  .primary-action,
  .secondary-action {
    width: min(260px, 100%);
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
