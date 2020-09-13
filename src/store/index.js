import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layShow: false
  },
  mutations: {
    changeLayShow(state) {
      state.layShow = !state.layShow
    }
  },
  actions: {},
  modules: {}
})