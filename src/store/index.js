import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layShow: false,
    imgUrl: undefined
  },
  mutations: {
    changeLayShow(state) {
      state.layShow = !state.layShow
    },
    getImgUrl(state, url) {
      state.imgUrl = url
    }
  },
  actions: {},
  modules: {}
})