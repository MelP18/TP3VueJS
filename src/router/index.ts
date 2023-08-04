import { createRouter, createWebHistory } from 'vue-router'
import Blog from '@/views/Blog.vue'
import Newarticle from '@/views/Newarticle.vue'
import DetailsArticle from '@/views/DetailsArticle.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        name: 'Home',
        component: Blog
      },
      {
        path:'/Articles/:id',
        name:'Detail',
        component:DetailsArticle
      },
      {
        path:'/Newarticle',
        name:'NewArticle',
        component: Newarticle
      }

  ]
})

export default router
