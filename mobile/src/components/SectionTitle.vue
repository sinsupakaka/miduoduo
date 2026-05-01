<template>
  <view :class="['section-title', tone]">
    <text class="section-title-title">{{ title }}</text>
    <text v-if="desc" class="section-title-desc">{{ desc }}</text>
  </view>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: '',
  },
  tone: {
    type: String,
    default: 'light',
  },
})
</script>

<style scoped>
.section-title {
  text-align: center;
}

.section-title-title {
  display: block;
  font-size: 40rpx;
  line-height: 1.2;
  font-weight: 800;
  color: #ffffff;
  white-space: pre-line;
}

.section-title-desc {
  display: block;
  margin-top: 21rpx;
  color: #d7deed;
  font-size: 28rpx;
  line-height: 1.55;
  white-space: pre-line;
}

.dark .section-title-title {
  color: #2d2f36;
}

.dark .section-title-desc {
  color: #8c95a8;
}

.orange .section-title-title {
  color: #7c2d12;
}

.orange .section-title-desc {
  color: #b45309;
}
</style>
