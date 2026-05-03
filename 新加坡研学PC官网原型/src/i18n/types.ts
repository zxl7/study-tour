/**
 * 功能：定义极简双语类型与工具函数（面向初学者）。
 * 设计目标：
 * - 不引入重型 i18n 框架
 * - 以 { zh, en } 的方式就地维护文案，直观、易修改
 */

export type Lang = "zh" | "en"

export type I18nText = {
  zh: string
  en: string
}

/**
 * 功能：根据语言取对应文案（纯函数，无副作用）。
 * @param text 双语文案对象
 * @param lang 当前语言
 */
export const pickText = (text: I18nText, lang: Lang): string => text[lang]

