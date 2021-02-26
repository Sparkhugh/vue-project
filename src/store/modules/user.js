const userStore={
	namespaced:true,
	state:{
		msg:'user store'
	},
	mutations:{
		changeMsg(state,payload){
			state.msg=payload
		}
	},
	actions:{
		msgAsync(userStore){
			setTimeout(()=>{
				userStore.commit('changeMsg','user msg async')
			},1000)
		}
	}
}

export default userStore