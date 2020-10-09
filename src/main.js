import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import router from "./router.js";
import Vuex from "vuex";
import store from "./store/index";
import "./static/iconfont/iconfont.css";
import axios from "axios";
import animate from "animate.css";
import "animate.css/animate.min.css";

Vue.prototype.axios = axios;
Vue.prototype.bus = new Vue();
Vue.use(Vant);
Vue.use(Vuex);
Vue.use(animate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
