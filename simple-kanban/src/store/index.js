import Vue from 'vue'
import Vuex from 'vuex'
import { kanban, profile } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.loading = payload
    }
  },
  actions: {
  },
  modules: {
    kanban,
    profile
  }
})
