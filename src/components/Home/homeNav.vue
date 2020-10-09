<template>
  <div id="homeNav">
    <van-nav-bar title="Goods圈" @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="friends-o" size="25" />
        <span style="color:rgb(110,180,252)">好友</span>
      </template>
      <template #right>
        <van-icon name="scan" size="23" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "homeNav",
  methods: {
    onClickLeft() {
      this.$router.push({ name: "friends" });
    },
    onClickRight() {
      Toast("扫一扫");
    },
  },
};
</script>