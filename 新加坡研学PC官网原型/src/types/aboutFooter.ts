import type { I18nText } from "@/i18n/types"

export type AboutCard = {
  title: I18nText
  desc: I18nText
}

export type AboutPageData = {
  title: I18nText
  introA: I18nText
  introB: I18nText
  cards: AboutCard[]
}

export type FooterLink = {
  to: string
  label: I18nText
}

export type FooterLinkGroup = {
  title: I18nText
  links: FooterLink[]
}

export type FooterSocial = {
  icon: string
  href: string
  label: I18nText
}

export type FooterData = {
  brandName: I18nText
  brandDesc: I18nText
  linkGroups: FooterLinkGroup[]
  socials: FooterSocial[]
  icp: string
  copyright: I18nText
}

