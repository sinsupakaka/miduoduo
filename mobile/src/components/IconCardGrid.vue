<template>
  <view class="icon-card-grid">
    <view v-for="item in items" :key="item.title" class="icon-card">
      <image :src="item.icon" mode="aspectFit" />
      <text class="icon-card-title">{{ item.title }}</text>
      <text class="icon-card-desc">{{ item.desc }}</text>
    </view>
  </view>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.icon-card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22rpx;
}

.icon-card {
  height: 224rpx;
  padding: 40rpx 30rpx 0rpx 40rpx;
  border-radius: 14rpx;
  background: rgba(76, 49, 113, 0.68);
}

.icon-card image {
  width: 48rpx;
  height: 48rpx;
  display: block;
  margin-bottom: 23rpx;
}

.icon-card-title,
.icon-card-desc {
  display: block;
}

.icon-card-title {
  font-size: 28rpx;
  line-height: 1.2;
  font-weight: 800;
  color: #ffffff;
}

.icon-card-desc {
  margin-top: 20rpx;
  color: #d7deed;
  font-size: 22rpx;
  line-height: 1.2;
}
</style>
