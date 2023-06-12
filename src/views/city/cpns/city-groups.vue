<template>
  <div class="city-group"  @click="cityClick($event)">
    <van-index-bar highlight-color="#ff9854" :index-list="list" :sticky="false">
      <van-index-anchor index="#" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities" :key="index">
          <div class="city" >{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for="(item, index1) in groupData.cities" :key="index1">
        <van-index-anchor :index="item.group" />
        <template v-for="(city, index2) in item.cities" :key="index2">
          <van-cell :title="city.cityName"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useCityStore from '@/stores/modules/city';
import { useRouter } from 'vue-router';

const router = useRouter();
const cityStore = useCityStore();
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});
const list = computed(()=>{
  let list = props.groupData.cities.map(item => item.group);
  list.unshift("#");
  return list;
});

const cityClick = (e) =>{
  if((e.target.className === "city" || e.target.className === "van-cell__title" || e.target.tagName === "SPAN") && e.target.innerText.length >= 2){
    cityStore.currentCity = e.target.innerText;
    router.back();
  }
}
</script>

<style lang="less" scoped>
.city-group {
  width: 100%;
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    gap: .25rem;
    padding: .3rem .4rem .3rem .2rem;
    .city {
      width: 1.4rem;
      height: .56rem;
      border-radius: 14px;
      background-color: #fff4ec;
      line-height: .56rem;
      text-align: center;
      font-size: .24rem;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
