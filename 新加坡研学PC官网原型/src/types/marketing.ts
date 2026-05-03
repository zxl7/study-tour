import type { I18nText } from "@/i18n/types"

export type HeroTag = I18nText

export type HeroData = {
  bg: string
  title: I18nText
  subtitle?: I18nText
  tags?: HeroTag[]
}

export type ImagePair = {
  left: string
  right: string
}

export type CourseCard = {
  icon: string
  title: I18nText
  desc: I18nText
  images: ImagePair
}

export type CourseSection = {
  title: I18nText
  badges?: I18nText[]
  cards: CourseCard[]
}

export type SyncCard = {
  icon: string
  title: I18nText
  desc: I18nText
  image: string
}

export type SyncSection = {
  title: I18nText
  cards: SyncCard[]
}

export type TimelineDay = {
  day: string
  title: I18nText
  desc: I18nText
  images?: string[]
}

export type TimelineSection = {
  title: I18nText
  subtitle?: I18nText
  days: TimelineDay[]
}

export type CuisineItem = {
  name: I18nText
  image: string
}

export type HotelItem = {
  name: I18nText
  faviconDomain: string
}

export type CuisineHotelSection = {
  eyebrow: I18nText
  title: I18nText
  desc: I18nText
  cuisines: CuisineItem[]
  hotelsTitle: I18nText
  hotels: HotelItem[]
  highlightImage: string
  highlightTitle: I18nText
  highlightDesc: I18nText
}

export type PricingFeature = I18nText

export type PricingSection = {
  title: I18nText
  price: I18nText
  unit: I18nText
  features: PricingFeature[]
  cta: I18nText
}

export type MarketingPageData = {
  hero: HeroData
  courseSection?: CourseSection
  syncSection?: SyncSection
  timelineSection?: TimelineSection
  cuisineHotelSection?: CuisineHotelSection
  pricingSection?: PricingSection
}

