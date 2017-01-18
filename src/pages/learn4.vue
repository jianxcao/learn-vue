<template>
	<div>
		<ul>
			<!--in 可以使 of-->
			<li v-for="(item, index) in list">
				{{item}} index: {{index}} 可以访问  整个data{{b}}
			</li>
		</ul>
		<hr>
		<ul>
			<!--可以是template-->
			<template v-for="(val, key) of test">
				<li>{{ key }} {{val}}</li>
			</template>
		</ul>
		<hr>
		<!--组件中使用-->
		<test-cjx v-for="(item, index) in list" v-bind:item="item"></test-cjx>
		<hr>
		<!--is 使用,用is是为了躲避浏览器某些标签不能嵌套的规则 v-for优先级高-->
		<div is="test" v-for="(item, index) in list" v-if="item === 1" v-bind:item="item"></div>
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
	components: {
		'test': com
	},
	template: '<div>aaaa</div>'
};
</script>
