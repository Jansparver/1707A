import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Homes from '../views/main/home.vue'
import Classify from '../views/main/classify'
import Cart from '../views/main/cart'
import Loop from '../views/main/loop'
import My from '../views/main/my'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/main/home'
  },
  {
    path: '/main',
    component: Main,
    children:[{
      path:'/main/home',
      component: Homes
    },{
      path:'/main/classify',
      component:Classify
    },{
      path:'/main/cart',
      component:Cart
    },{
      path:'/main/loop',
      component:Loop
    },{
      path:'/main/my',
      component:My
    }]
  },
  {
    path:'/list',
    component:()=>import('../views/List.vue')
  },
  {
    path:"/edit",
    component:()=>import('../views/Edit.vue')
  },
  {
    path:"/login",
    component:My
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

const whiteList = ['/login']

router.beforeEach((to,from,next)=>{
  let login = window.localStorage.getItem('login')
  if(login !== 'true'){
    if(whiteList.indexOf(to.path)==-1){
      next('/login')
    }else{
      next()
    }
  }else{
    next()
  }
})

