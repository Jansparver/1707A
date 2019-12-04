import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    userList(state,poyload){
      state.list = poyload
    },
    btnEvent(state,poyload){
      state.list = poyload
    },
    changeEvent(state,poyload){
      state.list = poyload
    }
  },
  actions: {
  },
  modules: {
  }
})
