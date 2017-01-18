<template>
	<div>
		<!--我是注释<span>注释<span>-->
		<!--v-model双向绑定就是这么好用，必须是 有change事件的元素，比如 textArea,select input,
		可以自定义双向绑定，其实v-model就是一个 语法糖等
		如下面2个列子
		-->
		<input v-model="msg.notice"/>
		<input v-bind:value="msg.notice" v-on:input="$data.msg.notice = $event.target.value"/>
		{{msg.notice}}
		<!--自定义属性-->
		<div>{{$options.customOpt}}</div>
		<div>{{testMethod()}}</div>

		<!--method和属性同名，先调属性, 方法就被覆盖了-->
		<div v-bind:class="cls">
			<em v-bind:class="{test: cls.a && cls.c}">cs</em>
			<!--这么干不合适-->
			<em v-bind:class="$options.methods.cls.call(this)"></em>
			<!-- class是个数组-->
			<em :class="['test', cls]"></em>
			class测试
			<!--这里传递进去得class不会覆盖子组件的class，但是同名的也会保留-->
			<test-cjx :class="['test', cls]"></test-cjx>
		</div>
		<!--样式测试-->
		<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">style设置测试</div>
	</div>
</template>

<script>
import Vue from 'vue';
var com = Vue.component('test-cjx', {
	template: '<div class="cjx test">我是test-cjx组件</div>'
});
// 属性与方法重名，方法钓球不到了
export default {
	customOpt: 111,
	data () {
		return {
			cls: {
				a: true,
				b: false,
				c: true
			},
			activeColor: 'red',
			fontSize: '12',
			msg: {
				notice: 'cjx'
			},
			// 没说这里不可以跟 方法，只是方法比较混乱-- 而且绑定也会有问题，不能这么干
			test () {
				return {
					hhh: true
				};
			}
		};
	},
	components: {
		com
	},
	methods: {
		cls () {
			console.log(this);
			return {
				test: true,
				cjx: true
			};
		},
		testMethod () {
			console.log('cjx-method', this);
			return 'cjx-method';
		},
		testProp: 1111
	},
	name: 'learn2'
};
</script>
