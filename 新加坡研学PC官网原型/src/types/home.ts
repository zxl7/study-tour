import type { I18nText } from "@/i18n/types"

export type HomeHeroData = {
  badge: I18nText
  title: I18nText
  titleAccent: I18nText
  desc: I18nText
  primaryCta: I18nText
  secondaryCta: I18nText
  bg: string
}

export type HomeIconCard = {
  icon: string
  title: I18nText
  desc: I18nText
}

export type HomeProjectCard = {
  image: string
  badge: I18nText
  title: I18nText
  desc: I18nText
  metaA: I18nText
  metaB: I18nText
  metaAIcon: string
  metaBIcon: string
  to: string
  cta: I18nText
}

export type HomeCompareColumn = {
  title: I18nText
  subtitle: I18nText
}

export type HomeCompareCell = {
  title: I18nText
  bullets: I18nText[]
}

export type HomeCompareRow = {
  dimension: I18nText
  left: HomeCompareCell
  right: HomeCompareCell
}

export type HomeStat = {
  value: string
  label: I18nText
}

export type HomeCert = {
  image: string
  label: I18nText
}

export type HomeQrAdvisor = {
  image: string
  label: I18nText
}

export type HomeFormOption = I18nText

export type HomePageData = {
  hero: HomeHeroData
  singaporeTitle: I18nText
  singaporeSubtitle: I18nText
  singaporeReasons: HomeIconCard[]
  chooseUsTitle: I18nText
  chooseUsSubtitle: I18nText
  chooseUsFeatures: HomeIconCard[]
  projectsTitle: I18nText
  projectsSubtitle: I18nText
  projects: HomeProjectCard[]
  compareTitle: I18nText
  compareSubtitle: I18nText
  compareLeft: HomeCompareColumn
  compareRight: HomeCompareColumn
  compareRows: HomeCompareRow[]
  expertsTitle: I18nText
  stats: HomeStat[]
  certs: HomeCert[]
  contactTitle: I18nText
  contactDesc: I18nText
  formNamePlaceholder: I18nText
  formPhonePlaceholder: I18nText
  formProjectPlaceholder: I18nText
  formDemandPlaceholder: I18nText
  formOptions: HomeFormOption[]
  formSubmit: I18nText
  hotlineTitle: I18nText
  hotlineValue: string
  hotlineTime: I18nText
  addressTitle: I18nText
  addressValue: I18nText
  advisors: HomeQrAdvisor[]
}

