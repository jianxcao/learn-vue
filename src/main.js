// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueRouter from 'vue-router'
// import test from './pages/test'
Vue.use(VueRouter)
window.router = router
window.VueRouter = VueRouter
window.Vue = Vue
/* eslint-disable no-new */
var root = new Vue({
  router,
  el: '#app',
  template: '<router-view class="view"></router-view>'
})

window.root = root
