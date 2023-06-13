import { getHomeCategories, getHomeHotSuggests, getHomeHouseList } from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home",{
  state:() => ({
    hotCategories: [],
    hotSuggests: [],
    currentList: 1,
    houseList: []
  }),
  actions: {
    async fetchHomeCategoriesData(){
      const res = await getHomeCategories();
      this.hotCategories = res.data;
    },
    async fetchHomeHotSuggestsData(){
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchHouseListData(){
      const res = await getHomeHouseList(this.currentList);
      this.houseList.push(...res.data);
      this.currentList++;
    }
  }
})

export default useHomeStore;
