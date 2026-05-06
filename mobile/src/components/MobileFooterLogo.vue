<template>
  <view class="mobile-footer-logo">
    <image :src="logoSrc" mode="aspectFit" />
  </view>
</template>

<script setup>
import { asset } from '../utils/assets'

defineProps({
  logoSrc: {
    type: String,
    default: () => asset('logo@2x.png', '跨境创业孵化营'),
  },
})
</script>

<style scoped>
.mobile-footer-logo {
  height: 148rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
}

.mobile-footer-logo image {
  width: 250rpx;
  height: 46rpx;
}
</style>
