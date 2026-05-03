<template>
  <component :is="currentComponent" :active-path="activeRoute.path" />
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { getCurrentPath, resolveRoute } from './router'

const currentPath = ref(getCurrentPath())

const syncRoute = () => {
  currentPath.value = getCurrentPath()
}

const currentComponent = computed(() => {
  return activeRoute.value.component || resolveRoute('/').component
})

const activeRoute = computed(() => {
  return resolveRoute(currentPath.value)
})

onMounted(() => {
  window.addEventListener('hashchange', syncRoute)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', syncRoute)
})
</script>
