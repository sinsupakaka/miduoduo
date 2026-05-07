<template>
  <view class="page">
    <MobileTopNav
      title="行业智库"
      active-route-key="industryThinkTank"
      theme="dark"
      :avatar-src="''"
    />

    <view class="hero">
      <view class="hero-copy">
        <text class="hero-title">以研究洞见未来</text>
        <view class="hero-subtitle-row">
          <view class="title-line"></view>
          <text class="hero-subtitle">米多多行业智库</text>
          <view class="title-line"></view>
        </view>
        <text class="hero-desc">连续多年参与/主编全行业年度成果，发布跨境电商多个指数与榜单，为中国企业出海提供深度智力支撑</text>
      </view>
      <image class="hero-art" :src="asset('img2@2x.png')" mode="widthFix" />
    </view>

    <view class="section research-section">
      <SectionTitle title="专注行业研究，引领行业风向" desc="跨境电商行业深度报告" tone="dark" />

      <view class="bullet-list">
        <view v-for="item in researchParticipation" :key="item" class="bullet-item">
          <image :src="asset('icon-point@2x.png')" mode="aspectFit" />
          <text>{{ item }}</text>
        </view>
      </view>

      <view class="book-grid small-books">
        <image v-for="item in reportBooks" :key="item" :src="asset(item)" mode="widthFix" />
      </view>

      <view class="bullet-list authored-list">
        <view v-for="(item, index) in authoredResearch" :key="item" class="bullet-item">
          <image :src="asset(`icon-point@2x(${index + 4}).png`)" mode="aspectFit" />
          <text>{{ item }}</text>
        </view>
      </view>

      <view class="book-grid feature-books">
        <image v-for="item in featureBooks" :key="item" :src="asset(item)" mode="aspectFit" />
      </view>

      <image class="index-banner" :src="asset('banner1@2x.png')" mode="widthFix" />

      <view class="partner-grid">
        <view v-for="item in partners" :key="item" class="partner-card">
          <image :src="asset(item)" mode="aspectFit" />
        </view>
      </view>
    </view>

    <view class="section editorial-section">
      <SectionTitle
        title="主编行业年度蓝皮书/白皮书"
        desc="联合行业影响力人物和机构共创发布"
        tone="dark"
      />

      <view class="media-note-list">
        <view class="media-note">
          <image :src="asset('icon-01@2x.png')" mode="aspectFit" />
          <view>
            <text class="note-title">央媒聚焦报道</text>
            <text class="note-desc">人民日报 / 央视 / 新华社</text>
          </view>
        </view>
        <view class="media-note">
          <image :src="asset('icon-01@2x(1).png')" mode="aspectFit" />
          <view>
            <text class="note-title">联合发布</text>
            <text class="note-desc">商务部原副部长蒋耀平、国务院参事、中国跨境电商五十人论坛主席汤敏，新出海研究院学者黄渊普、新商业架构师张琦等行业影响力人物联合发布。</text>
          </view>
        </view>
      </view>

      <view class="book-grid editorial-books">
        <image v-for="item in editorialBooks" :key="item" :src="asset(item)" mode="aspectFit" />
      </view>

      <text class="center-note">累计影响超30万跨境电商从业者</text>
    </view>

    <view class="media-section">
      <SectionTitle title="央媒报道" />

      <view class="media-logo-grid">
        <image v-for="item in mediaLogos" :key="item" :src="asset(item)" mode="aspectFit" />
      </view>

      <view class="paper-stack">
        <image v-for="item in papers" :key="item" :src="asset(item)" mode="widthFix" />
      </view>
    </view>

    <view class="section scene-section">
      <SectionTitle title="发布现场" tone="dark" />

      <view v-for="scene in scenes" :key="scene.title" class="scene-block">
        <text class="scene-title">{{ scene.title }}</text>
        <view class="scene-gallery">
          <image
            v-for="item in scene.gallery"
            :key="item"
            :class="['scene-image', { wide: item === scene.wide }]"
            :src="asset(item)"
            mode="aspectFill"
          />
        </view>
      </view>
    </view>

    <view class="guide-section">
      <SectionTitle title="内容导读" />

      <view class="guide-block">
        <text class="guide-title">《“升”而全球 · 中国出口跨境电商升级发展蓝皮书（2025）》</text>
        <image v-for="item in guide2025" :key="item" class="guide-image" :src="asset(item)" mode="widthFix" />
      </view>

      <view class="guide-block">
        <text class="guide-title">《和合共生 耦合发展 · 中国出口跨境电商蓝皮书（2026）》</text>
        <image class="guide-image" :src="asset('img-内容导读3@2x.png')" mode="widthFix" />
      </view>

      <view class="guide-block">
        <text class="guide-title">跨交会指数及“跨之力”榜单（2026）</text>
        <image v-for="item in guideIndex" :key="item" class="guide-image chart" :src="asset(item)" mode="widthFix" />
      </view>
    </view>

    <view class="section cooperation-section">
      <SectionTitle title="合作模式" tone="dark" />

      <view class="cooperation-table">
        <view v-for="row in cooperationRows" :key="row.title" class="table-row">
          <text class="table-title">{{ row.title }}</text>
          <text class="table-value">{{ row.value }}</text>
        </view>
      </view>

      <view class="action-panel">
        <view v-for="item in actionItems" :key="item.label" class="action-item">
          <image :src="asset(item.icon)" mode="aspectFit" />
          <text>{{ item.label }}</text>
        </view>
      </view>

      <image class="arrow-down" :src="asset('icon-箭头@2x.png')" mode="aspectFit" />
      <image class="qrcode" :src="asset('icon-qrcode@2x.png')" mode="aspectFit" />
    </view>

    <view class="copyright-banner">
      <text class="copyright-title">深耕行业研究 · 沉淀专业价值</text>
      <text class="copyright-desc">版权声明：米多多版权所有，研究成果未经授权不得转载</text>
    </view>

    <MobileFooterLogo />
  </view>
</template>

<script setup>
import MobileFooterLogo from '../components/MobileFooterLogo.vue'
import MobileTopNav from '../components/MobileTopNav.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { asset as resolveAsset } from '../utils/assets'

const asset = (name) => resolveAsset(name, '行业智库')

const researchParticipation = [
  '参与上海社科院《中国跨境出口电商发展报告(2021)》编撰工作',
  '参与德勤《中国跨境电商企业出海发展蓝皮书(2022)》编撰工作',
  '参与德勤《中国跨境电商企业出海发展蓝皮书(2023)》编撰工作',
  '参与德勤《中国跨境电商企业出海发展蓝皮书(2024)》编撰工作',
]

const authoredResearch = [
  '主编《“升”而全球 · 中国出口跨境电商升级发展蓝皮书(2025)》',
  '主编《和合共生 耦合发展 · 中国出口跨境电商蓝皮书(2026)》',
  '主编《“新”“新”向荣 生生不息 · 全球电商市场全景白皮书(2026)》',
  '首创发布“跨交会指数(2026)”和“跨之力榜单(2026)”',
]

const reportBooks = [
  'icon- book1@2x.png',
  'icon- book2@2x.png',
  'icon- book3@2x.png',
  'icon- book4@2x.png',
  'icon- book5@2x.png',
  'icon- book6@2x.png',
  'icon- book7@2x.png',
]

const featureBooks = ['icon- book8@2x.png', 'icon- book9@2x.png', 'icon- book10@2x.png']

const partners = ['brand1@2x.png', 'brand2@2x.png', 'brand3@2x.png', 'brand4@2x.png']

const editorialBooks = ['img3@2x.png', 'img4@2x.png', 'img5@2x.png']

const mediaLogos = [
  'icon-logo1@2x.png',
  'icon-logo2@2x.png',
  'icon-logo3@2x.png',
  'icon-logo4@2x.png',
  'icon-logo5@2x.png',
  'icon-logo6@2x.png',
]

const papers = ['paper1@2x.png', 'paper2@2x.png', 'paper3@2x.png', 'paper4@2x.png', 'paper5@2x.png']

const scenes = [
  {
    title: '《“升”而全球 · 中国出口跨境电商升级发展蓝皮书（2025）》发布现场',
    gallery: ['img7@2x.png', 'img8@2x.png', 'img6@2x.png'],
    wide: 'img6@2x.png',
  },
  {
    title: '《和合共生 耦合发展 · 中国出口跨境电商蓝皮书（2026）》发布现场',
    gallery: ['img11@2x.png', 'img9@2x.png', 'img10@2x.png'],
    wide: 'img11@2x.png',
  },
]

const guide2025 = ['img-内容导读1@2x.png', 'img-内容导读2@2x.png']

const guideIndex = ['img-内容导4@2x.png', 'img-内容导读5@2x.png', 'img-内容导读6@2x.png']

const cooperationRows = [
  { title: '联合发布', value: '联合调研、联合署名、联合发布' },
  { title: '内容共创', value: '专栏稿、案例共建、问答共建' },
  { title: '定制化研究', value: '企业专项行业研究、赛道分析、白皮书定制' },
  { title: '资料分发', value: '报告授权分发、内容转载合作' },
  { title: '行业学者、研究机构、跨境电商平台', value: '报告署名、发布会曝光、官网展示、行业影响力背书' },
  { title: '服务商、平台方、品牌方', value: '品牌曝光、流量导入、专业形象塑造' },
  { title: '品牌方、投资机构', value: '专属研究报告、企业内部决策支持、行业话语权' },
  { title: '行业媒体、协会、平台', value: '内容授权、品牌背书、用户触达' },
]

const actionItems = [
  { icon: 'icon-免费试读@2x.png', label: '免费试读' },
  { icon: 'icon-获取完整版PDF@2x.png', label: '获取完整版PDF' },
  { icon: 'icon-纸质书申请@2x.png', label: '纸质书申请' },
  { icon: 'icon-合作咨询@2x.png', label: '合作咨询' },
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  color: #202532;
  background: #ffffff;
}

.page :deep(.mobile-nav.dark) {
  background: #050505;
}

.hero {
  overflow: hidden;
  background: linear-gradient(180deg, #06142d 0%, #07152d 100%);
}

.hero-copy {
  padding: 88rpx 36rpx 0;
  text-align: center;
  color: #ffffff;
}

.hero-title {
  display: block;
  font-size: 46rpx;
  line-height: 1.25;
  font-weight: 800;
}

.hero-subtitle-row {
  margin-top: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20rpx;
}

.title-line {
  width: 74rpx;
  height: 2rpx;
  background: linear-gradient(90deg, rgba(40, 155, 255, 0), #1596ff);
}

.title-line:last-child {
  transform: rotate(180deg);
}

.hero-subtitle {
  color: #ffffff;
  font-size: 34rpx;
  line-height: 1.2;
  font-weight: 800;
}

.hero-desc {
  display: block;
  margin: 28rpx auto 0;
  max-width: 650rpx;
  color: rgba(255, 255, 255, 0.9);
  font-size: 26rpx;
  line-height: 1.72;
}

.hero-art {
  width: 100%;
  display: block;
  margin-top: 54rpx;
}

.section {
  padding: 92rpx 36rpx 0;
}

.research-section {
  padding-bottom: 84rpx;
}

.bullet-list {
  margin-top: 52rpx;
  display: grid;
  gap: 22rpx;
}

.authored-list {
  margin-top: 48rpx;
}

.bullet-item {
  display: flex;
  align-items: flex-start;
  gap: 14rpx;
}

.bullet-item image {
  width: 26rpx;
  height: 26rpx;
  margin-top: 9rpx;
  flex: none;
}

.bullet-item text {
  flex: 1;
  color: #3f4654;
  font-size: 23rpx;
  line-height: 1.72;
}

.book-grid {
  display: grid;
  align-items: end;
}

.small-books {
  margin-top: 40rpx;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18rpx 16rpx;
}

.small-books image {
  width: 100%;
}

.feature-books {
  margin: 44rpx auto 0;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22rpx;
}

.feature-books image {
  width: 100%;
  height: 238rpx;
}

.index-banner {
  width: 100%;
  display: block;
  margin-top: 42rpx;
}

.partner-grid {
  margin-top: 36rpx;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18rpx;
}

.partner-card {
  height: 88rpx;
  display: grid;
  place-items: center;
  border: 1rpx solid #d9e2f0;
  border-radius: 8rpx;
  background: #ffffff;
}

.partner-card image {
  width: 86%;
  height: 68rpx;
}

.editorial-section {
  padding-bottom: 88rpx;
  background: #f4f7fb;
}

.media-note-list {
  margin-top: 58rpx;
  display: grid;
  gap: 36rpx;
}

.media-note {
  display: flex;
  align-items: flex-start;
  gap: 18rpx;
}

.media-note image {
  width: 34rpx;
  height: 34rpx;
  margin-top: 3rpx;
  flex: none;
}

.note-title,
.note-desc,
.center-note,
.scene-title,
.guide-title {
  display: block;
}

.note-title {
  color: #262a34;
  font-size: 28rpx;
  line-height: 1.3;
  font-weight: 800;
}

.note-desc {
  margin-top: 14rpx;
  color: #4f5968;
  font-size: 25rpx;
  line-height: 1.66;
}

.editorial-books {
  margin-top: 50rpx;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18rpx;
}

.editorial-books image {
  width: 100%;
  height: 260rpx;
  filter: drop-shadow(0 14rpx 24rpx rgba(40, 68, 130, 0.14));
}

.center-note {
  margin-top: 44rpx;
  text-align: center;
  color: #555f70;
  font-size: 25rpx;
  line-height: 1.6;
}

.media-section {
  padding: 94rpx 36rpx 102rpx;
  background: #050907 url("../../assets/行业智库/bg-央媒报道@2x.png") center top / cover no-repeat;
}

.media-logo-grid {
  margin-top: 48rpx;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22rpx 12rpx;
  align-items: center;
}

.media-logo-grid image {
  width: 100%;
  height: 74rpx;
}

.paper-stack {
  margin-top: 56rpx;
  min-height: 860rpx;
  position: relative;
}

.paper-stack image {
  position: absolute;
  border-radius: 8rpx;
  filter: drop-shadow(0 14rpx 22rpx rgba(0, 0, 0, 0.3));
}

.paper-stack image:nth-child(1) {
  left: 40rpx;
  top: 0;
  width: 520rpx;
  z-index: 3;
}

.paper-stack image:nth-child(2) {
  left: 0;
  top: 108rpx;
  width: 228rpx;
  z-index: 2;
}

.paper-stack image:nth-child(3) {
  right: 0;
  top: 108rpx;
  width: 228rpx;
  z-index: 2;
}

.paper-stack image:nth-child(4) {
  left: 30rpx;
  top: 520rpx;
  width: 310rpx;
}

.paper-stack image:nth-child(5) {
  right: 14rpx;
  top: 490rpx;
  width: 322rpx;
}

.scene-section {
  padding-bottom: 90rpx;
  background: #f6f9fd;
}

.scene-block {
  margin-top: 58rpx;
}

.scene-title {
  color: #252b35;
  font-size: 25rpx;
  line-height: 1.72;
}

.scene-gallery {
  margin-top: 28rpx;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18rpx;
}

.scene-image {
  width: 100%;
  height: 160rpx;
  border-radius: 8rpx;
}

.scene-image.wide {
  grid-column: 1 / -1;
  height: 440rpx;
}

.guide-section {
  padding: 94rpx 36rpx 104rpx;
  color: #ffffff;
  background: #041b49;
}

.guide-block {
  margin-top: 58rpx;
}

.guide-title {
  color: #ffffff;
  font-size: 25rpx;
  line-height: 1.72;
}

.guide-image {
  width: 100%;
  display: block;
  margin-top: 28rpx;
}

.guide-image.chart {
  margin-top: 18rpx;
}

.cooperation-section {
  padding-bottom: 78rpx;
}

.cooperation-table {
  margin-top: 50rpx;
  border-top: 1rpx solid #c9d8eb;
  border-left: 1rpx solid #c9d8eb;
}

.table-row {
  display: grid;
  grid-template-columns: 174rpx minmax(0, 1fr);
  border-bottom: 1rpx solid #c9d8eb;
}

.table-title,
.table-value {
  padding: 20rpx 18rpx;
  color: #303745;
  font-size: 24rpx;
  line-height: 1.5;
}

.table-title {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #f4f8fd;
  border-right: 1rpx solid #c9d8eb;
}

.action-panel {
  margin-top: 62rpx;
  padding: 30rpx 34rpx;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32rpx 38rpx;
  border-radius: 6rpx;
  background: #f4f8fd;
}

.action-item {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.action-item image {
  width: 24rpx;
  height: 24rpx;
}

.action-item text {
  color: #1f2837;
  font-size: 26rpx;
  line-height: 1.3;
}

.arrow-down {
  width: 44rpx;
  height: 74rpx;
  display: block;
  margin: 42rpx auto 0;
}

.qrcode {
  width: 318rpx;
  height: 318rpx;
  display: block;
  margin: 44rpx auto 0;
  border-radius: 12rpx;
  background: #ffffff;
}

.copyright-banner {
  padding: 76rpx 46rpx 68rpx;
  text-align: center;
  background: #2f68ee url("../../assets/行业智库/底部@2x.png") center / cover no-repeat;
}

.copyright-title {
  display: block;
  color: #ffffff;
  font-size: 37rpx;
  line-height: 1.35;
  font-weight: 800;
}

.copyright-desc {
  display: block;
  margin-top: 28rpx;
  color: rgba(255, 255, 255, 0.9);
  font-size: 24rpx;
  line-height: 1.68;
}
</style>
