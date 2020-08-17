<template>
  <div id="home">
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

<style scoped>
.item .dy-btn {
  width: 65px;
  height: 45px;
  padding: 2px;
  border-radius: 50%;
}
</style>