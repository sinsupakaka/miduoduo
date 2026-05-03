<template>
  <view class="page">
    <view class="nav">
      <view class="status">
        <text>9:41</text>
        <view class="phone-icons">
          <view class="signal"></view>
          <view class="wifi"></view>
          <view class="battery"></view>
        </view>
      </view>
      <view class="nav-main">
        <image
          class="menu"
          :src="asset('菜单@2x.png')"
          mode="aspectFit"
          @click="goRoute('coupangIncubation')"
        />
        <text class="nav-title">全链孵化</text>
        <image class="avatar" :src="asset('蒙版组 275@2x.png')" mode="aspectFill" />
      </view>
    </view>

    <view class="hero section-dark">
      <text class="hero-title">小白变高手 | TikTok+AI跨境{{ '\n' }}实战营，新手扶持计划</text>
      <view class="hero-points">
        <view v-for="item in heroPoints" :key="item" class="hero-point">
          <image :src="asset('组 11002@2x.png')" mode="aspectFit" />
          <text>{{ item }}</text>
        </view>
      </view>
      <button class="primary-btn">立即锁定名额</button>
      <image class="hero-image" :src="asset('蒙版组 266@2x.png')" mode="aspectFill" />
    </view>

    <SectionTitle
      class="opportunity"
      title="OPC一站式变现闭环+AI赋能"
      desc="让普通人也能抓住跨境新风口，实现快速盈利"
    />
    <IconCardGrid class="feature-grid section-dark" :items="features" />

    <view class="courses">
      <SectionTitle title="核心课程模块" desc="8大模块，从0到1系统掌握TikTok跨境运营全技能" />
      <IconTextList class="course-list" :items="courses" variant="course" />
    </view>

    <view class="benefits">
      <view class="gift-line">
        <image :src="asset('组 12134@2x.png')" mode="aspectFit" />
        <text>限时福利</text>
      </view>
      <text class="benefit-title">报名即享TikTok Shop创业大礼包</text>
      <text class="benefit-desc">从0到1系统掌握TikTok跨境运营全技能</text>
      <IconTextList class="benefit-list" :items="benefits" variant="benefit" />
    </view>

    <view class="audience">
      <SectionTitle title="适合人群" :desc="`无论你是个人创业者还是企业商家，都能在这里找到\n属于你的机会`" />
      <AudiencePanel
        title="创业/商家向"
        :icon="asset('组 12144@2x.png')"
        :check-icon="asset('组 12090@2x(4).png')"
        :items="businessAudience"
        tone="business"
      />
      <AudiencePanel
        title="个人/副业向"
        :icon="asset('组 12666@2x.png')"
        :check-icon="asset('组 12090@2x.png')"
        :items="personalAudience"
        tone="personal"
      />
    </view>

    <view class="cta">
      <text class="cta-title">3天小白变高手 | 本土店+货盘配齐{{ '\n' }}学完直接做!</text>
      <view class="cta-info">
        <text>开课时间：线下3天循环滚动开课，可协商时间</text>
        <text>咨询热线：艾老师 18250556206</text>
        <text>上课地址：福建省福州市鼓楼区福州软件园A区23号</text>
      </view>
      <image class="qr" :src="asset('蒙版组 275@2x.png')" mode="aspectFill" />
      <text class="qr-title">扫码锁名额</text>
      <text class="qr-subtitle">+专属优惠</text>
      <text class="qr-desc">限前30名报名赠送出海大礼包</text>
    </view>

    <view class="footer">
      <image :src="asset('logo@2x.png')" mode="aspectFit" />
    </view>
  </view>
</template>

<script setup>
import AudiencePanel from '../components/AudiencePanel.vue'
import IconCardGrid from '../components/IconCardGrid.vue'
import IconTextList from '../components/IconTextList.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { goRoute } from '../router'

const asset = (name) => `/assets/全链孵化三级页面/${name}`

const heroPoints = ['0基础从0-1创业', 'AI高效提效', '本土店+货盘配齐', '暴力起店']

const features = [
  { icon: asset('组 12651@2x.png'), title: '跨境新风口', desc: '低门槛，一人即可变现' },
  { icon: asset('组 12127@2x.png'), title: 'AI赋能', desc: '一键生成文案/剪辑/选品' },
  { icon: asset('组 12648@2x.png'), title: '本土店直开', desc: '全程指导+平台流量扶持' },
  { icon: asset('组 12649@2x.png'), title: '爆款货盘直供', desc: '选品无忧，上架即卖' },
  { icon: asset('组 12650@2x.png'), title: '暴力起店', desc: '7天起流量，全链实操教学' },
  { icon: asset('组 12647@2x.png'), title: '新手礼包', desc: 'AI工具+社群+专人指导' },
]

const courses = [
  { no: 1, icon: asset('组 12094@2x.png'), title: '战略趋势·本土店入门', desc: '新手必学，筑牢基础' },
  { no: 2, icon: asset('组 12094@2x(1).png'), title: '商品上架·暴力起店', desc: '核心实操，快速破冷启动' },
  { no: 3, icon: asset('组 12094@2x(2).png'), title: 'AI赋能·高效提效', desc: '专属模块，小白易上手' },
  { no: 4, icon: asset('组 12094@2x(3).png'), title: '素材创作·高转化视频', desc: '流量破圈，带动出单' },
  { no: 5, icon: asset('组 12094@2x(4).png'), title: '广告投放·流量放大', desc: 'GMV高效增长，小白适配' },
  { no: 6, icon: asset('组 12094@2x(5).png'), title: '案例拆解·避坑盈利', desc: '全程护航，少走弯路' },
  { no: 7, icon: asset('组 12094@2x(6).png'), title: '运营闭环·长期盈利', desc: '进阶提升，突破瓶颈' },
  { no: 8, icon: asset('组 12094@2x(7).png'), title: '售后保障·全程陪跑', desc: '专属售后，无忧创业' },
]

const benefits = [
  { icon: asset('组 12660@2x.png'), title: '东南亚本土店铺', desc: '包含类目审核全程指导，开店无忧，快速下店，享受本土卖家专属流量扶持政策' },
  { icon: asset('组 12661@2x.png'), title: '优质爆款货盘资源', desc: '直接上架变现，省去选品烦恼。精选东南亚热销爆款，一件代发，无需备货，零库存风险' },
  { icon: asset('组 12662@2x.png'), title: 'OPC跨境创业社区终身入驻权', desc: '同行交流、资源共享、讲师长期陪跑。链接优质人脉，获取最新行业资讯和一手资源' },
  { icon: asset('组 12663@2x.png'), title: '1年学员社群+1个月讲师多v1线上答疑', desc: '陪跑起店，实时解决运营过程中遇到的各种问题，保障顺利出单和稳定盈利' },
  { icon: asset('组 12664@2x.png'), title: '全套工具包', desc: '上架模板、起店话术、选品工具、投放指南。价值万元的运营工具包，大幅提升运营效率，少走弯路' },
]

const businessAudience = [
  { title: 'TikTok创业者', desc: '零基础落地，轻松实现盈利。系统化学习运营知识，少走弯路，快速拿到结果' },
  { title: '外贸/工厂', desc: '拓展TikTok Shop新渠道。触达海外消费者，提升品牌影响力增加销售渠道' },
  { title: '国内电商', desc: '转型跨境，开辟第二增长曲线。利用现有供应链优势，拓展海外市场，实现业绩增长' },
  { title: '小白', desc: '从0-1手把手教，暴力起店。无需任何基础，全程保姆式教学，确保学完即可上手操作' },
]

const personalAudience = [
  { title: '打工人', desc: '零门槛转行/副业，一人轻松赚外快。利用业余时间增加收入，实现经济独立' },
  { title: '加薪无望者', desc: '学新技能，开启第二收入。掌握跨境电商核心技能，突破职场瓶颈，获得更高收入' },
  { title: '宝爸妈', desc: '居家赚钱，兼顾家庭与自我价值。时间灵活，在家即可操作，无需坐班打卡' },
  { title: '学生党', desc: '低成本创业，早日财务自由。积累创业经验，为未来发展打下坚实基础' },
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #0d1525;
  color: #ffffff;
}

.nav {
  height: 200rpx;
  background: #ffffff;
  color: #222222;
}

.status {
  height: 88rpx;
  padding: 0 69rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 28rpx;
  font-weight: 600;
}

.phone-icons {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.signal {
  width: 28rpx;
  height: 22rpx;
  border-radius: 4rpx;
  background: linear-gradient(to right, #111 0 18%, transparent 18% 28%, #111 28% 46%, transparent 46% 56%, #111 56% 76%, transparent 76% 86%, #111 86%);
}

.wifi {
  width: 30rpx;
  height: 22rpx;
  border: 5rpx solid #111;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-radius: 30rpx 30rpx 0 0;
}

.battery {
  width: 41rpx;
  height: 18rpx;
  border: 3rpx solid #111;
  border-radius: 5rpx;
  position: relative;
}

.battery::before {
  content: "";
  position: absolute;
  left: 4rpx;
  top: 3rpx;
  width: 29rpx;
  height: 12rpx;
  border-radius: 2rpx;
  background: #111;
}

.battery::after {
  content: "";
  position: absolute;
  right: -8rpx;
  top: 5rpx;
  width: 4rpx;
  height: 8rpx;
  border-radius: 0 3rpx 3rpx 0;
  background: #111;
}

.nav-main {
  height: 112rpx;
  padding: 0 37rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu {
  width: 48rpx;
  height: 48rpx;
}

.nav-title {
  font-size: 32rpx;
  font-weight: 600;
}

.avatar {
  width: 58rpx;
  height: 58rpx;
  border-radius: 50%;
}

.section-dark {
  background: linear-gradient(180deg, #0f1729 0%, #26184c 100%);
}

.hero {
  padding: 129rpx 40rpx 88rpx;
}

.hero-title {
  display: block;
  font-size: 47rpx;
  line-height: 1.45;
  font-weight: 800;
  letter-spacing: 0;
}

.hero-points {
  margin-top: 40rpx;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 22rpx;
  column-gap: 34rpx;
}

.hero-point {
  display: flex;
  align-items: center;
  gap: 18rpx;
  min-width: 0;
}

.hero-point image {
  width: 28rpx;
  height: 28rpx;
}

.hero-point text {
  font-size: 28rpx;
  line-height: 1.2;
  color: #ffffff;
}

.primary-btn {
  margin: 59rpx 0 57rpx;
  width: 200rpx;
  height: 48rpx;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 20rpx;
  font-weight: 700;
  background: linear-gradient(90deg, #ec4aa5 0%, #3b87ff 100%);
  padding: 0;
}

.hero-image {
  width: 670rpx;
  height: 356rpx;
  display: block;
  border-radius: 14rpx;
}

.opportunity {
  padding-top: 75rpx;
  background: linear-gradient(180deg, #26184c 0%, #0d1728 100%);
}

.feature-grid {
  padding: 55rpx 39rpx 89rpx;
}

.courses {
  padding: 92rpx 40rpx 94rpx;
  background: #0b0010;
}

.course-list {
  margin-top: 51rpx;
}

.benefits {
  padding: 91rpx 40rpx 86rpx;
  background: #1e2b3d;
  text-align: center;
}

.gift-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rpx;
  color: #facc15;
  font-size: 24rpx;
  font-weight: 800;
}

.gift-line image {
  width: 32rpx;
  height: 32rpx;
}

.benefit-title {
  display: block;
  margin-top: 24rpx;
  font-size: 40rpx;
  line-height: 1.2;
  font-weight: 800;
}

.benefit-desc {
  display: block;
  margin-top: 22rpx;
  color: #d7deed;
  font-size: 28rpx;
  line-height: 1.2;
}

.benefit-list {
  margin-top: 54rpx;
  text-align: left;
}

.audience {
  padding: 92rpx 40rpx 88rpx;
  background: linear-gradient(180deg, #0f1729 0%, #25184c 100%);
}

.cta {
  padding: 91rpx 40rpx 88rpx;
  text-align: center;
  background: linear-gradient(180deg, #641b91 0%, #2e327c 100%);
}

.cta-title {
  display: block;
  font-size: 41rpx;
  line-height: 1.42;
  font-weight: 800;
}

.cta-info {
  margin-top: 74rpx;
  display: grid;
  gap: 20rpx;
  font-size: 28rpx;
  line-height: 1.2;
}

.qr {
  margin-top: 48rpx;
  width: 412rpx;
  height: 412rpx;
}

.qr-title,
.qr-subtitle,
.qr-desc {
  display: block;
}

.qr-title {
  margin-top: 27rpx;
  font-size: 40rpx;
  line-height: 1.2;
  font-weight: 800;
}

.qr-subtitle {
  margin-top: 11rpx;
  font-size: 36rpx;
  line-height: 1.2;
}

.qr-desc {
  margin-top: 25rpx;
  font-size: 28rpx;
  line-height: 1.2;
}

.footer {
  height: 145rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5ff;
}

.footer image {
  width: 260rpx;
  height: 32rpx;
}
</style>
