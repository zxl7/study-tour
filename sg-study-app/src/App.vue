<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
/* 每个页面公共 css */
@import "@/uni.scss";

/* #ifdef MP-WEIXIN */
/**
 * 修复：微信小程序端页面“只有 tabbar，内容空白”
 * 原因：scroll-view 需要明确高度；很多页面使用 scroll-view.content 但未设置高度。
 */
.sg-page.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

scroll-view.content {
  flex: 1;
  height: 0;
}
/* #endif */
</style>
