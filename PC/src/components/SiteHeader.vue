<template>
  <header class="nav">
    <img class="logo" :src="asset('logo@2x.png')" alt="MiDuoDuo 米多多" />
    <nav class="menu">
      <a
        v-for="item in navRoutes"
        :key="item.path"
        :href="getRouteHash(item.path)"
        :class="{ active: item.path === activePath }"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<script setup>
import { asset } from '../utils/assets'
import { getRouteHash, navRoutes } from '../router'

defineProps({
  activePath: {
    type: String,
    default: '/',
  },
})
</script>
