<template>
  <div class="page">
    <SiteHeader />

    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <h1>Coupang韩国市场<br />低成本创业孵化营</h1>
          <ul>
            <li v-for="text in heroPoints" :key="text">
              <img :src="asset('组 11002@2x.png')" alt="" />{{ text }}
            </li>
          </ul>
          <button>立即咨询</button>
        </div>
        <img class="hero-art" :src="asset('蒙版组 276@2x.png')" alt="" />
      </div>
      <DotsIndicator />
    </section>

    <section class="why section white">
      <SectionTitle
        title="为什么选择Coupang蓝海市场"
        desc="用户基数多，客户质量高，低门槛入局，高利润回报"
      />
      <div class="why-grid">
        <article
          v-for="card in whyCards"
          :key="card.title"
          :class="['feature-card', card.tint]"
        >
          <img :src="asset(card.icon)" alt="" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </article>
      </div>
      <DotsIndicator />
    </section>

    <section class="services section gray">
      <SectionTitle
        title="一站式孵化服务内容"
        desc="课程+货盘+指导，全方位助力创业成功"
      />
      <div class="service-list">
        <article
          v-for="(panel, index) in servicePanels"
          :key="`${panel.title}-${index}`"
          :class="['service-panel', panel.color, { detailed: !panel.simple }]"
        >
          <div class="service-head">
            <img :src="asset(panel.icon)" alt="" />
            <h3>{{ panel.title }}</h3>
          </div>
          <div v-if="panel.simple" class="service-tags">
            <span v-for="item in panel.items" :key="item"><i></i>{{ item }}</span>
          </div>
          <div v-else class="detail-grid">
            <div v-for="item in panel.items" :key="item[0]" class="detail-item">
              <span><i></i>{{ item[0] }}</span>
              <p>{{ item[1] }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="audience section cream">
      <SectionTitle
        title="适合人群"
        desc="无论你是新手还是有经验卖家，都能轻松上手"
      />
      <div class="audience-grid">
        <article
          v-for="card in audienceCards"
          :key="card.title"
          class="audience-card"
        >
          <img :src="asset(card.icon)" alt="" />
          <div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="cta">
      <div class="cta-inner">
        <div>
          <h2>抓住流量红利期，开启跨境创业之旅</h2>
          <p>现在报名即可享受早鸟优惠，赠送精品货盘大礼包和运营工具包，前20名报名更可获得导师1对1诊断服务</p>
          <div class="contact-line">
            <span class="contact-icon">☎</span>
            <strong>咨询热线：艾老师 18250556206</strong>
          </div>
          <div class="contact-line">
            <span class="contact-icon">⌖</span>
            <strong>上课地址： 福建省福州市鼓楼区福州软件园A区23号</strong>
          </div>
          <button>立即咨询</button>
        </div>
        <div class="qr">
          <img :src="asset('蒙版组 275@2x.png')" alt="" />
          <h3>扫码咨询</h3>
          <p>领取免费入驻资料</p>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<script setup>
import DotsIndicator from '../components/DotsIndicator.vue'
import SectionTitle from '../components/SectionTitle.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'
import { asset } from '../utils/assets'

const heroPoints = [
  '官方绿色通道入驻，专享“无忧启航”权益',
  '90天内享受酷澎火箭仓仓储物流费用全免',
  '精品货盘直供，上架即卖',
  '导师全程陪跑，轻松盈利',
]

const whyCards = [
  { icon: '组 12125@2x.png', tint: 'blue', title: '市场增量大', text: '韩国第二大电商平台，年增速超30%，蓝海产品多，竞争小，新手入场机会大' },
  { icon: '组 12125@2x(2).png', tint: 'green', title: '利润空间高', text: '韩国消费力强，客单价高，平均利润率可达30%-50%，远高于国内电商平台' },
  { icon: '组 12125@2x(1).png', tint: 'purple', title: '入驻门槛低', text: '无平台押金，前3个月免佣金，开店成本极低' },
  { icon: '组 12125@2x(3).png', tint: 'orange', title: '运营难度低', text: '平台规则简单，官方扶持力度大，无需复杂运营技巧，新手容易快速出单' },
]

const servicePanels = [
  {
    icon: '组 12125@2x(10).png',
    color: 'blue',
    title: '系统化课程培训',
    simple: true,
    items: ['平台基础运营', '精品选品策略', 'Listing优化', '广告投放技巧', '物流发货流程', '客服与售后'],
  },
  {
    icon: '组 12125@2x(12).png',
    color: 'green',
    title: '精品货盘支持',
    simple: true,
    items: ['爆款选品库', '产品资料包', '供应链优势', '仓储配送服务', '新品更新'],
  },
  {
    icon: '组 12125@2x(11).png',
    color: 'purple',
    title: '系统化课程培训',
    items: [
      ['入驻绿色通道', '官方招商经理对接，快速下店，享受平台新卖家扶持政策'],
      ['1对1导师带教', '专属运营导师全程指导，实时解答问题，针对性给出运营方案'],
      ['店铺诊断服务', '定期店铺诊断，分析运营数据，找出问题点，提供优化建议'],
      ['陪跑孵化服务', '3个月陪跑期，从0到1全程跟进，直到店铺稳定出单盈利'],
      ['社群资源对接', '学员社群交流，对接优质资源，分享运营经验，共同成长'],
      ['合规指导服务', '提供税务、合规、知识产权等方面的专业咨询指导'],
    ],
  },
]

const audienceCards = [
  { icon: '组 12125@2x(8).png', title: '创业新手', text: '没有电商经验，想要小成本创业的人群。模式简单，容易上手，投入少风险低，非常适合新手操作' },
  { icon: '组 12125@2x(4).png', title: '上班族', text: '利用业余时间做副业，增加额外收入。每天只需1-2小时，不需要囤货发货，轻松增加月收入' },
  { icon: '组 12125@2x(6).png', title: '大学生', text: '想在课余时间赚钱，实现经济独立的学生群体。时间灵活，可在校操作，积累创业经验的同时获得收入' },
  { icon: '组 12125@2x(9).png', title: '宝爸妈', text: '需要照顾家庭，无法外出工作的人群。在家即可操作，时间自由，既能照顾家庭又能有稳定收入' },
  { icon: '组 12125@2x(5).png', title: '国内电商卖家', text: '国内电商内卷严重，想要拓展新渠道的卖家。利用现有货源优势，快速布局，增加新的利润增长点' },
  { icon: '组 12125@2x(7).png', title: '工厂/供应商', text: '有产品供应链优势，想要拓展销售渠道的工厂和供应商。直接对接平台，薄利多销，快速走量' },
]
</script>
