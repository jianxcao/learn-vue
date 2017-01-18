<template>
	<div class="warp">
		<!--自定义组件-->
		<!--#camelCase-vs-kebab-case-->
		<my-component v-bind:b="b" data-cjx="cjx" @add="add"></my-component>
		<!--使用render自定义组件-->
		<render-child></render-child>
	</div>
</template>
<script>
var Child = {
	props: {
		b: {
			type: Number,
			required: true
		},
		dataCjx: String
	},
	beforeMount () {
		console.log(this.$data, this);
	},
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
	template: '<div @click="add">A custom component!{{b}}{{dataCjx}}</div>'
};
// 简单得render
// 这里使用render无法使用jsx，必须在jsx文件中才能使用
var renderChild = {
	render (createElement) {
		return createElement('div', {

		});
	}
};
console.log('Child', Child);

console.log('renderChild', renderChild);
export default {
	data () {
		return {
			b: 1111,
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
		},
		add (val) {
			console.log(val);
		}
	},
	components: {
		'my-component': Child,
		'render-child': renderChild
	}
};
</script>
