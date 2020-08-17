<template>
  <div id="homeTabs">
    <van-tabs v-model="activeName">
      <van-tab title="个人主页" name="personalPage">
        <PersonalPage />
      </van-tab>
      <van-tab title="好友安利" name="friendRecommend">
        <FriendRecommend />
      </van-tab>
      <van-tab title="今日推荐" name="todayRecommend">
        <TodayRecommend />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import PersonalPage from "./homeTabs/personalPage";
import FriendRecommend from "./homeTabs/friendRecommend";
import TodayRecommend from "./homeTabs/todayRecommend";

export default {
  name: "homeTabs",
  data() {
    return {
      activeName: "personalPage",
    };
  },
  components: {
    PersonalPage,
    FriendRecommend,
    TodayRecommend,
  },
};
</script>

<style lang="scss" scoped>
</style>