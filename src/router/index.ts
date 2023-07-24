import { createRouter, createWebHashHistory } from 'vue-router'
import DiaryPage from '@/views/DiaryPage.vue'
import DiaryPageId from '@/views/DiaryPageId.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'diary'
    },
    {
      path: '/diary',
      name: 'diary',
      component: DiaryPage
    },
    {
      path: '/diary/:id',
      name: 'day',
      component: DiaryPageId,
    },
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
