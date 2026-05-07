<template>
  <view class="page">
    <MobileTopNav title="全链孵化" active-route-key="coupangIncubation" />

    <view class="hero">
      <Carousel
        :class="['hero-carousel', currentHeroTone]"
        autoplay
        :dots="true"
        :before-change="handleHeroBeforeChange"
      >
        <div v-for="slide in heroSlides" :key="slide.title" :class="['hero-slide', slide.tone]">
          <view class="hero-copy">
            <text class="hero-title">{{ slide.title }}{{ '\n' }}{{ slide.subtitle }}</text>
            <view class="hero-points">
              <view v-for="text in slide.points" :key="text" class="hero-point">
                <image :src="asset(slide.pointIcon)" mode="aspectFit" />
                <text>{{ text }}</text>
              </view>
            </view>
            <button class="hero-action">{{ slide.action }}</button>
          </view>
          <image class="hero-art" :src="asset(slide.image)" mode="aspectFill" />
        </div>
      </Carousel>
    </view>

    <view :class="['why', currentWhyTone]">
      <Carousel
        :class="['why-carousel', currentWhyTone]"
        autoplay
        :dots="true"
        :before-change="handleWhyBeforeChange"
      >
        <div v-for="slide in whySlides" :key="slide.title" :class="['why-slide', slide.tone]">
          <SectionTitle :title="slide.title" :desc="slide.desc" :tone="slide.titleTone" />
          <view class="why-grid">
            <view
              v-for="card in slide.cards"
              :key="card.title"
              :class="['why-card', card.tint]"
            >
              <image :src="asset(card.icon)" mode="aspectFit" />
              <text class="why-card-title">{{ card.title }}</text>
              <text class="why-card-desc">{{ card.text }}</text>
            </view>
          </view>
        </div>
      </Carousel>
    </view>

    <view class="services">
      <SectionTitle title="一站式孵化服务内容" desc="课程+货盘+指导，全方位助力创业成功" tone="dark" />
      <view class="service-list">
        <view v-for="panel in servicePanels" :key="panel.title" :class="['service-panel', panel.color]">
          <view class="panel-head">
            <image :src="asset(panel.icon)" mode="aspectFit" />
            <text>{{ panel.title }}</text>
          </view>
          <view class="service-items">
            <view v-for="item in panel.items" :key="item" class="service-item">
              <image :src="asset(panel.checkIcon)" mode="aspectFit" />
              <text>{{ item }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="audience">
      <SectionTitle title="适合人群" desc="无论你是新手还是有经验卖家，都能轻松上手" tone="dark" />
      <view class="audience-list">
        <view v-for="card in audienceCards" :key="card.title" class="audience-card">
          <image :src="asset(card.icon)" mode="aspectFit" />
          <text class="audience-title">{{ card.title }}</text>
          <text class="audience-desc">{{ card.text }}</text>
        </view>
      </view>
    </view>

    <view class="cta">
      <text class="cta-title">抓住流量红利期，开启跨境创业之旅</text>
      <text class="cta-desc">现在报名即可享受早鸟优惠，赠送精品货盘大礼包和运营工具包，前20名报名更可获得导师1对1诊断服务</text>
      <image class="qr" :src="asset('蒙版组 275@2x.png')" mode="aspectFill" />
      <text class="qr-title">扫码咨询</text>
      <text class="qr-subtitle">领取免费入驻资料</text>
      <text class="contact">咨询热线：艾老师 18250556206</text>
      <text class="address">上课地址：福建省福州市鼓楼区福州软件园A区23号</text>
    </view>

    <view class="footer">
      <image :src="asset('logo@2x.png')" mode="aspectFit" />
    </view>
  </view>
</template>

<script setup>
import { Carousel } from 'ant-design-vue'
import { computed, ref } from 'vue'
import MobileTopNav from '../components/MobileTopNav.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { asset as resolveAsset } from '../utils/assets'

const asset = (name) => resolveAsset(name, '跨境创业孵化营')

const heroSlides = [
  {
    title: 'Coupang 韩国市场低成本',
    subtitle: '创业孵化营',
    action: '立即咨询',
    tone: 'blue',
    image: '蒙版组 278@2x.png',
    pointIcon: '组 11002@2x.png',
    points: [
      '官方绿色通道入驻，专享“无忧启航”权益',
      '90天内享受酷澎火箭仓仓储物流费用全免',
      '精品货盘直供，上架即卖',
      '导师全程陪跑，轻松盈利',
    ],
  },
  {
    title: 'TEMU 全球开店',
    subtitle: '低成本创业孵化计划',
    action: '立即入驻',
    tone: 'orange',
    image: '色相_饱和度-1@2x.png',
    pointIcon: '组 11002@2x-2.png',
    points: [
      '低门槛入驻，个人也能快速开店',
      '官方流量扶持，出单快',
      '海量爆款货盘，一键铺货',
      '全程运营指导，轻松赚钱',
    ],
  },
]

const currentHeroIndex = ref(0)
const currentHeroTone = computed(() => heroSlides[currentHeroIndex.value]?.tone || 'blue')

const handleHeroBeforeChange = (_, nextIndex) => {
  currentHeroIndex.value = nextIndex
}

const whySlides = [
  {
    title: '为什么选择Coupang蓝海市场',
    desc: '用户基数多，客户质量高，低门槛入局，高利润回报',
    tone: 'blue',
    titleTone: 'dark',
    cards: [
      { icon: '组 12125@2x(9).png', tint: 'blue', title: '市场增量大', text: '韩国第二大电商平台，年增速超30%，蓝海产品多，竞争小，新手入场机会大' },
      { icon: '组 12125@2x(11).png', tint: 'green', title: '利润空间高', text: '韩国消费力强，客单价高，平均利润率可达30%-50%，远高于国内电商平台' },
      { icon: '组 12125@2x(10).png', tint: 'purple', title: '入驻门槛低', text: '无平台押金，前3个月免佣金，开店成本极低' },
      { icon: '组 12125@2x(12).png', tint: 'orange', title: '运营难度低', text: '平台规则简单，官方扶持力度大，无需复杂运营技巧，新手容易快速出单' },
    ],
  },
  {
    title: '为什么选择TEMU',
    desc: '背靠拼多多集团，快速扩张的电商平台，新手创业首选',
    tone: 'blue',
    titleTone: 'dark',
    cards: [
      { icon: '组 12636@2x.png', tint: 'orange', title: '全球市场布局', text: '覆盖全球多个国家和站点，海量用户，市场空间巨大，卖家增长机会多' },
      { icon: '组 12637@2x.png', tint: 'blue', title: '模式简单易做', text: '平台负责运营、流量、物流和售后，卖家聚焦供货，省心省力' },
      { icon: '组 12638@2x.png', tint: 'green', title: '入驻门槛极低', text: '个人/企业均可入驻，无保证金，无平台使用费，无年费' },
      { icon: '组 12639@2x.png', tint: 'red', title: '官方大力扶持', text: '新卖家入驻享流量扶持，冷启动更快，更容易完成首批出单' },
    ],
  },
]

const currentWhyIndex = ref(0)
const currentWhyTone = computed(() => whySlides[currentWhyIndex.value]?.tone || 'blue')

const handleWhyBeforeChange = (_, nextIndex) => {
  currentWhyIndex.value = nextIndex
}

const servicePanels = [
  {
    icon: '组 12125@2x.png',
    checkIcon: '组 12090@2x(2).png',
    color: 'blue',
    title: '系统化课程培训',
    items: ['平台基础运营', '精品选品策略', 'Listing优化', '广告投放技巧', '物流发货流程', '客服与售后'],
  },
  {
    icon: '组 12125@2x(1).png',
    checkIcon: '组 12090@2x(10).png',
    color: 'green',
    title: '精品货盘支持',
    items: ['爆款选品库', '产品资料包', '供应链优势', '仓储配送服务', '新品更新'],
  },
  {
    icon: '组 12125@2x(2).png',
    checkIcon: '组 12090@2x(11).png',
    color: 'purple',
    title: '系统化课程培训',
    items: ['入驻绿色通道', '1对1导师带教', '店铺诊断服务', '陪跑孵化服务', '社群资源对接', '合规指导服务'],
  },
]

const audienceCards = [
  { icon: '组 12125@2x(3).png', title: '创业新手', text: '没有电商经验，想要小成本创业的人群。模式简单，容易上手，投入少风险低，非常适合新手操作' },
  { icon: '组 12125@2x(4).png', title: '上班族', text: '利用业余时间做副业，增加额外收入。每天只需1-2小时，不需要囤货发货，轻松增加月收入' },
  { icon: '组 12125@2x(5).png', title: '大学生', text: '想在课余时间赚钱，实现经济独立的学生群体。时间灵活，可在校操作，积累创业经验的同时获得收入' },
  { icon: '组 12125@2x(6).png', title: '宝爸妈', text: '需要照顾家庭，无法外出工作的人群。在家即可操作，时间自由，既能照顾家庭又能有稳定收入' },
  { icon: '组 12125@2x(7).png', title: '国内电商卖家', text: '国内电商内卷严重，想要拓展新渠道的卖家。利用现有货源优势，快速布局，增加新的利润增长点' },
  { icon: '组 12125@2x(8).png', title: '工厂 / 供应商', text: '有产品供应链优势，想要拓展销售渠道的工厂和供应商。直接对接平台，薄利多销，快速走量' },
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  color: #2d2f36;
  background: #ffffff;
}

.nav {
  height: 200rpx;
  background: #ffffff;
  color: #222222;
}

.status {
  height: 88rpx;
  padding: 0 69rpx;
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
  height: 112rpx;
  padding: 0 37rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu {
  width: 48rpx;
  height: 48rpx;
}

.nav-title {
  font-size: 32rpx;
  font-weight: 600;
}

.avatar {
  width: 58rpx;
  height: 58rpx;
  border-radius: 50%;
}

.hero {
  background: #eaf3ff;
}

.hero-carousel,
.hero-carousel :deep(.slick-slider),
.hero-carousel :deep(.slick-list),
.hero-carousel :deep(.slick-track),
.hero-carousel :deep(.slick-slide),
.hero-carousel :deep(.slick-slide > div),
.hero-slide {
  min-height: 1062rpx;
}

.hero-slide {
  padding: 92rpx 43rpx 86rpx;
  position: relative;
  overflow: hidden;
}

.hero-slide.blue {
  color: #1E33B6;
  background: linear-gradient( 0deg, #E6F1FE 0%, #E5EEFF 54.9%, #E5EEFF 100%);
}

.hero-slide.orange {
  color: #7c2d12;
  background: linear-gradient( 0deg, #FEF2F1 0%, #FFF7ED 100%);
}

.hero-title {
  display: block;
  font-size: 52rpx;
  line-height: 1.4;
  font-weight: 800;
  letter-spacing: 0;
}

.hero-points {
  margin-top: 44rpx;
  display: grid;
  gap: 24rpx;
}

.hero-point {
  display: flex;
  align-items: flex-start;
  gap: 22rpx;
}

.hero-point image {
  width: 28rpx;
  height: 28rpx;
  margin-top: 6rpx;
}

.hero-point text {
  flex: 1;
  font-size: 28rpx;
  line-height: 1.35;
}

.hero-action {
  margin: 45rpx 0 32rpx;
  width: 198rpx;
  height: 54rpx;
  border-radius: 30rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 22rpx;
  font-weight: 700;
  padding: 0;
}

.hero-slide.blue .hero-action {
  background: linear-gradient(90deg, #2633c9 0%, #6176f3 100%);
}

.hero-slide.orange .hero-action {
  background: linear-gradient(90deg, #f97316 0%, #fb923c 100%);
}

.hero-art {
  width: 750rpx;
  height: 500rpx;
  margin-left: -43rpx;
  display: block;
}

.hero-carousel :deep(.slick-dots),
.why-carousel :deep(.slick-dots) {
  display: flex !important;
  justify-content: center;
  gap: 24rpx;
  margin: 0;
}

.hero-carousel :deep(.slick-dots) {
  bottom: 38rpx;
}

.hero-carousel :deep(.slick-dots li),
.why-carousel :deep(.slick-dots li),
.hero-carousel :deep(.slick-dots li.slick-active),
.why-carousel :deep(.slick-dots li.slick-active) {
  width: 44rpx;
  height: 8rpx;
  margin: 0;
}

.hero-carousel :deep(.slick-dots li button),
.why-carousel :deep(.slick-dots li button) {
  width: 44rpx;
  height: 8rpx;
  border-radius: 8rpx;
  opacity: 1;
}

.hero-carousel.blue :deep(.slick-dots li button) {
  background: #ffffff;
}

.hero-carousel.blue :deep(.slick-dots li.slick-active button),
.why-carousel.blue :deep(.slick-dots li.slick-active button) {
  background: #337ff0;
}

.hero-carousel.orange :deep(.slick-dots li button),
.why-carousel.orange :deep(.slick-dots li button) {
  background: #ffd8bf;
}

.hero-carousel.orange :deep(.slick-dots li.slick-active button),
.why-carousel.orange :deep(.slick-dots li.slick-active button) {
  background: #f97316;
}

.why {
  background: #ffffff;
}

.why.orange {
  background: #fffaf6;
}

.why-carousel,
.why-carousel :deep(.slick-slider),
.why-carousel :deep(.slick-list),
.why-carousel :deep(.slick-track),
.why-carousel :deep(.slick-slide),
.why-carousel :deep(.slick-slide > div),
.why-slide {
  min-height: 1064rpx;
}

.why-slide {
  padding: 92rpx 40rpx 116rpx;
}

.why-grid {
  margin-top: 55rpx;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22rpx;
}

.why-card {
  min-height: 290rpx;
  padding: 37rpx 31rpx 30rpx;
  border: 2rpx solid #d4e7ff;
  border-radius: 14rpx;
  background: linear-gradient(135deg, #f2f8ff 0%, #ffffff 100%);
}

.why-card.green {
  border-color: #cff1dc;
  background: linear-gradient(135deg, #f2fff7 0%, #ffffff 100%);
}

.why-card.purple {
  border-color: #eadcff;
  background: linear-gradient(135deg, #fbf5ff 0%, #ffffff 100%);
}

.why-card.orange,
.why-card.brown {
  border-color: #ffe2bd;
  background: linear-gradient(135deg, #fff7ee 0%, #ffffff 100%);
}

.why-card.red {
  border-color: #fecaca;
  background: linear-gradient(135deg, #fef2f2 0%, #ffffff 100%);
}

.why-card.yellow {
  border-color: #fde68a;
  background: linear-gradient(135deg, #fffbeb 0%, #ffffff 100%);
}

.why-card image {
  width: 48rpx;
  height: 48rpx;
  display: block;
  margin-bottom: 29rpx;
}

.why-card-title,
.why-card-desc {
  display: block;
}

.why-card-title {
  font-size: 28rpx;
  color: #333333;
  line-height: 1.25;
  font-weight: 800;
}

.why-slide.orange .why-card-title {
  color: #9a3412;
}

.why-card-desc {
  margin-top: 20rpx;
  font-size: 20rpx;
  color: #53545C;
  line-height: 32rpx;
}

.why-slide.orange .why-card-desc {
  color: #7c4a2d;
}

.why-carousel :deep(.slick-dots) {
  bottom: 44rpx;
}

.why-carousel.blue :deep(.slick-dots li button) {
  background: #cfe0fb;
}

.services {
  padding: 95rpx 40rpx 100rpx;
  background: #F8FAFC;
}

.service-list {
  margin-top: 60rpx;
  display: grid;
  gap: 24rpx;
}

.service-panel {
  padding: 43rpx 40rpx 52rpx;
  border: 2rpx solid #d4e7ff;
  border-radius: 16rpx;
  background: #ffffff;
}

.panel-head {
  display: flex;
  align-items: center;
  gap: 24rpx;
  margin-bottom: 42rpx;
}

.panel-head image {
  width: 48rpx;
  height: 48rpx;
}

.panel-head text {
  color: #2d2f36;
  font-size: 30rpx;
  line-height: 1.2;
  font-weight: 800;
}

.service-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 28rpx;
  column-gap: 16rpx;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 14rpx;
}

.service-item image {
  width: 24rpx;
  height: 24rpx;
  flex: 0 0 24rpx;
}

.service-item text {
  color: #3f4249;
  font-size: 24rpx;
  line-height: 1.2;
  white-space: nowrap;
}

.audience {
  padding: 100rpx 40rpx 100rpx;
  background: #FFF7ED;
}

.audience-list {
  margin-top: 58rpx;
  display: grid;
  gap: 18rpx;
}

.audience-card {
  min-height: 186rpx;
  padding: 36rpx 32rpx 44rpx;
  border: 2rpx solid #ffe2bd;
  border-radius: 14rpx;
  background: #ffffff;
}

.audience-card image {
  width: 48rpx;
  height: 48rpx;
  float: left;
  margin-right: 20rpx;
}

.audience-title,
.audience-desc {
  display: block;
}

.audience-title {
  padding-top: 4rpx;
  font-size: 28rpx;
  color: #333333;
  font-size: 30rpx;
  line-height: 1.2;
  font-weight: 800;
}

.audience-desc {
  clear: both;
  padding-top: 29rpx;
  font-size: 20rpx;
  color: #53545C;
  line-height: 32rpx;
}

.cta {
  padding: 100rpx 40rpx 100rpx;
  text-align: center;
  background: #E0ECFE;
}

.cta-title,
.cta-desc,
.qr-title,
.qr-subtitle,
.contact,
.address {
  display: block;
}

.cta-title {
  color: #2d2f36;
  font-size: 40rpx;
  line-height: 1.35;
  font-weight: 800;
}

.cta-desc {
  margin-top: 27rpx;
  color: #8c95a8;
  font-size: 28rpx;
  line-height: 1.55;
}

.qr {
  margin-top: 60rpx;
  width: 412rpx;
  height: 412rpx;
}

.qr-title {
  margin-top: 35rpx;
  color: #2d2f36;
  font-size: 44rpx;
  line-height: 1.2;
  font-weight: 800;
}

.qr-subtitle {
  margin-top: 18rpx;
  font-size: 28rpx;
  color: #333333;
  line-height: 1.2;
}

.contact,
.address {
  font-size: 28rpx;
  color: #333333;
  line-height: 1.45;
}

.contact {
  margin-top: 50rpx;
}

.address {
  margin-top: 19rpx;
}

.footer {
  height: 145rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5ff;
}

.footer image {
  width: 260rpx;
  height: 32rpx;
}
</style>
