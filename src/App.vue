<script setup>
import { useRoute } from "vue-router";
import tabbar from "./components/tab-bar/tabbar.vue";
import loading from "./components/loading/loading.vue";
const route = useRoute();
</script>

<template>
  <div class="app">
    <div class="content"><RouterView /></div>
    <tabbar v-if="!route.meta.hideTabBar" />
    <loading />
  </div>
</template>

<style scoped></style>
