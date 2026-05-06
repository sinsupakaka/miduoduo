<template>
  <view class="page">
    <MobileTopNav title="关于我们" active-route-key="aboutUs" />

    <view class="hero">
      <view class="hero-copy">
        <text class="hero-title">关于米多多</text>
        <text class="hero-desc">领先及快速增长的综合服务平台</text>
      </view>
      <image class="hero-image" :src="asset('图层 18 拷贝@2x.png')" mode="aspectFill" />
    </view>

    <view class="intro section">
      <text class="section-heading">公司简介</text>
      <view class="intro-copy">
        <text v-for="text in introParagraphs" :key="text" class="intro-text">{{ text }}</text>
      </view>
      <image class="intro-image" :src="asset('图层 4@2x.png')" mode="aspectFill" />
    </view>

    <view class="culture section">
      <text class="section-heading">企业文化</text>
      <view class="culture-list">
        <view v-for="item in cultureItems" :key="item.title" class="culture-item">
          <image class="culture-image" :src="asset(item.image)" mode="aspectFill" />
          <text class="culture-title">{{ item.title }}</text>
          <text class="culture-desc">{{ item.text }}</text>
        </view>
      </view>
    </view>

    <view class="timeline">
      <image class="timeline-image" :src="asset('图层 5@2x(1).png')" mode="widthFix" />
    </view>

    <view class="honor section">
      <view class="honor-title-row">
        <text class="section-heading">资质/荣誉</text>
      </view>
      <scroll-view class="honor-tabs" scroll-x :show-scrollbar="false">
        <button
          v-for="tab in honorTabs"
          :key="tab"
          :class="['honor-tab', { active: tab === activeHonorTab }]"
          type="button"
          @click="activeHonorTab = tab"
        >
          {{ tab }}
        </button>
      </scroll-view>
      <view class="honor-grid">
        <view v-for="item in honors" :key="item.image" class="honor-card">
          <image class="honor-image" :src="asset(item.image)" mode="aspectFill" />
          <text class="honor-name">{{ item.title }}</text>
        </view>
      </view>
    </view>

    <view class="group">
      <text class="group-title">集团公司</text>
      <image class="group-map" :src="asset('组 5 拷贝 8@2x.png')" mode="aspectFill" />
      <view class="map-card">
        <text class="map-city">福州总部</text>
        <text class="map-address">地址：福建省福州市鼓楼区软件园A区23座</text>
      </view>
      <image class="pin primary" :src="asset('坐标@2x.png')" mode="aspectFit" />
      <image class="pin secondary" :src="asset('坐标 拷贝@2x.png')" mode="aspectFit" />
    </view>

    <view class="footer-logo">
      <image :src="asset('图层 12 拷贝@2x.png')" mode="aspectFit" />
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import MobileTopNav from '../components/MobileTopNav.vue'
import { asset as resolveAsset } from '../utils/assets'

const asset = (name) => resolveAsset(name, '关于我们')

const introParagraphs = [
  '福建米多多网络科技有限公司是领先及快速增长的综合服务平台，为全国产业带企业出海提供数字营销及运营支援服务，包括广告投放、内容营销、达人合作、数据分析、报告创作、展会举办、联合运营、创业孵化、行业培训等相结合的“线上+线下”一站式解决方案，赋能“中国制造”出海，推动企业通过跨境电商触达海外终端消费者。',
  '公司致力于做中国“产业带+跨境电商”发展部署的传播者和助推者，做中国跨境电商趋势的发现者和创新的引领者。',
  '公司成立于2015年，总部位于福州。根据灼识咨询的资料，以2024年收入计算，米多多是中国第五大跨境电商服务供应商，且是其中服务组合最全面、客户人数最多的一家。公司已成功协助超1700家直接客户，将其品牌、服务或商品推广至欧洲、美洲、亚洲及大洋洲等20多个国家。',
]

const cultureItems = [
  {
    image: 'logo来源@2x.png',
    title: 'logo来源',
    text: '米多多logo图形灵感来源自著名典故《棋盘上的米粒》。图形左边由1/4圆组成，形似抽象国际象棋棋盘，左上角置米粒作为点睛之缀。',
  },
  {
    image: '配图2-米多多数字出海创新中心@2x.png',
    title: '使命与愿景',
    text: '打造一家全球领先的、以技术驱动、以数字营销为主业的跨境贸易综合服务公司。打造一家业绩和文化都达到卓越的公司，培养一批卓越的人。',
  },
  {
    image: '价值观@2x.png',
    title: '核心价值观',
    text: '因为相信，所以看见',
  },
]

const honorTabs = ['行业奖项', '案例/名录入选', '平台官方资质', '商协会职务']
const activeHonorTab = ref(honorTabs[0])

const honors = [
  {
    image: '图层 3@2x.png',
    title: '2023亚马逊生态服务商励精图治发扬揭厉奖',
  },
  {
    image: '图层 4@2x(1).png',
    title: '2023Google优秀合作伙伴渠道线上销售奖',
  },
  {
    image: '图层 5@2x.png',
    title: '2024跨境电商服务企业十强(中国跨交会)',
  },
  {
    image: '图层 6@2x(1).png',
    title: 'Google Agency Excellence Awards 2024',
  },
  {
    image: '图层 7@2x.png',
    title: 'TikTok Shop美区跨境POP2024年度优秀合作伙伴',
  },
  {
    image: '图层 8@2x.png',
    title: 'TikTok Shop美区跨境POP2025半年度商家大会',
  },
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  color: #333333;
  background: #ffffff;
  overflow: hidden;
}

.section {
  padding: 96rpx 32rpx 0;
}

.section-heading {
  display: block;
  color: #333333;
  font-size: 40rpx;
  line-height: 1.2;
  font-weight: 800;
}

.hero {
  position: relative;
  height: 834rpx;
  overflow: hidden;
  background: #56606b;
}

.hero-copy {
  position: relative;
  z-index: 2;
  padding: 84rpx 42rpx 0;
}

.hero-title {
  display: block;
  color: #ffffff;
  font-size: 46rpx;
  line-height: 1.2;
  font-weight: 800;
}

.hero-desc {
  display: block;
  margin-top: 26rpx;
  color: rgba(255, 255, 255, 0.88);
  font-size: 32rpx;
  line-height: 1.45;
}

.hero-image {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.intro-copy {
  margin-top: 44rpx;
}

.intro-text {
  display: block;
  margin-bottom: 22rpx;
  color: #4f545d;
  font-size: 29rpx;
  line-height: 1.78;
  text-align: justify;
}

.intro-image {
  width: 100%;
  height: 670rpx;
  margin-top: 46rpx;
  display: block;
  border-radius: 64rpx 0 64rpx 0;
}

.culture {
  padding-top: 92rpx;
}

.culture-list {
  margin-top: 54rpx;
}

.culture-item {
  margin-bottom: 58rpx;
}

.culture-image {
  width: 100%;
  height: 460rpx;
  display: block;
  border-radius: 16rpx;
}

.culture-title {
  display: block;
  margin-top: 38rpx;
  color: #373737;
  font-size: 34rpx;
  line-height: 1.25;
  font-weight: 800;
}

.culture-desc {
  display: block;
  margin-top: 28rpx;
  color: #626873;
  font-size: 28rpx;
  line-height: 1.75;
  text-align: justify;
}

.timeline {
  margin-top: 38rpx;
  background: #286af2;
}

.timeline-image {
  width: 100%;
  display: block;
}

.honor {
  padding-top: 84rpx;
  padding-bottom: 80rpx;
  background: #ffffff;
}

.honor-title-row {
  position: relative;
}

.honor-title-row::before,
.honor-title-row::after {
  content: "";
  position: absolute;
  top: 11rpx;
  width: 22rpx;
  height: 44rpx;
  background: linear-gradient(180deg, #d7a640, #f7d97a);
  border-radius: 999rpx;
}

.honor-title-row::before {
  left: -2rpx;
  transform: rotate(-26deg);
}

.honor-title-row::after {
  left: 180rpx;
  transform: rotate(26deg);
}

.honor-title-row .section-heading {
  padding-left: 34rpx;
}

.honor-tabs {
  width: 100%;
  margin-top: 38rpx;
  white-space: nowrap;
}

.honor-tab {
  height: 58rpx;
  margin: 0 12rpx 0 0;
  padding: 0 28rpx;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1rpx solid #d7deea;
  border-radius: 999rpx;
  color: #8a93a3;
  background: #ffffff;
  font-size: 26rpx;
  line-height: 1;
}

.honor-tab::after {
  border: 0;
}

.honor-tab.active {
  color: #ffffff;
  border-color: #2457e6;
  background: #2457e6;
  font-weight: 700;
}

.honor-grid {
  margin-top: 34rpx;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24rpx;
}

.honor-card {
  min-width: 0;
  overflow: hidden;
  border: 1rpx solid #dbe3ef;
  border-radius: 12rpx;
  background: #ffffff;
}

.honor-image {
  width: 100%;
  height: 278rpx;
  display: block;
}

.honor-name {
  height: 64rpx;
  padding: 0 16rpx;
  display: block;
  color: #646b77;
  font-size: 22rpx;
  line-height: 64rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.group {
  position: relative;
  height: 742rpx;
  overflow: hidden;
  background: #06101a;
}

.group-title {
  position: absolute;
  left: 34rpx;
  top: 84rpx;
  z-index: 2;
  color: #ffffff;
  font-size: 42rpx;
  line-height: 1.2;
  font-weight: 800;
}

.group-map {
  width: 100%;
  height: 100%;
  display: block;
}

.map-card {
  position: absolute;
  right: 62rpx;
  top: 310rpx;
  z-index: 3;
  width: 330rpx;
  padding: 20rpx 22rpx;
  border-radius: 8rpx;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 18rpx 42rpx rgba(0, 0, 0, 0.2);
}

.map-city {
  display: block;
  color: #343947;
  font-size: 26rpx;
  line-height: 1.3;
  font-weight: 800;
}

.map-address {
  display: block;
  margin-top: 8rpx;
  color: #737b89;
  font-size: 20rpx;
  line-height: 1.45;
}

.pin {
  position: absolute;
  z-index: 3;
  width: 40rpx;
  height: 56rpx;
}

.pin.primary {
  right: 176rpx;
  top: 428rpx;
}

.pin.secondary {
  right: 138rpx;
  top: 400rpx;
}

.footer-logo {
  height: 190rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f4fa;
}

.footer-logo image {
  width: 258rpx;
  height: 54rpx;
}
</style>
