<script setup>
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app"

onLaunch(() => {
  // #ifdef MP-WEIXIN
  uni.hideTabBar()
  // #endif
  console.log('App Launch')
})

onShow(() => {
  console.log('App Show')
})

onHide(() => {
  console.log('App Hide')
})
</script>

<template>
  <view class="app-root">
    <slot />
  </view>
</template>

<style lang="scss">
/* 每个页面公共 css */
@import "@/uni.scss";

.app-root {
  height: 100%;
}

/* #ifdef H5 */
/* 彻底消除 H5 端原生 TabBar 闪烁 */
uni-tabbar {
  display: none !important;
}
/* #endif */

/* #ifdef MP-WEIXIN || H5 || APP-PLUS */
/**
 * 修复：各端页面布局一致性
 * 原因：确保 header 固定置顶，scroll-view 自动撑满剩余高度
 */
page {
  height: 100%;
  /* 修复 H5 页面橡皮筋回弹效果 */
  /* #ifdef H5 */
  overflow: hidden;
  position: fixed;
  width: 100%;
  /* #endif */
}

.sg-page.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* 禁止 iOS 浏览器的弹性拉伸 */
  touch-action: none;
}

scroll-view.content {
  flex: 1;
  height: 0;
  /* 允许内容区域滚动，但禁止内容区域外的回弹 */
  touch-action: auto;
  -webkit-overflow-scrolling: touch;
}
/* #endif */
</style>
