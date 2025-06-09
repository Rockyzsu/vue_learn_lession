import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      sidebar: () => import('../components/DefaultSidebar.vue')
    }
  },
  {
    path: '/dashboard/:id',
    name: 'Dashboard',
    props: true,
    components: {
      default: Dashboard,
      detail: () => import('../components/DashboardDetail.vue'),
      sidebar: () => import('../components/DefaultSidebar.vue')
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    components: {
      default: Settings,
      sidebar: () => import('../components/SettingsSidebar.vue')
    },
    beforeEnter:(to,from,next)=>{
      console.log(to);
      console.log(from)

      next();
    }
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history:createWebHistory(),
  routes
})

export default router  