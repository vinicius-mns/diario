import { createRouter, createWebHashHistory } from 'vue-router'
import DiaryPage from '@/views/DiaryPage.vue'
import NotFound from '@/views/NotFound.vue'
import HomePage from '@/views/HomePage.vue'
import Register from '@/views/RegisterPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import DiaryCards from '@/views/DiaryCards.vue'
import DiaryCard_ID from '@/views/DiaryCard_ID.vue'
import CoverPage from '@/views/CoverPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/cover',
      name: 'cover',
      component: CoverPage
    },
    {
      path: '/diary',
      name: 'diary',
      component: DiaryPage,
      children: [
        {
          path: 'remote',
          name: 'remote cards',
          component: DiaryCards,
          props: { get: 'remote' }
        },
        {
          path: 'local',
          name: 'local cards',
          component: DiaryCards,
          props: { get: 'local' }
        },
        {
          path:'local/:id',
          name: 'local card', 
          component: DiaryCard_ID,
          props: { get: 'local' }
        },
        {
          path:'remote/:id',
          name: 'remote card', 
          component: DiaryCard_ID,
          props: { get: 'remote' }
        },
        {
          path: '',
          name: 'not-found',
          redirect: '/notFound'
        }
      ]
    },
    {
      path: '/notFound',
      name: 'not found',
      component: NotFound
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/notFound'
    }
  ]
})

export default router
