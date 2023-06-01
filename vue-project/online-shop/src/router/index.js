import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
//import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=> import('../views/Login.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: ()=> import('../views/AboutView.vue')
    }
  ]
})

export default router
