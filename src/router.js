import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//异步组件
const Home=()=>import('@/views/Home.vue')
const TodoList=()=>import('@/views/TodoList.vue')

//import Home from '@/views/Home.vue'
//import TodoList from '@/views/TodoList.vue'
//import TestSass from '@/views/TestSass.vue'
import Music from '@/views/Music.vue'
import MusicDetail from '@/views/MusicDetail.vue'

import Film from '@/views/Film.vue'
import Hot from '@/views/Hot.vue'
import Future from '@/views/Future.vue'

import ElementUi from '@/views/TestElement.vue'
import TestVuex from '@/views/TestVuex.vue'
import TestDevtools from '@/views/TestDevtools.vue'

const router=new VueRouter({
	mode:'hash',
	routes:[
		{
			path:'/',
			components:{
				default:Home,
				//aaa:TestSass
			}
		},
		{
			path:'/todo',
			component:TodoList,
			name:'todo',
			alias:'/todolist'
		},
		{
			path:'/sass',
			component:()=>import('@/views/TestSass.vue')
		},
		{
			path:'/music',
			component:Music
		},
		{
			path:'/detail/:id/:value',
			component:MusicDetail
		},
		{
			path:'/film',
			component:Film,
			children:[
				{
					path:'',
					component:Hot
				},
				{
					path:'future',
					component:Future
				}
			]
		},
		{
			path:'/element',
			component:ElementUi
		},
		{
			path:'/vuex',
			component:TestVuex
		},
		{
			path:'/devtools',
			component:TestDevtools
		},
		{
			path:'/*',
			redirect:'/'
		}
	]
})

export default router