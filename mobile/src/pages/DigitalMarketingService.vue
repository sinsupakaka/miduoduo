<template>
  <view class="page">
    <MobileTopNav title="数字营销" active-route-key="digitalMarketingService" />

    <view class="hero">
      <image class="hero-bg" :src="asset('图层 12@2x.png')" mode="aspectFill" />
      <view class="hero-copy">
        <text class="hero-title">品牌出海营销一站式服务</text>
        <view class="hero-links">
          <text v-for="item in heroLinks" :key="item">{{ item }}</text>
        </view>
        <text class="hero-desc">依托国际化视野与技术数据双引擎，米多多数字营销覆盖全球主流媒体渠道，提供广告投放、内容营销、达人营销、电商运营、社媒运营、品牌策略一体化服务。</text>
        <text class="hero-desc">以“技术提效、内容破圈、数据闭环”为方法论，助力品牌跨越文化壁垒，实现全球市场的声量与销量双增长。</text>
      </view>
    </view>

    <view class="ad-section">
      <image class="ad-wave" :src="asset('图层 40@2x.png')" mode="aspectFill" />
      <image class="ad-icon" :src="asset('图层 27@2x.png')" mode="aspectFit" />
      <text class="ad-en">Omni-channel Advertising</text>
      <text class="ad-title">全渠道广告投放</text>
      <text class="ad-subtitle">全域流量覆盖</text>
      <text class="ad-desc">整合全球顶级媒介资源，实现跨平台精准触达。</text>
      <view class="ad-feature-list">
        <view v-for="item in adFeatures" :key="item.title" class="ad-feature">
          <image class="feature-icon" :src="asset(item.icon)" mode="aspectFit" />
          <text class="feature-title">{{ item.title }}</text>
          <text class="feature-text">{{ item.text }}</text>
        </view>
      </view>
    </view>

    <view class="services-section">
      <view v-for="item in serviceBlocks" :key="item.title" class="service-block">
        <view class="service-image-wrap">
          <image class="service-image" :src="asset(item.image)" mode="aspectFill" />
          <view :class="['service-badge', item.tone]">
            <text class="badge-en">{{ item.en }}</text>
            <text class="badge-title">{{ item.badge }}</text>
          </view>
        </view>
        <view class="service-copy">
          <text class="service-title">{{ item.title }}</text>
          <text class="service-subtitle">{{ item.subtitle }}</text>
          <text v-for="line in item.lines" :key="line" class="service-line">{{ line }}</text>
        </view>
      </view>
    </view>

    <view class="portfolio-section">
      <SectionTitle title="品牌出海 · 深耕品类" tone="dark" />
      <view class="portfolio-grid">
        <view v-for="item in portfolioItems" :key="item.title" class="portfolio-card">
          <image class="portfolio-image" :src="asset(item.image)" mode="aspectFill" />
          <text class="portfolio-title">{{ item.title }}</text>
        </view>
      </view>
    </view>

    <view class="partner-section">
      <SectionTitle title="核心合作伙伴" tone="dark" />
      <image class="partner-map" :src="asset('图层 13@2x.png')" mode="widthFix" />
    </view>

    <view class="footer-band"></view>
  </view>
</template>

<script setup>
import MobileTopNav from '../components/MobileTopNav.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { asset as resolveAsset } from '../utils/assets'

const asset = (name) => resolveAsset(name, '数字营销服务')

const heroLinks = ['广告投放', '达人营销', '内容营销', '电商运营']

const adFeatures = [
  {
    icon: '组 6@2x.png',
    title: '精准触达',
    text: '数据驱动人群画像，降低获客成本',
  },
  {
    icon: '组 4@2x.png',
    title: '动态优化',
    text: '实时监控投放效果，保障高倍ROAS',
  },
  {
    icon: '组 5@2x.png',
    title: '开户赋能',
    text: '官方核心代理授权，快速过审保障稳定',
  },
]

const serviceBlocks = [
  {
    image: '图层 39@2x.png',
    en: 'Content Marketing',
    badge: '内容营销服务',
    title: '本土创意表达',
    subtitle: '以深度视觉与叙事，建立品牌与消费者的情感连接',
    tone: 'blue',
    lines: [
      '视觉定制：极简美学设计，提升品牌出海溢价感。',
      '创意叙事：拒绝硬广，用本土化思维讲好品牌故事。',
      '多维矩阵：平面、视频、软文全维度覆盖触点。',
    ],
  },
  {
    image: '图层 41@2x.png',
    en: 'Influencer Marketing',
    badge: '达人营销服务',
    title: '红人效能增长',
    subtitle: '链接全球高质量创作者，通过社交背书驱动转化',
    tone: 'green',
    lines: [
      '资源矩阵：覆盖百万级优质博主，深度垂直细分领域。',
      '深度联动：从开箱评测到品牌联名，全域内容渗透。',
      '结果导向：专注带货转化能力，实现品效合一增长。',
    ],
  },
  {
    image: '图层 42@2x.png',
    en: 'E-commerce Operations',
    badge: '电商代运营',
    title: '精细化全案运营',
    subtitle: '深度介入从建站到转化的全流程，打造业绩增长引擎',
    tone: 'teal',
    lines: [
      '高效转化：优化漏斗转化链路，提升客单价与复购率。',
      '策略深耕：洞察品类竞争格局，制定差异化增长策略。',
      '风险风控：专业团队管理店铺，保障账户与库存安全。',
    ],
  },
]

const portfolioItems = [
  { title: '智能家居', image: '图层 19@2x.png' },
  { title: '储能电源', image: '图层 20@2x.png' },
  { title: '运动户外', image: '图层 21@2x.png' },
  { title: '3C电子', image: '图层 22@2x.png' },
  { title: '鞋服箱包', image: '图层 23@2x.png' },
  { title: '珠宝首饰', image: '图层 24@2x.png' },
  { title: '美妆个护', image: '图层 25@2x.png' },
  { title: '科技与创意', image: '图层 26@2x.png' },
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  overflow: hidden;
  color: #333333;
  background: #ffffff;
}

.hero {
  position: relative;
  min-height: 835rpx;
  overflow: hidden;
  color: #ffffff;
  background: #061c42;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.hero-copy {
  position: relative;
  z-index: 2;
  padding: 86px 45rpx 0;
}

.hero-title {
  display: block;
  color: #ffffff;
  font-size: 52rpx;
  line-height: 76rpx;
  font-weight: 800;
}

.hero-links {
  margin-top: 28rpx;
  display: flex;
  flex-wrap: wrap;
  gap: 22rpx;
}

.hero-links text {
  font-size: 32rpx;
  color: #75D8F6;
  line-height: 60rpx;
  font-weight: 500;
  white-space: nowrap;
}

.hero-desc {
  display: block;
  margin-top: 26rpx;
  color: rgba(255, 255, 255, 0.78);
  font-size: 24rpx;
  line-height: 36rpx;
  text-align: justify;
}

.ad-section {
  position: relative;
  padding: 92rpx 32rpx 72rpx;
  overflow: hidden;
  text-align: center;
  background: #ffffff;
}

.ad-wave {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -14rpx;
  width: 100%;
  height: 447rpx;
  z-index: 1;
}

.ad-icon,
.ad-en,
.ad-title,
.ad-subtitle,
.ad-desc,
.ad-feature-list {
  position: relative;
  z-index: 2;
}

.ad-icon {
  width: 202rpx;
  height: 204rpx;
  margin: 0 auto 34rpx;
  display: block;
}

.ad-en {
  display: block;
  font-size: 28rpx;
  color: #86899B;
  line-height: 48rpx;
}

.ad-title {
  display: block;
  margin-top: 15rpx;
  color: #333333;
  font-size: 44rpx;
  line-height: 1.2;
  font-weight: 800;
}

.ad-subtitle {
  display: block;
  margin-top: 66rpx;
  color: #333333;
  font-size: 38rpx;
  line-height: 1.2;
  font-weight: 800;
}

.ad-desc {
  display: block;
  margin-top: 34rpx;
  font-size: 28rpx;
  color: #212BBD;
  line-height: 1.55;
}

.ad-feature-list {
  margin-top: 64rpx;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20rpx;
}

.ad-feature {
  min-width: 0;
}

.feature-icon {
  width: 58rpx;
  height: 58rpx;
  margin: 0 auto;
  display: block;
}

.feature-title {
  display: block;
  margin-top: 24rpx;
  color: #333333;
  font-size: 27rpx;
  line-height: 1.25;
  font-weight: 800;
}

.feature-text {
  display: block;
  margin-top: 16rpx;
  color: #707684;
  font-size: 23rpx;
  line-height: 1.55;
}

.services-section {
  padding: 34rpx 32rpx 0;
  background: #ffffff;
}

.service-block {
  margin-bottom: 88rpx;
}

.service-image-wrap {
  position: relative;
  height: 694rpx;
  overflow: hidden;
}

.service-image {
  width: 100%;
  height: 100%;
  display: block;
}

.service-badge {
  position: absolute;
  left: 0;
  top: 0;
  min-width: 360rpx;
  padding: 28rpx 40rpx 34rpx;
  border-radius: 0 28rpx 0 0;
  color: #ffffff;
  background: rgba(12, 42, 92, 0.78);
}

.service-badge.green {
  background: rgba(83, 137, 107, 0.78);
}

.service-badge.teal {
  background: rgba(69, 116, 118, 0.78);
}

.badge-en {
  display: block;
  color: rgba(255, 255, 255, 0.92);
  font-size: 26rpx;
  line-height: 1.2;
}

.badge-title {
  display: block;
  margin-top: 10rpx;
  color: #ffffff;
  font-size: 44rpx;
  line-height: 1.15;
  font-weight: 800;
}

.service-copy {
  padding: 72rpx 34rpx 60rpx;
  background: #f2f6fb;
}

.service-title {
  display: block;
  font-size: 44rpx;
  color: #333333;
  line-height: 48rpx;
  font-weight: 800;
}

.service-subtitle {
  display: block;
  margin-top: 34rpx;
  font-size: 26rpx;
  color: #212BBD;
  line-height: 48rpx;
  font-weight: 500;
  margin-bottom: 26rpx;
}

.service-line {
  display: block;
  margin-top: 6rpx;
  font-size: 23rpx;
  color: #53545C;
  line-height: 54rpx;
}

.portfolio-section {
  padding: 18rpx 32rpx 0;
  background: #ffffff;
}

.portfolio-grid {
  margin-top: 66rpx;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26rpx 24rpx;
}

.portfolio-card {
  overflow: hidden;
  border: 2rpx solid #dce5f1;
  border-radius: 16rpx;
  background: #ffffff;
}

.portfolio-image {
  width: 100%;
  height: 238rpx;
  display: block;
}

.portfolio-title {
  display: block;
  padding: 20rpx 22rpx 22rpx;
  color: #3a3d45;
  font-size: 22rpx;
  line-height: 1.2;
  font-weight: 800;
}

.partner-section {
  padding: 110rpx 0 116rpx;
  background: #ffffff;
}

.partner-map {
  width: 100%;
  margin-top: 62rpx;
  display: block;
}

.footer-band {
  height: 156rpx;
  background: #2867ed;
}
</style>
