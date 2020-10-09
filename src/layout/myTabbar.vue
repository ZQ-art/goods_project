<template>
  <div id="myTabbar">
    <van-tabbar @change="switchTo" :before-change="switchCheck">
      <van-tabbar-item icon="wap-home-o" name="home">首页</van-tabbar-item>
      <van-tabbar-item icon="exchange" dot name="pick">代取</van-tabbar-item>
      <van-tabbar-item name="grade">
        <template #icon>
          <img class="dy-btn" src="../static/img/排行榜.png" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="comment-o" badge="5" name="message">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" name="mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "myTabbar",
  data() {
    return {
      active: "",
    };
  },
  methods: {
    switchTo(name) {
      this.$router.push({ name: name });
    },
    switchCheck() {
      if (sessionStorage.getItem("token") == undefined) {
        this.$router.push({ name: "auth" });
        this.$notify({
          type: "warning",
          message: "请先登录！",
          duration: 750,
        });
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
#myTabbar {
  height: 50px;
  .dy-btn {
    width: 65px;
    height: 45px;
    padding: 2px;
    margin: auto 0;
    border-radius: 50%;
  }
}
</style>
