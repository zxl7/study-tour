import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Layout from "@/components/Layout.vue"
import Home from "@/views/Home.vue"
import GrowthCamp from "@/views/GrowthCamp.vue"
import MiniStudy from "@/views/MiniStudy.vue"
import EpPass from "@/views/EpPass.vue"
import SchoolCamp from "@/views/SchoolCamp.vue"
import AboutPage from "@/views/AboutPage.vue"
import FamilyOfficePage from "@/views/FamilyOfficePage.vue"
import SelfEmployedPassPage from "@/views/SelfEmployedPassPage.vue"
import PrApplicationPage from "@/views/PrApplicationPage.vue"
import TermsPage from "@/views/TermsPage.vue"
import PrivacyPage from "@/views/PrivacyPage.vue"
import PartnershipPage from "@/views/PartnershipPage.vue"

// 使用纯函数生成路由配置
const createRoutes = (): RouteRecordRaw[] => [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: { title: "首页 - 2026新加坡研学" },
      },
      {
        path: "growth-camp",
        name: "GrowthCamp",
        component: GrowthCamp,
        meta: { title: "新加坡成长营 - 2026新加坡研学" },
      },
      {
        path: "mini-study",
        name: "MiniStudy",
        component: MiniStudy,
        meta: { title: "新加坡微留学 - 2026新加坡研学" },
      },
      {
        path: "ep-pass",
        name: "EpPass",
        component: EpPass,
        meta: { title: "人才准证EP - 2026新加坡研学" },
      },
      {
        path: "school-camp",
        name: "SchoolCamp",
        component: SchoolCamp,
        meta: { title: "国际学校体验营 - 2026新加坡研学" },
      },
      {
        path: "about",
        name: "About",
        component: AboutPage,
        meta: { title: "集团简介 - 2026新加坡研学" },
      },
      {
        path: "family-office",
        name: "FamilyOffice",
        component: FamilyOfficePage,
        meta: { title: "家族办公室 - 2026新加坡研学" },
      },
      {
        path: "self-employed-pass",
        name: "SelfEmployedPass",
        component: SelfEmployedPassPage,
        meta: { title: "自雇准证办理 - 2026新加坡研学" },
      },
      {
        path: "pr-application",
        name: "PrApplication",
        component: PrApplicationPage,
        meta: { title: "PR永居申请 - 2026新加坡研学" },
      },
      {
        path: "terms",
        name: "Terms",
        component: TermsPage,
        meta: { title: "服务条款 - 2026新加坡研学" },
      },
      {
        path: "privacy",
        name: "Privacy",
        component: PrivacyPage,
        meta: { title: "隐私政策 - 2026新加坡研学" },
      },
      {
        path: "partnership",
        name: "Partnership",
        component: PartnershipPage,
        meta: { title: "合作咨询 - 2026新加坡研学" },
      },
      {
        // 404
        path: "/:pathMatch(.*)*",
        redirect: "/home",
        meta: { title: "404 Not Found" },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: createRoutes(),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

// 路由守卫：更新页面标题，体现函数式单一职责
router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router
