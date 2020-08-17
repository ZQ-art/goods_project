<template>
  <div id="app">
    <router-view />
    <MyTabbar />
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyTabbar from "@/components/myTabbar.vue";

export default {
  name: "app",
  components: {
    MyTabbar,
  },
};
</script>

<style>
#app {
  height: 100%;
}
</style>
