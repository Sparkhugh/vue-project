<template lang="html">
	<div>
		<h1>devtools</h1>
		
		<HelloVue></HelloVue>
		
		<div>
			<h1 v-text='count'></h1>
			<button @click='click("add")'>add</button>
			<button @click='click("sub")'>sub</button>
		</div>
		
		<div>
			<h1 v-text='msg'></h1>
			<button @click='getMsg'>改变msg</button>
		</div>
		
		
	</div>
</template>

<script>
	import {mapState,mapMutations,mapActions} from 'vuex'
	import HelloVue from '@/components/HelloWorld.vue'
	
	export default{
		components:{
			HelloVue
		},
		computed:{
			...mapState('testStore',['count','msg'])
		},
		methods:{
			...mapMutations('testStore',['add','sub']),
			...mapActions('testStore',['msgAsync']),
			
			click(type){
				switch(type){
					case 'add':
					this.add(100)
					break;
					case 'sub':
					this.sub(50)
					break;
				}
			},
			getMsg(){
				this.msgAsync()
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
