import axios from 'axios'
import {Message} from 'element-ui'

var baseURL='http://localhost:8080'

const fetch=axios.create({
	baseURL:baseURL,
	timeout:2000,
	headers:{'Content-Type': 'application/json;chartset=UTF-8'}
})

//请求拦截器
fetch.interceptors.request.use(config=>{
	console.log('请求拦截',config)
	var token=localStorage.getItem('token')
	config.headers.Authorization=token
	return config
})

//响应拦截器
fetch.interceptors.response.use(response=>{
	var res={}
	console.log('响应拦截',response)
	if(response.data && response.data.code===0){
		res=response.data.data || {}
	}else{
		var msg=response.data.message || '请求错误'
		Message({
			message:msg,
			type:'error',
			duration:3*1000
		})
	}
	return res
},error=>{
	const msg=error.Message !== undefined ? error.Message : ''
	Message({
		message:'网络错误'+msg,
		type:'error',
		duration:3*1000
	})
	return Promise.reject(error)
})


export default fetch