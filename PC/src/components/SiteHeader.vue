<template>
  <header class="nav">
    <img class="logo" :src="asset('logo@2x.png')" alt="MiDuoDuo 米多多" />
    <nav class="menu">
      <a v-for="item in menu" :key="item">{{ item }}</a>
    </nav>
  </header>
</template>

<script setup>
import { asset } from '../utils/assets'

const menu = ['首页', '业务体系', '技术平台', '中国跨交会', '行业智库', '动态中心', '关于我们', '云建站管理']
</script>
