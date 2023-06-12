<template>
  <div class="search-box">
    <!-- 选择地区 -->
    <div class="location">
      <div class="city" @click="router.push('city')">{{ currentCity }}</div>
      <div class="position" @click="getPosition()">
        <span class="text">我的位置</span
        ><img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期范围 -->
    <div class="section date-range bottom-gray-line" @click="show = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <van-calendar
      :formatter="formatter"
      v-model:show="show"
      type="range"
      @confirm="onConfirm"
    />
    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门地址 -->
    <div class="section suggest">
      <template v-for="(item, index) in hotSuggests">
        <div
          class="suggest-item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    
    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import useMainStore from "@/stores/modules/main";
import { computed, ref } from "vue";
import { formatMonthDay, getDiffDays } from "@/utils/formate_date";
import useHomeStore from "@/stores/modules/home";

const router = useRouter();
// 城市选择
const { currentCity } = storeToRefs(useCityStore());
const getPosition = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res);
    },
    (error) => {
      console.log(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
  // todo 经纬转成省
};
// 日期选择
const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);
const startDateStr = computed(() => formatMonthDay(startDate.value));
const endDateStr = computed(() => formatMonthDay(endDate.value));
const stayCount = ref(getDiffDays(startDate.value, endDate.value));
const show = ref(false);
const onConfirm = (date) => {
  mainStore.startDate = date[0];
  mainStore.endDate = date[1];
  show.value = false;
};
const formatter = (day) => {
  if (day.type === "start") {
    day.bottomInfo = "入住";
  } else if (day.type === "end") {
    day.bottomInfo = "离店";
  }
  return day;
};

// 热门区域
const homeStore = useHomeStore();

const { hotSuggests } = storeToRefs(homeStore);

// 搜索
const searchBtnClick = () =>{
  router.push({
    path: "/search",
    query: {
      startDate: startDateStr.value,
      endDate: endDateStr.value,
      currentCity: currentCity.value
    }
  });
}

</script>

<style lang="less" scoped>
.search-box {
  .location {
    display: flex;
    align-items: center;
    height: 1rem;
    padding: 0 0.4rem;
    .city {
      margin-right: auto;
    }
    .position {
      width: 1.48rem;
      display: flex;
      align-items: center;
      .text {
        position: relative;
        top: 0.04rem;
        color: #666;
        font-size: 0.24rem;
      }
      img {
        margin-left: 0.1rem;
        width: 0.36rem;
        height: 0.36rem;
      }
    }
  }
}
.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 0.4rem;
  color: #999;
  height: 0.88rem;
  .start {
    flex: 1;
    display: flex;
    height: 0.88rem;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 0.4rem;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 0.24rem;
      color: #999;
    }

    .time {
      margin-top: 0.06rem;
      color: #333;
      font-size: 0.3rem;
      font-weight: 600;
    }
  }
}
.date-range {
  height: 1rem;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 0.24rem;
    color: #666;
  }
}
.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}
.suggest {
  height: auto;
  gap: 0.05rem;
  margin: 0.2rem 0;
  .suggest-item {
    //know 英文向下沉 中文向上
    padding: 0.1rem 0.2rem;
    border-radius: 14px;
    font-size: 0.24rem;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
