import { createRouter, createWebHashHistory } from 'vue-router'
import AppVue from '../App.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppVue
    },
  ]
})

export default router
