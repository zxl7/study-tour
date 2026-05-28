<template>
  <view v-if="modelValue" class="advisor-popup-mask" @tap="close" @touchmove.stop.prevent>
    <view class="advisor-popup-content" @tap.stop>
      <view class="popup-header">
        <text class="popup-title">联系研学顾问</text>
        <view class="popup-close" @tap="close">
          <SgIcon type="clear" size="20" color="#9CA3AF" />
        </view>
      </view>
      
      <view class="popup-body">
        <text class="popup-tip">长按保存二维码或拨打电话咨询详细日程</text>
        
        <scroll-view scroll-y class="advisor-list">
          <view v-for="a in SITE.advisors" :key="a.name" class="advisor-card">
            <view class="advisor-info">
              <view class="advisor-avatar">
                <SgIcon type="person-filled" size="32" color="#005A9C" />
              </view>
              <view class="advisor-meta">
                <text class="advisor-name">研学顾问：{{ a.name }}</text>
                <text class="advisor-phone" @tap="makeCall(a.phone)">{{ a.phone }}</text>
              </view>
              <button class="call-btn" @tap="makeCall(a.phone)">
                <SgIcon type="phone-filled" size="16" color="#FFFFFF" />
                <text class="call-btn-text">拨打</text>
              </button>
            </view>
            
            <view class="qr-container" @tap="a.qr && previewImg(a.qr)">
              <image 
                v-if="a.qr" 
                class="qr-image" 
                mode="aspectFit" 
                :src="img(a.qr)" 
                :show-menu-by-longpress="true"
              />
              <view v-else class="qr-placeholder">
                <text>暂无二维码</text>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { SITE } from '@/config/site'
import { img, previewImg } from '@/utils/img'
import SgIcon from './SgIcon.vue'

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}

const makeCall = (phoneNumber) => {
  uni.makePhoneCall({
    phoneNumber: phoneNumber.replace(/\s/g, '')
  })
}
</script>

<style scoped lang="scss">
.advisor-popup-mask {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40rpx;
}

.advisor-popup-content {
  width: 100%;
  max-width: 600rpx;
  background: #FFFFFF;
  border-radius: 24rpx;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 85vh;
}

.popup-header {
  padding: 32rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1rpx solid #F3F4F6;
}

.popup-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #111827;
}

.popup-close {
  padding: 8rpx;
}

.popup-body {
  padding: 32rpx;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.popup-tip {
  font-size: 24rpx;
  color: #6B7280;
  text-align: center;
  margin-bottom: 32rpx;
}

.advisor-list {
  flex: 1;
}

.advisor-card {
  background: #F9FAFB;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 24rpx;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.advisor-info {
  display: flex;
  align-items: center;
  margin-bottom: 24rpx;
}

.advisor-avatar {
  width: 80rpx;
  height: 80rpx;
  background: #E0E7FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20rpx;
}

.advisor-meta {
  flex: 1;
}

.advisor-name {
  display: block;
  font-size: 28rpx;
  font-weight: bold;
  color: #111827;
  margin-bottom: 4rpx;
}

.advisor-phone {
  font-size: 26rpx;
  color: #005A9C;
  text-decoration: underline;
}

.call-btn {
  background: #005A9C;
  border-radius: 999rpx;
  padding: 0 24rpx;
  height: 56rpx;
  display: flex;
  align-items: center;
  gap: 8rpx;
  margin: 0;
  border: none;
  
  &::after {
    border: none;
  }
}

.call-btn-text {
  font-size: 24rpx;
  color: #FFFFFF;
}

.qr-container {
  background: #FFFFFF;
  border-radius: 12rpx;
  padding: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qr-image {
  width: 240rpx;
  height: 240rpx;
}

.qr-placeholder {
  width: 240rpx;
  height: 240rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F3F4F6;
  color: #9CA3AF;
  font-size: 24rpx;
}
</style>
