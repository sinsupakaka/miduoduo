<template>
  <view class="page">
    <MobileTopNav title="全链孵化服务" active-route-key="fullChainService" />

    <view class="hero">
      <view class="hero-copy">
        <text class="hero-title">全链孵化服务{{ '\n' }}共筑跨境产业新生态</text>
        <view class="hero-tags">
          <text v-for="item in heroTags" :key="item" class="hero-tag">{{ item }}</text>
        </view>
      </view>
      <image class="hero-art" :src="asset('图层 2@2x.png')" mode="widthFix" />
    </view>

    <view class="section seller-section">
      <SectionTitle title="卖家孵化服务" desc="系统化孵化体系，让出海更简单" tone="dark" />

      <view class="platform-block">
        <text class="platform-title">多平台孵化支持</text>
        <view class="platform-row">
          <image v-for="item in platformLogos" :key="item" class="platform-logo" :src="asset(item)" mode="aspectFit" />
        </view>
      </view>

      <view class="service-card-list">
        <view v-for="item in sellerServices" :key="item.title" :class="['service-card', item.tone]">
          <view class="service-card-head">
            <view class="service-icon-wrap">
              <image class="service-icon" :src="asset(item.icon)" mode="aspectFit" />
            </view>
            <text class="service-card-title">{{ item.title }}</text>
          </view>
          <text class="service-card-desc">{{ item.desc }}</text>
        </view>
      </view>
    </view>

    <view class="section case-section">
      <SectionTitle title="往期孵化案例" tone="dark" />
      <view class="case-grid">
        <view v-for="item in cases" :key="item.title" class="case-card">
          <image class="case-image" :src="asset(item.image)" mode="aspectFill" />
          <view class="case-copy">
            <text>{{ item.title }}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="section education-section">
      <SectionTitle title="产教融合服务" desc="产业需求反哺教学，构建产学研一体化生态" tone="dark" />

      <view class="service-card-list education-list">
        <view v-for="item in educationServices" :key="item.title" :class="['service-card', item.tone]">
          <view class="service-card-head">
            <view class="service-icon-wrap">
              <image class="service-icon" :src="asset(item.icon)" mode="aspectFit" />
            </view>
            <text class="service-card-title">{{ item.title }}</text>
          </view>
          <text class="service-card-desc">{{ item.desc }}</text>
        </view>
      </view>

      <view class="matrix-panel">
        <image class="matrix-image" :src="asset('组 6@2x.png')"/>
        <image class="matrix-image-bg" :src="asset('图层 13@2x.png')"/>
      </view>
    </view>

    
    <view class="section ecosystem-section">
      <SectionTitle title="生态协作服务" desc="链接多方资源，共筑跨境产业新生态" tone="dark" />
      <image class="ecosystem-chart" :src="asset('图表@2x.png')" mode="widthFix" />
    </view>

    <view class="cta">
      <text class="cta-title">抓住流量红利期，开启跨境创业之旅</text>
      <text class="cta-desc">现在报名即可享受早鸟优惠，赠送精品货盘大礼包和运营工具包，前20名报名更可获得导师1对1诊断服务</text>
      <image class="qr" :src="asset('qrcode.png')" mode="aspectFit" />
      <text class="qr-title">扫码咨询</text>
      <text class="qr-subtitle">领取免费入驻资料</text>
      <text class="contact">咨询热线：艾老师 18250556206</text>
      <text class="address">上课地址：福建省福州市鼓楼区福州软件园A区23号</text>
    </view>

    <MobileFooterLogo />
  </view>
</template>

<script setup>
import MobileFooterLogo from '../components/MobileFooterLogo.vue'
import MobileTopNav from '../components/MobileTopNav.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { asset as resolveAsset } from '../utils/assets'

const asset = (name) => resolveAsset(name, '全链孵化服务')

const heroTags = ['创业孵化', '平台招商', '供应链对接', '产业带升级']

const platformLogos = ['矢量智能对象@2x.png', '形状 12@2x.png', 'logo_temu@2x.png']

const sellerServices = [
  {
    title: '账号冷启动服务',
    desc: '提供多平台账号注册、资质审核、店铺设置等一站式服务，帮助企业快速完成开店准备，降低初期运营成本。',
    icon: '形状 13@2x.png',
    tone: 'purple',
  },
  {
    title: '资深运营指导课程',
    desc: '行业资深讲师授课，涵盖平台规则、选品策略、运营技巧、广告投放等全维度课程，助力卖家快速掌握运营核心能力。',
    icon: '形状 16@2x.png',
    tone: 'green',
  },
  {
    title: '实战指导手把手陪跑',
    desc: '专属运营顾问1对1指导，全程跟进店铺运营情况，提供针对性解决方案，帮助卖家快速突破运营瓶颈，实现销售额增长。',
    icon: '形状 15@2x.png',
    tone: 'lavender',
  },
  {
    title: '海外本土优质货盘支持',
    desc: '整合全球各站点本土优质货源，提供爆款选品推荐、一件代发、仓储配送等一体化供应链服务，无需备货即可轻松出海。',
    icon: '形状 20@2x.png',
    tone: 'orange',
  },
]

const cases = [
  { title: 'TikTok运营打法', image: 'TikTok运营打法@2x.png' },
  { title: '店铺基础实操', image: '店铺基础实操@2x.png' },
  { title: 'AI视频制作', image: 'AI视频制作@2x.png' },
  { title: '批量上架', image: '批量上架@2x.png' },
  { title: '数据选品', image: '数据选品@2x.png' },
  { title: '广告投放', image: '广告投放@2x.png' },
]

const educationServices = [
  {
    title: '共建产业学院/微专业',
    desc: '与高校合作共建跨境电商特色学院，共同制定人才培养方案，将行业最新实践和真实项目融入教学体系，培养符合市场需求的专业人才。',
    icon: '形状 18@2x.png',
    tone: 'orange',
  },
  {
    title: '引入真实项目建设实训基地',
    desc: '引入真实项目，打造真实跨境电商运营实训环境，提供全流程实操训练，让学生在实践中掌握运营技能，提升就业竞争力。',
    icon: '形状 21@2x.png',
    tone: 'blue',
  },
  {
    title: '开发实战课程体系',
    desc: '联合行业专家共同开发实战型课程，内容涵盖平台运营、选品、营销等全链条知识，紧贴行业实际需求。',
    icon: '形状 17@2x.png',
    tone: 'green',
  },
  {
    title: '人才精准对接平台',
    desc: '搭建人才供需对接平台，为企业输送高质量跨境电商专业人才，同时为学生提供优质就业渠道，实现校企双赢。',
    icon: '形状 19@2x.png',
    tone: 'lavender',
  },
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  color: #2d2f36;
  background: #ffffff;
}

.hero {
  overflow: hidden;
  background: linear-gradient(180deg, #3667eb 0%, #275be3 100%);
}

.hero-copy {
  padding: 62rpx 42rpx 0;
}

.hero-title {
  display: block;
  color: #ffffff;
  font-size: 62rpx;
  line-height: 1.34;
  font-weight: 800;
  white-space: pre-line;
}

.hero-tags {
  margin-top: 42rpx;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16rpx;
}

.hero-tag {
  width: 100%;
  height: 60rpx;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999rpx;
  background: rgba(255, 255, 255, 0.95);
  color: #3363ea;
  font-size: 25rpx;
  line-height: 1;
  font-weight: 500;
  white-space: nowrap;
}

.hero-art {
  width: 100%;
  display: block;
  margin-top: 34rpx;
}

.section {
  padding: 94rpx 0 0;
}

.seller-section {
  padding-bottom: 20rpx;
}

.platform-block {
  margin-top: 54rpx;
}

.platform-title {
  display: block;
  text-align: center;
  color: #2d2f36;
  font-size: 36rpx;
  line-height: 1.3;
  font-weight: 700;
}

.platform-row {
  padding: 34rpx 24rpx 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18rpx;
}

.platform-logo {
  width: 100%;
  height: 120rpx;
}

.service-card-list {
  padding: 56rpx 24rpx 0;
  display: grid;
  gap: 26rpx;
}

.service-card {
  padding: 32rpx 28rpx 30rpx;
  border-radius: 24rpx;
  border: 1rpx solid transparent;
  background: #ffffff;
}

.service-card.purple {
  border-color: #d9dff5;
  background: #f5f8ff;
}

.service-card.green {
  border-color: #cbf4da;
  background: #f2fff7;
}

.service-card.lavender {
  border-color: #eadcf8;
  background: #fbf5ff;
}

.service-card.orange {
  border-color: #f9e2c8;
  background: #fff8ef;
}

.service-card.blue {
  border-color: #d7e3ff;
  background: #f6f9ff;
}

.service-card-head {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.service-icon-wrap {
  width: 56rpx;
  height: 56rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16rpx;
  background: rgba(255, 255, 255, 0.75);
}

.service-icon {
  width: 42rpx;
  height: 42rpx;
}

.service-card-title {
  flex: 1;
  color: #2d2f36;
  font-size: 32rpx;
  line-height: 1.35;
  font-weight: 700;
}

.service-card-desc {
  display: block;
  margin-top: 22rpx;
  color: #5b6476;
  font-size: 28rpx;
  line-height: 1.78;
}

.case-section {
  padding-bottom: 28rpx;
}

.case-grid {
  padding: 52rpx 24rpx 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26rpx 18rpx;
}

.case-card {
  overflow: hidden;
  border-radius: 20rpx;
  border: 1rpx solid #dbe4f0;
  background: #ffffff;
}

.case-image {
  width: 100%;
  height: 312rpx;
  display: block;
}

.case-copy {
  padding: 18rpx 18rpx 20rpx;
}

.case-copy text {
  display: block;
  color: #2d2f36;
  font-size: 28rpx;
  line-height: 1.35;
  font-weight: 600;
}

.education-section {
  margin-top: 32rpx;
  padding-bottom: 44rpx;
  background: #fff7ec;
}

.education-list {
  padding-top: 52rpx;
}

.matrix-panel {
  height: 890rpx;
  margin: 34rpx 24rpx 0;
  overflow: hidden;
  border-radius: 24rpx;
  border: 1rpx solid #e3ebf8;
  background: linear-gradient(180deg, #ffffff 0%, #f6faff 100%);
}

.matrix-image {
  margin-top: 100rpx;
  margin-left: 60rpx;
  width: 565rpx;
  height: 569rpx;
  display: block;
}

.matrix-image-bg {
  width: 100%;
  height: 365rpx;
  /* height: 569rpx; */
  /* display: block; */
  position: relative;

  top: -145rpx;
}

.ecosystem-section {
  padding-bottom: 36rpx;
}

.ecosystem-chart {
  width: calc(100% - 48rpx);
  display: block;
  margin: 42rpx auto 0;
}

.cta {
  padding: 68rpx 34rpx 74rpx;
  text-align: center;
  background: #dfeafc;
}

.cta-title {
  display: block;
  color: #2d2f36;
  font-size: 58rpx;
  line-height: 1.3;
  font-weight: 800;
}

.cta-desc {
  display: block;
  margin-top: 28rpx;
  color: #79839a;
  font-size: 28rpx;
  line-height: 1.8;
}

.qr {
  width: 420rpx;
  height: 420rpx;
  display: block;
  margin: 48rpx auto 0;
}

.qr-title {
  display: block;
  margin-top: 34rpx;
  color: #2d2f36;
  font-size: 64rpx;
  line-height: 1.2;
  font-weight: 700;
}

.qr-subtitle,
.contact,
.address {
  display: block;
  color: #485264;
  font-size: 28rpx;
  line-height: 1.8;
}

.qr-subtitle {
  margin-top: 10rpx;
}

.contact {
  margin-top: 40rpx;
}

.address {
  margin-top: 4rpx;
}
</style>
