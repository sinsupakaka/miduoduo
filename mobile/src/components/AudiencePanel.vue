<template>
  <view :class="['audience-panel', tone]">
    <view class="audience-head">
      <image :src="icon" mode="aspectFit" />
      <text>{{ title }}</text>
    </view>
    <view v-for="item in items" :key="item.title" class="audience-item">
      <image :src="checkIcon" mode="aspectFit" />
      <view>
        <text class="audience-title">{{ item.title }}</text>
        <text class="audience-desc">{{ item.desc }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  checkIcon: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    default: () => [],
  },
  tone: {
    type: String,
    default: 'business',
  },
})
</script>

<style scoped>
.audience-panel {
  margin-top: 55rpx;
  padding: 45rpx 40rpx;
  border-radius: 8rpx;
}

.audience-panel + .audience-panel {
  margin-top: 48rpx;
}

.business {
  background: linear-gradient(135deg, rgba(33, 45, 88, 0.9), rgba(37, 35, 76, 0.96));
}

.personal {
  background: linear-gradient(135deg, rgba(70, 39, 75, 0.95), rgba(38, 26, 61, 0.96));
}

.audience-head {
  display: flex;
  align-items: center;
  gap: 21rpx;
  margin-bottom: 35rpx;
}

.audience-head image {
  width: 48rpx;
  height: 48rpx;
}

.audience-head text {
  font-size: 32rpx;
  line-height: 1.2;
  font-weight: 800;
  color: #ffffff;
}

.audience-item {
  display: flex;
  gap: 18rpx;
}

.audience-item + .audience-item {
  margin-top: 39rpx;
}

.audience-item > image {
  width: 28rpx;
  height: 28rpx;
  flex: 0 0 28rpx;
  margin-top: 4rpx;
}

.audience-title,
.audience-desc {
  display: block;
}

.audience-title {
  font-size: 28rpx;
  line-height: 1.2;
  font-weight: 700;
  color: #ffffff;
}

.audience-desc {
  margin-top: 18rpx;
  color: #d7deed;
  font-size: 22rpx;
  line-height: 1.55;
}
</style>
