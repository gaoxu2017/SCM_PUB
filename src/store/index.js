
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const getters = { //监听
  count(state) {
    //   return state.todos.length
  },
  getProject (state) {
     return state.PROJECT
  }
}
const state = {
  TOKEN: '123',
  PROJECT:'',
}
const mutations = {
  setToken(state, item) {
  },
  addProject (state,item) {
      state.PROJECT = item
  }
}
const actions = {
  newSetToken(context, item) {
    context.commit('context', item)
  },
  asyncaddProject ({commit} ,item) {
      commit('addProject',item)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
