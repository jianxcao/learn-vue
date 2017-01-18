<template>
	<div>
		<div class="click" @click="test1">click</div>
		<div @mousedown.prevent="test1">mousedown</div>
		<div @mouseup.prevent="hi('hello', $event)">mouseup</div>
		<!--修饰符可以跟多个，简写 @开始-->
		<input type="text" name="test" value="test" @keyup.enter.space="hi">
	</div>

</template>

<script>
import Vue from 'vue';
var com = Vue.component('test-cjx', {
	props: ['item'],
	template: '<div class="cjx test">我是test-cjx组件{{item}}</div>'
});
export default {
	data () {
		return {
			b: 'cjx',
			list: [1, 2, 3, 4, 5],
			test: {
				a: 1,
				b: 3,
				c: 'b'
			}
		};
	},
	methods: {
		test1 () {
			console.log('test1', this.name);
		},
		hi (msg) {
			console.log(msg + 'hahahha');
		}
	},
	components: {
		'test': com
	},
	template: '<div>aaaa</div>'
};
</script>
