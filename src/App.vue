<template>
  <div id="app">
    
		
		<!-- 路由容器 -->
		<router-view></router-view>
		<router-view name='aaa'></router-view>
		
  </div>
</template>

<script>
	
	import test1 from '@/utils/test1.js'
	import { run , eat } from '@/utils/test2.js'

	export default {
		name: 'App',
		components: {
			
		},
		mounted:function(){
			test1.foo(),
			test1.bar(),
			run(),
			eat()
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">



</style>
