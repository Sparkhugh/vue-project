<template lang="html">
	<div>
		<div v-for="(item,idx) in list" :key='idx' @click='skipToDetail(item)'>
			<!-- 声明式路由跳转 -->
			<!-- <router-link to='/detail'> -->
			<!-- </router-link> -->
			<span v-text='item.id'></span>
			<span v-text='item.value'></span>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		data:function(){
			return {
				list:[
					{id:1,value:'青花瓷'},
					{id:2,value:'东风破'},
					{id:3,value:'发如雪'},
					{id:4,value:'霍元甲'},
					{id:5,value:'菊花台'}
				]
			}
		},
		methods:{
			skipToDetail(item){
				console.log(item)
				console.log('this.$router',this.$router)
				//编程式路由跳转
				this.$router.push('/detail/'+item.id+'/'+item.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
