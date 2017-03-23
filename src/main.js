// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
Vue.use(Vuex);
// import test from './pages/test'
var popUpManager = {test: 111};
Vue.use(VueRouter);
// 插件写法
Vue.use({
	install () {
		console.log('install');
		Object.defineProperty(Vue.prototype, '$cjx', {
			get () {
				return {
					cjx: 1
				};
			}
		});
	}
});
// 混合写法
Vue.mixin({
	beforeCreate () {
		// 如果是根节点
		// 每个 跟节点都挂接一个 dialogManager
		console.log('mixin', this, this === this.$root);
		if (this === this.$root) {
			this._popUpManager = popUpManager;
		}
	}
});
window.router = router;
window.VueRouter = VueRouter;
window.Vue = Vue;
const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment (state) {
			state.count++;
		}
	}
});
window.store = store;
/* eslint-disable no-new */
var root = new Vue({
	router,
	store,
	el: '#app',
	template: '<router-view class="view"></router-view>'
});

window.root = root;
