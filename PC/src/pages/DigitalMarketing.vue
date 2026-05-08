<template>
  <div class="digital-page" :style="digitalPageStyle">
    <SiteHeader :active-path="activePath" />

    <main>
      <section class="digital-hero">
        <div class="digital-container hero-inner">
          <h1>品牌出海营销一站式服务</h1>

          <div class="hero-links">
            <span>广告投放</span>
            <span>达人营销</span>
            <span>内容营销</span>
            <span>电商运营</span>
          </div>
          <p>
            依托国际化视野与技术数据双引擎，米多多数字营销覆盖全球主流媒体渠道，
            提供广告投放、内容营销、达人营销、电商运营、社媒运营、品牌策略一体化服务。
          </p>
          <p>
            以“技术提效、内容破圈、数据闭环”为方法论，助力品牌跨越文化壁垒，
            实现全球市场的声量与销量双增长。
          </p>
        </div>
      </section>

      <section class="ad-section">
        <div class="digital-container ad-inner">
          <div class="ad-title">
            <img :src="digitalAsset('图层 42@2x.png')" alt="" />
            <span>Omni-channel Advertising</span>
            <h2>全渠道广告投放</h2>
          </div>
          <div class="ad-content">
            <h3>全球流量覆盖</h3>
            <p>整合全球顶级媒介资源，实现跨平台精准触达。</p>
            <div class="ad-feature-list">
              <article v-for="item in adFeatures" :key="item.title">
                <img :src="digitalAsset(item.icon)" alt="" />
                <h4>{{ item.title }}</h4>
                <p>{{ item.text }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="services-section">
        <div class="digital-container services-grid">
          <article v-for="item in serviceBlocks" :key="item.title" class="service-block">
            <div class="service-image">
              <img :src="digitalAsset(item.image)" alt="" />
              <div class="service-badge">
                <span>{{ item.en }}</span>
                <strong>{{ item.badge }}</strong>
              </div>
            </div>
            <div class="service-copy">
              <h2>{{ item.title }}</h2>
              <h3>{{ item.subtitle }}</h3>
              <p v-for="line in item.lines" :key="line">{{ line }}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="digital-container">
          <h2 class="section-title">品牌出海·深耕品类</h2>
          <div class="portfolio-stage">
            <button class="slider-arrow left" aria-label="上一组" @click="goPortfolioPrev"></button>
            <Carousel ref="portfolioCarousel" class="portfolio-carousel" :dots="true">
              <div v-for="slide in portfolioSlides" :key="slide.id" class="portfolio-slide">
                <div class="portfolio-strip">
                  <article
                    v-for="item in slide.items"
                    :key="`${slide.id}-${item.image}`"
                    class="portfolio-card"
                  >
                    <img :src="digitalAsset(item.image)" :alt="item.title" />
                    <span :class="item.labelClass" :style="getPortfolioLabelStyle(item.labelBg)">
                      {{ item.title }}
                    </span>
                  </article>
                </div>
              </div>
            </Carousel>
            <button class="slider-arrow right" aria-label="下一组" @click="goPortfolioNext"></button>
          </div>
        </div>
      </section>

      <section class="brand-section">
        <div class="digital-container">
          <h2 class="section-title">合作品牌</h2>
          <div class="brand-grid">
            <article v-for="logo in brandLogos" :key="logo" class="brand-card">
              <img :src="digitalAsset(logo)" alt="" />
            </article>
          </div>
        </div>
      </section>

      <section class="partner-section">
        <div class="digital-container">
          <h2 class="section-title">核心合作伙伴</h2>
          <div class="partner-map">
            <img class="partner-bg" :src="digitalAsset('图层 59@2x.png')" alt="" />
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { Carousel } from 'ant-design-vue'
import { ref } from 'vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'
import { asset } from '../utils/assets'

defineProps({
  activePath: {
    type: String,
    default: '/cross-border-fair',
  },
})

const digitalAsset = (name) => asset(name, '数字营销')

const cssUrl = (url) => `url("${url}")`

const digitalPageStyle = {
  '--digital-hero-bg': cssUrl(digitalAsset('图层 65@2x.png')),
  '--digital-ad-bg': cssUrl(digitalAsset('图层 43@2x.png')),
}

const getPortfolioLabelStyle = (labelBg) => ({
  backgroundImage: `url("${digitalAsset(labelBg)}")`,
})

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
    lines: [
      '视觉定制：极简美学设计，提升品牌出海调性感。',
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
    lines: [
      '资源矩阵：覆盖百万级优质博主，深度垂直细分领域。',
      '深度联动：从开箱评测到品牌联名，全域内容渗透。',
      '结果导向：专注带货转化能力，实现品效合一增长。',
    ],
  },
  {
    image: '图层 40@2x.png',
    en: 'E-commerce Operations',
    badge: '电商代运营',
    title: '精细化全案运营',
    subtitle: '深度介入从建站到转化的全流程，打造业绩增长引擎',
    lines: [
      '高效转化：优化漏斗转化链路，提升客单价与复购率。',
      '策略深耕：洞察品类竞争格局，制定差异化增长策略。',
      '风险风控：专业团队管理店铺，保障账户与库存安全。',
    ],
  },
]

const portfolioCarousel = ref(null)

const goPortfolioPrev = () => {
  portfolioCarousel.value?.prev()
}

const goPortfolioNext = () => {
  portfolioCarousel.value?.next()
}

const portfolioSlides = [
  {
    id: 'page-1',
    items: [
      { title: '智能家居', image: '图层 50@2x.png', labelBg: '矩形 12@2x.png', labelClass: 'label-home' },
      { title: '储能电源', image: '图层 51@2x.png', labelBg: '矩形 12 拷贝@2x.png', labelClass: 'label-power' },
      { title: '运动户外', image: '图层 52@2x.png', labelBg: '矩形 12 拷贝 2@2x.png', labelClass: 'label-sport' },
      { title: '3C电子', image: '图层 53@2x.png', labelBg: '矩形 12 拷贝 3@2x.png', labelClass: 'label-electronics' },
    ],
  },
  {
    id: 'page-2',
    items: [
      { title: '鞋服箱包', image: '图层 1@2x.png', labelBg: '矩形 12@2x.png', labelClass: 'label-home' },
      { title: '珠宝首饰', image: '图层 2@2x.png', labelBg: '矩形 12 拷贝@2x.png', labelClass: 'label-power' },
      { title: '美妆个护', image: '图层 3@2x.png', labelBg: '矩形 12 拷贝 2@2x.png', labelClass: 'label-sport' },
      { title: '科技与创意', image: '图层 4@2x.png', labelBg: '矩形 12 拷贝 3@2x.png', labelClass: 'label-electronics' },
    ],
  },
]

const brandLogos = [
  '图层 11@2x.png',
  '图层 12@2x.png',
  '图层 13@2x.png',
  '图层 14@2x.png',
  '图层 15@2x.png',
  '图层 16@2x.png',
  '图层 17@2x.png',
  '图层 18@2x.png',
  '图层 19@2x.png',
  '图层 20@2x.png',
  '图层 21@2x.png',
  '图层 22@2x.png',
  '图层 23@2x.png',
  '图层 24@2x.png',
  '图层 25@2x.png',
  '图层 26@2x.png',
  '图层 27@2x.png',
  '图层 28@2x.png',
  '图层 29@2x.png',
  '图层 30@2x.png',
  '图层 31@2x.png',
]

const partnerLogos = [
  { name: 'Google', logo: '图层 55@2x.png', className: 'google' },
  { name: 'TikTok for Business', logo: '图层 56@2x.png', className: 'tiktok' },
  { name: 'Meta', logo: '图层 57@2x.png', className: 'meta' },
  { name: 'amazon', logo: '图层 58@2x.png', className: 'amazon' },
  { name: 'CRITEO', logo: '图层 60@2x.png', className: 'criteo' },
]
</script>

<style scoped>
.digital-page {
  min-width: 320px;
  color: #333;
  background: #fff;
  overflow: hidden;
}

.digital-container {
  width: min(1540px, calc(100% - 48px));
  margin: 0 auto;
  display: block;
}

.section-title {
  margin: 0;
  color: #333;
  text-align: center;
  font-size: clamp(34px, 2.45vw, 48px);
  line-height: 1.15;
  letter-spacing: 0;
  font-weight: 800;
}

.digital-hero {
  height: 844px;
  position: relative;
  display: flex;
  align-items: flex-start;
  color: #fff;
  background: #04183a var(--digital-hero-bg) center center / cover no-repeat;
}

.hero-inner {
  padding-top: 190px;
}

.hero-inner h1 {
  max-width: 1120px;
  margin: 0 0 48px;
  color: #fff;
  font-size: 72px;
  line-height: 1.18;
  letter-spacing: 0;
  font-weight: 800;
}

.hero-inner p {
  max-width: 700px;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 22px;
  line-height: 2;
  font-weight: 400;
}

.hero-inner p + p {
  margin-top: 20px;
}

.hero-links {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 0;
  margin-bottom: 34px;
  color: #42d9ff;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 400;
}

.hero-links span {
  display: inline-flex;
  white-space: nowrap;
  letter-spacing: 0;
}

.ad-section {
  padding: 88px 0 108px;
  background: #fff var(--digital-ad-bg) center bottom / 100% auto no-repeat;
}

.ad-inner {
  min-height: 452px;
  display: grid;
  grid-template-columns: 420px minmax(0, 1fr);
  gap: 106px;
  align-items: end;
}

.ad-title {
  padding-bottom: 6px;
}

.ad-title img {
  width: 214px;
  margin: 0 0 18px 38px;
  display: block;
}

.ad-title span {
  display: block;
  margin-bottom: 16px;
  color: #a4abb7;
  font-size: 20px;
  line-height: 1;
}

.ad-title h2 {
  margin: 0;
  color: #333;
  font-size: 52px;
  line-height: 1.15;
  font-weight: 800;
}

.ad-content {
  padding-bottom: 10px;
}

.ad-content h3 {
  margin: 0 0 24px;
  color: #333;
  font-size: 56px;
  line-height: 1.18;
  font-weight: 800;
}

.ad-content > p {
  margin: 0 0 58px;
  color: #1f61e8;
  font-size: 20px;
  line-height: 1.55;
  font-weight: 800;
}

.ad-feature-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 54px;
}

.ad-feature-list img {
  width: 58px;
  height: 58px;
  display: block;
  object-fit: contain;
}

.ad-feature-list h4 {
  margin: 22px 0 14px;
  color: #333;
  font-size: 26px;
  line-height: 1.2;
  font-weight: 800;
}

.ad-feature-list p {
  margin: 0;
  color: #697180;
  font-size: 18px;
  line-height: 1.65;
}

.services-section {
  padding: 0 0 146px;
  background: #fff;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 770px));
}

.service-block {
  display: contents;
}

.service-block:nth-child(2) .service-image {
  grid-column: 2;
  grid-row: 2;
}

.service-block:nth-child(2) .service-copy {
  grid-column: 1;
  grid-row: 2;
}

.service-image,
.service-copy {
  height: 560px;
}

.service-image {
  position: relative;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.service-badge {
  position: absolute;
  left: 34px;
  top: 28px;
  min-width: 338px;
  padding: 18px 26px 20px;
  color: #fff;
  background: rgba(14, 43, 91, .72);
  border-radius: 0 0 24px 0;
}

.service-block:nth-child(2) .service-badge {
  background: rgba(58, 122, 91, .72);
}

.service-badge span {
  display: block;
  margin-bottom: 5px;
  font-size: 20px;
  line-height: 1.2;
}

.service-badge strong {
  display: block;
  font-size: 34px;
  line-height: 1.12;
  font-weight: 800;
}

.service-copy {
  padding: 130px 58px 70px;
  background: #f2f6fb;
}

.service-copy h2 {
  margin: 0 0 24px;
  color: #333;
  font-size: 62px;
  line-height: 1.18;
  letter-spacing: 0;
  font-weight: 800;
}

.service-copy h3 {
  margin: 0 0 38px;
  color: #1f61e8;
  font-size: 18px;
  line-height: 1.7;
  font-weight: 800;
}

.service-copy p {
  margin: 0 0 13px;
  color: #697180;
  font-size: 16px;
  line-height: 1.8;
}

.portfolio-section {
  padding: 6px 0 132px;
  background: #fff;
}

.portfolio-stage {
  position: relative;
  width: min(1374px, 100%);
  margin: 66px auto 0;
}

.portfolio-carousel :deep(.slick-list) {
  overflow: hidden;
}

.portfolio-carousel :deep(.slick-dots) {
  bottom: -38px;
  gap: 12px;
  margin: 0;
}

.portfolio-carousel :deep(.slick-dots li) {
  width: 13px;
  height: 13px;
  margin: 0;
}

.portfolio-carousel :deep(.slick-dots li button) {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #c7ccd7;
  opacity: 1;
}

.portfolio-carousel :deep(.slick-dots li.slick-active button) {
  background: #245fff;
}

.portfolio-slide {
  height: 646px;
  padding: 0 0 52px;
}

.portfolio-strip {
  height: 590px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}

.portfolio-card {
  position: relative;
  flex: 0 0 auto;
  height: 590px;
  overflow: visible;
}

.portfolio-card + .portfolio-card {
  margin-left: -24px;
}

.portfolio-card:nth-child(1) {
  width: 322px;
}

.portfolio-card:nth-child(2),
.portfolio-card:nth-child(3) {
  width: 388px;
}

.portfolio-card:nth-child(4) {
  width: 324px;
}

.portfolio-card img {
  width: auto;
  height: 100%;
  display: block;
  max-width: none;
  object-fit: contain;
}

.portfolio-card span {
  position: absolute;
  top: 38px;
  width: 164px;
  height: 40px;
  padding: 0 22px 0 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  font-size: 18px;
  font-weight: 800;
}

.portfolio-card span.label-home {
  top: 40px;
  right: 6px;
}

.portfolio-card span.label-power {
  top: 42px;
  right: 2px;
}

.portfolio-card span.label-sport {
  top: 42px;
  right: 2px;
}

.portfolio-card span.label-electronics {
  top: 42px;
  right: 0;
}

.slider-arrow {
  position: absolute;
  z-index: 2;
  top: calc(50% - 30px);
  width: 58px;
  height: 58px;
  border: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, .48);
  transform: translateY(-50%);
}

.slider-arrow::before {
  content: "";
  position: absolute;
  inset: 18px 16px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
}

.slider-arrow.left {
  left: -14px;
}

.slider-arrow.left::before {
  transform: rotate(-45deg);
}

.slider-arrow.right {
  right: -14px;
}

.slider-arrow.right::before {
  transform: rotate(135deg);
}

.brand-section {
  padding: 108px 0 122px;
  background: #f5f8fc;
}

.brand-grid {
  width: min(1260px, 100%);
  margin: 58px auto 0;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 16px;
}

.brand-card {
  height: 112px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
}

.brand-card img {
  max-width: 100%;
  max-height: 70px;
  display: block;
  object-fit: contain;
}

.partner-section {
  padding: 118px 0 136px;
  background: #fff;
}

.partner-map {
  position: relative;
  width: min(1280px, 100%);
  height: 690px;
  margin: 58px auto 0;
}

.partner-bg {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
}

.partner-center,
.partner-logo {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(180deg, #36a8ff 0%, #0269f2 100%);
  box-shadow: 0 18px 42px rgba(18, 104, 240, .26);
}

.partner-center {
  left: 50%;
  top: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 36px;
  font-weight: 800;
  transform: translate(-50%, -50%);
}

.partner-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-logo img {
  max-width: 70%;
  max-height: 45%;
  display: block;
  object-fit: contain;
}

.partner-logo.google {
  left: 150px;
  top: 210px;
  width: 172px;
  height: 172px;
}

.partner-logo.tiktok {
  right: 86px;
  top: 90px;
  width: 182px;
  height: 182px;
}

.partner-logo.meta {
  left: 96px;
  bottom: 122px;
  width: 136px;
  height: 136px;
}

.partner-logo.amazon {
  right: 300px;
  top: 338px;
  width: 118px;
  height: 118px;
}

.partner-logo.criteo {
  right: 96px;
  bottom: 164px;
  width: 100px;
  height: 100px;
}

</style>
