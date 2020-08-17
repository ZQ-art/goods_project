<template>
  <div id="gradeSwipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img class="picture" src="../../static/img/food.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img class="picture" src="../../static/img/food1.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img class="picture" src="../../static/img/drink.jpg" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "gradeSwipe",
};
</script>

<style lang="scss" scoped>
#gradeSwipe {
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #9ce5ff;
    .picture {
      width: 100%;
      height: 250px;
    }
  }
}
</style>