import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Login from './views/login'
import Register from './views/register'
import Details from './views/details'
import Cart from './views/cart'
import ProductList from './views/productlist'
import NotFind from './views/404'
import SearchList from './views/searchList'




Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {path: '/',name: 'index',component: Index},
      {path: '/index',name: 'index',component:Index},
      {path: '/login/:back',name: 'login',component:Login},
      {path: '/register',name: 'register',component:Register},
      {path: '/details/:id',name: 'details',component:Details},
      {path: '/cart',name: 'cart',component:Cart},
      {path: '/productlist/:cat_id',name: 'productlist',component:ProductList},
      {path: '/notfind',name: 'notfind',component:NotFind},
      {path: '/searchlist/:kw',name: 'searchlist',component:SearchList},
  ]
})
