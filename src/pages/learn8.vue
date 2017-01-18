<template>
	<div class="warp">
		<component v-bind:is="title"></component>
		<component v-bind:is="content"></component>
		<component v-bind:is="footer"></component>
		 <component v-bind:is="current"></component>
		 <hr>
		 <test inline-template>
			 <div>
				 <p>我是test，我的节点内容是加了inline-template后产生的</p>
				 <p>官方并不推荐这么使用，希望是写在.vue文件中啦</p>
			 </div>
		 </test>
	</div>
</template>
<script>
var test = {
	template: '<div><div>aaaa</div></div>'
};
export default {
	data () {
		return {
			// data中可以直接跟模板，或者组件
			title: {
				template: '<div>我是头</div>'
			},
			content: {
				template: '<div>我是content</div>'
			},
			footer: {
				template: '<div>我是尾巴</div>'
			},
			// home值变化则模板变化，在components中
			current: 'home'
		};
	},
	methods: {

	},
	components: {
		'home': {
			name: 'home',
			template: '<div>home</div>'
		},
		'dev': {
			template: '<div>dev</div>'
		},
		test
	}
};
</script>
