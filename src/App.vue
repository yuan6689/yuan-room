<script setup>
  import { useRoute } from 'vue-router';
import tabbar from './components/tab-bar/tabbar.vue';

  const route = useRoute();
</script>

<template>
  <div class="app">
    <div class="content"><RouterView /></div>
    <tabbar v-if="!route.meta.hideTabBar"/>
  </div>
</template>

<style scoped></style>
