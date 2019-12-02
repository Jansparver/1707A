 import React from 'react'

import Main from '../views/main'

import Home from '../views/main/home'
import Classify from '../views/main/classify'
import Cart from '../views/main/cart'
import Price from '../views/main/price'
import My from '../views/main/my'


export default {
    routes: [{
        path:'/',
        redirect:'/main/home'
    },{
        path:'/main',
        component:Main,
        children:[{
            path:'/main/home',
            component:Home
        },{
            path:'/main/classify',
            component:Classify
        },{
            path:'/main/cart',
            component:Cart
        },{
            path:'/main/price',
            component:Price
        },{
            path:'/main/my',
            component:My
        }]
    },{
        path:'/detail',
        component:null
    }]
}