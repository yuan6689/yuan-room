<template>
  <div class="infos">
    <div class="name">{{ topInfos.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfos.houseTags">
        <div
          class="tag-item"
          :style="{
            color: item.tagText?.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <div class="comment container">
      <span class="count">{{ topInfos.commentBrief.overall }}</span
      ><span class="score-title">{{ topInfos.commentBrief.scoreTitle }}</span
      ><span class="comment-brief">{{
        topInfos.commentBrief.commentBrief
      }}</span
      ><span class="comment-count right-text"
        >{{ topInfos.commentBrief.totalCount }}条评论</span
      ><van-icon name="arrow" id="arrow" />
    </div>
    <div class="position container">
      <span class="detail">{{ topInfos.nearByPosition.address }}</span
      ><span class="to-detail right-text">地图·周边</span>
      <van-icon name="arrow" id="arrow" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  topInfos: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.infos {
  margin-top: .3rem;
  padding: 0 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  .name {
    font-size: 0.4rem;
    font-weight: bold;
    color: #3f3f3f;
  }
  .tags {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.1rem;
    .tag-item {
      padding: 0.05rem;
      font-size: 0.24rem;
    }
  }
  .container {
    background-color: #f5f7fa;
    padding: 0.2rem 0.3rem;
    display: flex;
    align-items: baseline;
    font-size: 0.24rem;
    .right-text {
      color: var(--primary-color);
      margin-left: auto;
      margin-right: 0.1rem;
    }
    #arrow {
      color: var(--primary-color);
    }
  }
  .comment {
    .count {
      font-size: 0.36rem;
      font-weight: 700;
      color: #333;
      margin-right: 0.1rem;
    }
    .score-title {
      font-size: 0.24rem;
      font-weight: 700;
      color: #333;
      margin-right: 0.1rem;
    }
  }
  .position {
    .detail {
      font-weight: 700;
      font-size: .28rem;
    }
  }
}
</style>
