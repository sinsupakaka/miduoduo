<template>
  <view :class="['mobile-nav', theme]">
    <!-- <view class="status">

    </view> -->

    <view class="nav-main">
      <button class="menu-button" type="button" @click="toggleMenu" aria-label="打开菜单">
        <view class="menu-lines">
          <view></view>
          <view></view>
          <view></view>
        </view>
      </button>

      <text class="nav-title">{{ title }}</text>

      <image v-if="avatarSrc" class="avatar" :src="avatarSrc" mode="aspectFill" />
      <view v-else class="accent-orb"></view>
    </view>

    <view v-if="menuOpen" class="menu-overlay" @click="closeMenu">
      <view class="menu-sheet" @click.stop>
        <text class="menu-heading">页面导航</text>
        <button
          v-for="item in menuItems"
          :key="item.key"
          type="button"
          :class="['menu-item', { active: item.key === activeRouteKey }]"
          @click="handleSelect(item.key)"
        >
          <text>{{ item.title }}</text>
          <text v-if="item.key === activeRouteKey">当前</text>
        </button>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { goRoute, routeEntries } from '../router'
import { asset } from '../utils/assets'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  activeRouteKey: {
    type: String,
    required: true,
  },
  avatarSrc: {
    type: String,
    default: () => asset('蒙版组 275@2x.png', '跨境创业孵化营'),
  },
  theme: {
    type: String,
    default: 'light',
  },
})

const menuOpen = ref(false)

const menuItems = computed(() => routeEntries.filter(val => val.isShow))

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const handleSelect = (routeKey) => {
  closeMenu()

  if (routeKey === props.activeRouteKey) return

  goRoute(routeKey)
}
</script>

<style scoped>
.mobile-nav {
  position: relative;
  background: #ffffff;
  color: #222222;
}

.mobile-nav.dark {
  /* background: #000000; */
  color: #ffffff;
}

.status {
  height: 88rpx;
  padding: 0 49rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 28rpx;
  font-weight: 600;
}

.phone-icons {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.signal {
  width: 28rpx;
  height: 22rpx;
  border-radius: 4rpx;
  background: linear-gradient(to right, #111 0 18%, transparent 18% 28%, #111 28% 46%, transparent 46% 56%, #111 56% 76%, transparent 76% 86%, #111 86%);
}

.wifi {
  width: 30rpx;
  height: 22rpx;
  border: 5rpx solid #111;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-radius: 30rpx 30rpx 0 0;
}

.battery {
  width: 41rpx;
  height: 18rpx;
  border: 3rpx solid #111;
  border-radius: 5rpx;
  position: relative;
}

.battery::before {
  content: "";
  position: absolute;
  left: 4rpx;
  top: 3rpx;
  width: 29rpx;
  height: 12rpx;
  border-radius: 2rpx;
  background: #111;
}

.battery::after {
  content: "";
  position: absolute;
  right: -8rpx;
  top: 5rpx;
  width: 4rpx;
  height: 8rpx;
  border-radius: 0 3rpx 3rpx 0;
  background: #111;
}

.nav-main {
  position: relative;
  height: 112rpx;
  padding: 0 32rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-button {
  margin-left: 0px;
  width: 56rpx;
  height: 56rpx;
  padding: 0;
  display: grid;
  place-items: center;
  background: transparent;
  border: 0;
}

.menu-button::after {
  border: 0;
}

.menu-lines {
  width: 36rpx;
  display: grid;
  gap: 7rpx;
}

.menu-lines view {
  height: 4rpx;
  border-radius: 999rpx;
  background: #2f3547;
}

.dark .menu-lines view {
  background: #595959;
}

.nav-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 32rpx;
  line-height: 1.2;
  font-weight: 600;
  white-space: nowrap;
  color: #333333;
}

.dark .nav-title {
  color: #4d4d4d;
}

.avatar {
  width: 58rpx;
  height: 58rpx;
  border-radius: 50%;
  flex: none;
}

.accent-orb {
  width: 64rpx;
  height: 64rpx;
  flex: none;
  border-radius: 50%;
  background:
    linear-gradient(180deg, transparent 0 50%, #5d7bf0 50% 100%),
    linear-gradient(135deg, #2fd7c4 0%, #35c9eb 45%, #7659f5 100%);
}

.menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 30;
  background: rgba(15, 23, 42, 0.42);
}

.menu-sheet {
  width: 520rpx;
  margin: 132rpx 0 0 24rpx;
  padding: 30rpx 24rpx 20rpx;
  border-radius: 28rpx;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 24rpx 60rpx rgba(15, 23, 42, 0.18);
}

.menu-heading {
  display: block;
  margin-bottom: 18rpx;
  color: #98a2b3;
  font-size: 24rpx;
  line-height: 1.4;
}

.menu-item {
  min-height: 84rpx;
  padding: 0 24rpx;
  margin-bottom: 14rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  border-radius: 20rpx;
  background: #f8fafc;
  color: #344054;
  font-size: 28rpx;
  line-height: 1.4;
  font-weight: 500;
}

.menu-item::after {
  border: 0;
}

.menu-item.active {
  background: #eef4ff;
  color: #2457e6;
}

.menu-item.active text:last-child {
  color: #2457e6;
  font-size: 24rpx;
}
</style>
