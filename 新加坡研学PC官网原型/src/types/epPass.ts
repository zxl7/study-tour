import type { I18nText } from "@/i18n/types"

export type EpHeroBullet = I18nText

export type EpHeroData = {
  bg: string
  title: I18nText
  subtitle: I18nText
  bullets: EpHeroBullet[]
}

export type EpPolicyCard = {
  title: I18nText
  desc: I18nText
  borderColor: "blue" | "gold"
}

export type EpAdvantageCard = {
  icon: string
  title: I18nText
  items: I18nText[]
}

export type EpSimpleFeature = {
  icon: string
  title: I18nText
  desc: I18nText
}

export type EpProcessStep = {
  no: string
  title: I18nText
  desc: I18nText
  tone: "blue" | "gold"
}

export type EpGuaranteeItem = {
  title: I18nText
  desc: I18nText
  image: string
  badgeIcon?: string
}

export type EpPassPageData = {
  hero: EpHeroData
  policyTitle: I18nText
  policyCards: EpPolicyCard[]
  policyImage: string
  policyImageCaption: I18nText
  advantagesTitle: I18nText
  advantagesSubtitle: I18nText
  advantagesLeftTitle: I18nText
  advantagesLeftDesc: I18nText
  advantagesLeftRightsTitle: I18nText
  advantagesLeftRights: I18nText[]
  advantagesCards: EpAdvantageCard[]
  chooseUsTitle: I18nText
  chooseUsFeatures: EpSimpleFeature[]
  processTitle: I18nText
  processSteps: EpProcessStep[]
  guaranteeTitle: I18nText
  guarantees: EpGuaranteeItem[]
}

