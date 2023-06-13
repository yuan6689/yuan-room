<template>
  <div class="section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot>
        <h3>我是默认内容</h3>
      </slot>
    </div>
    <div class="footer" v-if="moreText.length">
      <span class="more">{{ moreText }}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    default: "默认标题"
  },
  moreText: {
    type: String,
    default: ""
  }
})

</script>

<style lang="less" scoped>
  .section {
    padding: 0 .3rem;
    margin-top: .24rem;
    border-top: .3rem solid #f2f3f4;
    background-color: #fff;
    .header {
      height: 1rem;
      line-height: 1rem;
      border-bottom: .02rem solid #eee;
      .title {
        font-size: .4rem;
        color: #333;
      }
    }
    .content {
      padding: .16rem 0;
    }
    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: .88rem;
      line-height: .88rem;
      color: #ff9645;
      font-size: .28rem;
      font-weight: 600;
    }
  }
</style>
