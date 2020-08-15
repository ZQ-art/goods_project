import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from './views/Home.vue'
const router = new Router({
	routes:[
		{
			path:'/',
			name:'home',
			component:Home
		},
		{
			path:'/grade',
			name:'grade',
			component:()=>import('./views/grade.vue')
		},
		{
			path:'/pick',
			name:'pick',
			component:()=>import('./views/pick/pick.vue')
		},
		{
			path:'/message',
			name:'message',
			component:()=>import('./views/message/message.vue')
		},
		{
			path:'/mine',
			name:'mine',
			component:()=>import('./views/mine/mine.vue')
		},
		{
			path:'/friends',
			name:'friends',
			component:()=>import('./views/friends.vue')
		}
	]
})

export default router