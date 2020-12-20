import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {path: '/home',name: 'Home',component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')},
  {path: '/info',name: 'Info',component: () => import(/* webpackChunkName: "info" */ '../views/info.vue')},
  {path: '/order',name: 'Order',component: () => import(/* webpackChunkName: "order" */ '../views/order.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
