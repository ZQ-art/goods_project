<template>
  <div id="pick">
    <PickNav />
    <van-tabs v-model="activeName">
      <van-tab title="悬赏代取" name="OfferReward">
        <OfferReward />
      </van-tab>
      <van-tab title="有偿代取" name="payReward">
        <PayReward />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import PickNav from "../components/Pick/pickNav";
import OfferReward from "../components/Pick/offerReward";
import PayReward from "../components/Pick/payReward";

export default {
  data() {
    return {
      activeName: "OfferReward",
    };
  },
  name: "home",
  methods: {},
  components: {
    PickNav,
    OfferReward,
    PayReward,
  },
};
</script>

<style lang="scss" scoped>
#pick {
  .van-tabs {
    >>> .header {
      font-size: 22px;
    }
    >>> .van-button{
      display: block;
      margin: 10px auto;
    }
  }
}
</style>