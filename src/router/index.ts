import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// RouteLocationRaw 内置的类型接口

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/waterFall',
    name: 'WaterFall',
    component: () => import('@/views/WaterFall/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/Layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/index/index.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router