import { getHomeCategories, getHomeHotSuggests } from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home",{
  state:() => ({
    hotCategories: [],
    hotSuggests: []
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
  }
})

export default useHomeStore;
