<template>
  <div id="app">
    <transition name="toggle">
      <router-view />
    </transition>
    <MyTabbar />
  </div>
</template>

<script>
import MyTabbar from "@/components/myTabbar.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    MyTabbar,
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
