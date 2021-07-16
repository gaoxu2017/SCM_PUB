/*
 * @Author: gaoxu
 * @Date: 2021-06-24 10:39:49
 * @LastEditors: g05047
 * @LastEditTime: 2021-07-13 20:29:37
 * @Description: file content
 */

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
  ROUNDINGTYPE:'',
  BLUETOOTH_STATUS:''
}
const mutations = {
  setToken(state, item) {
  },
  addProject (state,item) {
      state.PROJECT = item
  },
  set_rounding (state,val) {
    state.ROUNDINGTYPE = val
  },
  setBluetooth (state,val) {
    state.BLUETOOTH_STATUS = val
  }
}
const actions = {
  newSetToken(context, item) {
    context.commit('context', item)
  },
  asyncaddProject ({commit} ,item) {
      commit('addProject',item)
  },
  set_rounding ({commit} ,val) {
    commit('set_rounding',val)
  },
  // setBluetooth ({commit,val}) {
  //   commit('setBluetooth',val)
  // }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
