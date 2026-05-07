<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.section-title h2 {
  font-family: DingTalk JinBuTi;
  font-weight: 400;
  font-size: 72px;
}

.section-title p {
  font-family: Source Han Sans CN;
  font-weight: 400;
  font-size: 36px;
  color: #868999;
  line-height: 48px;
}

</style>