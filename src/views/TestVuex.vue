<template lang="html">
	<div>
		<h1>vuex</h1>
		
		<div>
			<h1 v-text='count'></h1>
			<button @click='addClick'>加</button>
			<button @click='subClick'>减</button>
		</div>
		
		<div>
			<h2 v-text='msg'></h2>
			<button @click='getMsg'>获取后端msg</button>
		</div>
		
		<h1 v-text='info'></h1>
		
		<div v-for="(ele,idx) in list" :key='idx' v-text='ele.name'></div>
		<hr>
		
		<h1 v-text='orderMsg'></h1>
		
		<div>
			<h2 v-text='userMsg'></h2>
			<button @click='getUserMsg'>改变userstore中的msg</button>
			<button @click='getUserMsgAsync'>异步改变userMsg</button>
		</div>
		
		
	</div>
</template>

<script>
	import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
	
	export default{
		computed:{
			...mapState('testStore',['count','msg','list']),
			...mapGetters('testStore',['info']),
			
			...mapState('orderStore',{
				orderMsg:(state)=>state.msg
			}),
			
			...mapState('userStore',{
				userMsg:(state)=>state.msg
			})
		},
		mounted:function(){
			//console.log('count',this.$store.state.count)
			//this.$store.dispatch('getMusic')
			this.getMusic()  //调music接口
		},
		methods:{
			...mapMutations('testStore',['add','sub','changeMsg']),
			...mapActions('testStore',['msgAsync','getMusic']),
			
			...mapMutations('userStore',{
				changeUserMsg:(commit,payload)=>{
					commit('changeMsg',payload)
				}
			}),
			...mapActions('userStore',{
				asyncUserMsg:(dispatch)=>{
					dispatch('msgAsync')
				}
			}),
			
			addClick(){
				//this.$store.commit('add',100)
				this.add(100)
			},
			subClick(){
				this.sub(50)
				//this.$store.commit('sub',50)
			},
			getMsg(){
				this.msgAsync()
			},
			getUserMsg(){
				this.changeUserMsg('change userMsg')
			},
			getUserMsgAsync(){
				this.asyncUserMsg()
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
