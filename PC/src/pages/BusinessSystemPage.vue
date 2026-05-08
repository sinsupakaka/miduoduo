<template>
  <div class="business-page" :style="businessPageStyle">
    <SiteHeader :active-path="activePath" />

    <main>
      <section class="business-hero">
        <div class="business-container hero-content">
          <h1>全链孵化服务<br />共筑跨境产业新生态</h1>
          <div class="hero-tags">
            <span v-for="tag in heroTags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </section>

      <section class="section seller-section">
        <SectionTitle title="卖家孵化服务" desc="系统化孵化体系，让出海更简单" />
        <h3 class="section-subtitle">多平台孵化支持</h3>
        <div class="platform-list">
          <img 
          class="platform-logo tiktok" 
          :src="businessAsset('矢量智能对象@2x.png')" 
          alt="TEMU" 
          @click="goHash('/CrossBorderBootcampPage')"
          />
          <img 
          class="platform-logo coupang" 
          :src="businessAsset('形状 12@2x.png')" 
          alt="TEMU" 
          @click="goHash('/CoupangIncubationPage')"
          />
          <img 
          class="platform-logo temu" 
          :src="businessAsset('logo_temu@2x.png')" 
          alt="TEMU" 
          @click="goHash('/CoupangIncubationPage')"
          />
        </div>
        <div class="business-container seller-grid">
          <div class="service-stack">
            <article
              v-for="item in sellerServices"
              :key="item.title"
              :class="['service-card', item.tone]"
            >
              <img :src="businessAsset(item.icon)" alt="" />
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </div>
            </article>
          </div>
          <img class="seller-visual" :src="businessAsset('图层 9@2x.png')" alt="" />
        </div>
      </section>

      <section class="section case-section">
        <SectionTitle title="往期孵化案例" />
        <div class="business-container case-grid">
          <article v-for="item in caseCards" :key="item.title" class="case-card">
            <img :src="businessAsset(item.image)" alt="" />
            <h3>{{ item.title }}</h3>
          </article>
        </div>
      </section>

      <section class="section education-section">
        <SectionTitle title="产教融合服务" desc="产业需求反哺教学，构建产学研一体化生态" />
        <div class="business-container education-grid">
          <div class="talent-panel">
            <img class="talent-graph" :src="businessAsset('组 6@2x(8).png')" alt="" />
            <img class="talent-wave" :src="businessAsset('图层 13@2x.png')" alt="" />
          </div>
          <div class="education-list">
            <article v-for="item in educationServices" :key="item.title" class="education-card">
              <img :src="businessAsset(item.icon)" alt="" />
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section schools-section">
        <SectionTitle title="合作院校" />
        <div class="business-container school-grid">
          <div v-for="school in schools" :key="school" class="school-card">
            <img :src="businessAsset(school)" alt="" />
          </div>
        </div>
      </section>

      <section class="section ecology-section">
        <SectionTitle title="生态协作服务" desc="链接多方资源，共筑跨境产业新生态" />
        <img class="ecology-graph" :src="businessAsset('图形@2x.png')" alt="" />
      </section>

      <section class="business-cta">
        <div class="business-container">
          <h2>开启您的跨境出海之旅</h2>
          <p>无论您是想要拓展海外市场的卖家，还是寻求合作的高校、园区或企业，我们都将为您提供专业的全链路服务支持。</p>
          <button @click="jumpToKf()">立即咨询</button>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'
import { asset, jumpToKf } from '../utils/assets'

defineProps({
  activePath: {
    type: String,
    default: '/business',
  },
})

const businessAsset = (name) => asset(name, '业务体系')

const businessPageStyle = {
  '--business-hero-bg': `url("${businessAsset('图层 21@2x.png')}")`,
}

const heroTags = ['创业孵化', '平台招商', '供应链对接', '产业带升级']

const sellerServices = [
  {
    icon: '组 6@2x.png',
    tone: 'blue',
    title: '账号冷启动服务',
    text: '提供多平台账号注册、资质审核、店铺设置等一站式服务，帮助企业快速完成开店准备，降低初期运营成本。',
  },
  {
    icon: '组 6@2x(1).png',
    tone: 'green',
    title: '资深运营指导课程',
    text: '行业资深讲师授课，涵盖平台规则、选品策略、运营技巧、广告投放等全维度课程，助力卖家快速掌握运营核心能力。',
  },
  {
    icon: '组 6@2x(2).png',
    tone: 'purple',
    title: '实战指导手把手陪跑',
    text: '专属运营顾问1对1指导，全程跟进店铺运营情况，提供针对性解决方案，帮助卖家快速突破运营瓶颈，实现销售额增长。',
  },
  {
    icon: '组 6@2x(3).png',
    tone: 'orange',
    title: '海外本土优质货盘支持',
    text: '整合全球各站点本土优质货源，提供爆款选品推荐、一件代发、仓储配送等一体化供应链服务，无需备货即可轻松出海。',
  },
]

const goHash = (hash) => {
  window.location.hash = hash

  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  })
}

const caseCards = [
  { image: 'TikTok运营打法@2x.png', title: 'TikTok运营打法' },
  { image: '店铺基础实操@2x.png', title: '店铺基础实操' },
  { image: 'AI视频制作@2x.png', title: 'AI视频制作' },
  { image: '批量上架@2x.png', title: '批量上架' },
  { image: '数据选品@2x.png', title: '数据选品' },
  { image: '广告投放@2x.png', title: '广告投放' },
]

const educationServices = [
  {
    icon: '组 6@2x(4).png',
    title: '共建产业学院/微专业',
    text: '与高校合作共建跨境电商特色学院，共同制定人才培养方案，将行业最新实践和真实项目融入教学体系，培养符合市场需求的专业人才。',
  },
  {
    icon: '组 6@2x(5).png',
    title: '引入真实项目建设实训基地',
    text: '引入真实项目，打造真实跨境电商运营实训环境，提供全流程实操训练，让学生在实践中掌握运营技能，提升就业竞争力。',
  },
  {
    icon: '组 6@2x(6).png',
    title: '开发实战课程体系',
    text: '联合行业专家共同开发实战型课程，内容涵盖平台运营、选品、营销等全链条知识，紧贴行业实际需求。',
  },
  {
    icon: '组 6@2x(7).png',
    title: '人才精准对接平台',
    text: '搭建人才供需对接平台，为企业输送高质量跨境电商专业人才，同时为学生提供优质就业渠道，实现校企双赢。',
  },
]

const schools = [
  '福大@2x.png',
  '图层 17@2x.png',
  '福建理工大学@2x.png',
  '福建农林大学@2x.png',
  '闽江大学@2x.png',
  '泉州师范学院@2x.png',
  '福州外语外贸学院@2x.png',
  '宁夏工商职业技术大学@2x.png',
  '阳光学院校徽及中英文校名组合规范-彩色稿_副本2@2x.png',
  '福建商学院logo@2x.png',
  '福建师大协和@2x.png',
  '图层 18@2x.png',
  '福建江夏学院@2x.png',
  '福建农林大学金山学院@2x.png',
  '福建信息职业技术学院@2x.png',
  '福州职业技术学院@2x.png',
  '闽江师范高等专科学校@2x.png',
  '福建船政交通职业信息学院@2x.png',
  '图层 19@2x.png',
  '宁德职业技术学院@2x.png',
  '福州墨尔本职业技术学院@2x.png',
  '图层 20@2x.png',
  '福州理工学院@2x.png',
  '福建华南女子职业技术学院@2x.png',
]
</script>

<style scoped>
.business-page {
  min-width: 320px;
  color: #2d2f36;
  background: #fff;
  overflow: hidden;
}

.business-container {
  width: min(1540px, calc(100% - 48px));
  margin: 0 auto;
}

.section {
  padding: 126px 0 138px;
}

.section-subtitle {
  margin: 54px 0 38px;
  color: #30333a;
  text-align: center;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 800;
}

.business-hero {
  height: 900px;
  color: #fff;
  background: #2f68e8 var(--business-hero-bg) center / cover no-repeat;
}

.hero-content {
  position: relative;
  left: 0px;
  top: 180px;
  padding-top: 2px;
}

.business-hero h1 {
  margin: 0 0 62px;
  font-size: 90px;
  line-height: 1.38;
  letter-spacing: 0;
  font-weight: 800;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}

.hero-tags span {
  min-width: 160px;
  height: 52px;
  padding: 0 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #243ccc;
  background: #fff;
  font-size: 20px;
  line-height: 1;
  font-weight: 800;
}

.seller-section {
  padding-top: 128px;
  background: #fff;
}

.seller-section :deep(.section-title h2),
.case-section :deep(.section-title h2),
.education-section :deep(.section-title h2),
.schools-section :deep(.section-title h2),
.ecology-section :deep(.section-title h2) {
  font-size: 52px;
  line-height: 1.18;
}

.seller-section :deep(.section-title p),
.education-section :deep(.section-title p),
.ecology-section :deep(.section-title p) {
  margin-top: 20px;
  font-size: 24px;
  line-height: 1.35;
}

.platform-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 38px;
  margin-bottom: 64px;
}

.platform-logo {
  cursor: pointer;
  height: 110px;
  min-width: 260px;
  padding: 0 26px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 38px;
  line-height: 1;
  font-weight: 800;
}

.platform-logo.tiktok {
  background: #050505;
}

.platform-logo.tiktok::first-letter {
  color: #25f4ee;
}

.platform-logo.coupang {
  background: #ca3029;
}

.platform-logo.temu {
  gap: 12px;
  background: #ff7800;
}

.platform-logo.temu img {
  width: 58px;
  height: auto;
}

.seller-grid {
  display: grid;
  grid-template-columns: 750px 750px;
  gap: 80px;
  align-items: center;
  justify-content: center;
}

.service-stack {
  display: grid;
  gap: 34px;
}

.service-card,
.education-card {
  border: 2px solid #dce6f2;
  border-radius: 18px;
  background: #fff;
}

.service-card {
  min-height: 200px;
  padding: 30px 30px;
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
}

.service-card.blue {
  border-color: #d8e7fd;
  background: #f4f8ff;
}

.service-card.green {
  border-color: #d3f2de;
  background: #f2fff7;
}

.service-card.purple {
  border-color: #ecdfff;
  background: #fbf5ff;
}

.service-card.orange {
  border-color: #ffe2bd;
  background: #fff9f1;
}

.service-card img,
.education-card img {
  width: 54px;
  height: 54px;
}

.service-card h3,
.education-card h3,
.case-card h3 {
  margin: 0;
  color: #30333a;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 800;
}

.service-card h3 {
  margin-bottom: 28px;
}

.service-card p,
.education-card p {
  margin: 0;
  color: #596170;
  font-size: 22px;
  line-height: 1.72;
}

.seller-visual {
  width: 100%;
  border-radius: 18px;
  display: block;
}

.case-section,
.schools-section {
  background: #f5f8fc;
}

.case-section {
  padding-top: 128px;
  padding-bottom: 140px;
}

.case-section :deep(.section-title h2),
.schools-section :deep(.section-title h2) {
  color: #30333a;
}

.case-grid {
  width: min(1540px, calc(100% - 48px));
  margin-top: 84px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px 34px;
}

.case-card {
  overflow: hidden;
  border: 2px solid #dce6f2;
  border-radius: 14px;
  background: #fff;
}

.case-card img {
  width: 100%;
  aspect-ratio: 493 / 410;
  display: block;
  object-fit: cover;
}

.case-card h3 {
  min-height: 82px;
  padding: 25px 30px;
  font-size: 28px;
}

.education-section {
  padding-top: 132px;
  padding-bottom: 132px;
  background: #fff7ec;
}

.education-grid {
  margin-top: 88px;
  display: grid;
  grid-template-columns: 674px 826px;
  gap: 60px;
  align-items: stretch;
  justify-content: center;
}

.talent-panel {
  position: relative;
  min-height: 606px;
  padding: 78px 54px 0;
  border: 2px solid #ffe2bd;
  border-radius: 18px;
  background: linear-gradient(180deg, #fff 0%, #f7fbff 100%);
  overflow: hidden;
}

.talent-graph {
  position: relative;
  z-index: 2;
  width: min(100%, 565px);
  display: block;
  margin: 0 auto;
}

.talent-wave {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
}

.education-list {
  display: grid;
  gap: 32px;
}

.education-card {
  min-height: 150px;
  padding: 31px 30px;
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
  border-color: #ffe2bd;
}

.education-card h3 {
  margin-bottom: 24px;
}

.schools-section {
  padding-top: 128px;
  padding-bottom: 156px;
}

.school-grid {
  margin-top: 88px;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 24px 22px;
}

.school-card {
  height: 92px;
  padding: 10px 22px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: #fff;
}

.school-card img {
  max-width: 100%;
  max-height: 64px;
  object-fit: contain;
}

.ecology-section {
  background: #fff;
  padding-top: 132px;
  padding-bottom: 126px;
}

.ecology-graph {
  width: min(1516px, calc(100% - 48px));
  display: block;
  margin: 72px auto 0;
}

.business-cta {
  padding: 122px 0 128px;
  color: #fff;
  background: #2f68e8;
}

.business-cta h2 {
  margin: 0 0 26px;
  font-size: 42px;
  line-height: 1.2;
  font-weight: 800;
}

.business-cta p {
  max-width: 1340px;
  margin: 0 0 48px;
  color: rgba(255, 255, 255, .96);
  font-size: 20px;
  line-height: 1.55;
}

.business-cta button {
  min-width: 240px;
  height: 58px;
  padding: 0 46px;
  border-radius: 999px;
  color: #2442cf;
  background: #fff;
  font-size: 20px;
  font-weight: 800;
}
</style>
