<template>
  <div class="loading" v-show="isLoading">
    <div class="back">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="正在加载" />
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';
import { storeToRefs } from 'pinia';

const {isLoading} = storeToRefs(useMainStore());
</script>

<style lang="less" scoped>
.loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.08rem;
    height: 2.08rem;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;
    img {
      width: 1.4rem;
      height: 1.4rem;
      padding-bottom: .25rem;
    }
  }
}
</style>
