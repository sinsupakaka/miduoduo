<template>
  <div class="bootcamp-page">
    <SiteHeader :active-path="activePath" />

    <main>
      <section class="bootcamp-hero">
        <div class="bootcamp-container hero-inner">
          <h1>小白变高手 | TikTok+AI跨境实战营<br />新手扶持计划</h1>
          <div class="hero-points">
            <span v-for="point in heroPoints" :key="point">
              <img :src="bootcampAsset('组 11002@2x.png')" alt="" />
              {{ point }}
            </span>
          </div>
          <img class="hero-visual" :src="bootcampAsset('蒙版组 266@2x.png')" alt="" />
          <button class="gradient-button" @click="jumpToKf()">立即锁定名额</button>
        </div>
      </section>

      <section class="dark-section closing-loop">
        <div class="bootcamp-container">
          <SectionTitle
            title="OPC一站式变现闭环+AI赋能"
            desc="让普通人也能抓住跨境新风口，实现快速盈利"
          />
          <div class="loop-grid">
            <article v-for="item in loopCards" :key="item.title" class="glass-card">
              <img :src="bootcampAsset(item.icon)" alt="" />
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="dark-section highlights-section">
        <div class="bootcamp-container">
          <h2 class="plain-title">7大核心爆点</h2>
          <div class="highlight-grid">
            <article
              v-for="item in highlights"
              :key="item.title"
              :class="['highlight-card', { wide: item.wide }]"
            >
              <img :src="bootcampAsset(item.icon)" alt="" />
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="course-section">
        <div class="bootcamp-container">
          <SectionTitle title="核心课程模块" desc="8大模块，从0到1系统掌握TikTok跨境运营全技能" />
          <div class="course-list">
            <article v-for="module in courseModules" :key="module.title" class="course-card">
              <span :class="['course-index', module.tone]">{{ module.index }}</span>
              <div>
                <h3>{{ module.title }}</h3>
                <ul>
                  <li v-for="item in module.items" :key="item">{{ item }}</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="bonus-section">
        <div class="bootcamp-container">
          <span class="bonus-label">限时福利</span>
          <SectionTitle title="报名即享TikTok Shop创业大礼包" desc="从0到1系统掌握TikTok跨境运营全技能" />
          <div class="bonus-grid">
            <article v-for="item in bonuses" :key="item.title" :class="['highlight-card', { wide: item.wide }]">
              <img :src="bootcampAsset(item.icon)" alt="" />
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="audience-section">
        <div class="bootcamp-container">
          <SectionTitle title="适合人群" desc="无论你是个人创业者还是企业商家，都能在这里找到属于你的机会" />
          <div class="audience-grid">
            <article v-for="group in audienceGroups" :key="group.title" class="audience-card">
              <div class="audience-head">
                <img :src="bootcampAsset(group.icon)" alt="" />
                <h3>{{ group.title }}</h3>
              </div>
              <div class="audience-list">
                <div v-for="item in group.items" :key="item.title">
                  <strong>{{ item.title }}</strong>
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="signup-section">
        <div class="bootcamp-container signup-inner">
          <h2>3天小白变高手 | 本土店+货盘配齐，学完直接做!</h2>
          <div class="signup-info">
            <div class="info-list">
              <article v-for="item in signupInfo" :key="item.title">
                <img :src="bootcampAsset(item.icon)" alt="" />
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.text }}</p>
                </div>
              </article>
            </div>
            <div class="qr-box">
              <img :src="bootcampAsset('蒙版组 275@2x.png')" alt="" />
              <h3>扫码报名额<br />+专属优惠</h3>
              <p>限前30名报名赠送出海大礼包</p>
            </div>
          </div>
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
    default: '/cloud-site',
  },
})

const bootcampAsset = (name) => asset(name, '跨境电商实战营')

const heroPoints = ['0基础从0-1创业', 'AI高效提效', '本土店+货盘配齐', '暴力起店']

const loopCards = [
  {
    icon: '组 10964@2x.png',
    title: '风口',
    text: 'TikTok+AI跨境新风口，闭门插入局，一人也能快速变现。抓住短视频全球化红利，享受平台流量扶持政策。',
  },
  {
    icon: '组 12134@2x.png',
    title: '实操+AI',
    text: '3天线下实操，本土店+货盘+起店方法配齐，AI帮你节省大量时间，搭配基础创业交流支持。',
  },
  {
    icon: '组 12098@2x.png',
    title: '变现',
    text: 'AI提效小店全链路，帮你快速起盘，打造从入驻到售后的完整闭环，提供持续运营支持。',
  },
]

const highlights = [
  {
    icon: '组 12090@2x.png',
    title: 'AI赋能',
    text: '文案、剪辑、选品一键生成，新手也能高效出活。AI工具加持，大幅降低运营门槛，一人即可完成团队工作。',
  },
  {
    icon: '组 12090@2x(1).png',
    title: '本土店直开',
    text: '全程指导，解锁平台流量扶持。提供本土店注册绿色通道，快速下店，享受本土卖家专属政策支持。',
  },
  {
    icon: '组 12090@2x(2).png',
    title: '爆款货盘直供',
    text: '选品无忧，上架即卖。精选东南亚爆款货源，一件代发，无需备货，零库存风险。',
  },
  {
    icon: '组 12090@2x(3).png',
    title: '暴力起店',
    text: '手把手教学，新店7天起流量。独家起店方法论，快速突破冷启动，实现快速出单。',
  },
  {
    icon: '组 12090@2x(4).png',
    title: '全程实操',
    text: '80%实操+20%理论，学完直接上手。实战化教学，边学边练，现场解决问题，确保学习效果。',
  },
  {
    icon: '组 12090@2x(5).png',
    title: '全链闭环',
    text: '入驻到售后一站式搞定，小白友好。提供全流程服务支持，无需担心任何环节问题。',
  },
  {
    icon: '组 12090@2x(6).png',
    title: '新手礼包',
    text: 'AI工具+社群+多V1指导，全程护航。赠送价值万元创业大礼包，持续后续支持，保障创业成功。',
    wide: true,
  },
]

const courseModules = [
  {
    index: 1,
    tone: 'blue',
    title: '战略趋势·本土店入门（新手必学，筑牢基础）',
    items: ['2026平台规则+流量算法，拆解跨境变现逻辑', '本土店注册、资质+后台实操，解锁流量扶持', '小白低门槛赛道，明确变现路径，避坑指南', '海外爆款货盘直供，一件自发，无需备货'],
  },
  {
    index: 2,
    tone: 'purple',
    title: '商品上架·暴力起店（核心实操，快速破冷启动）',
    items: ['商品卡优化（标题/主图/定价），提升曝光点击', '本土店暴力起店，新店7天起流量，快速出单', '低成本测款，降低备货亏损，减少试错成本', '短视频+直播联动商品卡，打通转化闭环'],
  },
  {
    index: 3,
    tone: 'pink',
    title: 'AI赋能·高效提效（专属模块，小白易上手）',
    items: ['高性价比AI工具选型，覆盖素材、文案、选品、投放', 'AI一键生成文案、批量剪辑，省80%时间', 'AI选品预判、标题优化，助力精准决策', 'AI智能优化广告，适配小白小预算投放'],
  },
  {
    index: 4,
    tone: 'yellow',
    title: '素材创作·高转化视频（流量破圈，带动出单）',
    items: ['高转化视频公式+脚本模板，适配小店带货', '小白零设备拍摄，聚焦卖点打造3秒开场', '实用工具教学，素材高产出，告别焦虑', '拆解100万+播放案例，复制转化技巧', '视频优化（封面/标题/标签），提升商品卡转化'],
  },
  {
    index: 5,
    tone: 'green',
    title: '广告投放·流量放大（GMV高效增长，小白适配）',
    items: ['TikTok Ads入门，几百-几千小预算，避免投坑', '人群定向+素材测试，复盘优化提ROI', '小预算低成本起量，快速放大店铺流量', '优化广告素材，贴合算法，降低投放成本'],
  },
  {
    index: 6,
    tone: 'red',
    title: '案例拆解·避坑盈利（全程护航，少走弯路）',
    items: ['拆解头部案例，复制爆单转化逻辑', '新手高频踩坑（限流/违规），给出解决方案', '复盘失败案例，规避运营风险，快速成长', '平台合规+资金/物流风控，全方位护航'],
  },
  {
    index: 7,
    tone: 'cyan',
    title: '运营闭环·长期盈利（进阶提升，突破瓶颈）',
    items: ['全链路运营实操，打造变现闭环', '数据复盘优化，迭代策略，稳定盈利', '一人运营SOP，无需组建团队，高效上手', '低成本对接达人，借力快速起量'],
  },
  {
    index: 8,
    tone: 'indigo',
    title: '售后保障·全程陪跑（专属售后，无忧创业）',
    items: ['1个月讲师多v1答疑，针对性解决实操难题', '1年学员社群，可行交流+讲师定期答疑', '全程跟进售后，解决运营、货盘、物流问题', '免费同步更新工具、资料、平台规则'],
  },
]

const bonuses = [
  {
    icon: '组 12090@2x(7).png',
    title: '东南亚本土店铺',
    text: '包含类目审核全程指导，开店无忧，快速下店，享受本土卖家专属流量扶持政策。',
  },
  {
    icon: '组 12123@2x.png',
    title: '优质爆款货盘资源',
    text: '直接上架变现，包含选品赋能，精选东南亚热销爆款，一件代发，无需备货，零库存风险。',
  },
  {
    icon: '组 12125@2x.png',
    title: 'OPC跨境创业社区终身入驻权',
    text: '同行交流、资源共享、讲师长期陪跑，链接优质人脉，获取最新行业资讯和一手资源。',
  },
  {
    icon: '组 12126@2x.png',
    title: '1年学员社群+1个月讲师多v1线上答疑',
    text: '陪跑起店，实时解决运营过程中的各种问题，保障顺利出单和稳定盈利。',
  },
  {
    icon: '组 12127@2x.png',
    title: '全套工具包',
    text: '上架模板、起店话术、选品工具、投放指南，价值万元的运营工具包，大幅提升运营效率，少走弯路。',
    wide: true,
  },
]

const audienceGroups = [
  {
    icon: '组 12128@2x.png',
    title: '个人/副业向',
    items: [
      { title: '打工人', text: '零门槛转行副业，一人轻松赚外快。利用业余时间增加收入，实现经济独立。' },
      { title: '加薪无望者', text: '学新技能，开启第二收入。掌握跨境电商核心技能，突破职场瓶颈，获得更高收入。' },
      { title: '宝爸妈', text: '居家赚钱，兼顾家庭与自我价值。时间灵活，在家即可操作，无需坐班打卡。' },
      { title: '学生党', text: '低成本创业，早日财务自由。积累创业经验，为未来发展打下坚实基础。' },
    ],
  },
  {
    icon: '组 12129@2x.png',
    title: '创业/商家向',
    items: [
      { title: 'TikTok创业者', text: '零基础落地，轻松实现盈利。系统化学习运营知识，少走弯路，快速拿到结果。' },
      { title: '外贸/工厂', text: '拓展TikTok Shop新渠道。触达海外消费者，提升品牌影响力增加销售渠道。' },
      { title: '国内电商', text: '转型跨境，开辟第二增长曲线。利用现有供应链优势，拓展海外市场，实现业绩增长。' },
      { title: '小白', text: '从0-1手把手教，暴力起店。无需任何基础，全程保姆式教学，确保学完即可上手操作。' },
    ],
  },
]

const signupInfo = [
  { icon: '组 12130@2x.png', title: '开课时间', text: '线下3天循环滚动开课，可协商时间' },
  { icon: '组 12131@2x.png', title: '咨询热线', text: '艾老师 18250556206' },
  { icon: '组 12132@2x.png', title: '上课地址', text: '福建省福州市鼓楼区福州软件园A区23号' },
]
</script>

<style scoped>
.bootcamp-page {
  min-width: 320px;
  color: #fff;
  background: #0d1426;
  overflow: hidden;
}

.bootcamp-container {
  width: min(1540px, calc(100% - 48px));
  margin: 0 auto;
}

.bootcamp-hero {
  padding: 126px 0 118px;
  background:
    radial-gradient(circle at 50% 18%, rgba(62, 120, 255, 0.24), transparent 28%),
    linear-gradient(160deg, #0b1426 0%, #141430 54%, #25124a 100%);
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.bootcamp-hero h1 {
  margin: 0;
  font-size: clamp(44px, 4vw, 76px);
  line-height: 1.35;
  font-weight: 800;
  letter-spacing: 0;
}

.hero-points {
  width: 100%;
  margin: 82px 0 78px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  color: #fff;
  font-size: 24px;
}

.hero-points span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  white-space: nowrap;
}

.hero-points img {
  width: 28px;
  height: 28px;
}

.hero-visual {
  width: min(1067px, 78vw);
  border-radius: 18px;
}

.gradient-button {
  width: 276px;
  height: 70px;
  margin-top: 70px;
  border-radius: 999px;
  color: #fff;
  font-size: 21px;
  font-weight: 700;
  background: linear-gradient(90deg, #ef3f9d 0%, #3b82f6 100%);
}

.gradient-button::after {
  content: " ->";
}

.dark-section {
  background: #0d1426;
}

.closing-loop {
  padding: 94px 0 64px;
}

.bootcamp-page :deep(.section-title h2),
.plain-title {
  color: #fff;
  font-size: clamp(36px, 3.2vw, 56px);
}

.bootcamp-page :deep(.section-title p) {
  color: #9aa8c2;
  font-size: clamp(20px, 1.6vw, 26px);
}

.loop-grid {
  margin-top: 76px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px;
}

.glass-card,
.highlight-card,
.course-card,
.audience-card {
  border: 1px solid rgba(103, 137, 181, 0.56);
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(30, 44, 65, 0.95), rgba(14, 25, 45, 0.95));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.glass-card {
  min-height: 296px;
  padding: 72px 40px 44px;
}

.glass-card img {
  width: 42px;
  height: 42px;
}

.glass-card h3,
.highlight-card h3,
.audience-card h3 {
  margin: 22px 0 20px;
  color: #fff;
  font-size: 26px;
  line-height: 1.2;
}

.glass-card p,
.highlight-card p,
.audience-list p,
.course-card li,
.signup-info p,
.qr-box p {
  margin: 0;
  color: #d7dfef;
  font-size: 17px;
  line-height: 1.9;
}

.highlights-section {
  padding: 78px 0 140px;
}

.plain-title {
  margin: 0 0 74px;
  text-align: center;
  font-weight: 800;
  letter-spacing: 0;
}

.highlight-grid,
.bonus-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
}

.highlight-card {
  min-height: 184px;
  padding: 38px 42px;
  display: flex;
  align-items: flex-start;
  gap: 28px;
}

.highlight-card.wide {
  grid-column: 1 / -1;
}

.highlight-card img {
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
}

.highlight-card h3 {
  margin-top: 4px;
  margin-bottom: 14px;
}

.course-section {
  padding: 132px 0 150px;
  background: #1d2939;
}

.course-list {
  margin-top: 76px;
  display: grid;
  gap: 32px;
}

.course-card {
  min-height: 260px;
  padding: 44px 48px;
  display: flex;
  align-items: flex-start;
  gap: 36px;
}

.course-index {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: #fff;
  font-size: 24px;
  font-weight: 800;
}

.course-index.blue { background: #1d4f9b; }
.course-index.purple { background: #7a37bd; }
.course-index.pink { background: #b8347d; }
.course-index.yellow { background: #bd7a16; }
.course-index.green { background: #07946d; }
.course-index.red { background: #ad3341; }
.course-index.cyan { background: #09819c; }
.course-index.indigo { background: #4e48bd; }

.course-card h3 {
  margin: 4px 0 34px;
  color: #fff;
  font-size: 29px;
  line-height: 1.3;
}

.course-card ul {
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
  list-style: none;
}

.course-card li::before {
  content: "✓";
  margin-right: 16px;
  color: #ff4aac;
  font-weight: 800;
}

.bonus-section {
  padding: 108px 0 122px;
  background: linear-gradient(145deg, #261044 0%, #10182b 100%);
  text-align: center;
}

.bonus-label {
  display: inline-block;
  margin-bottom: 20px;
  color: #ffd429;
  font-size: 20px;
  font-weight: 800;
}

.bonus-label::before {
  content: "▣ ";
}

.bonus-grid {
  margin-top: 76px;
  text-align: left;
}

.audience-section {
  padding: 92px 0 142px;
  background: #0d1426;
}

.audience-grid {
  margin-top: 74px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.audience-card {
  padding: 52px 46px 58px;
}

.audience-head {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 48px;
}

.audience-head img {
  width: 42px;
  height: 42px;
}

.audience-head h3 {
  margin: 0;
}

.audience-list {
  display: grid;
  gap: 34px;
}

.audience-list div {
  position: relative;
  padding-left: 52px;
}

.audience-list div::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 2px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: rgba(239, 63, 157, 0.55);
}

.audience-card:nth-child(2) .audience-list div::before {
  background: rgba(59, 130, 246, 0.55);
}

.audience-list strong {
  display: block;
  margin-bottom: 8px;
  color: #fff;
  font-size: 20px;
}

.signup-section {
  padding: 124px 0 136px;
  background: linear-gradient(135deg, #65229a 0%, #27318d 100%);
}

.signup-inner h2 {
  margin: 0 0 92px;
  text-align: center;
  color: #fff;
  font-size: clamp(38px, 3.4vw, 58px);
  line-height: 1.25;
  letter-spacing: 0;
}

.signup-info {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 290px;
  gap: 100px;
  align-items: center;
}

.info-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 84px 160px;
}

.info-list article {
  display: flex;
  align-items: flex-start;
  gap: 22px;
}

.info-list article:last-child {
  grid-column: 1 / -1;
}

.info-list img {
  width: 48px;
  height: 48px;
}

.signup-info h3 {
  margin: 0 0 12px;
  color: #fff;
  font-size: 26px;
}

.qr-box {
  text-align: center;
}

.qr-box img {
  width: 140px;
  height: 140px;
  padding: 8px;
  background: #fff;
}

.qr-box h3 {
  margin: 22px 0 28px;
  line-height: 1.45;
}

</style>
