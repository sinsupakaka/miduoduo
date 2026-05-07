<template>
  <div class="expo-page" :style="expoPageStyle">
    <SiteHeader :active-path="activePath" />

    <main>
      <section class="expo-hero">
        <div class="expo-container hero-content">
          <p class="hero-kicker">数字展会 | 线上线下协同运营</p>
          <h1>线下大型展会 &amp; 线上数字运营</h1>
          <button type="button">合作咨询</button>
          <p class="hero-note">
            米多多服务大型展会，以线下展会为主场，结合数字化系统与内容运营能力，
            帮助展会实现精准招商、线上观展、供需匹配和数据沉淀。
          </p>
        </div>
      </section>

      <section class="organize-section">
        <SectionTitle title="全场景线下展会组织" desc="覆盖主办承接、招商邀约、会议论坛、展商服务与数据留存" />
        <div class="expo-container organize-grid">
          <article v-for="item in organizeItems" :key="item.title" class="organize-card">
            <img :src="expoAsset(item.icon)" alt="" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section class="fair-section">
        <div class="expo-container">
          <SectionTitle title="大型展览组织承办" desc="2021-2026年，参与组织承办中国跨境电商交易会及一系列跨境行业活动" />
          <Carousel class="fair-carousel" autoplay :dots="true">
            <div v-for="(slide, index) in fairSlides" :key="`${slide.title}-${index}`" class="fair-slide">
              <div class="fair-banner">
                <img :src="expoAsset(slide.image)" alt="" />
                <div class="fair-title">
                  <p>{{ slide.title }}</p>
                  <button type="button">{{ slide.buttonText }}</button>
                </div>
              </div>
              <div class="fair-stats" :style="{ backgroundImage: `url('${expoAsset(slide.image)}')` }">
                <div class="expo-container stats-grid">
                  <div v-for="item in slide.stats" :key="item.label" class="stat-item">
                    <strong>{{ item.value }}</strong>
                    <span>{{ item.label }}</span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <section class="first-expo-section">
        <SectionTitle title="中国跨境电商第一展" />
        <div class="expo-container first-expo-stage">
          <Carousel class="first-expo-carousel" autoplay :dots="true">
            <div v-for="(slide, index) in firstExpoSlides" :key="`${slide.image}-${index}`" class="first-expo-slide">
              <article class="first-expo-card">
                <div class="first-expo-media">
                  <img class="first-expo-photo" :src="expoAsset(slide.image)" alt="" />
                </div>
                <div class="first-expo-features">
                  <article v-for="item in slide.features" :key="item.title" class="first-expo-feature">
                    <img :src="expoAsset(item.icon)" alt="" />
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.text }}</p>
                  </article>
                </div>
              </article>
            </div>
          </Carousel>
        </div>
      </section>

      <section class="case-section">
        <div class="expo-container">
          <SectionTitle title="品牌展会案例" />
          <div class="case-grid">
            <Carousel class="case-hero-carousel" autoplay :dots="true">
              <div v-for="item in brandCaseHeroSlides" :key="item.title" class="case-hero-slide">
                <article class="case-hero-card">
                  <img :src="expoAsset(item.image)" alt="" />
                  <div>
                    <h3>{{ item.title }}</h3>
                    <div class="case-meta">
                      <p class="case-meta-row">
                        <span class="case-icon calendar" aria-hidden="true"></span>
                        <span>{{ item.date }}</span>
                      </p>
                      <p class="case-meta-row">
                        <span class="case-icon pin" aria-hidden="true"></span>
                        <span>{{ item.location }}</span>
                      </p>
                    </div>
                    <p class="case-meta-text">{{ item.text }}</p>
                    <button type="button">了解更多</button>
                  </div>
                </article>
              </div>
            </Carousel>
            <div class="case-list">
              <article v-for="item in brandCases" :key="item.title">
                <img :src="expoAsset(item.image)" alt="" />
                <div>
                  <h3>{{ item.title }}</h3>
                  <p class="case-organizer">{{ item.organizer }}</p>
                  <div class="case-meta">
                    <p class="case-meta-row">
                      <span class="case-icon calendar" aria-hidden="true"></span>
                      <span>{{ item.date }}</span>
                    </p>
                    <p class="case-meta-row">
                      <span class="case-icon pin" aria-hidden="true"></span>
                      <span>{{ item.location }}</span>
                    </p>
                  </div>
                  <p class="case-meta-text">{{ item.text }}</p>
                  <div v-if="item.tags?.length" class="case-tags">
                    <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="gallery-section">
        <div class="expo-container">
          <SectionTitle title="行业峰会组织策划" />
          <div class="gallery-grid">
            <article v-for="item in galleryItems" :key="item.image" :class="['gallery-card', item.size]">
              <img :src="expoAsset(item.image)" :alt="item.title" />
              <span>{{ item.title }}</span>
            </article>
          </div>
        </div>
      </section>

      <section class="operation-section">
        <SectionTitle
          title="数字化展会运营"
          desc="提供展会线上化搭建、数字化观展、数据沉淀分析，实现“线下一场展，线上一直转”"
        />
        <div class="expo-container operation-list">
          <article v-for="(item, index) in operations" :key="item.title" :class="['operation-row', { reverse: index % 2 === 1 }]">
            <div class="operation-media">
              <img :src="expoAsset(item.image)" alt="" />
            </div>
            <div class="operation-copy">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="advantage-section">
        <div class="expo-container">
          <SectionTitle title="我们的优势" />
          <div class="advantage-stage">
            <img class="advantage-core" :src="expoAsset('图层 108@2x.png')" alt="" />
            <article v-for="item in advantages" :key="item.title" :class="['advantage-item', item.position]">
              <img :src="expoAsset(item.icon)" alt="" />
              <p>{{ item.title }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="expo-cta">
        <h2>让每一场会，都成为持续增长的生意入口</h2>
        <button type="button">合作咨询</button>
        <img :src="expoAsset('图层 126@2x.png')" alt="合作咨询二维码" />
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { Carousel } from 'ant-design-vue'
import SectionTitle from '../components/SectionTitle.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'
import { asset } from '../utils/assets'

defineProps({
  activePath: {
    type: String,
    default: '/news',
  },
})

const expoAsset = (name) => asset(name, '数字展会服务')

const expoPageStyle = {
  '--expo-hero-bg': `url("${expoAsset('图层 103@2x.png')}")`,
  '--expo-wave-bg': `url("${expoAsset('形状 12@2x.png')}")`,
}

const organizeItems = [
  { icon: '组 5@2x.png', title: '世界级会务统筹', text: '统筹展会主办、承办、招商与现场执行。' },
  { icon: '组 5 拷贝@2x.png', title: '全国性行业峰会', text: '策划论坛议程，组织行业嘉宾与主题内容。' },
  { icon: '组 5 拷贝 2@2x.png', title: '政企资源协同', text: '联动产业带、服务商、平台招商与采购资源。' },
]

const fairSlides = [
  {
    image: '图层 71@2x.png',
    title: '第六届中国跨境电商交易会',
    buttonText: '了解更多',
    stats: [
      { value: '10万m²', label: '展会规模' },
      { value: '60+个', label: '平台' },
      { value: '200+个', label: '服务商' },
      { value: '50+场', label: '行业论坛' },
      { value: '80+个', label: '产业带' },
      { value: '3347+个', label: '参展商' },
      { value: '115753个', label: '采购商' },
    ],
  },
  {
    image: '图层 71@2x.png',
    title: '第六届中国跨境电商交易会',
    buttonText: '了解更多',
    stats: [
      { value: '10万m²', label: '展会规模' },
      { value: '60+个', label: '平台' },
      { value: '200+个', label: '服务商' },
      { value: '50+场', label: '行业论坛' },
      { value: '80+个', label: '产业带' },
      { value: '3347+个', label: '参展商' },
      { value: '115753个', label: '采购商' },
    ],
  },
  {
    image: '图层 71@2x.png',
    title: '第六届中国跨境电商交易会',
    buttonText: '了解更多',
    stats: [
      { value: '10万m²', label: '展会规模' },
      { value: '60+个', label: '平台' },
      { value: '200+个', label: '服务商' },
      { value: '50+场', label: '行业论坛' },
      { value: '80+个', label: '产业带' },
      { value: '3347+个', label: '参展商' },
      { value: '115753个', label: '采购商' },
    ],
  },
]

const firstExpoSlides = [
  {
    image: '图层 116@2x.png',
    features: [
      {
        icon: '图层 109@2x.png',
        title: '办展规格高',
        text: '是跨境电商同类展会中唯一“中”字头，由商务部外贸发展局主办。',
      },
      {
        icon: '图层 110@2x.png',
        title: '认证权威',
        text: '全国跨境电商界首个获得国际展览业协会 UFI 认证，同时获誉“中国跨境电商第一展”。',
      },
      {
        icon: '图层 111@2x.png',
        title: '影响力广',
        text: '同类展会中唯一获得中国政府、中国一带一路、人民日报中央电视台、新华社、光明日报、央广网、以及央视社、党报社、共同社、澳洲华字广泛聚焦关注的展会。',
      },
    ],
  },
  {
    image: '图层 116@2x.png',
    features: [
      {
        icon: '图层 109@2x.png',
        title: '办展规格高',
        text: '是跨境电商同类展会中唯一“中”字头，由商务部外贸发展局主办。',
      },
      {
        icon: '图层 110@2x.png',
        title: '认证权威',
        text: '全国跨境电商界首个获得国际展览业协会 UFI 认证，同时获誉“中国跨境电商第一展”。',
      },
      {
        icon: '图层 111@2x.png',
        title: '影响力广',
        text: '同类展会中唯一获得中国政府、中国一带一路、人民日报中央电视台、新华社、光明日报、央广网、以及央视社、党报社、共同社、澳洲华字广泛聚焦关注的展会。',
      },
    ],
  },
]

const brandCaseHeroSlides = [
  {
    image: '图层 113@2x.png',
    title: '2025 Mega Show香港跨境出海大会',
    date: '2025年10月20日-21日',
    location: '香港会议展览中心展览馆1A',
    text: '米多多角色：跨境电商展区组织、论坛策划、达人邀约',
  },
  {
    image: '图层 112@2x.png',
    title: '2024CBE杭州国际美容博览会',
    date: '2024年9月11日-12日',
    location: '杭州国际博览中心',
    text: '米多多角色：负责2024CBE新美妆跨境出海论坛主办，汇聚美妆出海品牌方。',
  },
  {
    image: '图层 105@2x.png',
    title: '2026APES上海国际汽配展',
    date: '2026年8月5日-7日',
    location: '国家会展中心（上海）',
    text: '跨境出海论坛主办，沉淀汽配产业带出海垂直行业商机。',
  },
]

const brandCases = [
  {
    image: '图层 112@2x.png',
    title: '2024CBE杭州国际美容博览会',
    organizer: '新美妆跨境出海论坛主办',
    date: '2024年9月11日-12日',
    location: '杭州国际博览中心',
    text: '米多多角色：负责2024CBE新美妆跨境出海论坛主办，汇聚美妆出海品牌方、跨境电商平台方东南亚头部 KOL、国际及法规机构方。',
  },
  {
    image: '图层 105@2x.png',
    title: '2026APES上海国际汽配展',
    organizer: '跨境出海论坛主办',
    date: '2026年8月5日-7日',
    location: '国家会展中心（上海）',
    text: '',
    tags: ['展会规模：60000m²', '观众：35000+', '参展企业：1800+'],
  },
]

const galleryItems = [
  { image: '图层 117@2x.png', title: '2025沃尔玛全球电商交流会-福州站', size: 'tall' },
  { image: '图层 118@2x.png', title: 'ebay福建全品类500人峰会', size: 'wide' },
  { image: '图层 119@2x.png', title: '2025全球POD生态+跨境电商潮选大会', size: 'tall' },
  { image: '图层 120@2x.png', title: '2026美客多招商运营启动大会', size: 'tall' },
  { image: '图层 121@2x.png', title: '2025闽商跨境的力量行业发展大会', size: 'wide' },
  { image: '图层 123@2x.png', title: '2025美客多新卖家招商启动大会', size: 'wide' },
  { image: '图层 124@2x.png', title: '福建省电子商务促进会十周年庆', size: 'tall' },
  { image: '图层 125@2x.png', title: 'TikTok Shop 2025福建产业带招商会', size: 'wide' },
]

const operations = [
  {
    image: '组 10@2x.png',
    title: '小程序',
    text: '依托小程序，集成展会导览、展商查询、活动预约与在线互动，实现指尖逛展，一键触达。',
  },
  {
    image: '组 9 拷贝 2@2x.png',
    title: '线上展会广告',
    text: '借助小程序及自媒体，为参展企业提供品牌展示、产品引流、直播推广等服务，触达潜在客户。',
  },
  {
    image: '组 10 拷贝@2x.png',
    title: '365天供采对接',
    text: '依托小程序，实现企业展示、产品陈列、在线询盘、全年供需对接，让展会价值持续延伸。',
  },
  {
    image: '数字展会运营3@2x.png',
    title: 'SCRM客户关系管理系统',
    text: '沉淀展会全流程客户数据，支持行为追踪、标签分层与智能营销，深度运营客户关系。',
  },
  {
    image: '图层 114@2x.png',
    title: '数据赋能行业决策',
    text: '输出行业分析、趋势报告与论坛内容，为企业与机构提供专业数据支持。',
  },
]

const advantages = [
  { icon: '矩形 9@2x.png', title: '线下展会经验丰富\n覆盖全国+海外', position: 'top-left' },
  { icon: '椭圆 2 拷贝 6@2x.png', title: '跨境生态资源深厚\n链接工厂与大卖', position: 'top-right' },
  { icon: '椭圆 2 拷贝 12@2x.png', title: '线上数字化能力完整\n自主系统支撑', position: 'mid-left' },
  { icon: '矩形 7 拷贝 2@2x.png', title: '365天在线\n商机不停歇', position: 'mid-right' },
  { icon: '矩形 10 拷贝 4@2x.png', title: '全案执行\n从策划到落地一站式', position: 'bottom-left' },
  { icon: '矩形 15 拷贝@2x.png', title: '数据驱动\n高效匹配供需', position: 'bottom-right' },
]
</script>

<style scoped>
.expo-page {
  min-width: 320px;
  color: #333;
  background: #fff;
  overflow: hidden;
}

.expo-container {
  width: min(1540px, calc(100% - 48px));
  margin: 0 auto;
}

.expo-hero {
  min-height: 820px;
  display: flex;
  align-items: center;
  color: #fff;
  background: #0a1b42 var(--expo-hero-bg) center / cover no-repeat;
}

.hero-content {
  padding-top: 18px;
  text-align: center;
}

.hero-kicker {
  margin: 0 0 16px;
  color: rgba(255, 255, 255, .8);
  font-size: 28px;
  line-height: 1.2;
  font-weight: 500;
}

.hero-content h1 {
  margin: 0 0 24px;
  color: #fff;
  font-size: clamp(52px, 4vw, 76px);
  line-height: 1.16;
  letter-spacing: 0;
  font-weight: 800;
}

.hero-content button,
.fair-title button,
.case-hero-card button,
.expo-cta button {
  height: 48px;
  padding: 0 46px;
  border-radius: 24px;
  color: #fff;
  background: linear-gradient(90deg, #2468ff 0%, #43b7ff 100%);
  font-size: 18px;
  font-weight: 800;
}

.hero-note {
  width: min(980px, 100%);
  margin: 74px auto 0;
  color: rgba(255, 255, 255, .78);
  font-size: 20px;
  line-height: 1.85;
}

.organize-section {
  padding: 92px 0 132px;
  background: #f7faff var(--expo-wave-bg) center bottom / 100% auto no-repeat;
}

.organize-grid {
  width: min(1180px, 100%);
  margin: 58px auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 82px;
  align-items: start;
}

.organize-card {
  min-height: 190px;
  padding: 34px 26px 22px;
  text-align: center;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 24px 56px rgba(31, 91, 183, .08);
}

.organize-card:nth-child(1) {
  margin-top: 72px;
}

.organize-card:nth-child(3) {
  margin-top: 20px;
}

.organize-card img {
  width: 72px;
  height: 72px;
  object-fit: contain;
}

.organize-card h3,
.first-expo-feature h3,
.case-grid h3,
.operation-copy h3 {
  margin: 18px 0 12px;
  color: #333;
  font-size: 22px;
  line-height: 1.25;
  font-weight: 800;
}

.organize-card p,
.first-expo-feature p,
.case-grid p,
.operation-copy p {
  margin: 0;
  color: #697180;
  font-size: 16px;
  line-height: 1.75;
}

.fair-section {
  padding: 102px 0 0;
  background: #fff;
}

.fair-carousel,
.fair-carousel :deep(.slick-slider),
.fair-carousel :deep(.slick-list),
.fair-carousel :deep(.slick-track),
.fair-carousel :deep(.slick-slide),
.fair-carousel :deep(.slick-slide > div) {
  height: 636px;
}

.fair-carousel {
  margin-top: 56px;
}

.fair-carousel :deep(.slick-list) {
  overflow: hidden;
}

.fair-carousel :deep(.slick-dots) {
  bottom: 26px;
  gap: 18px;
  margin: 0;
}

.fair-carousel :deep(.slick-dots li) {
  width: 64px;
  height: 4px;
  margin: 0;
}

.fair-carousel :deep(.slick-dots li button) {
  width: 64px;
  height: 4px;
  border-radius: 0;
  background: rgba(255, 255, 255, .42);
  opacity: 1;
}

.fair-carousel :deep(.slick-dots li.slick-active button) {
  background: #fff;
}

.fair-slide {
  height: 100%;
}

.fair-banner {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.fair-banner > img {
  width: 100%;
  height: 346px;
  display: block;
  object-fit: cover;
}

.fair-title {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
}

.fair-title p {
  margin: 0 0 24px;
  font-size: clamp(30px, 3vw, 56px);
  line-height: 1.1;
  font-weight: 800;
}

.fair-stats {
  min-height: 290px;
  margin-top: 0;
  display: flex;
  align-items: center;
  color: #fff;
  background-position: center bottom;
  background-size: cover;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 18px;
}

.stat-item {
  text-align: center;
}

.stat-item strong {
  display: block;
  color: #fff;
  font-size: clamp(28px, 2.55vw, 50px);
  line-height: 1.1;
  font-weight: 800;
}

.stat-item span {
  display: block;
  margin-top: 14px;
  color: rgba(255, 255, 255, .74);
  font-size: 18px;
}

.first-expo-section,
.case-section,
.gallery-section,
.operation-section {
  padding: 112px 0 122px;
  background: #fff;
}

.first-expo-stage {
  width: min(1340px, calc(100% - 48px));
  margin-top: 64px;
}

.first-expo-carousel :deep(.slick-list) {
  overflow: hidden;
}

.first-expo-carousel :deep(.slick-dots) {
  bottom: -54px;
  gap: 22px;
  margin: 0;
}

.first-expo-carousel :deep(.slick-dots li) {
  width: 80px;
  height: 5px;
  margin: 0;
}

.first-expo-carousel :deep(.slick-dots li button) {
  width: 80px;
  height: 5px;
  border-radius: 0;
  background: #c7c7c7;
  opacity: 1;
}

.first-expo-carousel :deep(.slick-dots li.slick-active button) {
  background: #2468ff;
}

.first-expo-slide {
  padding-bottom: 6px;
}

.first-expo-card {
  padding: 42px 46px;
  display: grid;
  grid-template-columns: minmax(0, 44%) minmax(0, 1fr);
  gap: 34px;
  align-items: center;
  border-radius: 8px;
  background: #f5f8fc;
}

.first-expo-media {
  aspect-ratio: 1404 / 1064;
}

.first-expo-photo {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 28px 34px rgba(14, 44, 91, .16));
}

.first-expo-features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  align-items: start;
}

.first-expo-feature {
  min-width: 0;
}

.first-expo-feature img {
  width: 86px;
  height: 72px;
  object-fit: contain;
}

.first-expo-feature h3 {
  margin: 22px 0 16px;
  font-size: 22px;
  line-height: 1.25;
  font-weight: 800;
}

.first-expo-feature p {
  font-size: 16px;
  line-height: 1.82;
}

.case-section {
  padding-top: 92px;
}

.case-section :deep(.section-title h2) {
  font-size: 60px;
  line-height: 1.16;
}

.case-grid {
  width: min(1424px, 100%);
  margin-top: 66px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: minmax(0, 652px) minmax(0, 722px);
  gap: 50px;
  align-items: start;
}

.case-hero-carousel {
  min-width: 0;
  height: 690px;
}

.case-hero-carousel :deep(.slick-slider),
.case-hero-carousel :deep(.slick-list),
.case-hero-carousel :deep(.slick-track),
.case-hero-carousel :deep(.slick-slide),
.case-hero-carousel :deep(.slick-slide > div) {
  height: 100%;
}

.case-hero-carousel :deep(.slick-list) {
  overflow: hidden;
}

.case-hero-carousel :deep(.slick-dots) {
  right: 10px;
  bottom: 16px;
  left: auto;
  width: auto;
  gap: 18px;
  margin: 0;
}

.case-hero-carousel :deep(.slick-dots li) {
  width: 20px;
  height: 20px;
  margin: 0;
}

.case-hero-carousel :deep(.slick-dots li button) {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #c8c8c8;
  opacity: 1;
}

.case-hero-carousel :deep(.slick-dots li.slick-active button) {
  background: #2468ff;
}

.case-hero-slide {
  min-width: 0;
  height: 100%;
}

.case-hero-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.case-hero-card img {
  width: 100%;
  height: 350px;
  display: block;
  object-fit: cover;
}

.case-hero-card > div {
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.case-hero-card h3 {
  margin: 30px 0 24px;
  font-size: 36px;
  line-height: 1.22;
}

.case-hero-card button {
  margin-top: auto;
  width: 200px;
  height: 60px;
  padding: 0 34px;
  border: 2px solid #2468ff;
  border-radius: 30px;
  color: #2468ff;
  background: #fff;
  font-size: 24px;
  align-self: flex-start;
}

.case-hero-card button::after {
  content: "";
  width: 10px;
  height: 10px;
  margin-left: 16px;
  display: inline-block;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  transform: rotate(45deg) translateY(-1px);
}

.case-list {
  display: grid;
  gap: 50px;
}

.case-list article {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
  min-height: 320px;
  align-items: start;
}

.case-list img {
  width: 300px;
  height: 320px;
  object-fit: cover;
}

.case-list h3 {
  margin: -6px 0 18px;
  font-size: 36px;
  line-height: 1.22;
}

.case-organizer {
  margin: 0 0 18px;
  color: #333;
  font-size: 28px;
  line-height: 1.35;
}

.case-meta {
  display: grid;
  gap: 14px;
}

.case-meta-text {
  font-size: 20px;
}

.case-meta-row {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #68707c;
  font-size: 24px;
  line-height: 1.2;
}

.case-icon {
  position: relative;
  flex: none;
  width: 24px;
  height: 24px;
  color: #8b8f96;
}

.case-icon.calendar {
  border: 3px solid currentColor;
  border-radius: 5px;
}

.case-icon.calendar::before,
.case-icon.calendar::after {
  content: "";
  position: absolute;
  top: -7px;
  width: 3px;
  height: 8px;
  border-radius: 2px;
  background: currentColor;
}

.case-icon.calendar::before {
  left: 5px;
}

.case-icon.calendar::after {
  right: 5px;
}

.case-icon.pin {
  border: 3px solid currentColor;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
}

.case-icon.pin::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  border: 2px solid currentColor;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.case-icon.pin + span {
  transform: translateX(0);
}

.case-hero-card .case-meta {
  margin-bottom: 20px;
}

.case-hero-card p:not(.case-meta-row),
.case-list article > div > p:not(.case-organizer):not(.case-meta-row) {
  margin: 0;
  color: #697180;
  font-size: 20px;
  line-height: 1.78;
}

.case-list .case-meta {
  margin-bottom: 20px;
}

.case-tags {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.case-tags span {
  height: 48px;
  padding: 0 26px;
  display: inline-flex;
  align-items: center;
  border-radius: 24px;
  color: #697180;
  background: #f5f7fa;
  font-size: 18px;
}

.gallery-section {
  padding: 150px 0 136px;
}

.gallery-section :deep(.section-title h2),
.operation-section :deep(.section-title h2),
.advantage-section :deep(.section-title h2) {
  font-size: 60px;
  line-height: 1.16;
}

.operation-section :deep(.section-title p) {
  margin-top: 24px;
  color: #8b93a3;
  font-size: 28px;
  line-height: 1.45;
}

.gallery-grid {
  width: min(1880px, calc(100vw - 40px));
  margin: 96px 50% 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 40px;
  gap: 20px;
  transform: translateX(-50%);
}

.gallery-card {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  background: #dbe4f2;
}

.gallery-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.gallery-card span {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 60px;
  padding: 12px 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(0, 0, 0, .62);
  text-align: center;
  font-size: 22px;
  font-weight: 700;
}

.gallery-card:nth-child(1) {
  grid-column: 1;
  grid-row: 1 / span 10;
}

.gallery-card:nth-child(2) {
  grid-column: 2;
  grid-row: 1 / span 7;
}

.gallery-card:nth-child(3) {
  grid-column: 3;
  grid-row: 1 / span 6;
}

.gallery-card:nth-child(4) {
  grid-column: 4;
  grid-row: 1 / span 11;
}

.gallery-card:nth-child(5) {
  grid-column: 1;
  grid-row: 11 / span 5;
}

.gallery-card:nth-child(6) {
  grid-column: 2;
  grid-row: 8 / span 8;
}

.gallery-card:nth-child(7) {
  grid-column: 3;
  grid-row: 7 / span 9;
}

.gallery-card:nth-child(8) {
  grid-column: 4;
  grid-row: 12 / span 4;
}

.operation-section {
  padding: 132px 0 156px;
  background: #fff;
}

.operation-list {
  width: min(1540px, calc(100% - 48px));
  margin-top: 88px;
  display: grid;
  gap: 98px;
}

.operation-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 74px;
  align-items: center;
}

.operation-row.reverse .operation-media {
  order: 2;
}

.operation-media {
  min-height: 600px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eef3fa;
}

.operation-media img {
  width: 100%;
  max-height: 560px;
  object-fit: contain;
}

.operation-copy h3 {
  margin: 0 0 28px;
  color: #2d2f36;
  font-size: 56px;
  line-height: 1.18;
  font-weight: 800;
}

.operation-copy p {
  max-width: 650px;
  color: #5f6470;
  font-size: 32px;
  line-height: 1.7;
}

.advantage-section {
  padding: 128px 0 142px;
  background: #f3f6fb;
}

.advantage-stage {
  position: relative;
  width: min(1580px, 100%);
  min-height: 720px;
  margin: 78px auto 0;
}

.advantage-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 940px;
  transform: translate(-50%, -50%);
}

.advantage-item {
  position: absolute;
  display: grid;
  grid-template-columns: 140px 300px;
  gap: 34px;
  align-items: center;
}

.advantage-item img {
  width: 140px;
  height: 140px;
  object-fit: contain;
}

.advantage-item p {
  margin: 0;
  color: #333;
  white-space: pre-line;
  font-size: 28px;
  line-height: 1.45;
  font-weight: 800;
}

.advantage-item.top-left {
  left: 90px;
  top: 20px;
}

.advantage-item.mid-left {
  left: 0;
  top: 260px;
}

.advantage-item.bottom-left {
  left: 120px;
  bottom: 28px;
}

.advantage-item.top-right,
.advantage-item.mid-right,
.advantage-item.bottom-right {
  right: 0;
  grid-template-columns: 140px 320px;
}

.advantage-item.top-right {
  top: 20px;
}

.advantage-item.mid-right {
  top: 280px;
}

.advantage-item.bottom-right {
  right: 100px;
  bottom: 28px;
}

.expo-cta {
  padding: 122px 24px 116px;
  color: #fff;
  text-align: center;
  background: #2d68ed;
}

.expo-cta h2 {
  margin: 0 0 62px;
  color: #fff;
  font-size: 56px;
  line-height: 1.2;
  letter-spacing: 0;
  font-weight: 800;
}

.expo-cta button {
  width: 240px;
  height: 60px;
  padding: 0;
  border-radius: 30px;
  color: #1f61e8;
  background: #fff;
  font-size: 20px;
}

.expo-cta img {
  width: 320px;
  height: 320px;
  margin: 64px auto 0;
  display: block;
  background: #fff;
}

@media (max-width: 1200px) {
  .organize-grid,
  .first-expo-card {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 36px;
  }

  .first-expo-card,
  .case-grid,
  .operation-row {
    grid-template-columns: 1fr;
  }

  .first-expo-feature {
    max-width: none;
  }

  .operation-row.reverse .operation-media {
    order: 0;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 240px;
    width: min(100%, calc(100vw - 48px));
    margin-left: auto;
    margin-right: auto;
    transform: none;
  }

  .gallery-card:nth-child(n) {
    grid-column: auto;
    grid-row: span 1;
  }

  .operation-media {
    min-height: 420px;
  }

  .advantage-stage {
    width: min(900px, 100%);
  }

  .advantage-stage {
    min-height: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  .advantage-core {
    position: static;
    grid-column: 1 / -1;
    width: min(680px, 100%);
    margin: 0 auto;
    transform: none;
  }

  .advantage-item,
  .advantage-item.top-right,
  .advantage-item.mid-right,
  .advantage-item.bottom-right {
    position: static;
    grid-template-columns: 92px 1fr;
  }

  .advantage-item img {
    width: 92px;
    height: 92px;
  }
}

@media (max-width: 760px) {
  .expo-container,
  .first-expo-stage {
    width: min(100% - 32px, 1540px);
  }

  .expo-hero {
    min-height: 560px;
  }

  .hero-kicker,
  .hero-note {
    font-size: 16px;
  }

  .organize-section,
  .fair-section,
  .first-expo-section,
  .case-section,
  .gallery-section,
  .operation-section,
  .advantage-section {
    padding: 72px 0;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stat-item span {
    font-size: 17px;
  }

  .first-expo-card {
    padding: 28px;
    gap: 34px;
  }

  .first-expo-carousel :deep(.slick-dots) {
    bottom: -38px;
    gap: 14px;
  }

  .first-expo-carousel :deep(.slick-dots li),
  .first-expo-carousel :deep(.slick-dots li button) {
    width: 42px;
  }

  .case-list article {
    grid-template-columns: 1fr;
  }

  .case-list img {
    width: 100%;
    height: 220px;
  }

  .case-hero-carousel {
    height: auto;
  }

  .case-hero-carousel :deep(.slick-slider),
  .case-hero-carousel :deep(.slick-list),
  .case-hero-carousel :deep(.slick-track),
  .case-hero-carousel :deep(.slick-slide),
  .case-hero-carousel :deep(.slick-slide > div),
  .case-hero-slide,
  .case-hero-card {
    height: auto;
  }

  .case-hero-card img {
    height: auto;
    aspect-ratio: 13 / 7;
  }

  .gallery-grid,
  .advantage-stage {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-auto-rows: 230px;
    margin-top: 48px;
  }

  .gallery-card.tall {
    grid-row: span 1;
  }

  .operation-media {
    min-height: 300px;
    padding: 22px;
  }

  .operation-copy h3 {
    font-size: 34px;
  }

  .operation-copy p {
    font-size: 18px;
  }

  .advantage-item,
  .advantage-item.top-right,
  .advantage-item.mid-right,
  .advantage-item.bottom-right {
    grid-template-columns: 74px 1fr;
  }

  .advantage-item img {
    width: 74px;
    height: 74px;
  }

  .advantage-item p {
    font-size: 20px;
  }
}
</style>
