<template>
  <div class="facility">
    <detailSection title="房屋设施" more-text="查看全部设施">
      <div class="inner">
        <template v-for="item in showFacility">
          <div class="inner-container">
            <div class="head">
              <img class="icon" :src="item.icon" :alt="item.groupName" />
              <div class="group-name">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <template
                v-for="(feature, index) in item.facilitys.slice(0, 4)"
                :key="index"
              >
                <div class="feature-item">
                  <i class="icon_check icon"></i>
                  <span class="text">{{ feature.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detailSection>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue";
const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => ({}),
  },
});

const showFacility = props.houseFacility.facilitySort.map((item) => {
  return props.houseFacility.houseFacilitys[item];
});
</script>

<style lang="less" scoped>
.inner {
  padding: 0.1rem 0;
  border-radius: 0.12rem;
  font-size: 0.24rem;
  background-color: #f7f9fb;
  .inner-container {
    display: flex;
    margin: 0.5rem 0;
    .head {
      width: 1.8rem;
      text-align: center;
      img {
        width: 0.4rem;
        height: 0.4rem;
      }
      .group-name {
        font-size: 0.24rem;
        margin-top: 0.1rem;
        color: #000;
      }
    }

    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .feature-item {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 50%;
        margin: 0.08rem 0;
        .icon {
          margin: 0 0.12rem;
        }
        .text {
          color: #333;
        }
      }
    }
  }
}
</style>
