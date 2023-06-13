<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabBarData" :key="index">
      <div
        class="tab-bar-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(item, index)"
      >
        <img
          v-if="currentIndex !== index"
          :src="getAssetURL(item.imgSrc)"
          :alt="item.text"
        />
        <img v-else :src="getAssetURL(item.imgActiveSrc)" :alt="item.text" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabBarData from "@/assets/data/tabBarData";
import { getAssetURL } from "@/utils/load_asset";
import { useRouter } from "vue-router";
import { ref } from "vue";
const currentIndex = ref(0);
const router = useRouter();

const itemClick = (item, index) => {
  currentIndex.value = index;
  router.push(item.path);
};
</script>

<style lang="less" scoped>
.tab-bar {
  height: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  border-top: 1px solid #f3f3f3;
  background-color: #fff;
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: 0.6rem;
    }
    &.active {
      color: var(--primary-color);
    }
  }
}
</style>
