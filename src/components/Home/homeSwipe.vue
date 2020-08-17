<template>
  <div id="homeSwipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>优友の日常</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "homeSwipe",
};
</script>

<style lang="scss" scoped>
.my-swipe {
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 100px;
    text-align: center;
    background: linear-gradient(to right, #b4d4e8, #7cd0d1);
  }
}
</style>