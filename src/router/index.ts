import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/notFound',
      name: 'not found',
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/notFound'
    }
  ]
})

export default router
