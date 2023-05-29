import { createRouter,createWebHashHistory } from 'vue-router'

const routes = [
  {path:'/home',
    name:'Home',
    component:()=> import('../views/Home.vue')
  }
]

const router =createRouter({
routes,
  history:createWebHashHistory()
})
export default router
