import Vue from 'vue'
import Vuex from 'vuex'

import testStore from './modules/test'
import orderStore from './modules/order'
import userStore from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		testStore,
		orderStore,
		userStore
	}
})

export default store
