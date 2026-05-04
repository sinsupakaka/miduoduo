<template>
  <div class="about-page">
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
              <button>媒体合作</button>
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
          <div class="map-note">
            <img :src="aboutAsset('坐标@2x.png')" alt="" />
            <div>
              <strong>福建总部</strong>
              <span>福建省福州市鼓楼区软件园A区23座</span>
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
</script>

<style scoped>
.about-page {
  min-width: 320px;
  color: #333;
  background: #fff;
  overflow: hidden;
}

.about-container {
  width: min(1536px, calc(100% - 48px));
  margin: 0 auto;
}

.section-heading {
  margin: 0;
  font-size: clamp(34px, 2.6vw, 52px);
  line-height: 1.15;
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
  height: 962px;
  position: relative;
  background: #07131c url("/assets/关于我们/椭圆 2 拷贝@2x.png") center top / cover no-repeat;
}

.hero-title {
  position: absolute;
  left: 50%;
  bottom: 150px;
  width: min(920px, calc(100% - 48px));
  transform: translateX(-50%);
  text-align: center;
}

.hero-title h1 {
  margin: 0 0 30px;
  color: #fff;
  font-size: clamp(46px, 4.2vw, 74px);
  line-height: 1.1;
  font-weight: 800;
}

.hero-title p {
  margin: 0;
  color: rgba(255, 255, 255, .74);
  font-size: clamp(28px, 2.8vw, 48px);
  line-height: 1.2;
  font-weight: 400;
}

.company-section {
  min-height: 745px;
  padding: 76px 0 86px;
  background: #fff;
}

.company-grid {
  display: grid;
  grid-template-columns: minmax(430px, 658px) minmax(520px, 782px);
  gap: 82px;
  align-items: start;
}

.company-copy {
  padding-top: 52px;
}

.company-copy h2 {
  margin: 0 0 42px;
  color: #3a3a3a;
  font-size: clamp(36px, 2.8vw, 54px);
  line-height: 1.1;
  font-weight: 800;
}

.company-copy p {
  margin: 0 0 19px;
  color: #555;
  font-size: 18px;
  line-height: 2;
  text-align: justify;
}

.company-image {
  width: 100%;
  margin-top: -202px;
  border-radius: 0 0 76px 0;
  display: block;
  box-shadow: 0 28px 70px rgba(28, 57, 119, .16);
}

.culture-section {
  padding: 126px 0 132px;
  background: #f4f7fb;
}

.culture-grid {
  margin-top: 78px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 42px;
}

.culture-card {
  min-width: 0;
}

.culture-card img {
  width: 100%;
  border-radius: 14px;
  display: block;
}

.culture-card h3 {
  margin: 35px 0 18px;
  color: #333;
  font-size: 28px;
  line-height: 1.15;
  font-weight: 800;
}

.culture-card p {
  margin: 0;
  color: #636b78;
  font-size: 18px;
  line-height: 1.85;
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
  height: 1104px;
  padding-top: 126px;
  background: #2f6df0 url("/assets/关于我们/图层 9@2x.png") center top / cover no-repeat;
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
  bottom: -22px;
  width: 92px;
  height: 7px;
  border-radius: 8px;
  background: #fff;
  transform: translateX(-50%);
}

.timeline-chart {
  width: min(1430px, 100%);
  margin: 112px auto 0;
  display: block;
}

.honor-section {
  padding: 115px 0 132px;
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
  min-width: 360px;
  color: #333;
  font-size: clamp(34px, 2.7vw, 50px);
  line-height: 1;
  font-weight: 800;
}

.honor-title img {
  position: absolute;
  left: -20px;
  top: 50%;
  width: 262px;
  max-width: none;
  transform: translateY(-50%);
  pointer-events: none;
}

.honor-title span {
  position: relative;
  z-index: 1;
  padding-left: 46px;
}

.honor-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: flex-end;
}

.honor-tabs button {
  min-width: 154px;
  height: 42px;
  padding: 0 24px;
  border: 1px solid #d8deeb;
  border-radius: 999px;
  color: #9299a7;
  background: #fff;
  font-size: 16px;
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
  gap: 28px 30px;
}

.honor-card {
  overflow: hidden;
  border: 1px solid #e0e5ee;
  border-radius: 8px;
  background: #fff;
}

.honor-card img {
  width: 100%;
  aspect-ratio: 493 / 410;
  display: block;
  object-fit: cover;
}

.honor-card p {
  height: 70px;
  margin: 0;
  padding: 0 18px;
  display: flex;
  align-items: center;
  color: #606774;
  font-size: 15px;
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.group-section {
  height: 957px;
  padding-top: 126px;
  background: #030b12 url("/assets/关于我们/图层 10@2x.png") center center / cover no-repeat;
}

.group-inner {
  height: 100%;
  position: relative;
}

.map-note {
  position: absolute;
  right: 118px;
  top: 368px;
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
}

.map-note img {
  width: 20px;
  margin-top: 16px;
}

.map-note div {
  width: 318px;
  padding: 17px 22px;
  border-radius: 4px;
  color: #323846;
  background: rgba(255, 255, 255, .94);
  box-shadow: 0 18px 36px rgba(0, 0, 0, .16);
}

.map-note strong {
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 800;
}

.map-note span {
  display: block;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
}

.partner-section {
  padding: 124px 0 130px;
  background: #fff;
}

.partner-wall {
  margin-top: 72px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
}

.partner-wall img {
  width: 100%;
  display: block;
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

  .map-note {
    right: 24px;
    top: 240px;
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

  .map-note {
    left: 16px;
    right: 16px;
    top: auto;
    bottom: 58px;
  }

  .map-note div {
    width: auto;
  }
}
</style>
