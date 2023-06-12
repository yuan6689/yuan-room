<template>
  <div class="home">
    <!-- 首页顶部静态内容 -->
    <homeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="租房就来Yuan租房" />
    </div>
		<homeSearchBox/>
    <homeCategories/>
  </div>
</template>

<script setup>
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";
import homeCategories from "./cpns/home-categories.vue";
import useHomeStore from "@/stores/modules/home";

// 发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHomeCategoriesData();
homeStore.fetchHomeHotSuggestsData();
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
