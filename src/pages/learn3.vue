<template>
	<div>
		<template v-if="cjx">
			<!--if else写法-->
			{{test}}
			<div v-if="test === 1">我执行1</div>
			<div v-else-if="test === 2">2</div>
			<div v-else>test</div>
		</template>
		<template v-else="cjx">
			<div>我是elseTemplate</div>
		</template>
	</div>
</template>

<script>
export default {
	data () {
		return {
			test: 1,
			cjx: true
		};
	},
	template: '<div>aaaa</div>'
};
</script>
