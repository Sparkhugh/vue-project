<template lang="html">
	<div>
		<h1>音乐详情</h1>
		<h1 v-text='music'></h1>
		<h1 v-text='val'></h1>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				val:''
			}
		},
		computed:{
			music(){
				return this.$route.params.id
			}
		},
		mounted:function(){
			console.log('id',this.$route.params.id)
			console.log('name',this.$route.params.value)
			this.val=this.$route.params.value
		}
	}
</script>

<style lang="scss" scoped>
</style>
