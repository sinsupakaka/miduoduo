<template>
  <view class="page">
    <MobileTopNav title="数字展会服务" active-route-key="digitalExpoService" />

    <view class="hero">
      <image class="hero-bg" :src="asset('图层 110@2x.png')" mode="aspectFill" />
      <view class="hero-copy">
        <text class="hero-kicker">数字展会 · 商机全年在</text>
        <text class="hero-title">线下大型展会 &amp; 线上数字运营</text>
        <text class="hero-subtitle">跨境类目全场景展会解决方案</text>
        <button class="primary-button" type="button">方案咨询</button>
      </view>
      <text class="hero-note">
        米多多数字展会，以线下展会为基础，通过数字化能力实现线上线下联动，打造365天不落幕的跨境贸易对接场景。从大型峰会、专业展览到产业对接，我们用数字化提升效率，让供需匹配更精准、商机更持久。
      </text>
    </view>

    <view class="section organize-section">
      <SectionTitle title="全场景线下展会组织" desc="覆盖各类跨境电商展会与行业活动" tone="dark" />
      <view class="organize-stage">
        <image class="organize-wave" :src="asset('形状 12@2x.png')" mode="aspectFill" />
        <view v-for="item in organizeItems" :key="item.title" class="organize-card">
          <image class="organize-icon" :src="asset(item.icon)" mode="aspectFit" />
          <text class="organize-title">{{ item.title }}</text>
        </view>
      </view>
    </view>

    <view class="section fair-section">
      <SectionTitle title="大型展览组织承办" desc="2021-2026年，参与创办并承办国家级跨境电商展会——中国跨境电商交易会" tone="dark" />
      <swiper
        class="fair-swiper"
        circular
        :autoplay="fairMarquee.autoplay"
        :interval="fairMarquee.interval"
        :duration="fairMarquee.duration"
        @change="activeFairIndex = $event.detail.current"
      >
        <swiper-item v-for="item in fairMarquee.items" :key="item.title">
          <view class="fair-card">
            <image class="fair-image" :src="asset(item.image)" mode="aspectFill" />
            <view class="fair-content">
              <text class="fair-title">{{ item.title }}</text>
              <text class="fair-desc">{{ item.desc }}</text>
              <button class="light-button" type="button">{{ item.buttonText }}</button>
              <view class="stats-grid">
                <view v-for="stat in item.stats" :key="stat.label" class="stat-item">
                  <text class="stat-value">{{ stat.value }}</text>
                  <text class="stat-label">{{ stat.label }}</text>
                </view>
              </view>
            </view>
          </view>
        </swiper-item>
      </swiper>
      <view v-if="fairMarquee.items.length > 1" class="module-dots">
        <view
          v-for="(_, index) in fairMarquee.items"
          :key="index"
          :class="{ active: index === activeFairIndex }"
        ></view>
      </view>
    </view>

    <view class="section first-section">
      <SectionTitle title="中国跨境电商第一展" tone="dark" />
      <swiper
        class="first-swiper"
        circular
        :autoplay="firstExpoMarquee.autoplay"
        :interval="firstExpoMarquee.interval"
        :duration="firstExpoMarquee.duration"
        @change="activeFirstExpoIndex = $event.detail.current"
      >
        <swiper-item v-for="item in firstExpoMarquee.items" :key="item.title">
          <view class="first-card">
            <image class="first-image" :src="asset(item.image)" mode="widthFix" />
            <view class="feature-list">
              <view v-for="feature in item.features" :key="feature.title" class="feature-item">
                <image class="feature-icon" :src="asset(feature.icon)" mode="aspectFit" />
                <view class="feature-copy">
                  <text class="feature-title">{{ feature.title }}</text>
                  <text class="feature-text">{{ feature.text }}</text>
                </view>
              </view>
            </view>
          </view>
        </swiper-item>
      </swiper>
      <view class="module-dots">
        <view
          v-for="(_, index) in firstExpoMarquee.items"
          :key="index"
          :class="{ active: index === activeFirstExpoIndex }"
        ></view>
      </view>
    </view>

    <view class="section case-section">
      <SectionTitle title="品牌展会案例" tone="dark" />
      <swiper
        class="case-swiper"
        circular
        :autoplay="brandCaseMarquee.autoplay"
        :interval="brandCaseMarquee.interval"
        :duration="brandCaseMarquee.duration"
        @change="activeCaseIndex = $event.detail.current"
      >
        <swiper-item v-for="item in brandCaseMarquee.items" :key="item.title">
          <view class="case-card">
            <image class="case-image" :src="asset(item.image)" mode="aspectFill" />
            <text class="case-title">{{ item.title }}</text>
            <view class="case-meta">
              <view class="case-meta-row">
                <image class="case-meta-icon" :src="asset('形状 13 拷贝 2@2x.png')" mode="aspectFit" />
                <text>{{ item.date }}</text>
              </view>
              <view class="case-meta-row">
                <image class="case-meta-icon" :src="asset('形状 14 拷贝 2@2x.png')" mode="aspectFit" />
                <text>{{ item.location }}</text>
              </view>
            </view>
            <text class="case-desc">{{ item.text }}</text>
            <button class="outline-button" type="button">了解更多</button>
          </view>
        </swiper-item>
      </swiper>
      <view class="case-dots">
        <view
          v-for="(_, index) in brandCaseMarquee.items"
          :key="index"
          :class="{ active: index === activeCaseIndex }"
        ></view>
      </view>
      <view class="case-list">
        <view v-for="item in brandCaseList" :key="item.title" class="case-list-card">
          <image class="case-list-image" :src="asset(item.image)" mode="aspectFill" />
          <text class="case-list-title">{{ item.title }}</text>
          <view class="case-list-meta">
            <text class="case-organizer">{{ item.organizer }}</text>
            <view class="case-meta-row">
              <image class="case-meta-icon" :src="asset('形状 13 拷贝 2@2x.png')" mode="aspectFit" />
              <text>{{ item.date }}</text>
            </view>
            <view class="case-meta-row">
              <image class="case-meta-icon" :src="asset('形状 14 拷贝 2@2x.png')" mode="aspectFit" />
              <text>{{ item.location }}</text>
            </view>
          </view>
          <text class="case-list-desc">{{ item.text }}</text>
          <view v-if="item.tags?.length" class="case-tags">
            <text v-for="tag in item.tags" :key="tag">{{ tag }}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="section summit-section">
      <SectionTitle title="行业峰会组织策划" tone="dark" />
      <view class="summit-grid">
        <view v-for="item in summitMarquee.items" :key="item.title" class="summit-card">
          <image class="summit-image" :src="asset(item.image)" mode="aspectFill" />
          <text class="summit-title">{{ item.title }}</text>
        </view>
      </view>
    </view>

    <view class="section operation-section">
      <SectionTitle
        title="数字化展会运营"
        desc="提供展会线上化搭建、数字化观展、数据沉淀分析，实现“线下一场展，线上一直转”"
        tone="dark"
      />
      <view class="operation-list">
        <view v-for="item in operations" :key="item.title" class="operation-card">
          <image class="operation-image" :src="asset(item.image)" mode="widthFix" />
          <text class="operation-title">{{ item.title }}</text>
          <text class="operation-text">{{ item.text }}</text>
        </view>
      </view>
    </view>

    <view class="section advantage-section">
      <SectionTitle title="我们的优势" tone="dark" />
      <image class="advantage-image" :src="asset('组 6 拷贝 5@2x.png')" mode="widthFix" />
    </view>

    <view class="cta">
      <text class="cta-title">让每一场会，{{ '\n' }}都成为持续增长的生意入口</text>
      <button class="cta-button" type="button">合作咨询</button>
      <image class="cta-qr" :src="asset('图层 112@2x.png')" mode="aspectFit" />
    </view>

    <MobileFooterLogo />
  </view>
</template>

<script setup>
import { ref } from 'vue'
import MobileFooterLogo from '../components/MobileFooterLogo.vue'
import MobileTopNav from '../components/MobileTopNav.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { asset as resolveAsset } from '../utils/assets'

const asset = (name) => resolveAsset(name, '数字展会服务')

const activeFairIndex = ref(0)
const activeFirstExpoIndex = ref(0)
const activeCaseIndex = ref(0)

const organizeItems = [
  { icon: '图层 132@2x.png', title: '世界级龙头展览\n(10万人级)' },
  { icon: '图层 134@2x.png', title: '区域性专题沙龙\n(百人级)' },
  { icon: '图层 133@2x.png', title: '全国性行业峰会\n(千人级)' },
]

const fairMarquee = {
  autoplay: true,
  interval: 3800,
  duration: 500,
  items: [
    {
      image: '图层 130@2x.png',
      title: '第六届中国跨境电商交易会',
      desc: '2026 中国跨境电商大会暨闽江数字贸易走廊创新发展大会',
      buttonText: '了解更多',
      stats: [
        { value: '10万m²', label: '展会规模' },
        { value: '60+', label: '平台' },
        { value: '200+', label: '服务商' },
        { value: '50+场', label: '行业论坛' },
        { value: '80+个', label: '产业带' },
        { value: '3347+', label: '参展商' },
        { value: '115753+', label: '采购商' },
      ],
    },
  ],
}

const firstExpoMarquee = {
  autoplay: true,
  interval: 4000,
  duration: 500,
  items: [
    {
      image: '图层 128@2x.png',
      features: [
        {
          icon: '组 19@2x.png',
          title: '办展规格高',
          text: '是跨境电商同类展会中唯一“中”字头，由商务部外贸发展事务局主办，办展级别高，组织规模大，多层品类齐，采购邀约广，产业要素全。',
        },
      ],
    },
    {
      image: '图层 128@2x.png',
      features: [
        {
          icon: '组 19@2x(1).png',
          title: '认证权威',
          text: '全国跨境电商展会首个获得国际展览业协会(UFI)认证，中国贸促会官方评定为“中国跨境电商第一展”。',
        },
      ],
    },
    {
      image: '图层 128@2x.png',
      features: [
        {
          icon: '组 19@2x(2).png',
          title: '影响力广',
          text: '同步联动中国侨联、中国一带一路网、中国国际电视台、中央电视台、新华社、人民日报、中新社、光明日报等深度聚焦关注的展会。',
        },
      ],
    },
  ],
}

const brandCaseMarquee = {
  autoplay: true,
  interval: 3600,
  duration: 500,
  items: [
    {
      image: '图层 113@2x(1).png',
      title: '2025 Mega Show香港跨境出海大会',
      date: '2025年10月20日-21日',
      location: '香港会议展览中心展览馆1A',
      text: '米多多角色：跨境电商展区组织、论坛策划、达人邀约',
    },
    {
      image: '图层 126@2x.png',
      title: '2024CBE杭州国际美容博览会',
      date: '2024年9月11日-12日',
      location: '杭州国际博览中心',
      text: '新美妆跨境出海论坛主办，链接美妆品牌与跨境平台资源。',
    },
    {
      image: '图层 127@2x.png',
      title: '2026APES上海国际汽配展',
      date: '2026年8月5日-7日',
      location: '国家会展中心（上海）',
      text: '跨境出海论坛主办，沉淀汽配产业带出海垂直行业商机。',
    },
  ],
}

const brandCaseList = [
  {
    image: '图层 126@2x.png',
    title: '2024CBE杭州国际美容博览会',
    organizer: '新美妆跨境出海论坛主办',
    date: '2024年9月11日-12日',
    location: '杭州国际博览中心',
    text: '米多多角色：负责2024CBE新美妆跨境出海论坛主办，汇聚美妆出海品牌方、跨境电商平台方东南亚头部KOL、国际及法规机构方。',
  },
  {
    image: '图层 127@2x.png',
    title: '2026APES上海国际汽配展',
    organizer: '跨境出海论坛主办',
    date: '2026年8月5日-7日',
    location: '国家会展中心（上海）',
    text: '',
    tags: ['展会规模：60000m²', '观众：35000+', '参展企业：1800+'],
  },
]

const summitMarquee = {
  items: [
    { image: '图层 113@2x.png', title: '2025沃尔玛全球电商交流会-福州站' },
    { image: '图层 118@2x.png', title: 'ebay福建全品类500人峰会' },
    { image: '图层 119@2x.png', title: '2025闽商跨境的力量行业发展大会' },
    { image: '图层 120@2x.png', title: '2025美客多新卖家招商启动大会' },
    { image: '图层 123@2x.png', title: '2025全球POD生态+跨境电商潮选大会' },
    { image: '图层 124@2x.png', title: '2026美客多招商运营启动大会' },
    { image: '图层 125@2x.png', title: '福建省电子商务促进会十周年庆' },
    { image: '图层 125@2x(1).png', title: 'TikTok Shop 2025福建产业带招商会' },
  ],
}

const operations = [
  {
    image: '数字展会运营3@2x.png',
    title: '小程序',
    text: '依托小程序，集成展会导览、展商查询、活动预约与在线互动，实现指尖逛展，一键触达，提升观众与展商的双端体验。',
  },
  {
    image: '组 10@2x.png',
    title: '线上展会广告',
    text: '借助小程序及自媒体，为参展企业提供品牌展示、产品引流、直播推广等服务，触达潜在客户。',
  },
  {
    image: '组 10 拷贝@2x.png',
    title: '365天供采对接',
    text: '依托小程序，实现企业展示、产品陈列、在线询盘、全年供需对接，让展会价值持续延伸。',
  },
  {
    image: '组 9 拷贝 2@2x.png',
    title: 'SCRM客户关系管理系统',
    text: '沉淀展会全流程客户数据，支持行为追踪、标签分层与智能营销，深度运营客户关系。',
  },
  {
    image: '图层 114@2x.png',
    title: '数据赋能行业决策',
    text: '输出行业分析、趋势报告与论坛内容，为企业与机构提供专业数据支持。',
  },
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  overflow: hidden;
  color: #30333a;
  background: #ffffff;
}

.hero {
  position: relative;
  min-height: 855rpx;
  overflow: hidden;
  color: #ffffff;
  background: #0d1a2c;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-copy {
  position: relative;
  z-index: 2;
  padding: 78rpx 28rpx 0;
  text-align: center;
}

.hero-kicker {
  display: block;
  color: rgba(255, 255, 255, 0.82);
  font-size: 29rpx;
  line-height: 1.3;
}

.hero-title {
  display: block;
  margin-top: 24rpx;
  color: #ffffff;
  font-size: 43rpx;
  line-height: 1.22;
  font-weight: 800;
}

.hero-subtitle {
  display: block;
  margin-top: 22rpx;
  color: #ffeb3f;
  font-size: 29rpx;
  line-height: 1.3;
  font-weight: 600;
}

.primary-button,
.light-button,
.outline-button,
.cta-button {
  height: 58rpx;
  padding: 0 48rpx;
  border: 0;
  border-radius: 999rpx;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  font-weight: 700;
  line-height: 1;
}

.primary-button::after,
.light-button::after,
.outline-button::after,
.cta-button::after {
  border: 0;
}

.primary-button {
  margin-top: 30rpx;
  color: #ffffff;
  background: linear-gradient(90deg, #2667ff 0%, #5f78ff 100%);
}

.hero-note {
  position: absolute;
  left: 32rpx;
  right: 32rpx;
  bottom: 44rpx;
  z-index: 2;
  display: block;
  color: rgba(255, 255, 255, 0.84);
  font-size: 24rpx;
  line-height: 1.9;
  text-align: justify;
}

.section {
  padding: 92rpx 0 0;
  background: #ffffff;
}

.organize-section {
  padding-bottom: 82rpx;
  background: #f6f9fd;
}

.organize-stage {
  position: relative;
  min-height: 452rpx;
  margin-top: 48rpx;
}

.organize-wave {
  position: absolute;
  left: -116rpx;
  right: 0;
  top: 132rpx;
  width: 980rpx;
  height: 98rpx;
}

.organize-card {
  position: absolute;
  width: 166rpx;
  min-height: 166rpx;
  padding: 24rpx 12rpx 18rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 14rpx;
  background: #ffffff;
  box-shadow: 0 18rpx 38rpx rgba(66, 98, 144, 0.1);
}

.organize-card:nth-child(2) {
  left: 86rpx;
  top: 32rpx;
}

.organize-card:nth-child(3) {
  right: 70rpx;
  top: 0;
}

.organize-card:nth-child(4) {
  left: 50%;
  top: 244rpx;
  transform: translateX(-50%);
}

.organize-icon {
  width: 70rpx;
  height: 70rpx;
}

.organize-title {
  display: block;
  margin-top: 14rpx;
  color: #282c35;
  font-size: 22rpx;
  line-height: 1.32;
  text-align: center;
  white-space: pre-line;
}

.fair-section {
  padding-bottom: 0;
}

.fair-card {
  position: relative;
  min-height: 642rpx;
  margin-top: 48rpx;
  color: #ffffff;
  overflow: hidden;
  background: #132136;
}

.fair-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.fair-content {
  position: relative;
  z-index: 2;
  padding: 76rpx 28rpx 48rpx;
  text-align: center;
}

.fair-title {
  display: block;
  color: #ffffff;
  font-size: 40rpx;
  line-height: 1.18;
  font-weight: 800;
}

.fair-desc {
  display: block;
  margin: 22rpx auto 0;
  max-width: 610rpx;
  color: rgba(255, 255, 255, 0.8);
  font-size: 22rpx;
  line-height: 1.5;
}

.light-button {
  margin-top: 36rpx;
  color: #2868ff;
  background: #ffffff;
}

.stats-grid {
  margin-top: 46rpx;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 24rpx;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
}

.stat-value {
  color: #ffffff;
  font-size: 32rpx;
  line-height: 1.1;
  font-weight: 800;
  white-space: nowrap;
}

.stat-label {
  margin-top: 12rpx;
  color: rgba(255, 255, 255, 0.78);
  font-size: 22rpx;
  line-height: 1.2;
  white-space: nowrap;
}

.first-section {
  padding-bottom: 78rpx;
}

.first-swiper {
  height: 860rpx;
  margin-top: 54rpx;
}

.first-card {
  margin: 0 30rpx;
  padding: 0 0 46rpx;
  border-radius: 28rpx;
  background: #f6f9fd;
}

.first-image {
  width: 100%;
  display: block;
  border-radius: 28rpx 28rpx 0 0;
}

.feature-list {
  padding: 32rpx 34rpx 0;
  display: grid;
  gap: 28rpx;
}

.feature-item {
  display: grid;
  grid-template-columns: 58rpx 1fr;
  gap: 20rpx;
  align-items: start;
}

.feature-icon {
  width: 54rpx;
  height: 54rpx;
}

.feature-title {
  display: block;
  color: #252932;
  font-size: 30rpx;
  line-height: 1.3;
  font-weight: 800;
}

.feature-text {
  display: block;
  margin-top: 12rpx;
  color: #606976;
  font-size: 24rpx;
  line-height: 1.72;
  text-align: justify;
}

.module-dots {
  margin-top: 48rpx;
  display: flex;
  justify-content: center;
  gap: 20rpx;
}

.module-dots view {
  width: 82rpx;
  height: 5rpx;
  background: #c7c7c7;
}

.module-dots .active {
  background: #2468ff;
}

.case-section {
  padding-bottom: 34rpx;
}

.case-swiper {
  height: 764rpx;
  margin-top: 52rpx;
}

.case-card {
  padding: 0 30rpx;
}

.case-image {
  width: 100%;
  height: 352rpx;
  display: block;
}

.case-title {
  display: block;
  margin-top: 28rpx;
  color: #252932;
  font-size: 31rpx;
  line-height: 1.34;
  font-weight: 800;
}

.case-meta {
  margin-top: 22rpx;
  display: grid;
  gap: 14rpx;
  color: #596172;
  font-size: 23rpx;
  line-height: 1.3;
}

.case-meta-row {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 10rpx;
}

.case-meta-icon {
  width: 26rpx;
  height: 26rpx;
  flex: none;
}

.case-meta-row text {
  min-width: 0;
  flex: 1;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
}

.case-desc {
  display: block;
  margin-top: 20rpx;
  color: #596172;
  font-size: 23rpx;
  line-height: 1.62;
}

.outline-button {
  margin-top: 28rpx;
  margin-left: 0;
  color: #2868ff;
  background: #ffffff;
  border: 2rpx solid #2868ff;
}

.case-dots {
  margin-top: -18rpx;
  padding-right: 70rpx;
  display: flex;
  justify-content: flex-end;
  gap: 18rpx;
}

.case-dots view {
  width: 16rpx;
  height: 16rpx;
  border-radius: 50%;
  background: #d1d5dc;
}

.case-dots .active {
  background: #2868ff;
}

.case-list {
  margin-top: 44rpx;
  padding: 0 30rpx;
  display: grid;
  gap: 48rpx;
}

.case-list-card {
  min-width: 0;
}

.case-list-image {
  width: 100%;
  height: 352rpx;
  display: block;
}

.case-list-title {
  display: block;
  margin-top: 26rpx;
  color: #252932;
  font-size: 32rpx;
  line-height: 1.34;
  font-weight: 800;
}

.case-list-meta {
  margin-top: 18rpx;
  display: grid;
  gap: 14rpx;
  color: #3c424d;
  font-size: 24rpx;
  line-height: 1.35;
}

.case-organizer {
  display: block;
  color: #30343b;
  font-size: 25rpx;
  line-height: 1.35;
}

.case-list-desc {
  display: block;
  margin-top: 18rpx;
  color: #606976;
  font-size: 23rpx;
  line-height: 1.68;
  text-align: justify;
}

.case-tags {
  margin-top: 22rpx;
  display: flex;
  gap: 12rpx;
  overflow-x: auto;
}

.case-tags text {
  flex: none;
  height: 48rpx;
  padding: 0 22rpx;
  display: flex;
  align-items: center;
  border-radius: 999rpx;
  background: #f4f7fb;
  color: #5d6675;
  font-size: 21rpx;
  white-space: nowrap;
}

.summit-section {
  padding-bottom: 88rpx;
  background: #f6f9fd;
}

.summit-grid {
  margin-top: 48rpx;
  padding: 0 30rpx;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16rpx;
}

.summit-card {
  position: relative;
  height: 194rpx;
  overflow: hidden;
  background: #dce6f4;
}

.summit-card:nth-child(1),
.summit-card:nth-child(3),
.summit-card:nth-child(5),
.summit-card:nth-child(7) {
  height: 252rpx;
}

.summit-image {
  width: 100%;
  height: 100%;
  display: block;
}

.summit-title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 42rpx;
  padding: 9rpx 10rpx;
  display: flex;
  align-items: center;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.6);
  font-size: 20rpx;
  line-height: 1.2;
}

.operation-section {
  padding-bottom: 72rpx;
}

.operation-list {
  margin-top: 50rpx;
  padding: 0 30rpx;
  display: grid;
  gap: 72rpx;
}

.operation-card {
  text-align: center;
}

.operation-image {
  width: 100%;
  display: block;
  background: #f0f4fa;
}

.operation-title {
  display: block;
  margin-top: 52rpx;
  color: #252932;
  font-size: 36rpx;
  line-height: 1.25;
  font-weight: 800;
}

.operation-text {
  display: block;
  margin-top: 24rpx;
  color: #606976;
  font-size: 27rpx;
  line-height: 1.82;
  text-align: justify;
}

.advantage-section {
  padding: 94rpx 0 86rpx;
  background: #f6f9fd;
}

.advantage-image {
  width: 100%;
  margin-top: 54rpx;
  display: block;
}

.cta {
  padding: 70rpx 30rpx 78rpx;
  text-align: center;
  background: #2e67e8;
}

.cta-title {
  display: block;
  color: #ffffff;
  font-size: 38rpx;
  line-height: 1.62;
  font-weight: 800;
  white-space: pre-line;
}

.cta-button {
  margin-top: 36rpx;
  color: #2e67e8;
  background: #ffffff;
}

.cta-qr {
  width: 320rpx;
  height: 320rpx;
  margin: 44rpx auto 0;
  display: block;
  background: #ffffff;
}
</style>
