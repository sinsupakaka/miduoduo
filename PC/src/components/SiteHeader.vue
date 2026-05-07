<template>
  <header class="nav">
    <img class="logo" :src="asset('logo@2x.png')" alt="MiDuoDuo 米多多" />
    <nav class="menu">
      <div
        v-for="item in navRoutes"
        :key="item.path"
        class="menu-item"
        :class="{ 'has-children': item.children?.length }"
      >
        <a
          :href="getRouteHash(item.path)"
          class="menu-link"
          :class="{ active: isNavItemActive(item, activePath) }"
        >
          {{ item.label }}
        </a>

        <div v-if="item.children?.length" class="submenu">
          <div class="submenu-list">
            <a
              v-for="child in item.children"
              :key="child.path"
              :href="getRouteHash(child.path)"
              class="submenu-link"
              :class="{ active: child.path === activePath }"
            >
              {{ child.label }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { asset } from '../utils/assets'
import { getRouteHash, isNavItemActive, navRoutes } from '../router'

defineProps({
  activePath: {
    type: String,
    default: '/',
  },
})
</script>
