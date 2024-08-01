import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('../views/ContactUsView.vue')
    }
  ]
})

export default router
