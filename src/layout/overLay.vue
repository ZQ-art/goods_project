<template>
  <div id="lay">
    <van-overlay :show="this.$store.state.layShow">
      <van-loading class="loading" size="48" />
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "overLay",
};
</script>

<style lang="scss" scoped>
#lay {
  .van-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    z-index: 9999;
  }
}
</style>