<template>
  <div class="categories">
    <template v-for="(item, index) in hotCategories" :key="index">
      <div class="item-container">
        <img class="icon" :src="item.pictureUrl" :alt="item.title" />
        <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { hotCategories } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  align-items: center;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: .4rem;
    flex-shrink: 0;
    .icon {
      width: .65rem;
      height: .65rem;
    }
    .text {
      padding-top: .2rem;
      font-size: .24rem;
    }
  }
}
</style>
