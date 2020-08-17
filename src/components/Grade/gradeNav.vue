<template>
  <div id="gradeNav">
    <van-nav-bar title="排行榜" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="search" size="23" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "gradeNav",
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>