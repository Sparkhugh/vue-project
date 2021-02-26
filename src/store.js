import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const store=new Vuex.Store({
	state:{
		count:1,
		msg:'hello vuex',
		list:[]
	},
	getters:{
		info(state){
			return state.msg + '-hello'
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
		MsgAjax({commit}){
			setTimeout(()=>{
				commit('changeMsg','hello actions')
			},1000)
		},
		getMusic(store){
			var url='http://localhost:8080/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=61204160201852987&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
			axios.get(url).then(res=>{
				console.log('周杰伦',res)
				store.commit('changeList',res.data.data.song.list)
			})
		}
	}
})

export default store