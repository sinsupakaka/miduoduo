<template>
  <view :class="['icon-text-list', variant]">
    <view v-for="item in items" :key="item.title" class="icon-text-card">
      <image :src="item.icon" mode="aspectFit" />
      <view class="icon-text-copy">
        <text class="icon-text-title">{{ item.title }}</text>
        <text class="icon-text-desc">{{ item.desc }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  variant: {
    type: String,
    default: 'course',
  },
})
</script>

<style scoped>
.icon-text-list {
  display: grid;
}

.icon-text-card {
  display: flex;
}

.icon-text-card image {
  width: 48rpx;
  height: 48rpx;
  flex: 0 0 48rpx;
}

.icon-text-title,
.icon-text-desc {
  display: block;
}

.course {
  gap: 23rpx;
}

.course .icon-text-card {
  min-height: 143rpx;
  padding: 35rpx 40rpx;
  border-radius: 12rpx;
  align-items: center;
  gap: 24rpx;
  background: linear-gradient(100deg, #201736 0%, #3a224d 100%);
}

.course .icon-text-title {
  font-size: 29rpx;
  line-height: 1.2;
  font-weight: 800;
  color: #ffffff;
}

.course .icon-text-desc {
  margin-top: 14rpx;
  color: #d7deed;
  font-size: 23rpx;
  line-height: 1.2;
}

.benefit {
  gap: 22rpx;
}

.benefit .icon-text-card {
  min-height: 174rpx;
  padding: 42rpx 39rpx 34rpx;
  border: 2rpx solid #35455f;
  border-radius: 14rpx;
  display: block;
  background: #111a2a;
}

.benefit .icon-text-card image {
  float: left;
  margin-right: 22rpx;
}

.benefit .icon-text-title {
  padding-top: 3rpx;
  font-size: 28rpx;
  line-height: 1.3;
  font-weight: 800;
  color: #ffffff;
}

.benefit .icon-text-desc {
  clear: both;
  padding-top: 29rpx;
  color: #d7deed;
  font-size: 22rpx;
  line-height: 1.65;
}
</style>
