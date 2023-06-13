<template>
  <div class="swipe">
    <van-swipe class="swipe-list" indicator-color="white">
      <template v-for="item in swipeData" :key="item.orderIndex">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(item, index) in swipeGroup">
            <span
              class="category"
              :class="{ active: getIndexOfCategory(item, active) }"
            >
              <span class="text">{{
                getIndexOfCategory(item, active)
                  ? item[getIndexOfCategory(item, active) - 1]?.title
                  : item[0].title
              }}</span>
              <span class="num" v-if="getIndexOfCategory(item, active)"
                >{{ getIndexOfCategory(item, active) }} /
                {{ item.length }}</span
              >
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const props = defineProps({
  swipeData: {
    type: Object,
    default: () => ({}),
  },
});

const swipeGroup = {};

props.swipeData.forEach((item, index) => {
  const regE = /【(.*?)】/i;
  if (swipeGroup[item.enumPictureCategory] === undefined) {
    swipeGroup[item.enumPictureCategory] = [];
  }
  item.title = regE.exec(item.title)[1];
  swipeGroup[item.enumPictureCategory].push(item);
});

const getIndexOfCategory = (item, active) => {
  const currentIndex = active - item[0].orderIndex;
  if (currentIndex + 1 > item.length) {
    return false;
  } else if (currentIndex < 0) {
    return false;
  }
  return currentIndex + 1;
};

const isActive = (index, item) => {
  return index;
};
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    img {
      width: 100%;
    }
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.2);
    .category {
      margin: 0 3px;
      transition: all 1s;
      .text {
        margin-right: 0.1rem;
      }
      &.active {
        padding: 0 3px;
        border-radius: 5px;
        background-color: #fff;
        color: #333;
      }
    }
  }
}
</style>
