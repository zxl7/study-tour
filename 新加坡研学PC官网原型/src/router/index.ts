import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout.vue'
import Home from '@/views/Home.vue'
import GrowthCamp from '@/views/GrowthCamp.vue'
import MiniStudy from '@/views/MiniStudy.vue'
import EpPass from '@/views/EpPass.vue'
import SchoolCamp from '@/views/SchoolCamp.vue'

// 使用纯函数生成路由配置
const createRoutes = (): RouteRecordRaw[] => [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: { title: '首页 - 2026新加坡研学' }
      },
      {
        path: 'growth-camp',
        name: 'GrowthCamp',
        component: GrowthCamp,
        meta: { title: '新加坡成长营 - 2026新加坡研学' }
      },
      {
        path: 'mini-study',
        name: 'MiniStudy',
        component: MiniStudy,
        meta: { title: '新加坡微留学 - 2026新加坡研学' }
      },
      {
        path: 'ep-pass',
        name: 'EpPass',
        component: EpPass,
        meta: { title: '人才准证EP - 2026新加坡研学' }
      },
      {
        path: 'school-camp',
        name: 'SchoolCamp',
        component: SchoolCamp,
        meta: { title: '国际学校体验营 - 2026新加坡研学' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: createRoutes(),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// 路由守卫：更新页面标题，体现函数式单一职责
router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router
