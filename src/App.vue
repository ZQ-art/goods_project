<template>
  <div id="app">
    <transition name="toggle">
      <router-view />
    </transition>
    <MyTabbar />
    <OverLay />
  </div>
</template>

<script>
import MyTabbar from "@/layout/myTabbar.vue";
import OverLay from "@/layout/overLay.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    MyTabbar,
    OverLay,
  },
  mounted() {
    if (sessionStorage.getItem("userId") != undefined) {
      this.$router.push({ name: "home" });
    } else {
      this.$router.push({ name: "auth" });
    }
  },
};
</script>

<style>
#app {
  height: 100%;
}
.toggle-enter {
  transform: translateY(30px);
  opacity: 0;
}
.toggle-enter-active {
  transition: all 0.3s linear;
}
</style>
