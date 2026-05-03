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
import { pickText, type I18nText } from "@/i18n/types"
import { getStoredLang } from "@/i18n/useLang"

// 使用纯函数生成路由配置
const createRoutes = (): RouteRecordRaw[] => [
  {
    path: "/",
    component: Layout,
    redirect: "/home", // 默认重定向到首页
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: { title: { zh: "首页 - 2026新加坡研学", en: "Home - SG Study 2026" } satisfies I18nText },
      },
      {
        path: "growth-camp",
        name: "GrowthCamp",
        component: GrowthCamp,
        meta: { title: { zh: "新加坡成长营 - 2026新加坡研学", en: "Growth Camp - SG Study 2026" } satisfies I18nText },
      },
      {
        path: "mini-study",
        name: "MiniStudy",
        component: MiniStudy,
        meta: { title: { zh: "新加坡微留学 - 2026新加坡研学", en: "Mini Study - SG Study 2026" } satisfies I18nText },
      },
      {
        path: "ep-pass",
        name: "EpPass",
        component: EpPass,
        meta: { title: { zh: "人才准证EP - 2026新加坡研学", en: "EP Pass - SG Study 2026" } satisfies I18nText },
      },
      {
        path: "school-camp",
        name: "SchoolCamp",
        component: SchoolCamp,
        meta: { title: { zh: "国际学校体验营 - 2026新加坡研学", en: "School Camp - SG Study 2026" } satisfies I18nText },
      },
      {
        path: "about",
        name: "About",
        component: AboutPage,
        meta: { title: { zh: "集团简介 - 2026新加坡研学", en: "About - SG Study 2026" } satisfies I18nText },
      },
      {
        path: "family-office",
        name: "FamilyOffice",
        component: FamilyOfficePage,
        meta: { title: { zh: "家族办公室 - 2026新加坡研学", en: "Family Office - SG Study 2026" } satisfies I18nText },
      },
      {
        path: "self-employed-pass",
        name: "SelfEmployedPass",
        component: SelfEmployedPassPage,
        meta: { title: { zh: "自雇准证办理 - 2026新加坡研学", en: "Self-Employed EP - SG Study 2026" } satisfies I18nText },
      },
      {
        path: "pr-application",
        name: "PrApplication",
        component: PrApplicationPage,
        meta: { title: { zh: "PR永居申请 - 2026新加坡研学", en: "PR Application - SG Study 2026" } satisfies I18nText },
      },
      {
        path: "terms",
        name: "Terms",
        component: TermsPage,
        meta: { title: { zh: "服务条款 - 2026新加坡研学", en: "Terms - SG Study 2026" } satisfies I18nText },
      },
      {
        path: "privacy",
        name: "Privacy",
        component: PrivacyPage,
        meta: { title: { zh: "隐私政策 - 2026新加坡研学", en: "Privacy - SG Study 2026" } satisfies I18nText },
      },
      {
        path: "partnership",
        name: "Partnership",
        component: PartnershipPage,
        meta: { title: { zh: "合作咨询 - 2026新加坡研学", en: "Partnership - SG Study 2026" } satisfies I18nText },
      },
      {
        // 404
        path: "/:pathMatch(.*)*",
        redirect: "/home",
        meta: { title: { zh: "页面不存在 - 2026新加坡研学", en: "404 Not Found" } satisfies I18nText },
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
  const title = to.meta.title
  if (!title) return next()
  if (typeof title === "string") {
    document.title = title
    return next()
  }
  document.title = pickText(title as I18nText, getStoredLang())
  next()
})

export default router
