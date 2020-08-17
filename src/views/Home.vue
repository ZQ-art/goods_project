<template>
  <div id="home">
    <HomeNav />
    <HomeSwipe />
    <HomeTabs />
  </div>
</template>

<script>
import HomeNav from "../components/Home/homeNav";
import HomeSwipe from "../components/Home/homeSwipe";
import HomeTabs from "../components/Home/homeTabs";

export default {
  name: "home",
  methods: {},
  components: {
    HomeNav,
    HomeSwipe,
    HomeTabs,
  },
};
</script>

<style lang="scss" scoped>
</style>
