<template>
  <div class="thinktank-page" :style="thinkTankPageStyle">
    <SiteHeader :active-path="activePath" />

    <main>
      <section class="thinktank-hero">
        <div class="thinktank-container hero-content">
          <div class="hero-copy">
            <div class="hero-title">以研究洞见未来</div>
            <div class="hero-sub-title">米多多行业智库</div>
            <p>连续多年参与/主编全行业年度成果，发布跨境电商多<br/>个指数与榜单，为中国企业出海提供深度智力支撑</p>
          </div>
        </div>
      </section>

      <section class="research-section">
        <div class="thinktank-container">
          <div class="research-grid">
            <div class="research-copy">
              <h2>专注行业研究，引领行业风向</h2>

              <div class="research-list">
                <p v-for="item in researchParticipation" :key="item">{{ item }}</p>
              </div>

              <div class="research-list authored">
                <p v-for="item in authoredResearch" :key="item">{{ item }}</p>
              </div>
            </div>

            <div class="research-showcase">
              <h2>跨境电商行业深度报告</h2>

              <div class="showcase-top">
                <img v-for="item in reportCoversTop" :key="item" :src="thinkTankAsset(item)" alt="" />
              </div>

              <div class="showcase-bottom">
                <img style="height: 205px;" v-for="item in reportCoversBottom" :key="item" :src="thinkTankAsset(item)" alt="" />
              </div>
            </div>
          </div>

          <div class="partner-strip">
            <template v-for="item in researchPartners" :key="item">
              <div>
                <img :src="thinkTankAsset(item)" alt="" />
              </div>
            </template>
          </div>
        </div>
      </section>

      <section class="editorial-section">
        <div class="thinktank-container">
          <h2 class="section-title">
            主编行业年度蓝皮书/白皮书<br />
            联合行业影响力人物和机构共创发布
          </h2>

          <div class="editorial-grid">
            <div class="editorial-meta">
              <h3>央媒聚焦报道</h3>
              <p>人民日报 / 央视 / 新华社</p>
            </div>

            <div class="editorial-books">
              <img v-for="item in editorialBooks" :key="item" :src="thinkTankAsset(item)" alt="" />
            </div>

            <div class="editorial-release">
              <h3>联合发布</h3>
              <p>
                商务部原副部长<span>蒋耀平</span>、国务院参事、中国跨境电商五十人论坛主席<span>汤敏</span>，
                新出海研究院学者<span>黄渊普</span>、新商业架构师<span>张琦</span>等行业影响力人物联合发布。
              </p>
            </div>
          </div>

          <p class="editorial-note">累计影响超30万跨境电商从业者</p>
        </div>
      </section>

      <section class="media-section">
        <div class="thinktank-container media-inner">
          <h2 class="section-title light">央媒报道</h2>

          <div class="media-logos">
            <img v-for="item in mediaLogos" :key="item" :src="thinkTankAsset(item)" alt="" />
          </div>

          <div class="media-stage">
            <button class="media-arrow left" type="button" aria-label="上一条">
              <img :src="thinkTankAsset('形状 4 拷贝@2x.png')" alt="" />
            </button>

            <div class="media-cards">
              <img class="media-card left" :src="thinkTankAsset('人民网@2x.png')" alt="" />
              <img class="media-card left2" :src="thinkTankAsset('人民日报1@2x.png')" alt="" />
              <img class="media-card center" :src="thinkTankAsset('人民日报3@2x.png')" alt="" />
              <img class="media-card right" :src="thinkTankAsset('中央电视台 央视新闻报道@2x.png')" alt="" />
              <img class="media-card right2" :src="thinkTankAsset('新华社、新华网报道@2x.png')" alt="" />
            </div>

            <button class="media-arrow right" type="button" aria-label="下一条">
              <img :src="thinkTankAsset('形状 4@2x(1).png')" alt="" />
            </button>
          </div>
        </div>
      </section>

      <section class="scene-section">
        <div class="thinktank-container">
          <h2 class="section-title">发布现场</h2>

          <div class="scene-block scene-block-bottom">
            <div class="scene-copy">
              <h3>《“升”而全球 中国出口跨境电商升级发展蓝皮书（2025）》发布现场</h3>
              <div class="scene-gallery two-up">
                <img :src="thinkTankAsset('图层 4@2x.png')" alt="" />
                <img :src="thinkTankAsset('图层 5@2x.png')" alt="" />
              </div>
            </div>
            <div class="scene-cover">
              <img :src="thinkTankAsset('图层 3@2x.png')" alt="" />
            </div>
          </div>
        

          <div class="scene-block scene-block-top">
            <div class="scene-cover">
              <img :src="thinkTankAsset('图层 6@2x.png')" alt="" />
            </div>
            <div class="scene-copy">
              <h3>《和合共生 耦合发展 · 中国出口跨境电商蓝皮书（2026）》发布现场</h3>
              <div class="scene-gallery two-up">
                <img :src="thinkTankAsset('图层 7@2x.png')" alt="" />
                <img :src="thinkTankAsset('图层 8@2x.png')" alt="" />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section class="guide-section">
        <div class="thinktank-container">
          <h2 class="section-title light">内容导读</h2>

          <div class="guide-panel guide-panel-top">
            <div class="guide-pages">
              <img :src="thinkTankAsset('中国出口跨境电商升级发展蓝皮书_03@2x.png')" alt="" />
              <img :src="thinkTankAsset('中国出口跨境电商升级发展蓝皮书_04@2x.png')" alt="" />
            </div>
            <p>《“升”而全球 · 中国出口跨境电商升级发展蓝皮书（2025）》</p>
          </div>

          <div class="guide-panel guide-panel-bottom">
            <div class="guide-bottom-grid">
              <img class="guide-outline" :src="thinkTankAsset('中国出口跨境电商蓝皮书-2026_11@2x.png')" alt="" />
              <div class="guide-charts">
                <img :src="thinkTankAsset('图片12@2x.png')" alt="" />
                <img :src="thinkTankAsset('图片13@2x.png')" alt="" />
                <img :src="thinkTankAsset('图片15@2x.png')" alt="" />
              </div>
            </div>
            <p>《和合共生 耦合发展 · 中国出口跨境电商蓝皮书（2026）》</p>
          </div>
        </div>
      </section>

      <section class="cooperation-section">
        <div class="thinktank-container">
          <h2 class="section-title">合作模式</h2>

          <div class="cooperation-table">
            <div class="table-row" v-for="row in cooperationRows" :key="row.title">
              <div class="table-cell heading">{{ row.title }}</div>
              <div class="table-cell">{{ row.service }}</div>
              <div class="table-cell emphasis">{{ row.partner }}</div>
              <div class="table-cell">{{ row.value }}</div>
            </div>
          </div>

          <div class="cooperation-action">
            <div class="action-list">
              <div class="action-item" v-for="item in actionItems" :key="item.label">
                <img :src="thinkTankAsset(item.icon)" alt="" />
                <span>{{ item.label }}</span>
              </div>
            </div>

            <img class="action-arrow" :src="thinkTankAsset('图层 31@2x.png')" alt="" />

            <div class="action-qrcode">
              <img :src="thinkTankAsset('图层 2@2x.png')" alt="行业智库二维码" />
            </div>
          </div>
        </div>
      </section>

      <section class="copyright-banner">
        <div class="thinktank-container">
          <h2>深耕行业研究 · 沉淀专业价值</h2>
          <p>版权声明:米多多版权所有，研究成果未经授权不得转载</p>
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
    default: '/industry-think-tank',
  },
})

const thinkTankAsset = (name) => asset(name, '行业智库')

const cssUrl = (url) => `url("${url}")`

const thinkTankPageStyle = {
  '--thinktank-hero-bg': cssUrl(thinkTankAsset('2022 中国跨境电商企业 出海发展蓝皮书@2x.png')),
  '--thinktank-media-bg': cssUrl(thinkTankAsset('图层 19@2x.png')),
}

const researchParticipation = [
  '› 参与上海社科院《中国跨境出口电商发展报告(2021)》编撰工作',
  '› 参与德勤《中国跨境电商企业出海发展蓝皮书(2022)》编撰工作',
  '› 参与德勤《中国跨境电商企业出海发展蓝皮书(2023)》编撰工作',
  '› 参与德勤《中国跨境电商企业出海发展蓝皮书(2024)》编撰工作',
]

const authoredResearch = [
  '主编《“升”而全球·中国出口跨境电商升级发展蓝皮书(2025)》',
  '主编《和合共生 耦合发展·中国出口跨境电商蓝皮书(2026)》',
  '主编《“新”“新”向荣 生生不息·全球电商市场全景白皮书(2026)》',
  '首创发布“跨交会指数(2026)”和“跨之力榜单(2026)”',
]

const reportCoversTop = [
  '图层 20@2x.png',
  '图层 22@2x.png',
  '图层 23@2x.png',
  '图层 24@2x.png',
  '图层 25@2x.png',
  '图层 26@2x.png',
  '图层 27@2x.png',
]

const reportCoversBottom = [
  '图层 28@2x.png',
  '图层 29@2x.png',
  '图层 30@2x.png',
  '图层 21@2x.png',
]

const researchPartners = ['图层 15@2x.png', '图层 32@2x.png', '图层 18@2x.png', '图层 33@2x.png']

const editorialBooks = [
  '图片5@2x.png',
  '图片6@2x.png',
  '图片7@2x.png',
]

const mediaLogos = ['图层 9@2x.png', '图层 10@2x.png', 'logo1@2x.png', 'logo2@2x.png', 'logo3@2x.png', 'logo4@2x.png']

const cooperationRows = [
  {
    title: '联合发布',
    service: '联合调研、联合署名、联合发布',
    partner: '行业学者、研究机构、跨境电商平台',
    value: '报告署名、发布会曝光、官网展示、行业影响力背书',
  },
  {
    title: '内容共创',
    service: '专栏稿、案例共建、问答共建',
    partner: '服务商、平台方、品牌方',
    value: '品牌曝光、流量导入、专业形象塑造',
  },
  {
    title: '定制化研究',
    service: '企业专项行业研究、赛道分析、白皮书定制',
    partner: '品牌方、投资机构',
    value: '专属研究报告、企业内部决策支持、行业话语权',
  },
  {
    title: '资料分发',
    service: '报告授权分发、内容转载合作',
    partner: '行业媒体、协会、平台',
    value: '内容授权、品牌背书、用户触达',
  },
]

const actionItems = [
  { icon: '形状 1@2x.png', label: '免费试读' },
  { icon: '形状 2@2x.png', label: '获取完整版PDF' },
  { icon: '形状 3@2x.png', label: '纸质书申请' },
  { icon: '形状 4@2x.png', label: '合作咨询' },
]
</script>

<style scoped>
.thinktank-page {
  min-width: 320px;
  color: #333;
  background: #fff;
  overflow: hidden;
}

.thinktank-container {
  width: min(1548px, calc(100% - 48px));
  margin: 0 auto;
}

.section-title {
  margin: 0;
  text-align: center;
  color: #333;
  font-size: clamp(34px, 3vw, 58px);
  line-height: 1.28;
  font-weight: 700;
}

.section-title.light {
  color: #fff;
}

.thinktank-hero {
  min-height: 840px;
  position: relative;
  background: #051127 var(--thinktank-hero-bg) center top / cover no-repeat;
}

.hero-content {
  min-height: 840px;
  display: flex;
  align-items: center;
}

.hero-copy {
  width: min(640px, 100%);
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  margin-top: -80px;
  margin-left: -60px;
  gap: 30px;
}

.hero-title {
  width: 100%;
  height: 87px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  font-size: 90px;
  color: #FFFFFF;
  line-height: 90px;
  background: linear-gradient(0deg, #B3C8F7 0%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-sub-title {
  width: 100%;
  padding-left: 50px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  font-size: 54px;
  color: #FFFFFF;
  line-height: 54px;
}

.hero-copy h1 {
  margin: 0;
  color: #fff;
  font-size: clamp(58px, 4.6vw, 82px);
  line-height: 1.12;
  font-weight: 700;
}

.hero-copy h2 {
  margin: 34px 0 30px;
  color: #fff;
  font-size: clamp(34px, 2.9vw, 56px);
  line-height: 1.2;
  font-weight: 700;
}

.hero-copy p {
  width: min(620px, 100%);
  margin: 0;
  padding-left: 16px;
  border-left: 4px solid #1294ff;
  color: rgba(255, 255, 255, 0.88);
  font-size: 18px;
  line-height: 2;
}

.research-section {
  padding: 96px 0 112px;
}

.research-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(700px, 760px);
  gap: 72px;
  align-items: start;
}

.research-copy h2,
.research-showcase h2 {
  margin: 0 0 52px;
  font-size: clamp(34px, 2.8vw, 56px);
  line-height: 1.18;
  font-weight: 700;
}

.research-list {
  display: grid;
  gap: 18px;
}

.research-list + .research-list {
  margin-top: 44px;
}

.research-list p {
  margin: 0;
  color: #444;
  font-size: 18px;
  line-height: 1.85;
}

.research-showcase {
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.showcase-top,
.showcase-bottom {
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  align-items: flex-end;
}

.showcase-top img {
  width: calc((100% - 72px) / 7);
  min-width: 0;
  height: auto;
  object-fit: cover;
}

.showcase-bottom img:nth-child(-n + 3) {
  width: calc((100% - 36px - 347px) / 3);
  min-width: 0;
  height: auto;
  object-fit: cover;
}

.showcase-bottom img:last-child {
  width: 347px;
  flex: none;
  height: auto;
}

.partner-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 36px;
}

.partner-strip div {
  border: 1px solid #d6e1f0;
  border-radius: 18px;
  position: relative;
}

.partner-strip img {
  height: 50%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.editorial-section {
  padding: 78px 0 104px;
  background: #f8fbff;
}

.editorial-grid {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr) 360px;
  gap: 34px;
  align-items: center;
  margin-top: 72px;
}

.editorial-meta h3,
.editorial-release h3 {
  margin: 0 0 24px;
  color: #333;
  font-size: 32px;
  line-height: 1.3;
  font-weight: 700;
}

.editorial-meta p {
  margin: 0;
  color: #666;
  font-size: 18px;
  line-height: 1.8;
}

.editorial-books {
  display: flex;
  justify-content: center;
  gap: 18px;
}

.editorial-books img {
  width: min(31%, 220px);
  min-width: 180px;
  object-fit: cover;
  box-shadow: 0 20px 45px rgba(34, 56, 119, 0.18);
}

.editorial-release p {
  margin: 0;
  color: #555;
  font-size: 18px;
  line-height: 1.85;
}

.editorial-release span {
  color: #3267e7;
}

.editorial-note {
  margin: 56px 0 0;
  text-align: center;
  color: #444;
  font-size: 20px;
  line-height: 1.6;
}

.media-section {
  padding: 86px 0 108px;
  background: #050505 var(--thinktank-media-bg) center top / cover no-repeat;
}

.media-inner {
  position: relative;
}

.media-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 72px;
}

.media-logos img {
  height: 72px;
  object-fit: contain;
}

.media-stage {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr) 88px;
  gap: 24px;
  align-items: center;
  margin-top: 74px;
}

.media-cards {
  display: grid;
  grid-template-columns: minmax(280px, 371px) minmax(280px, 494px) minmax(360px, 660px) minmax(280px, 496px) minmax(280px, 371px);
  gap: 0;
  align-items: end;
  justify-content: center;
  width: min(100%, 1500px);
  margin: 0 auto;
}

.media-card {
  border-radius: 10px;
  width: 100%;
  filter: drop-shadow(0 36px 40px rgba(0, 0, 0, 0.42));
  z-index: 12;
}

.media-card.left {
  transform: translate(66px, -82px);
  z-index: 10;
}

.media-card.left2 {
  transform: translate(16px, -52px);
  z-index: 11;
}

.media-card.right {
  transform: translate(-16px, -52px);
  z-index: 11;
}

.media-card.right2 {
  transform: translate(-66px, -62px);
  z-index: 10;
}

.media-arrow {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.media-arrow img {
  width: 15px;
  height: 25px;
}

.scene-section {
  padding: 96px 0 90px;
}

.scene-block {
  display: grid;
  gap: 34px;
  align-items: start;
}

.scene-block-top {
  grid-template-columns: 697px minmax(0, 1fr);
  margin-top: 78px;
}

.scene-block-bottom {
  grid-template-columns: minmax(0, 1fr) 586px;
  margin-top: 62px;
}

.scene-cover img,
.scene-gallery img {
  width: 100%;
  display: block;
}

.scene-copy {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.scene-copy h3 {
  margin: 0 0 30px;
  color: #333;
  font-size: 24px;
  line-height: 1.55;
  font-weight: 500;
}

.scene-gallery {
  display: grid;
  gap: 30px;
}

.scene-gallery.two-up {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.guide-section {
  padding: 84px 0 98px;
  background: linear-gradient(-45deg, #052278, #04152D);
}

.guide-panel {
  margin-top: 74px;
}

.guide-pages {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 36px;
  align-items: start;
}

.guide-charts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.guide-pages img,
.guide-outline,
.guide-charts img {
  width: 100%;
  display: block;
}

.guide-panel p {
  margin: 34px 0 0;
  text-align: center;
  color: #fff;
  font-size: 22px;
  line-height: 1.6;
}

.guide-bottom-grid {
  display: grid;
  grid-template-columns: 1.02fr 1fr;
  gap: 36px;
  align-items: center;
}

.guide-charts {
  gap: 34px;
}

.cooperation-section {
  padding: 94px 0 88px;
}

.cooperation-table {
  margin-top: 76px;
  border-top: 1px solid #d9e4ef;
  border-left: 1px solid #d9e4ef;
}

.table-row {
  display: grid;
  grid-template-columns: 160px 260px 214px minmax(0, 1fr);
}

.table-cell {
  min-height: 86px;
  padding: 22px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #d9e4ef;
  border-bottom: 1px solid #d9e4ef;
  color: #555;
  font-size: 17px;
  line-height: 1.7;
  text-align: center;
}

.table-cell.heading,
.table-cell.emphasis {
  background: #f6f9fd;
  color: #333;
  font-weight: 600;
}

.cooperation-action {
  margin-top: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 58px;
}

.action-list {
  width: 204px;
  padding: 26px 26px 20px;
  border-radius: 12px;
  background: #f6f9fd;
  box-shadow: 0 12px 30px rgba(49, 84, 232, 0.06);
}

.action-item {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #333;
  font-size: 16px;
  line-height: 1.4;
}

.action-item + .action-item {
  margin-top: 20px;
}

.action-item img {
  width: 38px;
  height: 38px;
  flex: none;
}

.action-arrow {
  width: 177px;
  height: auto;
}

.action-qrcode {
  width: 206px;
  height: 206px;
  padding: 12px;
  border: 1px solid #d7e2ef;
  border-radius: 10px;
  background: #fff;
}

.action-qrcode img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.copyright-banner {
  padding: 70px 0 76px;
  background: linear-gradient(180deg, #3363ea 0%, #2f68f0 100%);
}

.copyright-banner h2 {
  margin: 0;
  text-align: center;
  color: #fff;
  font-size: clamp(32px, 2.9vw, 58px);
  line-height: 1.3;
  font-weight: 700;
}

.copyright-banner p {
  margin: 16px 0 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.92);
  font-size: 18px;
  line-height: 1.7;
}

@media (max-width: 1400px) {
  .editorial-grid,
  .scene-block-top,
  .scene-block-bottom,
  .media-stage {
    grid-template-columns: 1fr;
  }

  .media-card.left,
  .media-card.right {
    transform: none;
  }

  .media-arrow {
    display: none;
  }

  .research-grid {
    grid-template-columns: 1fr;
    gap: 52px;
  }

  .scene-block-bottom .scene-cover {
    order: -1;
  }
}

@media (max-width: 1200px) {
  .media-cards {
    grid-template-columns: minmax(220px, 1fr) minmax(320px, 1.15fr) minmax(220px, 1fr);
  }

  .guide-bottom-grid {
    grid-template-columns: minmax(0, 1fr) minmax(360px, 0.94fr);
    gap: 24px;
  }

  .guide-pages {
    gap: 24px;
  }
}

@media (max-width: 1024px) {
  .thinktank-hero {
    min-height: 620px;
    background-position: 62% center;
  }

  .hero-content {
    min-height: 620px;
    align-items: flex-start;
    padding-top: 112px;
  }

  .partner-strip,
  .scene-gallery.two-up {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .guide-pages {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .guide-bottom-grid {
    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.9fr);
    gap: 20px;
  }

  .guide-charts {
    gap: 20px;
  }

  .table-row {
    grid-template-columns: 1fr;
  }

  .cooperation-action {
    flex-direction: column;
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .research-section,
  .editorial-section,
  .scene-section,
  .cooperation-section {
    padding: 72px 0;
  }

  .guide-section,
  .media-section {
    padding: 72px 0;
  }

  .research-copy h2,
  .research-showcase h2 {
    margin-bottom: 28px;
  }

  .hero-copy h2 {
    margin: 20px 0 18px;
  }

  .hero-copy p {
    font-size: 16px;
    line-height: 1.85;
  }

  .partner-strip,
  .guide-pages,
  .scene-gallery.two-up {
    grid-template-columns: 1fr;
  }

  .showcase-top,
  .showcase-bottom,
  .editorial-books,
  .media-logos {
    justify-content: center;
  }

  .editorial-books img,
  .showcase-bottom img:nth-child(-n + 3) {
    min-width: 0;
    width: calc((100% - 24px - 220px) / 3);
  }

  .showcase-top img {
    width: calc(25% - 9px);
    min-width: 88px;
    height: auto;
  }

  .showcase-bottom img:last-child {
    width: 220px;
  }

  .media-cards {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 660px;
  }

  .partner-strip img {
    border-radius: 14px;
  }
}
</style>
