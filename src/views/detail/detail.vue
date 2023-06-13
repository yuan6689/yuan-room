<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途 "
      left-arrow
      @click-left="handleBackClick"
    />
    <div class="main" v-if="mainPart">
      <detailSwipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detailInfos :top-infos="mainPart.topModule" />
      <detailFacility
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <detailLandlord :landlord="mainPart.dynamicModule.landlordModule" />
      <detailComment :comment="mainPart.dynamicModule.commentModule" />
      <detailNotice
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      />
      <detail-price-info :price-intro="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import detailSwipe from "./cpns/detail_01-swipe.vue";
import detailInfos from "./cpns/detail-02-infos.vue";
import detailFacility from "./cpns/detail_03-facility.vue";
import detailLandlord from "./cpns/detail_04-landlord.vue";
import detailComment from "./cpns/detail_05-comment.vue";
import detailNotice from "./cpns/detail_06-notice.vue";
import detailPriceInfo from "./cpns/detail_08-price-info.vue";
import { useRoute, useRouter } from "vue-router";
import { getDetailInfos } from "@/service/index";
import { computed, onMounted, ref } from "vue";

const router = useRouter();
const route = useRoute();
const houseId = route.params.id;

const houseInfo = ref({});
onMounted(async () => {
  const { data } = await getDetailInfos(houseId);
  houseInfo.value = data;
});
const mainPart = computed(() => houseInfo.value.mainPart);

const handleBackClick = function () {
  router.back();
};
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  height: 100%;
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 2.4rem;
    img {
      width: 2.46rem;
    }
    .text {
      margin-top: .24rem;
      font-size: .24rem;
      color: #7688a7;
    }
  }
}
</style>
