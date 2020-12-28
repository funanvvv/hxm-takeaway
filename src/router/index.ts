import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {path: '/home',name: 'Home',meta: {tabBar: true},
  component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')},
  {path: '/info',name: 'Info',meta: {tabBar: true},
  component: () => import(/* webpackChunkName: "info" */ '../views/info.vue')},
  {path: '/order',name: 'Order',meta: {tabBar: true},
  component: () => import(/* webpackChunkName: "order" */ '../views/order.vue')},
  {path: '/search',name: 'Search',component: () => import(/* webpackChunkName: "search" */ '../views/search.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
