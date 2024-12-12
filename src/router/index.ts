import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../views/front-page/FrontPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'front-page',
      component: FrontPage
    }
  ]
})

export default router
