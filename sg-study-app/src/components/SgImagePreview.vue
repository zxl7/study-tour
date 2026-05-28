<script setup>
import { computed, reactive, ref, watch } from "vue"

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  urls: {
    type: Array,
    default: () => [],
  },
  current: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(["update:show"])
const activeIndex = ref(0)
const imageMetaMap = reactive({})
const systemInfo = uni.getSystemInfoSync()

const rpxToPx = (value) => (systemInfo.windowWidth * value) / 750

watch(
  () => [props.show, props.current, props.urls.length],
  ([show]) => {
    if (!show) return
    const maxIndex = Math.max(props.urls.length - 1, 0)
    activeIndex.value = Math.min(Math.max(props.current, 0), maxIndex)
  },
  { immediate: true }
)

const currentLabel = computed(() => {
  if (!props.urls.length) return "0 / 0"
  return `${activeIndex.value + 1} / ${props.urls.length}`
})

const activeUrl = computed(() => props.urls[activeIndex.value] || "")

const panelMetrics = computed(() => {
  const panelWidth = systemInfo.windowWidth * 0.9
  const imageWidth = panelWidth - rpxToPx(48)
  const panelMaxHeight = systemInfo.windowHeight * 0.7
  const topHeight = rpxToPx(98)
  const imagePaddingY = rpxToPx(48)
  const imageMeta = imageMetaMap[activeUrl.value]
  const imageRatio = imageMeta?.width && imageMeta?.height ? imageMeta.height / imageMeta.width : 1
  const desiredImageHeight = imageWidth * imageRatio
  const maxImageHeight = Math.max(panelMaxHeight - topHeight - imagePaddingY, rpxToPx(260))
  const imageHeight = Math.min(desiredImageHeight, maxImageHeight)
  const panelHeight = Math.min(panelMaxHeight, topHeight + imageHeight + imagePaddingY)

  return {
    panelHeight,
    imageHeight,
  }
})

const panelStyle = computed(() => ({
  height: `${panelMetrics.value.panelHeight}px`,
  maxHeight: "70%",
}))

const swiperStyle = computed(() => ({
  height: `${panelMetrics.value.imageHeight + rpxToPx(48)}px`,
}))

const closePreview = () => {
  emit("update:show", false)
}

const onSwiperChange = (event) => {
  activeIndex.value = event?.detail?.current || 0
}

const onImageLoad = (event, url) => {
  const { width, height } = event?.detail || {}
  if (!url || !width || !height) return
  imageMetaMap[url] = { width, height }
}
</script>

<template>
  <view v-if="show" class="sg-preview" @touchmove.stop.prevent>
    <view class="sg-preview__mask" @tap="closePreview" />

    <view class="sg-preview__panel" :style="panelStyle" @tap.stop>
      <view class="sg-preview__top">
        <text class="sg-preview__index">{{ currentLabel }}</text>
        <view class="sg-preview__close" @tap="closePreview">
          <text class="sg-preview__close-icon">×</text>
        </view>
      </view>

      <swiper
        class="sg-preview__swiper"
        :style="swiperStyle"
        :current="activeIndex"
        @change="onSwiperChange"
      >
        <swiper-item v-for="url in urls" :key="url">
          <view class="sg-preview__slide">
            <image class="sg-preview__img" :src="url" mode="aspectFit" @load="(event) => onImageLoad(event, url)" />
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<style scoped lang="scss">
.sg-preview {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sg-preview__mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.42);
}

.sg-preview__panel {
  position: relative;
  width: 90%;
  background: #fff;
  border-radius: 28rpx;
  z-index: 2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 12rpx 40rpx rgba(15, 23, 42, 0.18);
}

.sg-preview__top {
  flex-shrink: 0;
  padding: 24rpx 28rpx 16rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 26rpx;
  color: #1f2937;
  border-bottom: 1rpx solid #eef2f7;
}

.sg-preview__close {
  width: 56rpx;
  height: 56rpx;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sg-preview__close-icon {
  font-size: 36rpx;
  line-height: 1;
  color: #4b5563;
}

.sg-preview__swiper {
  width: 100%;
  flex-shrink: 0;
}

.sg-preview__slide {
  width: 100%;
  height: 100%;
  padding: 24rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.sg-preview__img {
  width: 100%;
  height: 100%;
}
</style>
