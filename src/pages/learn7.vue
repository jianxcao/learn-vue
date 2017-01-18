<template>
	<div class="warp">
		<!--自定义组件-->
		<!--slot里面取得时父作用域的内容事件也会是父作用域-->
		<my-component ref="myCom" @add="test1">
			<div>test slot</div>
			<div slot="before">before slot{{b}}</div>
		</my-component>
		<test-com></test-com>
	</div>
</template>
<script>
import Vue from 'vue';
var Child = {
	data () {
		return {
			test: 1
		};
	},
	methods: {
		add () {
			this.test += 1;
			this.$emit('add', this.test);
		}
	},
	template: '<div @click="add"><slot name="before"></slot>A custom component! <slot>no content</slot> </div>'
};
Vue.component('test-com', {
	template: '<div>test-com</div>'
});
export default {
	data () {
		return {
			b: 1111
		};
	},
	methods: {
		test1 () {
			console.log('test1', this.$refs.myCom);
		}
	},
	components: {
		'my-component': Child
	}
};
</script>
