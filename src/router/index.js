import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterShortener from '../views/RegisterShortener.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/web/shortener',
      name: 'shortener',
      component: RegisterShortener,
    },
  ],
})

export default router
