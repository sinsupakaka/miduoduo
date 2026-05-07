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
          <div class="fair-banner">
            <img :src="expoAsset('图层 71@2x.png')" alt="" />
            <div class="fair-title">
              <p>第六届中国跨境电商交易会</p>
              <button type="button">了解更多</button>
            </div>
          </div>
        </div>
        <div class="fair-stats" :style="{ backgroundImage: `url('${expoAsset('图层 71@2x.png')}')` }">
          <div class="expo-container stats-grid">
            <div v-for="item in stats" :key="item.label" class="stat-item">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="first-expo-section">
        <SectionTitle title="中国跨境电商第一展" />
        <div class="expo-container first-expo-card">
          <img class="first-expo-photo" :src="expoAsset('图层 116@2x.png')" alt="" />
          <div class="first-expo-features">
            <article v-for="item in firstExpoFeatures" :key="item.title">
              <img :src="expoAsset(item.icon)" alt="" />
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
        <div class="section-dots">
          <span class="active"></span>
          <span></span>
        </div>
      </section>

      <section class="case-section">
        <div class="expo-container">
          <SectionTitle title="品牌展会案例" />
          <div class="case-grid">
            <article class="case-hero-card">
              <img :src="expoAsset('图层 113@2x.png')" alt="" />
              <div>
                <h3>2025 Mega Show香港跨境出海大会</h3>
                <p>新美妆跨境出海论坛主办，联动产业品牌、服务商与跨境卖家，推动供需资源高效连接。</p>
                <button type="button">了解更多</button>
              </div>
            </article>
            <div class="case-list">
              <article v-for="item in brandCases" :key="item.title">
                <img :src="expoAsset(item.image)" alt="" />
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.text }}</p>
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

const stats = [
  { value: '10万m²', label: '展会规模' },
  { value: '60+个', label: '平台' },
  { value: '200+个', label: '服务商' },
  { value: '50+场', label: '行业论坛' },
  { value: '80+个', label: '产业带' },
  { value: '3347+个', label: '参展商' },
  { value: '115753个', label: '采购商' },
]

const firstExpoFeatures = [
  {
    icon: '图层 109@2x.png',
    title: '办展规格高',
    text: '跨境电商同类展会中唯一“中”字头，由商务部外贸发展事务局主办。',
  },
  {
    icon: '图层 110@2x.png',
    title: '认证权威',
    text: '获得国际展览业协会 UFI 认证，被评定为“中国跨境电商第一展”。',
  },
  {
    icon: '图层 111@2x.png',
    title: '影响力广',
    text: '聚合政府、央媒、产业带、平台与服务机构，形成跨境行业高关注场域。',
  },
]

const brandCases = [
  {
    image: '图层 112@2x.png',
    title: '2024CBE杭州国际美容博览会',
    text: '联合展会方举办跨境出海论坛，链接美妆品牌与跨境平台资源。',
  },
  {
    image: '图层 105@2x.png',
    title: '2026APES上海国际汽配展',
    text: '参与汽配产业带出海主题活动策划，沉淀垂直行业商机。',
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
    image: '数字展会运营3@2x.png',
    title: '小程序',
    text: '依托小程序，集成展会导览、展商查询、活动预约与在线互动，实现指尖逛展，一键触达。',
  },
  {
    image: '组 10@2x.png',
    title: '线上展会广告',
    text: '借助小程序及自媒体，为参展企业提供品牌展示、产品引流、直播推广等服务，触达潜在客户。',
  },
  {
    image: '组 9 拷贝 2@2x.png',
    title: '365天供采对接',
    text: '搭建长效供采连接机制，沉淀展商、采购商与服务商资源，让展会商机持续发生。',
  },
  {
    image: '组 10 拷贝@2x.png',
    title: 'SCRM客户关系管理系统',
    text: '沉淀展会全流程客户数据，支撑分层运营、商机跟进与复购转化，提高主办方服务效率。',
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
  min-height: 740px;
  display: flex;
  align-items: center;
  color: #fff;
  background: #0a1b42 var(--expo-hero-bg) center / cover no-repeat;
}

.hero-content {
  padding-top: 24px;
  text-align: center;
}

.hero-kicker {
  margin: 0 0 12px;
  color: rgba(255, 255, 255, .8);
  font-size: 24px;
  font-weight: 700;
}

.hero-content h1 {
  margin: 0 0 34px;
  color: #fff;
  font-size: clamp(48px, 4.8vw, 82px);
  line-height: 1.12;
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
  margin: 68px auto 0;
  color: rgba(255, 255, 255, .78);
  font-size: 18px;
  line-height: 1.9;
}

.organize-section {
  padding: 95px 0 120px;
  background: #f7faff var(--expo-wave-bg) center bottom / 100% auto no-repeat;
}

.organize-grid {
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 36px;
}

.organize-card {
  min-height: 230px;
  padding: 42px 34px 38px;
  text-align: center;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 24px 56px rgba(31, 91, 183, .08);
}

.organize-card img {
  width: 82px;
  height: 82px;
  object-fit: contain;
}

.organize-card h3,
.first-expo-features h3,
.case-grid h3,
.operation-copy h3 {
  margin: 24px 0 16px;
  color: #333;
  font-size: 26px;
  line-height: 1.25;
  font-weight: 800;
}

.organize-card p,
.first-expo-features p,
.case-grid p,
.operation-copy p {
  margin: 0;
  color: #697180;
  font-size: 17px;
  line-height: 1.8;
}

.fair-section {
  padding: 108px 0 0;
  background: #fff;
}

.fair-banner {
  position: relative;
  margin-top: 66px;
  overflow: hidden;
  border-radius: 8px;
}

.fair-banner > img {
  width: 100%;
  height: 328px;
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
  margin: 0 0 30px;
  font-size: clamp(28px, 3.2vw, 58px);
  line-height: 1.1;
  font-weight: 800;
}

.fair-stats {
  min-height: 312px;
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
  gap: 22px;
}

.stat-item {
  text-align: center;
}

.stat-item strong {
  display: block;
  color: #fff;
  font-size: clamp(32px, 3vw, 58px);
  line-height: 1.1;
  font-weight: 800;
}

.stat-item span {
  display: block;
  margin-top: 20px;
  color: rgba(255, 255, 255, .74);
  font-size: 22px;
}

.first-expo-section,
.case-section,
.gallery-section,
.operation-section {
  padding: 112px 0 122px;
  background: #fff;
}

.first-expo-card {
  width: min(1340px, calc(100% - 48px));
  margin-top: 76px;
  padding: 58px 68px;
  display: grid;
  grid-template-columns: 44% 1fr;
  gap: 64px;
  align-items: center;
  border-radius: 8px;
  background: #f5f8fc;
}

.first-expo-photo {
  width: 100%;
  filter: drop-shadow(0 28px 34px rgba(14, 44, 91, .16));
}

.first-expo-features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
}

.first-expo-features img {
  width: 76px;
  height: 76px;
  object-fit: contain;
}

.section-dots {
  margin-top: 54px;
  display: flex;
  justify-content: center;
  gap: 22px;
}

.section-dots span {
  width: 80px;
  height: 5px;
  background: #c7c7c7;
}

.section-dots .active {
  background: #2468ff;
}

.case-section {
  padding-top: 70px;
}

.case-grid {
  margin-top: 66px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 680px);
  gap: 66px;
  align-items: start;
}

.case-hero-card img {
  width: 100%;
  height: 360px;
  object-fit: cover;
}

.case-hero-card h3 {
  margin-top: 30px;
}

.case-hero-card button {
  margin-top: 28px;
  height: 42px;
  padding: 0 34px;
  font-size: 16px;
}

.case-list {
  display: grid;
  gap: 34px;
}

.case-list article {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 28px;
  align-items: center;
}

.case-list img {
  width: 200px;
  height: 154px;
  object-fit: cover;
}

.case-list h3 {
  margin-top: 0;
}

.gallery-section {
  padding-top: 42px;
}

.gallery-grid {
  margin-top: 66px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 180px;
  gap: 22px;
}

.gallery-card {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  background: #dbe4f2;
}

.gallery-card.tall {
  grid-row: span 2;
}

.gallery-card.wide {
  grid-column: span 1;
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
  min-height: 52px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(0, 0, 0, .62);
  text-align: center;
  font-size: 18px;
  font-weight: 700;
}

.operation-section {
  background: #fff;
}

.operation-list {
  margin-top: 78px;
  display: grid;
  gap: 92px;
}

.operation-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 86px;
  align-items: center;
}

.operation-row.reverse .operation-media {
  order: 2;
}

.operation-media {
  min-height: 408px;
  padding: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eef3fa;
}

.operation-media img {
  max-height: 430px;
  object-fit: contain;
}

.operation-copy h3 {
  margin: 0 0 24px;
  font-size: clamp(34px, 3vw, 52px);
}

.operation-copy p {
  max-width: 640px;
  font-size: 24px;
  line-height: 1.75;
}

.advantage-section {
  padding: 120px 0 130px;
  background: #f3f6fb;
}

.advantage-stage {
  position: relative;
  width: min(1280px, 100%);
  min-height: 690px;
  margin: 78px auto 0;
}

.advantage-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(720px, 58vw);
  transform: translate(-50%, -50%);
}

.advantage-item {
  position: absolute;
  display: grid;
  grid-template-columns: 136px 260px;
  gap: 28px;
  align-items: center;
}

.advantage-item img {
  width: 136px;
  height: 136px;
  object-fit: contain;
}

.advantage-item p {
  margin: 0;
  color: #333;
  white-space: pre-line;
  font-size: 26px;
  line-height: 1.45;
  font-weight: 800;
}

.advantage-item.top-left {
  left: 0;
  top: 42px;
}

.advantage-item.mid-left {
  left: 0;
  top: 260px;
}

.advantage-item.bottom-left {
  left: 110px;
  bottom: 36px;
}

.advantage-item.top-right,
.advantage-item.mid-right,
.advantage-item.bottom-right {
  right: 0;
  grid-template-columns: 136px 280px;
}

.advantage-item.top-right {
  top: 42px;
}

.advantage-item.mid-right {
  top: 278px;
}

.advantage-item.bottom-right {
  right: 88px;
  bottom: 36px;
}

.expo-cta {
  padding: 96px 24px 104px;
  color: #fff;
  text-align: center;
  background: #2767ee;
}

.expo-cta h2 {
  margin: 0 0 52px;
  color: #fff;
  font-size: clamp(34px, 4vw, 64px);
  line-height: 1.2;
  letter-spacing: 0;
  font-weight: 800;
}

.expo-cta button {
  color: #1f61e8;
  background: #fff;
}

.expo-cta img {
  width: 208px;
  height: 208px;
  margin: 56px auto 0;
  display: block;
  background: #fff;
}

@media (max-width: 1200px) {
  .organize-grid,
  .first-expo-features {
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

  .operation-row.reverse .operation-media {
    order: 0;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
  .first-expo-card {
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

  .case-list article {
    grid-template-columns: 1fr;
  }

  .case-list img {
    width: 100%;
    height: 220px;
  }

  .gallery-grid,
  .advantage-stage {
    grid-template-columns: 1fr;
  }

  .gallery-card.tall {
    grid-row: span 1;
  }

  .operation-media {
    min-height: 300px;
    padding: 22px;
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
