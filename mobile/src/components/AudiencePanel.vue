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
  margin-top: 40rpx;
}

.business {
  background: linear-gradient( 178deg, #1C2241 0%, #18203A 52.21%, #272853 100%);
}

.personal {
  background: linear-gradient( 178deg, #291C41 0%, #25183A 52.21%, #3F2753 100%);
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
  font-size: 20rpx;
  line-height: 32rpx;
}
</style>
