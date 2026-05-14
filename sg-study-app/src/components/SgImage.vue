<template>
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
})

const emit = defineEmits(['tap', 'error', 'load'])

/**
 * 功能：计算最终渲染的图片地址。
 * 说明：封装了 site.js 中的 getAssetUrl 逻辑。
 */
const finalUrl = computed(() => getAssetUrl(props.src))

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
