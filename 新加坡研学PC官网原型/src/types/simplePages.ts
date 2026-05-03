import type { I18nText } from "@/i18n/types"

export type FamilyOfficePageData = {
  heroTitle: I18nText
  heroDesc: I18nText
  sectionTitle: I18nText
  sectionDesc: I18nText
  bullets: I18nText[]
  teamTitle: I18nText
  teamDesc: I18nText
  cta: I18nText
}

export type ProcessStepItem = {
  no: string
  title: I18nText
  desc: I18nText
  tone?: "blue" | "gold"
}

export type ProcessPageData = {
  title: I18nText
  subtitle: I18nText
  steps: ProcessStepItem[]
  cta?: I18nText
}

export type PartnershipFeature = I18nText

export type PartnershipPageData = {
  heroTitle: I18nText
  heroDesc: I18nText
  channelTitle: I18nText
  channelDesc: I18nText
  features: PartnershipFeature[]
  channelCta: I18nText
  contactTitle: I18nText
  hotlineLabel: I18nText
  hotlineValue: string
  emailLabel: I18nText
  emailValue: string
  addressLabel: I18nText
  addressValue: I18nText
}

