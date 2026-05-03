import { ref } from "vue"
import type { Lang } from "@/i18n/types"

const STORAGE_KEY = "sg-study:lang"

/**
 * 功能：把任意输入归一化为 Lang（纯函数）。
 * @param raw localStorage 读取值
 */
const normalizeLang = (raw: string | null | undefined): Lang => (raw === "en" ? "en" : "zh")

/**
 * 功能：读取本地存储的语言（纯函数，便于 router 等非组件环境使用）。
 */
export const getStoredLang = (): Lang => {
  if (typeof window === "undefined") return "zh"
  return normalizeLang(window.localStorage.getItem(STORAGE_KEY))
}

/**
 * 说明：用模块级 ref 作为全局单例（全站共享同一语言状态）。
 */
const lang = ref<Lang>(getStoredLang())

/**
 * 功能：设置语言并持久化到 localStorage（有副作用）。
 * @param next 目标语言
 */
const setLang = (next: Lang) => {
  lang.value = next
  if (typeof window === "undefined") return
  window.localStorage.setItem(STORAGE_KEY, next)
}

/**
 * 功能：切换中/英（有副作用）。
 */
const toggleLang = () => setLang(lang.value === "zh" ? "en" : "zh")

export const useLang = () => ({ lang, setLang, toggleLang })

