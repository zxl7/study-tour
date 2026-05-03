import type { I18nText } from "@/i18n/types"

export type GrowthHeroData = {
  bg: string
  duration: I18nText
  age: I18nText
  title: I18nText
  subtitle: I18nText
  subtitleAccent: I18nText
}

export type GrowthHighlightCard = {
  image: string
  title: I18nText
  desc: I18nText
}

export type GrowthEscortItem = {
  icon: string
  title: I18nText
  desc: I18nText
}

export type GrowthSchoolCard = {
  image: string
  title: I18nText
  desc: I18nText
  icon: string
}

export type GrowthCourseCard = {
  image: string
  tag: I18nText
  tagColor: string
  desc: I18nText
}

export type GrowthTimelineItem = {
  day: string
  place: I18nText
  desc: I18nText
  image: string
}

export type GrowthHospitalityCard = {
  image: string
  title: I18nText
  desc: I18nText
}

export type GrowthCampPageData = {
  hero: GrowthHeroData
  highlightTitle: I18nText
  highlightSubtitle: I18nText
  highlights: GrowthHighlightCard[]
  escortTitle: I18nText
  escortIntro: I18nText
  escortItems: GrowthEscortItem[]
  escortImage: string
  escortBadgeTitle: I18nText
  escortBadgeDesc: I18nText
  schoolsTitle: I18nText
  schoolsSubtitle: I18nText
  schools: GrowthSchoolCard[]
  coursesTitle: I18nText
  coursesSubtitle: I18nText
  courses: GrowthCourseCard[]
  timelineTitle: I18nText
  timelineSubtitle: I18nText
  timeline: GrowthTimelineItem[]
  hospitalityTitle: I18nText
  hospitality: GrowthHospitalityCard[]
}

