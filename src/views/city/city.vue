<template>
  <div class="city top-page">
    <div class="search-content">
      <van-search
        v-model="searchValue"
        show-action
        shape="round"
        placeholder="城市/区域/位置"
        @cancel="router.back()"
      />
      <van-tabs v-model:active="tabActive" animated color="#ff9854">
        <van-tab title="国内-港澳台"></van-tab>
        <van-tab title="海外"></van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(item, key, index) in allCities">
        <city-groups v-show="index === tabActive" :group-data="item"/>
      </template>
    </div>

    <!-- 选择日期 -->

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import cityGroups from "./cpns/city-groups.vue"

const router = useRouter();
const searchValue = ref("");

const tabActive = ref(0);

const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
</script>

<style lang="less" scoped>
.city {
  width: 100%;
  // know 方案1
  .search-content {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  // know 方案2 可以让滚动条处在合适的位置
  .content {
    height: calc(100vh - 2rem);
    overflow-y: auto;
  }
}
</style>
