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
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    transform: translateY(-50%);
  }
}
</style>