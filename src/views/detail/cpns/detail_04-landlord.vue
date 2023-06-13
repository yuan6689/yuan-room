<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="intro">
        <div class="top">
          <img :src="landlord.topScroll" alt="">
        </div>
        <div class="header">
          <div class="left">
            <div class="avatar">
              <img :src="landlord.hotelLogo" alt="">
            </div>
            <div class="info">
              <div class="name">{{ landlord.hotelName }}</div>
              <div class="tags">
                <template v-for="(item, index) in landlord.hotelTags">
                  <div class="item" :style="{ color: item.tagText.color }">
                    <span>{{ item.tagText.text }}</span>
                    <span v-if="index !== landlord.hotelTags.length - 1" class="divider">|</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="contact">联系房东</div>
          </div>
        </div>
        <div class="bottom">
          <template v-for="(item, index) in landlord.hotelSummary">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="score">{{ item.introduction }}</div>
              <div class="desc">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue";
const props = defineProps({
  landlord: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.intro {
  .top {
    img {
      width: 100%;
      border-radius: .06rem;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .2rem;
    .left {
      display: flex;
      .avatar {
        img {
          width: 1.08rem;
          height: 1.08rem;
        }
      }
      .name {
        margin-top: .16rem;
        font-size: .32rem;
        font-weight: 600;
      }
      .tags {
        display: flex;
        margin-top: .1rem;
        font-size: .24rem;
        .divider {
          margin: 0 .1rem;
        }
      }
    }
    .right {
      .contact {
        height: .48rem;
        line-height: .48rem;
        border-radius: .1rem;
        padding: 0 .24rem;
        font-size: .24rem;
        color: #fff;
        background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 1rem .2rem .2rem;
    .item {
      font-size: .24rem;
      .title {
        color: #999;
      }
      .score {
        margin: .1rem 0;
        font-size: .36rem;
        font-weight: 700;
        color: #333;
      }
      .desc {
        color: #666;
      }
    }
  }
}
</style>
