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

/* #ifdef MP-WEIXIN || H5 || APP-PLUS */
/**
 * 修复：各端页面布局一致性
 * 原因：确保 header 固定置顶，scroll-view 自动撑满剩余高度
 */
page {
  height: 100%;
}

.sg-page.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

scroll-view.content {
  flex: 1;
  height: 0;
}
/* #endif */
</style>
