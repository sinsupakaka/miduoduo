<template>
  <div class="about-page" :style="aboutPageStyle">
    <SiteHeader :active-path="activePath" />

    <main>
      <section class="about-hero">
        <div class="hero-title">
          <h1>关于米多多</h1>
          <p>领先及快速增长的综合服务平台</p>
        </div>
      </section>

      <section class="company-section">
        <div class="about-container company-grid">
          <div class="company-copy">
            <h2>公司简介</h2>
            <p>
              福建米多多网络科技有限公司是领先及快速增长的综合服务平台，为全国产业带企业出海提供数字营销及流量资源服务，包括广告投放、内容营销、达人合作、数据分析、数据咨询、独立站等。
            </p>
            <p>
              公司秉承“以技术驱动增长、以服务创造价值”的理念，围绕跨境电商产业链，链接品牌、平台、供应链与服务资源，帮助企业通过数字化能力快速打开全球市场。
            </p>
            <p>
              公司致力于成为中国“产业带+跨境电商”发展转型的帮扶者和助推者，服务中国制造品牌走向全球市场。
            </p>
            <p>
              公司成立于2015年，总部位于福州，积极参与行业协作机制。2024年进入飞书、东南亚中心等相关资源协同矩阵，正逐步形成覆盖营销咨询、内容生产、人才孵化的一站式服务能力。
            </p>
          </div>
          <img class="company-image" :src="aboutAsset('图层 13@2x.png')" alt="" />
        </div>
      </section>

      <section class="culture-section">
        <div class="about-container">
          <h2 class="section-heading dark">企业文化</h2>
          <div class="culture-grid">
            <article class="culture-card image-card">
              <img :src="aboutAsset('logo来源@2x.png')" alt="" />
              <h3>logo来源</h3>
              <p>
                米多多logo图形灵感来源自著名典故《棋盘上的米粒》，寓意聚沙成塔、持续增长。
              </p>
            </article>

            <article class="culture-card mission-card">
              <h3>使命与愿景</h3>
              <p>
                打造一家全球领先的、以技术驱动、以数字营销为主业的跨境服务综合服务公司，打造一家全球化文化和生活用品领域的公司，培养一批卓越的人。
              </p>
              <img :src="aboutAsset('配图2-米多多数字出海创新中心@2x.png')" alt="" />
            </article>

            <article class="culture-card image-card">
              <img :src="aboutAsset('价值观@2x.png')" alt="" />
              <h3>核心价值观</h3>
              <p>因为相信，所以看见</p>
            </article>
          </div>
        </div>
      </section>

      <section class="timeline-section">
        <div class="about-container timeline-inner">
          <h2 class="section-heading light">发展历程</h2>
          <img class="timeline-chart" :src="aboutAsset('图表@2x.png')" alt="" />
        </div>
      </section>

      <section class="honor-section">
        <div class="about-container">
          <div class="honor-head">
            <h2 class="honor-title">
              <img :src="aboutAsset('组 6@2x.png')" alt="" />
              <span>资质/荣誉</span>
            </h2>
          <div class="honor-tabs">
            <button class="active">专业资质</button>
            <button>案例/出海人选</button>
            <button>平台官方资质</button>
            <button>商协会服务</button>
          </div>
          </div>

          <div class="honor-grid">
            <article v-for="item in honors" :key="item.image" class="honor-card">
              <img :src="aboutAsset(item.image)" alt="" />
              <p>{{ item.title }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="group-section">
        <div class="about-container group-inner">
          <h2 class="section-heading light">集团公司</h2>

          <div class="group-map-layer">
            <button
              v-for="office in groupOffices"
              :key="office.key"
              type="button"
              class="group-pin"
              :class="{ active: hoveredOfficeKey === office.key }"
              :style="{ left: office.left, top: office.top }"
              @mouseenter="setHoveredOffice(office.key)"
              @mouseleave="clearHoveredOffice"
              @focus="setHoveredOffice(office.key)"
              @blur="clearHoveredOffice"
              @click="setHoveredOffice(office.key)"
            >
              <img class="group-map-img" :src="aboutAsset(hoveredOfficeKey === office.key ? '坐标@2x.png' : '坐标 拷贝@2x.png')" alt="" />
              <span class="sr-only">{{ office.label }}</span>
            </button>

            <div v-if="activeOffice" class="map-note" :style="mapNoteStyle">
              <div>
                <strong>{{ activeOffice.label }}</strong>
                <span>地址：{{ activeOffice.address }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="partner-section">
        <div class="about-container">
          <h2 class="section-heading dark">米多多合作伙伴</h2>
          <div class="partner-wall">
            <img :src="aboutAsset('link_1@2x.png')" alt="" />
            <img :src="aboutAsset('link_2@2x.png')" alt="" />
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'
import { asset } from '../utils/assets'

defineProps({
  activePath: {
    type: String,
    default: '/about',
  },
})

const aboutAsset = (name) => asset(name, '关于我们')

const cssUrl = (url) => `url("${url}")`

const aboutPageStyle = {
  '--about-hero-bg': cssUrl(aboutAsset('椭圆 2 拷贝@2x.png')),
  '--about-timeline-bg': cssUrl(aboutAsset('图层 9@2x.png')),
  '--about-group-bg': cssUrl(aboutAsset('图层 10@2x.png')),
}

const honors = [
  {
    image: '图层 3@2x.png',
    title: '2023亚马逊生态服务商高峰论坛生态创新奖',
  },
  {
    image: '图层 4@2x.png',
    title: '2023Google优秀合作伙伴渠道线上销售奖',
  },
  {
    image: '图层 5@2x.png',
    title: '2024福建电商服务企业十强中国跨交会',
  },
  {
    image: '图层 6@2x.png',
    title: 'Google Agency Excellence Awards 2024',
  },
  {
    image: '图层 7@2x.png',
    title: 'TikTok Shop美区跨境POP2024年度优秀合作伙伴',
  },
  {
    image: '图层 8@2x.png',
    title: 'TikTok Shop美区跨境POP2025年度商家大会',
  },
]

const groupOffices = [
  {
    key: 'fuzhou',
    shortLabel: '总部',
    label: '福州总部',
    address: '福建省福州市软件园A区23座米多多数字出海创新中心',
    left: '80%',
    top: '38.6%',
  },
  {
    key: 'hangzhou',
    shortLabel: '杭州',
    label: '杭州分公司',
    address: '浙江省杭州市滨江区浙农科创园5号楼2506',
    left: '79.5%',
    top: '36.2%',
  },
  {
    key: 'shenzhen',
    shortLabel: '深圳',
    label: '深圳分公司',
    address: '广东省深圳市龙岗区坂田街道环城南路心Tower3 7楼E2',
    left: '78.4%',
    top: '39.0%',
  },
  {
    key: 'xiamen',
    shortLabel: '厦门',
    label: '厦门分公司',
    address: '福建省厦门市集美区软件园三期C03栋601-1室米多多',
    left: '79.4%',
    top: '40.3%',
  },
  {
    key: 'guangzhou',
    shortLabel: '广州',
    label: '广州分公司',
    address: '广东省广州市海珠区鼎新路8号晋嘉洲大厦2410单元',
    left: '78.4%',
    top: '40.8%',
  },
  {
    key: 'suzhou',
    shortLabel: '苏州',
    label: '苏州分公司',
    address: '江苏省苏州市苏州工业园区苏州大道东265号现代传媒广场22楼2227室',
    left: '78.2%',
    top: '34.2%',
  },
  {
    key: 'nanping',
    shortLabel: '南平',
    label: '南平分公司',
    address: '福建省南平市顺昌县城南中路1号炼石花苑28幢',
    left: '79%',
    top: '37.4%',
  },
  {
    key: 'zhengzhou',
    shortLabel: '郑州',
    label: '郑州分公司',
    address: '河南省郑州市管城回族区郑汴路与未来路交叉口绿都广场A栋401室',
    left: '76.9%',
    top: '37.8%',
  },
]

const hoveredOfficeKey = ref(null)

const activeOffice = computed(() => {
  return groupOffices.find((office) => office.key === hoveredOfficeKey.value) || null
})

const mapNoteStyle = computed(() => {
  if (!activeOffice.value) return {}

  return {
    left: activeOffice.value.left,
    top: `calc(${activeOffice.value.top} - 50px)`,
  }
})

const setHoveredOffice = (officeKey) => {
  hoveredOfficeKey.value = officeKey
}

const clearHoveredOffice = () => {
  hoveredOfficeKey.value = null
}
</script>

<style scoped>
.about-page {
  min-width: 320px;
  color: #333;
  background: #fff;
  overflow: hidden;
}

.about-container {
  width: 1540px;
  max-width: calc(100% - 380px);
  margin: 0 auto;
}

.section-heading {
  margin: 0;
  font-size: clamp(36px, 2.5vw, 48px);
  line-height: 1.18;
  letter-spacing: 0;
  font-weight: 800;
}

.section-heading.dark {
  color: #333;
}

.section-heading.light {
  color: #fff;
}

.about-hero {
  height: 938px;
  position: relative;
  background: #07131c var(--about-hero-bg) center top / cover no-repeat;
}

.hero-title {
  position: absolute;
  left: 50%;
  bottom: 136px;
  width: min(920px, calc(100% - 48px));
  transform: translateX(-50%);
  text-align: center;
}

.hero-title h1 {
  margin: 0 0 26px;
  color: #fff;
  font-size: clamp(48px, 3.8vw, 72px);
  line-height: 1.12;
  font-weight: 800;
}

.hero-title p {
  margin: 0;
  color: rgba(255, 255, 255, .74);
  font-size: clamp(24px, 2.3vw, 42px);
  line-height: 1.2;
  font-weight: 400;
}

.company-section {
  min-height: 812px;
  padding: 104px 0 126px;
  background: #fff;
}

.company-grid {
  display: grid;
  grid-template-columns: minmax(520px, 676px) minmax(620px, 794px);
  gap: 70px;
  align-items: start;
}

.company-copy {
  padding-top: 74px;
}

.company-copy h2 {
  margin: 0 0 36px;
  color: #3a3a3a;
  font-size: clamp(36px, 2.5vw, 48px);
  line-height: 1.1;
  font-weight: 800;
}

.company-copy p {
  margin: 0 0 18px;
  color: #555;
  font-size: 18px;
  line-height: 1.9;
  text-align: justify;
}

.company-image {
  z-index: 99;
  width: 100%;
  margin-top: -170px;
  border-radius: 0 0 64px 0;
  display: block;
  box-shadow: 0 28px 70px rgba(28, 57, 119, .16);
}

.culture-section {
  padding: 112px 0 128px;
  background: #f4f7fb;
}

.culture-grid {
  margin-top: 72px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 34px;
}

.culture-card {
  min-width: 0;
}

.culture-card img {
  width: 100%;
  border-radius: 16px;
  display: block;
}

.culture-card h3 {
  margin: 30px 0 16px;
  color: #333;
  font-size: 28px;
  line-height: 1.18;
  font-weight: 800;
}

.culture-card p {
  margin: 0;
  color: #636b78;
  font-size: 17px;
  line-height: 1.82;
}

.mission-card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}

.mission-card h3 {
  margin-top: 0;
}

.mission-card img {
  margin-top: auto;
}

.timeline-section {
  height: 1064px;
  padding-top: 116px;
  background: #2f6df0 var(--about-timeline-bg) center top / cover no-repeat;
}

.timeline-inner {
  height: 100%;
  position: relative;
  text-align: center;
}

.timeline-inner .section-heading {
  position: relative;
  display: inline-block;
}

.timeline-inner .section-heading::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -18px;
  width: 82px;
  height: 6px;
  border-radius: 8px;
  background: #fff;
  transform: translateX(-50%);
}

.timeline-chart {
  width: min(1450px, 100%);
  margin: 102px auto 0;
  display: block;
}

.honor-section {
  padding: 112px 0 128px;
  background: #fff;
}

.honor-head {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
}

.honor-title {
  position: relative;
  margin: 0;
  min-width: 384px;
  padding-left: 20px;
  color: #333;
  font-size: clamp(36px, 2.5vw, 48px);
  line-height: 1;
  font-weight: 800;
}

.honor-title img {
  position: absolute;
  left: 0;
  top: 50%;
  width: 220px;
  max-width: none;
  transform: translateY(-50%);
  pointer-events: none;
}

.honor-title span {
  position: relative;
  z-index: 1;
  padding-left: 28px;
}

.honor-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-end;
}

.honor-tabs button {
  min-width: 176px;
  height: 48px;
  padding: 0 28px;
  border: 1px solid #d8deeb;
  border-radius: 999px;
  color: #9299a7;
  background: #fff;
  font-size: 18px;
  line-height: 1;
}

.honor-tabs button.active {
  color: #fff;
  border-color: #265df0;
  background: #265df0;
  font-weight: 800;
}

.honor-grid {
  margin-top: 58px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px 28px;
}

.honor-card {
  overflow: hidden;
  border: 1px solid #e0e5ee;
  border-radius: 16px;
  background: #fff;
}

.honor-card img {
  width: 100%;
  aspect-ratio: 493 / 410;
  display: block;
  object-fit: cover;
}

.honor-card p {
  height: 78px;
  margin: 0;
  padding: 0 22px;
  display: flex;
  align-items: center;
  color: #606774;
  font-size: 15px;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.group-section {
  height: 952px;
  padding-top: 116px;
  background: #030b12 var(--about-group-bg) center center / cover no-repeat;
}

.group-inner {
  height: 100%;
  position: relative;
}

.group-addresses {
  position: absolute;
  left: 24px;
  bottom: 148px;
  width: min(736px, calc(100% - 764px));
  padding: 26px 30px;
  border-radius: 18px;
  background: rgba(255, 255, 255, .9);
  box-shadow: 0 20px 48px rgba(6, 22, 42, .12);
}

.group-addresses p {
  margin: 0;
  color: #3d68c7;
  font-size: 18px;
  line-height: 1.56;
  font-weight: 600;
}

.group-addresses p + p {
  margin-top: 4px;
}

.group-addresses strong,
.group-addresses span {
  color: inherit;
}

.group-map-img {
  scale: 0.35;
}

.group-map-layer {
  position: absolute;
  inset: 0;
}

.group-pin {
  position: absolute;
  width: 30px;
  height: 38px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    filter 0.2s ease;
}

.group-pin img {
  width: 100%;
  max-width: none;
  display: block;
}

.group-pin:hover,
.group-pin:focus-visible,
.group-pin.active {
  transform: translate(-50%, -50%) scale(1.08);
  filter: drop-shadow(0 8px 18px rgba(27, 74, 211, .25));
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.map-note {
  position: absolute;
  z-index: 3;
  transform: translate(-50%, -100%);
  pointer-events: none;
}

.map-note div {
  width: 372px;
  padding: 20px 24px;
  border-radius: 10px;
  color: #323846;
  background: rgba(255, 255, 255, .94);
  box-shadow: 0 18px 36px rgba(0, 0, 0, .16);
}

.map-note strong {
  display: block;
  margin-bottom: 10px;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 800;
}

.map-note span {
  display: block;
  color: #6b7280;
  font-size: 15px;
  line-height: 1.5;
}

.partner-section {
  padding: 112px 0 132px;
  background: #fff;
}

.partner-wall {
  margin-top: 62px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
}

.partner-wall img {
  width: 100%;
  display: block;
}

@media (max-width: 1919px) {
  .about-container {
    width: min(1540px, calc(100% - 48px));
    max-width: none;
  }
}

@media (max-width: 1200px) {
  .about-hero {
    height: 720px;
  }

  .hero-title {
    bottom: 96px;
  }

  .company-grid,
  .culture-grid {
    grid-template-columns: 1fr;
  }

  .company-image {
    max-width: 780px;
    margin: 0 auto;
  }

  .honor-head {
    align-items: flex-start;
    flex-direction: column;
  }

  .honor-tabs {
    justify-content: flex-start;
  }

  .timeline-section,
  .group-section {
    height: auto;
    min-height: 720px;
  }

  .group-section {
    background-position: center bottom;
  }

  .group-addresses {
    position: static;
    width: 100%;
    margin-top: 48px;
  }

  .group-map-layer {
    position: relative;
    height: 420px;
    margin-top: 32px;
  }

  .map-note {
    right: 24px;
    top: 72px;
  }
}

@media (max-width: 760px) {
  .about-container {
    width: min(100% - 32px, 1536px);
  }

  .about-hero {
    height: 560px;
    background-size: auto 100%;
  }

  .company-section,
  .culture-section,
  .honor-section,
  .partner-section {
    padding: 74px 0 82px;
  }

  .company-copy {
    padding-top: 0;
  }

  .company-copy p,
  .culture-card p {
    font-size: 16px;
  }

  .timeline-section {
    min-height: 560px;
    padding-top: 74px;
  }

  .timeline-chart {
    margin-top: 74px;
  }

  .honor-title {
    min-width: 0;
  }

  .honor-grid,
  .partner-wall {
    grid-template-columns: 1fr;
  }

  .honor-card p {
    white-space: normal;
  }

  .group-section {
    min-height: 560px;
    padding-top: 74px;
  }

  .group-addresses {
    padding: 18px 18px 20px;
  }

  .group-addresses p {
    font-size: 15px;
  }

  .group-map-layer {
    height: 320px;
  }

  .map-note {
    left: 16px;
    right: 16px;
    top: 18px;
  }

  .map-note div {
    width: auto;
  }
}
</style>
