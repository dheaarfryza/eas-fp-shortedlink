import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router