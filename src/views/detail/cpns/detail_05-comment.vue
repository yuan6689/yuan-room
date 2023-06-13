<template>
  <div class="comment">
    <detail-section
      title="热门评论"
      :more-text="`查看全部${comment.totalCount}条评论`"
    >
      <div class="comment-inner">
        <div class="header">
          <div class="left">
            <div class="score">
              <span class="text">{{ comment.overall }}</span>
              <div class="line"></div>
            </div>
            <div class="info">
              <div class="title">{{ comment.scoreTitle }}</div>
              <div class="count">{{ comment.totalCount }}条评论</div>
              <div class="star">
                <van-rate
                  v-model="comment.overall"
                  color="#ff9645"
                  size="12"
                  readonly
                  allow-half
                />
              </div>
            </div>
          </div>
          <div class="right">
            <template v-for="(item, index) in comment.subScores" :key="item">
              <span class="item">{{ item }}</span>
            </template>
          </div>
        </div>
        <div class="tags">
          <template v-for="(item, index) in comment.commentTagVo" :key="index">
            <span
              class="item"
              :style="{ color: item.color, background: item.backgroundColor }"
            >
              {{ item.text }}
            </span>
          </template>
        </div>
        <div class="content">
          <div class="user">
            <div class="avatar">
              <img :src="comment.comment.userAvatars" alt="" />
            </div>
            <div class="profile">
              <div class="name">{{ comment.comment.userName }}</div>
              <div class="date">{{ comment.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="text">
            {{ comment.comment.commentDetail }}
          </div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";

defineProps({
  comment: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.comment-inner {
  padding: 0.2rem 0;

  .header {
    display: flex;

    .left {
      display: flex;
      align-items: center;

      .score {
        width: 1.3rem;
        height: 100%;
        color: #333;
        position: relative;
        font-weight: 600;

        .text {
          font-size: 0.96rem;
          position: relative;
          z-index: 9;
        }

        .line {
          width: 1.32rem;
          height: 0.12rem;
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
          border-radius: 0.06rem;
          position: absolute;
          bottom: 0.12rem;
          z-index: 5;
        }
      }

      .info {
        margin-left: 0.38rem;
        font-size: 0.24rem;
        color: #333;

        .count {
          margin: 0.06rem 0;
          color: #999;
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: flex-end;

      .item {
        margin-left: 0.1rem;
        font-size: 0.24rem;
        color: #666;
      }
    }
  }

  .tags {
    display: flex;
    margin: 0.2rem 0;
    flex-wrap: wrap;

    .item {
      padding: 0.06rem 0.1rem;
      margin-right: 0.16rem;
      margin-top: 0.1rem;
      border-radius: 0.16rem;
      font-size: 0.24rem;
    }
  }

  .content {
    padding: 0.2rem;
    border-radius: 0.12rem;
    background-color: #f7f9fb;

    .user {
      display: flex;

      .avatar {
        img {
          width: 0.64rem;
          height: 0.64rem;
          border-radius: 50%;
        }
      }

      .profile {
        margin-left: 0.16rem;
        .date {
          margin-top: 0.06rem;
          font-size: 0.24rem;
          color: #999;
        }
      }
    }

    .text {
      font-size: 0.24rem;
      line-height: 0.32rem;
      color: #333;
      margin-top: 0.32rem;
    }
  }
}
</style>
