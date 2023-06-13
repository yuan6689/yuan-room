<template>
  <div class="home">
    <!-- 首页顶部静态内容 -->
    <homeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="租房就来Yuan租房" />
    </div>
    <homeSearchBox />
    <homeCategories />
    <homeSearchBar v-if="isShowSearch" class="search-bar"/>
    <homeHouseList />
  </div>
</template>

<script setup>
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";
import homeCategories from "./cpns/home-categories.vue";
import homeHouseList from "./cpns/home-house-list.vue";
import homeSearchBar from "./cpns/home-search-bar.vue"
import useHomeStore from "@/stores/modules/home";
import useScroll from "@/hook/useScroll";
import { onMounted, watch, computed } from "vue";

const homeStore = useHomeStore();
// 发送网络请求
onMounted(() => {
  homeStore.fetchHouseListData();
  homeStore.fetchHomeCategoriesData();
  homeStore.fetchHomeHotSuggestsData();
});
const getNewList = () => homeStore.fetchHouseListData();

// window.addEventListener("scroll", ()=>{
//   const scrollTop = document.documentElement.scrollTop;
//   const clientHeight = document.documentElement.clientHeight;
//   const scrollHeight = document.documentElement.scrollHeight;
//   if(scrollTop + clientHeight >= scrollHeight){
//     console.log("ok");
//   }
// })

const { isReachBottom, scrollTop } = useScroll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    getNewList().then(() => {
      isReachBottom.value = false;
    });
  }
});

const isShowSearch = computed(() => {
  return scrollTop.value / Number(document.documentElement.style.fontSize.slice(0, -2)) >= 5;
});
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
