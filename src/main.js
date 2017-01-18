// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import VueRouter from 'vue-router';
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
/* eslint-disable no-new */
var root = new Vue({
	router,
	el: '#app',
	template: '<router-view class="view"></router-view>'
});

window.root = root;
