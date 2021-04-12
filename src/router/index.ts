import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {path: '/',redirect: {name: 'Home'}},
  {path: '/home',name: 'Home',meta: {tabBar: true, keepAlive: true},
  component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')},
  {path: '/info',name: 'Info',meta: {tabBar: true},
  component: () => import(/* webpackChunkName: "info" */ '../views/info.vue')},
  {path: '/order',name: 'Order',meta: {tabBar: true},
  component: () => import(/* webpackChunkName: "order" */ '../views/order.vue')},
  {path: '/search',name: 'Search',component: () => import(/* webpackChunkName: "search" */ '../views/search.vue')},
  {path: '/shop',name: 'Shop',component: () => import(/* webpackChunkName: "shop" */ '../views/shop.vue')},
  {path: '/login',name: 'Login',component: () => import(/* webpackChunkName: "shop" */ '../views/login.vue')},
  {path: '/error',name: 'Error',component: () => import(/* webpackChunkName: "shop" */ '../views/error.vue')},
  {path: '/location',name: 'Location',component: () => import(/* webpackChunkName: "location" */ '../views/location.vue')},
  {path: '/pay',name: 'Pay',component: () => import(/* webpackChunkName: "pay" */ '../views/pay.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
