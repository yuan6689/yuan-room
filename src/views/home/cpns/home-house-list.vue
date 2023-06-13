<template>
    <div class="house-list">
        <div class="title">热门精选</div>
        <div class="list">
          <template v-for="(item, index) in houseList">
            <houseItemV3 v-if="item.discoveryContentType === 3" :item-data="item.data"  :key="Number(item.data.houseId)" @click="handleItemClick(item.data)"/>
            <houseItemV9 v-if="item.discoveryContentType === 9" :item-data="item.data"  :key="Number(item.data.houseId)" @click="handleItemClick(item.data)"/>
          </template>
        </div>
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue';
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore();
const {houseList} = storeToRefs(homeStore);
const router = useRouter();

const handleItemClick = function(data){
  router.push("/detail/" + data.houseId);
}
</script>

<style lang="less" scoped>
.house-list{
  padding: .2rem .16rem;
  .title {
    font-size: .4rem;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>