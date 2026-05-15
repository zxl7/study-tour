<template>
  <!-- #ifdef H5 -->
  <img
    :src="finalUrl"
    :alt="altText"
    :loading="lazyLoad ? 'lazy' : 'eager'"
    :style="h5ImageStyle"
    class="sg-image"
    @click="handleTap"
    @error="handleError"
    @load="handleLoad"
  />
  <!-- #endif -->

  <!-- #ifndef H5 -->
  <image
    :src="finalUrl"
    :mode="mode"
    :lazy-load="lazyLoad"
    :show-menu-by-longpress="showMenuByLongpress"
    class="sg-image"
    @tap="handleTap"
    @error="handleError"
    @load="handleLoad"
  />
  <!-- #endif -->
</template>

<script setup>
/**
 * 功能：统一的图片组件封装。
 * 特点：
 * 1. 自动处理 CDN/本地路径转换（封装 getAssetUrl）。
 * 2. 统一管理图片加载失败、懒加载等默认行为。
 * 3. 无状态组件，符合函数式编程思想。
 */
import { computed } from 'vue'
import { getAssetUrl } from '@/config/site'

const props = defineProps({
  // 图片路径（文件名或完整路径）
  src: { type: String, default: '' },
  // 图片裁剪、缩放模式
  mode: { type: String, default: 'aspectFill' },
  // 是否懒加载
  lazyLoad: { type: Boolean, default: true },
  // 开启长按图片显示识别小程序码菜单
  showMenuByLongpress: { type: Boolean, default: false },
  // 图片说明文本，仅 H5 原生 img 使用
  alt: { type: String, default: '' },
})

const emit = defineEmits(['tap', 'error', 'load'])

/**
 * 功能：计算最终渲染的图片地址。
 * 说明：封装了 site.js 中的 getAssetUrl 逻辑。
 */
const finalUrl = computed(() => getAssetUrl(props.src))

/**
 * 功能：提供 H5 原生 img 所需的替代文本。
 */
const altText = computed(() => props.alt || props.src || 'image')

/**
 * 功能：将 uni-app 的 mode 映射为 H5 img 的 object-fit。
 * 说明：保证 H5 与小程序端视觉表现尽量一致。
 */
const h5ImageStyle = computed(() => {
  const fitMap = {
    aspectFill: 'cover',
    aspectFit: 'contain',
    widthFix: 'contain',
    heightFix: 'contain',
    scaleToFill: 'fill',
    center: 'none',
  }

  return {
    objectFit: fitMap[props.mode] || 'cover',
  }
})

/**
 * 功能：点击事件透传。
 */
const handleTap = (e) => emit('tap', e)

/**
 * 功能：加载错误处理。
 */
const handleError = (e) => {
  console.error(`[SgImage] 加载失败: ${finalUrl.value}`, e)
  emit('error', e)
}

/**
 * 功能：加载成功处理。
 */
const handleLoad = (e) => emit('load', e)
</script>

<style scoped>
.sg-image {
  /* 默认撑满容器，具体尺寸由外部 CSS 控制 */
  width: 100%;
  height: 100%;
  display: block;
}
</style>
