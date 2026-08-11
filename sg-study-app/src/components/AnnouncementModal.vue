<template>
  <view v-if="visible" class="announcement-mask" @tap="close">
    <view class="announcement-panel" @tap.stop>
      <button type="button" class="close-button" aria-label="关闭公告" @tap="close">×</button>

      <template v-if="viewMode === 'notice'">
        <view class="notice-mark">!</view>
        <text class="notice-kicker">Announcement</text>
        <text class="notice-title">最新公告</text>
        <text class="notice-copy">新加坡研学遴选公告已发布，请及时查看。</text>

        <view class="notice-actions">
          <button type="button" class="primary-action" @tap="openPreview">查看公告</button>
          <button type="button" class="secondary-action" @tap="close">稍后查看</button>
        </view>
      </template>

      <template v-else>
        <view class="preview-header">
          <view class="preview-title-wrap">
            <text class="notice-kicker left">Latest Notice</text>
            <text class="preview-title">新加坡研学遴选公告</text>
          </view>
          <a class="download-link" :href="announcementUrl" download>下载原文</a>
        </view>

        <view class="preview-shell">
          <view v-if="isLoading" class="preview-state">
            <view class="loading-ring" />
            <text>正在加载公告预览...</text>
          </view>
          <view v-else-if="hasError" class="preview-state error-state">
            <text>公告预览加载失败，请下载原文查看。</text>
          </view>
          <view ref="previewContainerRef" class="docx-preview-container"></view>
        </view>
      </template>
    </view>
  </view>
</template>

<script setup>
import { nextTick, ref } from "vue"
import { renderAsync } from "docx-preview"

defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(["close"])

const h5Base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "")
const announcementUrl = encodeURI(`${h5Base || ""}/遴选公告.docx`)
const viewMode = ref("notice")
const isLoading = ref(false)
const hasError = ref(false)
const previewContainerRef = ref(null)

const close = () => {
  emit("close")
}

const openPreview = async () => {
  viewMode.value = "preview"
  isLoading.value = true
  hasError.value = false

  await nextTick()
  const container = previewContainerRef.value?.$el || previewContainerRef.value
  if (!container) return
  container.innerHTML = ""

  try {
    // H5 端从 public 静态目录拉取 Word，并在弹框滚动区域内渲染预览；小程序端不会编译此组件。
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

<style scoped lang="scss">
.announcement-mask {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28rpx;
  background: rgba(6, 16, 32, 0.64);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
}

.announcement-panel {
  position: relative;
  width: min(92vw, 840px);
  max-height: 84vh;
  overflow: hidden;
  border: 1px solid rgba(229, 166, 99, 0.3);
  border-radius: 28rpx;
  background: linear-gradient(145deg, #ffffff 0%, #f8fbff 58%, #fff7ed 100%);
  box-shadow: 0 28rpx 90rpx rgba(0, 45, 78, 0.28);
}

.close-button {
  position: absolute;
  top: 24rpx;
  right: 24rpx;
  z-index: 2;
  display: flex;
  width: 72rpx;
  height: 72rpx;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  color: #64748b;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 10rpx 28rpx rgba(15, 23, 42, 0.1);
  font-size: 44rpx;
  line-height: 1;
}

.notice-mark {
  display: flex;
  width: 108rpx;
  height: 108rpx;
  align-items: center;
  justify-content: center;
  margin: 92rpx auto 28rpx;
  border-radius: 28rpx;
  color: #ffffff;
  background: linear-gradient(135deg, #005a9c, #0f8ac6);
  box-shadow: 0 18rpx 40rpx rgba(0, 90, 156, 0.28);
  font-size: 56rpx;
  font-weight: 900;
}

.notice-kicker,
.notice-title,
.notice-copy,
.preview-title {
  display: block;
}

.notice-kicker {
  margin-bottom: 12rpx;
  color: #e5a663;
  font-size: 22rpx;
  font-weight: 800;
  letter-spacing: 2rpx;
  text-align: center;
  text-transform: uppercase;
}

.notice-kicker.left {
  text-align: left;
}

.notice-title {
  color: #005a9c;
  font-size: 46rpx;
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
}

.notice-copy {
  max-width: 560rpx;
  margin: 24rpx auto 0;
  padding: 0 36rpx;
  color: #475569;
  font-size: 30rpx;
  line-height: 1.75;
  text-align: center;
}

.notice-actions {
  display: flex;
  justify-content: center;
  gap: 18rpx;
  margin: 44rpx 36rpx 68rpx;
  flex-wrap: wrap;
}

.primary-action,
.secondary-action,
.download-link {
  display: inline-flex;
  min-height: 76rpx;
  align-items: center;
  justify-content: center;
  border-radius: 12rpx;
  font-size: 28rpx;
  font-weight: 800;
  text-decoration: none;
}

.primary-action {
  border: 0;
  padding: 0 44rpx;
  color: #ffffff;
  background: #e5a663;
  box-shadow: 0 14rpx 28rpx rgba(229, 166, 99, 0.28);
}

.secondary-action {
  border: 1px solid #dbe5ef;
  padding: 0 40rpx;
  color: #475569;
  background: rgba(255, 255, 255, 0.76);
}

.preview-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24rpx;
  padding: 44rpx 108rpx 28rpx 34rpx;
  border-bottom: 1px solid #e2e8f0;
}

.preview-title-wrap {
  min-width: 0;
}

.preview-title {
  color: #005a9c;
  font-size: 34rpx;
  font-weight: 900;
  line-height: 1.28;
}

.download-link {
  flex: 0 0 auto;
  padding: 0 26rpx;
  color: #ffffff;
  background: #005a9c;
  font-size: 24rpx;
}

.preview-shell {
  position: relative;
  height: 62vh;
  overflow: auto;
  background: #eef3f8;
  -webkit-overflow-scrolling: touch;
}

.docx-preview-container {
  min-height: 100%;
  padding: 24rpx;
}

.preview-state {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18rpx;
  color: #475569;
  background: rgba(238, 243, 248, 0.94);
  font-size: 28rpx;
  font-weight: 800;
}

.error-state {
  color: #b91c1c;
}

.loading-ring {
  width: 34rpx;
  height: 34rpx;
  border: 5rpx solid rgba(0, 90, 156, 0.18);
  border-top-color: #005a9c;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

:deep(.announcement-docx-wrapper),
:deep(.docx-wrapper) {
  padding: 0;
  background: transparent;
}

:deep(.announcement-docx) {
  margin: 0 auto 24rpx;
  box-shadow: 0 14rpx 36rpx rgba(15, 23, 42, 0.12);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 768px) {
  .announcement-panel {
    width: min(860px, 90vw);
    border-radius: 24px;
  }

  .primary-action,
  .secondary-action,
  .download-link {
    min-height: 44px;
    border-radius: 8px;
    font-size: 15px;
  }

  .notice-title {
    font-size: 34px;
  }

  .notice-copy {
    max-width: 560px;
    font-size: 17px;
  }

  .preview-title {
    font-size: 26px;
  }
}
</style>
