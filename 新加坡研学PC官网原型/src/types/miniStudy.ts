import type { I18nText } from "@/i18n/types"

export type MiniStudyHero = {
  bg: string
  eyebrow: I18nText
  title: I18nText
  desc: I18nText
}

export type MiniStudyFamilyCard = {
  icon: string
  title: I18nText
  desc: I18nText
}

export type MiniStudyFeatureItem = {
  title: I18nText
  desc: I18nText
}

export type MiniStudySimpleBullet = I18nText

export type MiniStudyAuthorityItem = {
  title: I18nText
  desc: I18nText
}

export type MiniStudyPrepareBlock = {
  icon: string
  title: I18nText
  items: I18nText[]
}

export type MiniStudyCalendarCell = {
  dayLabel: string
  title: I18nText
  desc?: I18nText
  kind: "weekend" | "course"
  span?: number
}

export type MiniStudyPricingItem = {
  type: "include" | "gift" | "exclude"
  text: I18nText
}

export type MiniStudyPageData = {
  hero: MiniStudyHero
  familyTitle: I18nText
  familyDesc: I18nText
  familyCards: MiniStudyFamilyCard[]
  schoolTitle: I18nText
  schoolSubtitle: I18nText
  featureTitle: I18nText
  features: MiniStudyFeatureItem[]
  gainsTitle: I18nText
  gains: MiniStudySimpleBullet[]
  facultyTitle: I18nText
  facultyDesc: I18nText
  authorityTitle: I18nText
  authorities: MiniStudyAuthorityItem[]
  prepareTitle: I18nText
  prepareSubtitle: I18nText
  prepareBlocks: MiniStudyPrepareBlock[]
  calendarTitle: I18nText
  calendarSubtitle: I18nText
  calendarHeaders: I18nText[]
  calendarCells: MiniStudyCalendarCell[]
  pricingTitle: I18nText
  pricingItems: MiniStudyPricingItem[]
  price: I18nText
  priceNote: I18nText
  pricingCta: I18nText
}

