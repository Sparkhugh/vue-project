<template lang="html">
	<div>
		即将上映
		
		<h1 v-text='$store.state.count'></h1>
		
		<button @click='mulClick'>乘</button>
		
	</div>
</template>

<script>
	export default{
		methods:{
			mulClick(){
				this.$store.commit('mul',2)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>

