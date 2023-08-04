import { createRouter, createWebHistory } from 'vue-router'
import Blog from '@/views/Blog.vue'
import DetailsArticle from  '@/components/DetailsArticle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        name: 'Home',
        component: Blog
      },
      {
        path:'/Article/:id',
        name: 'Details',
        component: DetailsArticle
      }

  ]
})

export default router
