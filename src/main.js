/*
 * @Author: your name
 * @Date: 2021-06-21 14:04:49
 * @LastEditTime: 2021-07-09 11:02:21
 * @LastEditors: g05047
 * @Description: In User Settings Edit
 * @FilePath: \SCM_PUB\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import "./assets/assets/index/reset.css";
import Vuex from 'vuex'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import setAlert from './components/globalSet.vue';
import headerWrapper from './components/headerWarpper.vue';
import publicMethods from './until/public';
import * as API from './request/api.js';
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(publicMethods)   //公共的js文件
axios.defaults.withCredentials = true;

Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  })
//生产环境
// axios.defaults.baseURL = localStorage.getItem("baseURL")
Vue.component('setAlert',setAlert)
Vue.component('headerWrapper',headerWrapper)

Vue.prototype.$API = API
/* eslint-disable no-new */
new Vue({
  data () {
    return {
      handelSetAlertType:true
    }
  },
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App),
  template: '<App/>',
})
