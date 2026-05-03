import type { I18nText } from "@/i18n/types"

export type DocSection = {
  title: I18nText
  content: I18nText
}

export type DocPageData = {
  title: I18nText
  subtitle?: I18nText
  icon?: string
  variant?: "plain" | "card"
  sections: DocSection[]
  footerNote?: I18nText
}

