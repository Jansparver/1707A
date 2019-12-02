import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    current:1
  },
  mutations: {
    updataList(state,payload){
      console.log(state,payload)
      state.list = payload
    },
    updataCurrent(state,payload){
      state.current = payload
    },
    deletList(state,payload){
      let index = state.list.findIndex(item=>item.list==payload)
      state.list.splice(index,1)
    },
    finishList(state,payload){
      if(payload.id){
        let index = state.list.findIndex(item=>item.id==payload.id)
        state.list[index] = payload
      }else{
        payload.id = state.list.length+1
        state.list.push(payload)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
