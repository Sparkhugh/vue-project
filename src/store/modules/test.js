import {JayMusic} from '@/utils/api'

const testStore={
	namespaced:true,
	state:{
		count:1,
		msg:'hello vuex testStore',
		list:[]
	},
	getters:{
		info(state){
			return state.msg + '-getters'
		}
	},
	mutations:{
		add(state,payload){
			console.log('add',payload)
			state.count += payload
		},
		sub(state,payload){
			console.log('sub',payload)
			state.count -= payload
		},
		mul(state,payload){
			console.log('mul',payload)
			state.count *= payload
		},
		changeMsg(state,payload){
			state.msg=payload
		},
		changeList(state,payload){
			state.list=payload
		}
	},
	actions:{
		msgAsync({commit}){
			setTimeout(()=>{
				commit('changeMsg','hello actions')
			},1000)
		},
		getMusic(store){
			JayMusic().then(res=>{
				console.log('周杰伦',res)
				store.commit('changeList',res.song.list)
			})
		}
	}
}

export default testStore