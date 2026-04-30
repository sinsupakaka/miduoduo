<template>
  <footer class="footer">
    <div class="footer-inner">
      <img class="footer-logo" :src="asset('logo@2x.png')" alt="MiDuoDuo 米多多" />
      <div class="footer-columns">
        <div class="footer-col" v-for="column in footerColumns" :key="column.title">
          <h4>{{ column.title }}</h4>
          <p v-for="item in column.items" :key="item">{{ item }}</p>
        </div>
        <div class="footer-col contact">
          <h4>联系我们</h4>
          <p>电话：0591-87988769</p>
          <p>邮箱：info_GIG@fjmidodo.com</p>
          <p>总部：福建省福州市鼓楼区软件园A区23座</p>
        </div>
        <div class="footer-col follow">
          <h4>关注我们</h4>
          <div class="socials">
            <img :src="asset('组 3437@2x.png')" alt="" />
            <img :src="asset('组 3436@2x.png')" alt="" />
            <img :src="asset('组 3438@2x.png')" alt="" />
          </div>
        </div>
      </div>
      <div class="links">
        <strong>友情链接</strong>
        <span v-for="item in links" :key="item">{{ item }}</span>
      </div>
      <p class="copyright">闽ICP备17007918号-1 闽公网安备 35010202001554号 版权所有 © 2022 福建米多多网络科技有限公司</p>
    </div>
  </footer>
</template>

<script setup>
import { asset } from '../utils/assets'

const links = ['跨境电商网', '卖家之家', 'AMZ123', '白鲸出海', '邦阅网', '紫鸟浏览器', '知识产权', '欧税通', '更多链接', '更多链接', '更多链接', '更多链接']

const footerColumns = [
  { title: '跨境服务', items: ['数字营销服务', '数字展会服务', '联合运营服务', '全链孵化服务'] },
  { title: '技术平台', items: ['行业智库', '中国跨交会'] },
  { title: '关于我们', items: ['企业介绍', '荣誉证书', '联系我们'] },
]
</script>
