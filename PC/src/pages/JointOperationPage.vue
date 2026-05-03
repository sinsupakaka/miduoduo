<template>
  <div class="joint-page">
    <SiteHeader :active-path="activePath" />

    <main>
      <section class="joint-hero">
        <div class="joint-container hero-grid">
          <div class="hero-copy">
            <p class="hero-kicker">全新升级 · 品牌合伙人模式</p>
            <h1>米多多联合运营<br />「品牌合伙人」计划</h1>
            <p class="hero-lead">资金共担 + 整合营销 + 多渠道运营<br />深度绑定客户增长，共担风险，共享收益</p>
            <div class="hero-stats">
              <div v-for="item in heroStats" :key="item.label">
                <strong>{{ item.value }}</strong>
                <span>{{ item.label }}</span>
              </div>
            </div>
            <button class="primary-action">探索联合运营方案</button>
          </div>
          <img class="hero-art" :src="jointAsset('组 4@2x(31).png')" alt="" />
        </div>
      </section>

      <section class="joint-section model-section">
        <div class="section-heading">
          <h2>服务设计 · 双向赋能模型</h2>
          <p>清晰界定甲方(产品/供应链)与销售端(米多多)分工，共同构建全渠道增长飞轮。</p>
        </div>
        <div class="joint-container split-grid">
          <article
            v-for="panel in modelPanels"
            :key="panel.title"
            :class="['info-panel', panel.tone]"
          >
            <div class="panel-head">
              <div class="panel-title">
                <img :src="jointAsset(panel.icon)" alt="" />
                <h3>{{ panel.title }}</h3>
              </div>
              <span v-if="panel.badge" class="panel-badge">{{ panel.badge }}</span>
            </div>
            <div class="panel-list">
              <div v-for="item in panel.items" :key="item[0] + item[1]" class="panel-item">
                <span class="item-dot"></span>
                <p><strong v-if="item[0]">{{ item[0] }}：</strong>{{ item[1] }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="joint-section path-section">
        <div class="section-heading">
          <h2>联合运营成长路径</h2>
          <p>分阶段深度绑定，从冷启动到规模化盈利乃至资本化收购</p>
        </div>
        <div class="joint-container stage-list">
          <article v-for="stage in stages" :key="stage.title" class="stage-card">
            <div class="stage-head">
              <h3>{{ stage.title }}</h3>
              <span>{{ stage.period }}</span>
            </div>
            <div class="stage-lines">
              <div v-for="line in stage.lines" :key="line.label" class="stage-line">
                <img :src="jointAsset(line.icon)" alt="" />
                <p><strong>{{ line.label }}：</strong>{{ line.text }}</p>
              </div>
            </div>
            <div v-if="stage.milestone" class="milestone">
              <img :src="jointAsset('形状 1@2x.png')" alt="" />
              <p><strong>里程碑：</strong>{{ stage.milestone }}</p>
            </div>
            <div v-if="stage.plans" class="stage-plans">
              <div v-for="plan in stage.plans" :key="plan.title" class="plan-block">
                <div class="plan-title">
                  <img :src="jointAsset(plan.icon)" alt="" />
                  <h4>{{ plan.title }}</h4>
                </div>
                <p>{{ plan.text }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="joint-section strategy-section">
        <div class="section-heading">
          <h2>全渠道流量闭环 · 平台布局策略</h2>
        </div>
        <div class="joint-container split-grid">
          <article
            v-for="panel in strategyPanels"
            :key="panel.title"
            :class="['info-panel', panel.tone]"
          >
            <div class="panel-head">
              <div class="panel-title">
                <img :src="jointAsset(panel.icon)" alt="" />
                <h3>{{ panel.title }}</h3>
              </div>
              <span v-if="panel.badge" class="panel-badge">{{ panel.badge }}</span>
            </div>
            <div class="panel-list">
              <div v-for="item in panel.items" :key="item[0] + item[1]" class="panel-item">
                <span class="item-dot"></span>
                <p><strong v-if="item[0]">{{ item[0] }}：</strong>{{ item[1] }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="joint-section rules-section">
        <div class="section-heading">
          <h2>合作细则 · 透明共赢</h2>
          <p>品牌独家授权｜店铺资产｜结算体系｜库存算法</p>
        </div>
        <div class="joint-container rules-grid">
          <article
            v-for="rule in rules"
            :key="rule.title"
            :class="['rule-card', { wide: rule.wide }]"
          >
            <img :src="jointAsset(rule.icon)" alt="" />
            <div>
              <h3>{{ rule.title }}</h3>
              <p>{{ rule.text }}</p>
            </div>
          </article>
        </div>
        <div class="joint-container upgrade-note">
          <img :src="jointAsset('形状 1@2x.png')" alt="" />
          <div>
            <h3>联合运营本质升级：“资金共担+整合营销+多渠道运营”三位一体，从单一代理到品牌合伙人。</h3>
            <p>米多多提供全链路运营能力(TikTok/独立站/亚马逊)+内容工业化生产，品牌方聚焦产品与供应链，实现1+1&gt;2的长期增长。</p>
          </div>
        </div>
      </section>

      <section class="joint-cta">
        <div class="joint-container">
          <h2>成为品牌合伙人，共享全球增长红利</h2>
          <p>从0到1冷启动，从1到N规模化，米多多联合运营以合伙人姿态，共担风险、共享收益。</p>
          <a href="mailto:ilonazhou@fjmidodo.com">商务合作：ilonazhou@fjmidodo.com</a>
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
    default: '/business',
  },
})

const jointAsset = (name) => asset(name, '联合运营')

const heroStats = [
  { value: '0-6个月', label: '冷启动验证' },
  { value: '6-24个月', label: '规模化/资本化路径' },
  { value: '0-6个月', label: 'TikTok · 独立站 · 亚马逊' },
]

const modelPanels = [
  {
    icon: '组 4@2x.png',
    title: '甲方 · 产品与供应链方',
    badge: '硬资产承担方',
    tone: 'pink',
    items: [
      ['产品端', '研发迭代、质量控制、生产供应、头程物流'],
      ['资产投入', '货品成本、产品研发打样费、头程物流'],
      ['损耗风险', '承担产品质量导致的直接经济损失'],
      ['核心协同', '配合全渠道供货，保障供应链韧性'],
    ],
  },
  {
    icon: '组 4@2x(21).png',
    title: '销售端 · 米多多(联合运营方)',
    badge: '经营亏损风险承担方',
    tone: 'blue',
    items: [
      ['全渠道运营', 'TikTok/独立站/亚马逊店铺管理、整合营销、内容生产、客服维护、仓储/尾程物流'],
      ['资产投入', '团队人力(运营/设计/剪辑)、营销推广费(广告/达人坑位费及佣金)、内容制作、软件工具、仓储/尾程物流等'],
      ['经营亏损风险', '承担团队固定开支、广告投入产出失控导致的溢出成本'],
      ['核心能力', '多渠道流量闭环，降低单一平台依赖，提升品牌私域沉淀'],
    ],
  },
]

const stages = [
  {
    title: '第一阶段 · 冷启动期',
    period: '0-6个月',
    lines: [
      { icon: '组 4@2x(16).png', label: '核心目标', text: '验证产品在TikTok/独立站的转化率，完成目标GMV，跑通供应链与物流链路。' },
      { icon: '组 4@2x(17).png', label: '关键动作', text: 'TikTok短视频/达人矩阵+独立站品牌沉淀，视订单密度决策是否启动亚马逊；搭建数据监控体系，库存预测协同。' },
    ],
    milestone: '达成冷启动GMV指标，建立达人库与内容型，物流链路稳定',
  },
  {
    title: '第二阶段 · 规模化与资本化',
    period: '6-24个月',
    plans: [
      {
        icon: '组 4@2x(15).png',
        title: '方案一：规模化盈利',
        text: '结合实际品类增加亚马逊等平台布局，提升内容产出效率，实现月度持续盈利，积累品牌私域流量及粉丝。建立全渠道流量闭环，降低单一平台依赖，实现全域增长。',
      },
      {
        icon: '组 4@2x(18).png',
        title: '方案二：合资及资本化收购',
        text: '根据品牌盈利率及项目潜力，双方合资成立新公司(品牌/店铺/人员转移至新公司独立运营)，也可根据品牌实际情况收购/并购，实现资本增值与深度绑定。',
      },
    ],
  },
]

const strategyPanels = [
  {
    icon: '组 4@2x(26).png',
    title: '起步阶段矩阵',
    tone: 'green',
    items: [
      ['', 'TikTok(短视频/直播/达人联盟)优先启动'],
      ['', '独立站(品牌沉淀 · 高转化 DTC 模式)'],
      ['', '亚马逊根据订单量级及品类资金密度决定启动节点'],
      ['', '未来逐步拓展更多欧美/东南亚渠道'],
    ],
  },
  {
    icon: '组 4@2x(5).png',
    title: '核心目标',
    tone: 'orange',
    items: [
      ['', '建立全渠道流量闭环，降低单一平台依赖风险'],
      ['', '整合营销驱动，内容高效复用'],
      ['', '私域粉丝资产沉淀+品牌溢价提升'],
      ['', '利用库存预测算法(我方负责多渠道营销数据反哺，品牌方确保产品供应效率)'],
    ],
  },
]

const rules = [
  { icon: '组 4@2x(10).png', title: '品牌独家授权', text: '指定市场及平台授权，授权期为3年，合同约定授权解除机制，保障品牌方权益。' },
  { icon: '组 4@2x(11).png', title: '店铺资产管理', text: '优先使用米多多TikTok店铺/独立站整体运营；若品牌方具备海外主体，也可使用品牌方店铺，灵活选择。' },
  { icon: '组 4@2x(12).png', title: '库存预测协同', text: '米多多负责“多渠道营销”端数据及需求预测，品牌方主导“质量把控”，共同降低滞销风险。' },
  { icon: '组 4@2x(13).png', title: '风险兜底边界', text: '甲方承担货品硬资产投入；米多多承担库存损耗、人力溢出成本，权责分明，合作安心。' },
  { icon: '组 4@2x(14).png', title: '资本化路径', text: '高潜力品牌可进入第二阶段合资/并购方案，实现品牌价值跃升与资本回报。', wide: true },
]
</script>

<style scoped>
.joint-page {
  min-width: 320px;
  color: #f8fbff;
  background: #12162d;
}

.joint-container {
  width: min(1540px, calc(100% - 48px));
  margin: 0 auto;
}

.joint-hero,
.joint-section {
  background:
    radial-gradient(circle at 72% 18%, rgba(54, 121, 247, .22), transparent 24%),
    linear-gradient(180deg, #11152c 0%, #17143b 100%);
}

.joint-hero {
  min-height: 980px;
  padding: 148px 0 96px;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(480px, 680px) minmax(520px, 1fr);
  align-items: center;
  gap: 70px;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.hero-kicker {
  margin: 0 0 34px;
  color: rgba(255, 255, 255, .94);
  font-size: clamp(28px, 2.4vw, 42px);
  line-height: 1.2;
  font-weight: 500;
}

.hero-copy h1 {
  margin: 0 0 38px;
  font-size: clamp(48px, 5vw, 78px);
  line-height: 1.18;
  letter-spacing: 0;
  font-weight: 800;
}

.hero-lead {
  margin: 0 0 43px;
  color: rgba(255, 255, 255, .9);
  font-size: clamp(22px, 1.7vw, 30px);
  line-height: 1.7;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px 46px;
  margin-bottom: 65px;
}

.hero-stats strong {
  display: block;
  color: #4387ff;
  font-size: clamp(28px, 2.1vw, 40px);
  line-height: 1.1;
  font-weight: 800;
}

.hero-stats span {
  display: block;
  margin-top: 15px;
  color: rgba(230, 237, 255, .72);
  font-size: clamp(17px, 1.1vw, 22px);
  line-height: 1.2;
}

.primary-action {
  min-width: 270px;
  height: 60px;
  padding: 0 36px;
  border-radius: 30px;
  color: #fff;
  background: linear-gradient(90deg, #2457db 0%, #6b8bff 100%);
  font-size: 22px;
  font-weight: 800;
}

.hero-art {
  width: min(100%, 826px);
  justify-self: end;
  filter: drop-shadow(0 28px 60px rgba(35, 93, 255, .18));
}

.joint-section {
  padding: 58px 0 92px;
}

.section-heading {
  width: min(1100px, calc(100% - 48px));
  margin: 0 auto 86px;
  text-align: center;
}

.section-heading h2 {
  margin: 0;
  color: #fff;
  font-size: clamp(42px, 4vw, 64px);
  line-height: 1.18;
  font-weight: 800;
  letter-spacing: 0;
}

.section-heading p {
  margin: 23px 0 0;
  color: rgba(206, 213, 235, .58);
  font-size: clamp(20px, 1.6vw, 28px);
  line-height: 1.45;
}

.split-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
}

.info-panel,
.stage-card,
.rule-card {
  border: 2px solid rgba(94, 127, 160, .42);
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(31, 47, 68, .96) 0%, rgba(17, 31, 52, .96) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .04);
}

.info-panel {
  min-height: 512px;
  padding: 30px 40px 44px;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 52px;
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 22px;
  min-width: 0;
}

.panel-title img,
.rule-card > img {
  width: 54px;
  height: 54px;
  flex: 0 0 54px;
}

.panel-title h3,
.rule-card h3 {
  margin: 0;
  color: #fff;
  font-size: clamp(24px, 1.8vw, 30px);
  line-height: 1.2;
  font-weight: 800;
}

.panel-badge {
  flex: 0 0 auto;
  padding: 11px 27px;
  border-radius: 999px;
  color: #f9b233;
  background: rgba(145, 96, 18, .72);
  font-size: 20px;
  line-height: 1;
  font-weight: 800;
}

.panel-list {
  display: grid;
  gap: 31px;
}

.panel-item {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
}

.item-dot {
  width: 27px;
  height: 27px;
  margin-top: 2px;
  border-radius: 50%;
  background: rgba(42, 113, 218, .42);
  position: relative;
}

.item-dot::after {
  content: "";
  position: absolute;
  left: 9px;
  top: 7px;
  width: 7px;
  height: 7px;
  border-top: 4px solid #4d96ff;
  border-right: 4px solid #4d96ff;
  transform: rotate(45deg);
}

.info-panel.pink .item-dot {
  background: rgba(198, 67, 153, .42);
}

.info-panel.pink .item-dot::after {
  border-color: #ef4eb4;
}

.info-panel.green .item-dot {
  background: rgba(37, 154, 102, .36);
}

.info-panel.green .item-dot::after {
  border-color: #2bd06f;
}

.info-panel.orange .item-dot {
  background: rgba(208, 98, 29, .34);
}

.info-panel.orange .item-dot::after {
  border-color: #ff8135;
}

.panel-item p,
.stage-line p,
.milestone p,
.plan-block p,
.rule-card p,
.upgrade-note p {
  margin: 0;
  color: rgba(225, 233, 247, .78);
  font-size: clamp(19px, 1.35vw, 25px);
  line-height: 1.62;
}

.panel-item strong,
.stage-line strong,
.milestone strong {
  color: #f7fbff;
  font-weight: 800;
}

.path-section {
  padding-top: 82px;
}

.stage-list {
  display: grid;
  gap: 34px;
}

.stage-card {
  padding: 38px 40px 32px;
}

.stage-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 48px;
}

.stage-head h3 {
  margin: 0;
  color: #fff;
  font-size: clamp(28px, 2.1vw, 38px);
  line-height: 1.2;
  font-weight: 800;
}

.stage-head span {
  flex: 0 0 auto;
  min-width: 132px;
  padding: 10px 24px;
  border-radius: 999px;
  color: #4c8dff;
  background: rgba(47, 112, 212, .34);
  text-align: center;
  font-size: 25px;
  line-height: 1.1;
  font-weight: 700;
}

.stage-lines {
  display: grid;
  gap: 22px;
}

.stage-line {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  align-items: start;
  gap: 26px;
}

.stage-line img {
  width: 42px;
  height: 42px;
}

.milestone {
  margin-top: 41px;
  padding: 26px 30px;
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 20px;
  align-items: center;
  border-radius: 14px;
  background: rgba(47, 62, 84, .72);
}

.milestone img,
.upgrade-note img {
  width: 25px;
  height: 22px;
}

.stage-plans {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 58px;
}

.plan-title {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;
}

.plan-title img {
  width: 42px;
  height: 42px;
}

.plan-title h4 {
  margin: 0;
  color: #fff;
  font-size: clamp(24px, 1.9vw, 32px);
  line-height: 1.2;
  font-weight: 800;
}

.strategy-section {
  padding-top: 132px;
}

.strategy-section .info-panel {
  min-height: 446px;
}

.rules-section {
  padding-top: 74px;
  padding-bottom: 110px;
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 30px;
}

.rule-card {
  min-height: 174px;
  padding: 38px 30px 32px;
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  align-items: start;
  gap: 22px;
}

.rule-card.wide {
  grid-column: 1 / -1;
}

.rule-card h3 {
  margin-bottom: 21px;
}

.upgrade-note {
  margin-top: 35px;
  padding: 31px 32px 30px;
  display: grid;
  grid-template-columns: 25px minmax(0, 1fr);
  gap: 23px;
  align-items: start;
  border-radius: 18px;
  background: rgba(41, 42, 72, .9);
}

.upgrade-note h3 {
  margin: 0 0 20px;
  color: #fff;
  font-size: clamp(24px, 1.9vw, 32px);
  line-height: 1.35;
  font-weight: 800;
}

.joint-cta {
  padding: 139px 0 150px;
  text-align: center;
  background: linear-gradient(135deg, #5d24a7 0%, #4e1888 100%);
}

.joint-cta h2 {
  margin: 0 0 28px;
  color: #fff;
  font-size: clamp(42px, 4vw, 62px);
  line-height: 1.2;
  font-weight: 800;
}

.joint-cta p {
  margin: 0 0 70px;
  color: rgba(255, 255, 255, .92);
  font-size: clamp(20px, 1.6vw, 28px);
  line-height: 1.5;
}

.joint-cta a {
  color: rgba(255, 255, 255, .64);
  font-size: clamp(20px, 1.5vw, 26px);
  line-height: 1.2;
  text-decoration: none;
}

@media (max-width: 1200px) {
  .joint-hero {
    min-height: auto;
    padding: 90px 0 80px;
  }

  .hero-grid,
  .split-grid,
  .stage-plans,
  .rules-grid {
    grid-template-columns: 1fr;
  }

  .hero-art {
    justify-self: center;
    width: min(100%, 720px);
  }

  .info-panel,
  .stage-card {
    min-height: auto;
  }

  .rule-card.wide {
    grid-column: auto;
  }
}

@media (max-width: 760px) {
  .joint-container,
  .section-heading {
    width: min(100% - 32px, 1540px);
  }

  .joint-hero {
    padding: 58px 0 64px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 22px;
    margin-bottom: 42px;
  }

  .primary-action {
    width: 100%;
    min-width: 0;
    font-size: 19px;
  }

  .joint-section {
    padding: 58px 0 66px;
  }

  .section-heading {
    margin-bottom: 42px;
  }

  .info-panel,
  .stage-card,
  .rule-card,
  .upgrade-note {
    border-radius: 14px;
    padding: 26px 22px;
  }

  .panel-head,
  .stage-head {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 32px;
  }

  .panel-badge,
  .stage-head span {
    font-size: 18px;
  }

  .panel-item,
  .stage-line,
  .milestone,
  .rule-card,
  .upgrade-note {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .stage-plans {
    gap: 34px;
  }

  .joint-cta {
    padding: 82px 0 90px;
  }
}
</style>
