import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'ctgy',
    path: '/ctgy',
    component: () => import('@/views/ctgy/index.vue'),
  },
  {
    name: 'root',
    path: '/',
    component: () => import('@/views/ctgy/index.vue'),
  },
  {
    name: 'books',
    path: '/books',
    component: () => import('@/views/books/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
