import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router.js'
import './static/iconfont/iconfont.css'

Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
