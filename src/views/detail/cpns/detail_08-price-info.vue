<template>
  <div class="price-info">
    <h2 class="title">{{ priceIntro.title }}</h2>
    <div class="content">
      {{ priceIntro.introduction }}
    </div>
  </div>
</template>

<script setup>
defineProps(["priceIntro"]);
</script>

<style lang="less" scoped>
.price-info {
  padding: .32rem .24rem;
  border-top: .1rem solid #f2f3f4;
  .title {
    font-size: .28rem;
    color: #000;
    font-weight: 700;
  }
  .content {
    margin-top: .2rem;
    font-size: .24rem;
    line-height: 1.5;
    color: #666;
  }
}
</style>
