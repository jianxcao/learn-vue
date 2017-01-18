import Vue from 'vue';
var data = window.testVmData = {
	test: {
		cjx: [1, 2]
	},
	html: '<strong>aaaa</strong>'
};
var vm = window.testVm = new Vue({
	data
	// 选项
});
console.log('vm实例', vm);
/**
 * component  和 extend产生的都是vue的一个子类
 */
var MyComponent = Vue.extend({
	name: 'lear1',
	data () {
		return data;
	},
	computed: {
		// 可以设置get和set弄成一个对象
		test1 () {
			return this.html + '我是计算属性';
		}
	},
	watch: {
		test (val) {

		}
	},
	methods: {
		doSome (test, event) {
			console.log(test, event);
			window.alert(1);
		}
	},
	template: `
		<div>

		<div><strong>只支持三目运算，在模板中，{}中不能用if</strong></div>

		<div v-on:click="doSome(test, $event)" v-bind:data-test="(test.cjx1 || 'no cjx') + '我是自定义属性'">click测试，具体请看官方文档</div>

		<div>{{test1}}</div>

		<div><span v-once>test改变后数据也不会被改变 {{ test }}</span></div>

		<div>取值使用{{test}};{{test.cjx ? test.cjx : "no cjx"}}</div>

		<div v-html="html">html的内容不受监控，但是html属性更改会更改里面得内容div里面得内容会被替换</div>

		<div>
	`
	// 扩展选项
});

// 键路径
// watch的用法
var unWatch = vm.$watch('test.cjx', function (newVal, oldVal) {
	console.log(newVal, oldVal);
});
console.log(unWatch, '通过unWtach函数可以取消观察');

console.log('继承得到的组件', MyComponent);
// 所有的 `MyComponent` 实例都将以预定义的扩展选项被创建
var myComponentInstance = new MyComponent();
// 扩展实例
console.log('继承得到的组件的实例', myComponentInstance);

var Test = Vue.component('test', {
	template: '<div>learn1<div>'
});

console.log('component生成的组件', Test);

console.log('component生成的组件的实例', new Test());
export default MyComponent;
