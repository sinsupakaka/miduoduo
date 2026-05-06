<template>
  <view class="page">
    <MobileTopNav
      title="联合运营"
      active-route-key="unionOperation"
      theme="dark"
    />

    <view class="hero">
      <view class="hero-copy">
        <text class="hero-title">米多多联合运营{{ '\n' }}「品牌合伙人」计划</text>
        <text class="hero-desc">资金共担 + 整合营销 + 多渠道运营{{ '\n' }}深度绑定客户增长，共担风险，共享收益</text>
      </view>
      <view class="hero-stats">
        <view v-for="item in heroStats" :key="item.label" class="hero-stat">
          <text class="hero-stat-value">{{ item.value }}</text>
          <text class="hero-stat-label">{{ item.label }}</text>
        </view>
      </view>
      <image class="hero-art" :src="asset('img1@2x.png')" mode="widthFix" />
    </view>

    <view class="section model-section">
      <SectionTitle title="服务设计 · 双向赋能模型" desc="清晰界定产品供应链与联合运营方分工，共同构建全渠道增长飞轮" />
      <view class="panel-list">
        <view v-for="panel in modelPanels" :key="panel.title" :class="['info-panel', panel.tone]">
          <view class="panel-head">
            <image class="panel-icon" :src="asset(panel.icon)" mode="aspectFit" />
            <view class="panel-title-wrap">
              <text class="panel-title">{{ panel.title }}</text>
              <text class="panel-badge">{{ panel.badge }}</text>
            </view>
          </view>
          <view class="point-list">
            <view v-for="item in panel.items" :key="item.label" class="point-item">
              <image class="point-icon" :src="asset(panel.pointIcon)" mode="aspectFit" />
              <text class="point-text"><text class="point-label">{{ item.label }}：</text>{{ item.text }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="section path-section">
      <SectionTitle title="联合运营成长路径" desc="分阶段深度绑定，从冷启动到规模化盈利乃至资本化收购" />
      <view class="stage-list">
        <view v-for="stage in stages" :key="stage.title" class="stage-card">
          <view class="stage-head">
            <text class="stage-title">{{ stage.title }}</text>
            <text class="stage-period">{{ stage.period }}</text>
          </view>
          <view v-if="stage.lines" class="stage-lines">
            <view v-for="line in stage.lines" :key="line.label" class="stage-line">
              <image :src="asset(line.icon)" mode="aspectFit" />
              <text><text class="stage-line-label">{{ line.label }}：</text>{{ line.text }}</text>
            </view>
          </view>
          <view v-if="stage.milestone" class="milestone">
            <image :src="asset('icon-确认@2x.png')" mode="aspectFit" />
            <text><text class="stage-line-label">里程碑：</text>{{ stage.milestone }}</text>
          </view>
          <view v-if="stage.plans" class="plan-list">
            <view v-for="plan in stage.plans" :key="plan.title" class="plan-card">
              <view class="plan-title">
                <image :src="asset(plan.icon)" mode="aspectFit" />
                <text>{{ plan.title }}</text>
              </view>
              <text class="plan-desc">{{ plan.text }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="section strategy-section">
      <SectionTitle title="全渠道流量 · 闭环平台布局策略" desc="" />
      <view class="panel-list">
        <view v-for="panel in strategyPanels" :key="panel.title" :class="['info-panel', panel.tone]">
          <view class="panel-head">
            <image class="panel-icon" :src="asset(panel.icon)" mode="aspectFit" />
            <view class="panel-title-wrap">
              <text class="panel-title">{{ panel.title }}</text>
              <text class="panel-badge">{{ panel.badge }}</text>
            </view>
          </view>
          <view class="point-list">
            <view v-for="item in panel.items" :key="item" class="point-item">
              <image class="point-icon" :src="asset(panel.pointIcon)" mode="aspectFit" />
              <text class="point-text">{{ item }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="section rules-section">
      <SectionTitle title="合作细则 · 透明共赢" desc="品牌独家授权｜店铺资产｜结算体系｜库存算法" />
      <view class="rules-grid">
        <view v-for="rule in rules" :key="rule.title" class="rule-card">
          <div class="rule-title-area">
            <image :src="asset(rule.icon)" mode="aspectFit" />
            <text class="rule-title">{{ rule.title }}</text>
          </div>
        
          <text class="rule-desc">{{ rule.text }}</text>
        </view>
      </view>
      <view class="upgrade-note">
        <div class="rule-title-area">
          <image :src="asset('icon-合作@2x.png')" mode="aspectFit" />
          <text class="upgrade-title">联合运营本质升级：从单一代理到品牌合伙人</text>
        </div>
        <text class="upgrade-desc">米多多提供全链路运营能力和内容工业化生产，品牌方聚焦产品与供应链，实现长期增长。</text>
      </view>
    </view>

    <view class="cta">
      <view class="cta-copy">
        <text class="cta-title">成为品牌合伙人，共享全球{{ '\n' }}增长红利</text>
        <text class="cta-desc">从0到1冷启动，从1到N规模化，米多多联合运营以合伙人姿态，共担风险、共享收益。</text>
        <text class="cta-mail">商务合作：ilonazhou@fjmidodo.com</text>
      </view>
      <image class="cta-bg" :src="asset('底部@2x.png')" mode="aspectFill" />
    </view>
  </view>
</template>

<script setup>
import MobileTopNav from '../components/MobileTopNav.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { asset as resolveAsset } from '../utils/assets'

const asset = (name) => resolveAsset(name, '联合运营')

const heroStats = [
  { value: '0-6个月', label: '冷启动验证' },
  { value: '6-24个月', label: '规模化路径' },
  { value: '0-6个月', label: 'TikTok·独立站·亚马逊' },
]

const modelPanels = [
  {
    icon: 'icon-甲方·产品与供应链方@2x.png',
    pointIcon: 'icon-point@2x.png',
    title: '甲方 · 产品与供应链方',
    badge: '硬资产承担方',
    tone: 'pink',
    items: [
      { label: '产品端', text: '研发迭代、质量控制、生产供应、头程物流' },
      { label: '资产投入', text: '货品成本、产品研发打样费、头程物流' },
      { label: '损耗风险', text: '承担产品质量导致的直接经济损失' },
      { label: '核心协同', text: '配合全渠道供货，保障供应链韧性' },
    ],
  },
  {
    icon: 'icon-销售端·米多多@2x.png',
    pointIcon: 'icon-point2@2x.png',
    title: '销售端 · 米多多（联合运营方）',
    badge: '经营亏损风险承担方',
    tone: 'blue',
    items: [
      { label: '全渠道运营', text: 'TikTok/独立站/亚马逊店铺管理、整合营销、内容生产、客服维护、仓储/尾程物流' },
      { label: '资产投入', text: '团队人力（运营/设计/剪辑）、营销推广费（广告/达人坑位费及佣金）、内容制作、软件工具、仓储/尾程物流' },
      { label: '经营亏损风险', text: '承担团队固定开支、广告投入产出失控导致的溢出成本' },
      { label: '核心能力', text: '多渠道流量闭环，降低单一平台依赖，提升品牌私域沉淀' },
    ],
  },
]

const stages = [
  {
    title: '第一阶段 · 冷启动期',
    period: '0-6个月',
    lines: [
      { icon: 'icon-核心目标@2x.png', label: '核心目标', text: '验证产品在TikTok/独立站的转化率，完成目标GMV，跑通供应链与物流链路。' },
      { icon: 'icon-关键动作@2x.png', label: '关键动作', text: 'TikTok短视频/达人矩阵+独立站品牌沉淀，视订单密度决策是否启动亚马逊。' },
    ],
    milestone: '达成冷启动GMV指标，建立达人库与内容模型，物流链路稳定',
  },
  {
    title: '第二阶段 · 规模化与资本化',
    period: '6-24个月',
    plans: [
      {
        icon: 'icon-方案@2x.png',
        title: '方案一：规模化盈利',
        text: '结合实际品类增加亚马逊等平台布局，提升内容产出效率，实现月度持续盈利，积累品牌私域流量及粉丝。建立全渠道流量闭环，降低单一平台依赖，实现全域增长',
      },
      {
        icon: 'icon-方案@2x(1).png',
        title: '方案二：合资及资本化收购',
        text: '根据品牌盈利率及项目潜力，双方可合资成立新公司（品牌/店铺/人员转移至新公司独立运营），也可根据实际情况收购/并购，实现资本增值与深度绑定。',
      },
    ],
  },
]

const strategyPanels = [
  {
    icon: 'icon-起步阶段矩阵@2x.png',
    pointIcon: 'icon-point3@2x.png',
    title: '起步阶段矩阵',
    badge: '多平台组合',
    tone: 'green',
    items: [
      'TikTok短视频、直播、达人联盟优先启动',
      '独立站承接品牌沉淀与高转化DTC模式',
      '亚马逊根据订单量级及品类资金密度决定启动节点',
      '未来逐步拓展更多欧美及东南亚渠道',
    ],
  },
  {
    icon: 'icon-核心目标@2x.png',
    pointIcon: 'icon-point4@2x.png',
    title: '核心目标',
    badge: '全域增长',
    tone: 'orange',
    items: [
      '建立全渠道流量闭环，降低单一平台依赖风险',
      '整合营销驱动，内容高效复用',
      '私域粉丝资产沉淀，提升品牌溢价',
      '以多渠道营销数据反哺库存预测，提升供货效率',
    ],
  },
]

const rules = [
  { icon: 'icon-品牌独家授权@2x.png', title: '品牌独家授权', text: '指定市场及平台授权，授权期为3年，合同约定授权解除机制，保障品牌方权益。' },
  { icon: 'icon-店铺资产管理@2x.png', title: '店铺资产管理', text: '优先使用米多多TikTok店铺/独立站整体运营；若品牌方具备海外主体，也可灵活选择品牌方店铺。' },
  { icon: 'icon-库存预测协同@2x.png', title: '库存预测协同', text: '米多多负责多渠道营销端数据及需求预测，品牌方主导质量把控，共同降低滞销风险。' },
  { icon: 'icon-风险兜底边界@2x.png', title: '风险兜底边界', text: '甲方承担货品硬资产投入；米多多承担库存损耗、人力溢出成本，权责分明。' },
  { icon: 'icon-资本化路径@2x.png', title: '资本化路径', text: '高潜力品牌可进入第二阶段合资/并购方案，实现品牌价值跃升与资本回报。' },
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  color: #f8fbff;
  background: #0F172A;
}

.hero,
.section {
  
}

.hero {
  overflow: hidden;
  padding: 48rpx 24rpx 0;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.hero-kicker {
  display: block;
  color: rgba(255, 255, 255, 0.88);
  font-size: 28rpx;
  line-height: 1.35;
  font-weight: 500;
}

.hero-title {
  display: block;
  margin-top: 22rpx;
  color: #ffffff;
  font-size: 58rpx;
  line-height: 1.26;
  font-weight: 800;
  white-space: pre-line;
}

.hero-desc {
  display: block;
  margin-top: 28rpx;
  color: rgba(226, 234, 255, 0.84);
  font-size: 28rpx;
  line-height: 1.72;
  white-space: pre-line;
}

.hero-stats {
  position: relative;
  z-index: 2;
  margin-top: 42rpx;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10rpx;
}

.hero-stat {
  min-height: 132rpx;
  padding: 22rpx 12rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-stat-value,
.hero-stat-label {
  display: block;
  text-align: center;
}

.hero-stat-value {
  color: #6da0ff;
  font-size: 30rpx;
  line-height: 1.15;
  font-weight: 800;
}

.hero-stat-label {
  margin-top: 14rpx;
  color: rgba(220, 228, 246, 0.7);
  font-size: 20rpx;
  line-height: 1.25;
}

.hero-art {
  width: 100%;
  display: block;
  margin-top: 8rpx;
  filter: drop-shadow(0 24rpx 42rpx rgba(36, 87, 219, 0.18));
}

.section {
  padding: 86rpx 24rpx 0;
}

.panel-list,
.stage-list {
  margin-top: 48rpx;
  display: grid;
  gap: 24rpx;
}


.upgrade-note {
  border-radius: 22rpx;
  background: linear-gradient( 180deg, #2F2554 0%, #3E2652 100%);
  box-shadow: inset 0 1rpx 0 rgba(255, 255, 255, 0.06);
}

.rule-card {
  border-radius: 22rpx;
  background: linear-gradient( 90deg, #291C41 0%, #25183A 51.74%, #3F2753 100%);
  box-shadow: inset 0 1rpx 0 rgba(255, 255, 255, 0.06);
}

.info-panel {
  border-radius: 22rpx;
  background: linear-gradient( 180deg, #1E293B 0%, #10182B 100%);
  box-shadow: inset 0 1rpx 0 rgba(255, 255, 255, 0.06);
}

.stage-card {
  border-radius: 22rpx;
  background: linear-gradient( 180deg, #10182B 0%, #1E293B 100%);
  box-shadow: inset 0 1rpx 0 rgba(255, 255, 255, 0.06);
}

.info-panel {
  padding: 30rpx 28rpx 34rpx;
}

.info-panel.pink {
  border-color: rgba(250, 113, 169, 0.38);
}

.info-panel.blue {
  border-color: rgba(95, 151, 255, 0.4);
}

.info-panel.green {
  border-color: rgba(78, 196, 154, 0.36);
}

.info-panel.orange {
  border-color: rgba(250, 178, 78, 0.38);
}

.panel-head {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.panel-icon {
  width: 70rpx;
  height: 70rpx;
  flex: none;
}

.panel-title-wrap {
  min-width: 0;
  flex: 1;
}

.panel-title {
  display: block;
  color: #ffffff;
  font-size: 32rpx;
  line-height: 1.28;
  font-weight: 800;
}

.panel-badge {
  display: inline-flex;
  margin-top: 14rpx;
  padding: 8rpx 18rpx;
  border-radius: 999rpx;
  color: #ffc75f;
  background: rgba(145, 96, 18, 0.5);
  font-size: 22rpx;
  line-height: 1;
  font-weight: 700;
}

.point-list {
  margin-top: 34rpx;
  display: grid;
  gap: 24rpx;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 18rpx;
}

.point-icon {
  width: 32rpx;
  height: 32rpx;
  margin-top: 6rpx;
  flex: none;
}

.point-text,
.stage-line text,
.milestone text,
.plan-desc,
.rule-desc,
.upgrade-desc {
  color: rgba(225, 233, 247, 0.78);
  font-size: 27rpx;
  line-height: 1.68;
}

.point-label,
.stage-line-label {
  color: #f7fbff;
  font-weight: 800;
}

.path-section {
  margin-top: 96rpx;
  background: linear-gradient( 180deg, #1E293B 0%, #1E293B 100%);
}

.stage-card {
  padding: 32rpx 28rpx;
}

.stage-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18rpx;
}

.stage-title {
  flex: 1;
  color: #ffffff;
  font-size: 34rpx;
  line-height: 1.25;
  font-weight: 800;
}

.stage-period {
  min-width: 128rpx;
  padding: 9rpx 18rpx;
  border-radius: 999rpx;
  color: #75a7ff;
  background: rgba(47, 112, 212, 0.3);
  text-align: center;
  font-size: 23rpx;
  line-height: 1.15;
  font-weight: 700;
}

.stage-lines,
.plan-list {
  margin-top: 34rpx;
  display: grid;
  gap: 24rpx;
}

.stage-line {
  display: flex;
  align-items: flex-start;
  gap: 18rpx;
}

.stage-line image,
.plan-title image {
  width: 48rpx;
  height: 48rpx;
  flex: none;
}

.milestone {
  margin-top: 32rpx;
  padding: 22rpx;
  display: flex;
  align-items: flex-start;
  gap: 16rpx;
  border-radius: 18rpx;
  background: rgba(44, 59, 83, 0.74);
}

.milestone image {
  width: 42rpx;
  height: 42rpx;
  flex: none;
}

.plan-card {
  padding: 24rpx 22rpx 26rpx;
  border-radius: 18rpx;
  background: rgba(42, 57, 84, 0.58);
}

.plan-title {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.plan-title text {
  color: #ffffff;
  font-size: 30rpx;
  line-height: 1.25;
  font-weight: 800;
}

.plan-desc {
  display: block;
  margin-top: 18rpx;
}

.strategy-section,
.rules-section {
  padding-top: 96rpx;
}

.rules-grid {
  margin-top: 48rpx;
  display: grid;
  gap: 18rpx;
}

.rule-card {
  min-height: 300rpx;
  padding: 26rpx 22rpx 24rpx;
}

.rule-card image {
  width: 64rpx;
  height: 64rpx;
  display: block;
}

.rule-title-area {
  display: flex;
  align-items: center;
  gap: 16px;
}

.rule-title {
  display: block;
  color: #ffffff;
  font-size: 29rpx;
  line-height: 1.28;
  font-weight: 800;
}

.rule-desc {
  display: block;
  margin-top: 14rpx;
  font-size: 25rpx;
  line-height: 1.62;
}

.upgrade-note {
  margin-top: 24rpx;
  padding: 28rpx;
}

.upgrade-note image {
  width: 56rpx;
  height: 56rpx;
}

.upgrade-title {
  display: block;
  margin-top: 18rpx;
  color: #ffffff;
  font-size: 32rpx;
  line-height: 1.35;
  font-weight: 800;
}

.upgrade-desc {
  display: block;
  margin-top: 16rpx;
}

.cta {
  position: relative;
  min-height: 430rpx;
  overflow: hidden;
  background: #0f1530;
}

.cta-bg {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 160rpx;
}

.cta-copy {
  position: relative;
  z-index: 2;
  padding: 74rpx 36rpx 80rpx;
  text-align: center;
}

.cta-title {
  display: block;
  color: #ffffff;
  font-size: 46rpx;
  line-height: 1.35;
  font-weight: 800;
  white-space: pre-line;
}

.cta-desc {
  display: block;
  margin-top: 26rpx;
  color: rgba(226, 234, 255, 0.78);
  font-size: 27rpx;
  line-height: 1.72;
}

.cta-mail {
  display: inline-flex;
  max-width: 100%;
  margin-top: 14rpx;
  padding: 18rpx 24rpx;
  color: gray;
  font-size: 25rpx;
  line-height: 1.2;
  font-weight: 700;
}
</style>
