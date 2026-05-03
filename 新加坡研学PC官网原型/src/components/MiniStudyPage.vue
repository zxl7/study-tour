<template>
  <div class="page-container">
    <header class="relative pt-20 h-[500px] flex items-center overflow-hidden">
      <img :alt="t(data.hero.title)" class="absolute inset-0 w-full h-full object-cover" :src="data.hero.bg" />
      <div class="absolute inset-0 bg-gradient-to-r from-sg-blue/80 to-transparent"></div>
      <div class="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <div class="max-w-xl text-white">
          <p class="text-luxury-gold tracking-[0.2em] font-bold mb-4 uppercase">{{ t(data.hero.eyebrow) }}</p>
          <h1 class="text-5xl font-bold mb-6 italic underline decoration-luxury-gold decoration-4">{{ t(data.hero.title) }}</h1>
          <p class="text-xl leading-relaxed text-blue-50">{{ t(data.hero.desc) }}</p>
        </div>
      </div>
    </header>

    <section class="py-16 bg-white">
      <div class="max-w-[1440px] mx-auto px-8 grid grid-cols-3 gap-12">
        <div class="col-span-1">
          <h2 class="text-4xl font-bold text-sg-blue mb-6">{{ t(data.familyTitle) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mb-8"></div>
          <p class="text-gray-500 text-lg leading-relaxed">{{ t(data.familyDesc) }}</p>
        </div>
        <div class="col-span-2 grid grid-cols-2 gap-8">
          <div
            v-for="card in data.familyCards"
            :key="t(card.title)"
            class="p-8 border border-gray-100 rounded-2xl bg-slate-50 hover:border-luxury-gold transition-all"
          >
            <h4 class="text-xl font-bold mb-4 flex items-center">
              <iconify-icon class="text-luxury-gold mr-3" :icon="card.icon"></iconify-icon>
              {{ t(card.title) }}
            </h4>
            <p class="text-gray-500">{{ t(card.desc) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">{{ t(data.schoolTitle) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p class="text-gray-500 max-w-2xl mx-auto italic text-lg">{{ t(data.schoolSubtitle) }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div class="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-8">
              <div class="w-12 h-12 bg-blue-100 text-sg-blue rounded-xl flex items-center justify-center mr-4">
                <iconify-icon class="text-2xl" icon="mdi:star-circle"></iconify-icon>
              </div>
              <h3 class="text-2xl font-bold text-sg-blue">{{ t(data.featureTitle) }}</h3>
            </div>
            <ul class="space-y-6">
              <li v-for="(feature, idx) in data.features" :key="t(feature.title)" class="flex items-start">
                <span class="text-luxury-gold font-bold text-xl mr-4">{{ idx + 1 }}</span>
                <div>
                  <h4 class="font-bold text-lg mb-1">{{ t(feature.title) }}</h4>
                  <p class="text-gray-500 text-sm leading-relaxed">{{ t(feature.desc) }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-8">
              <div class="w-12 h-12 bg-blue-100 text-sg-blue rounded-xl flex items-center justify-center mr-4">
                <iconify-icon class="text-2xl" icon="mdi:gift"></iconify-icon>
              </div>
              <h3 class="text-2xl font-bold text-sg-blue">{{ t(data.gainsTitle) }}</h3>
            </div>
            <ul class="space-y-6">
              <li v-for="gain in data.gains" :key="t(gain)" class="flex items-start">
                <iconify-icon class="text-luxury-gold text-xl mr-4 mt-1" icon="mdi:check-circle"></iconify-icon>
                <p class="text-gray-600 leading-relaxed">{{ t(gain) }}</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-white rounded-3xl p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-100 text-sg-blue rounded-full flex items-center justify-center mr-4">
                <iconify-icon class="text-2xl" icon="mdi:account-tie"></iconify-icon>
              </div>
              <h3 class="text-2xl font-bold text-sg-blue">{{ t(data.facultyTitle) }}</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">{{ t(data.facultyDesc) }}</p>
          </div>

          <div class="bg-white rounded-3xl p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-100 text-sg-blue rounded-full flex items-center justify-center mr-4">
                <iconify-icon class="text-2xl" icon="mdi:certificate"></iconify-icon>
              </div>
              <h3 class="text-2xl font-bold text-sg-blue">{{ t(data.authorityTitle) }}</h3>
            </div>
            <ul class="space-y-4">
              <li v-for="item in data.authorities" :key="t(item.title)" class="flex items-start">
                <iconify-icon class="text-sg-blue text-xl mr-3 mt-1" icon="mdi:medal"></iconify-icon>
                <div>
                  <h4 class="font-bold text-gray-800">{{ t(item.title) }}</h4>
                  <p class="text-sm text-gray-500">{{ t(item.desc) }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">{{ t(data.prepareTitle) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p class="text-gray-500 max-w-2xl mx-auto italic text-lg">{{ t(data.prepareSubtitle) }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            v-for="block in data.prepareBlocks"
            :key="t(block.title)"
            class="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:shadow-lg transition-shadow relative overflow-hidden"
          >
            <div class="absolute -right-6 -bottom-6 text-blue-100/50">
              <iconify-icon class="text-[180px]" :icon="block.icon === 'mdi:home-heart' ? 'ph:house-line-bold' : 'ph:stack-bold'"></iconify-icon>
            </div>

            <div class="flex items-center mb-8 relative z-10">
              <div class="w-12 h-12 bg-blue-100 text-sg-blue rounded-xl flex items-center justify-center mr-4">
                <iconify-icon class="text-2xl" :icon="block.icon"></iconify-icon>
              </div>
              <h3 class="text-2xl font-bold text-sg-blue">{{ t(block.title) }}</h3>
            </div>

            <ul class="space-y-6 text-gray-600 relative z-10">
              <li v-for="item in block.items" :key="t(item)" class="flex items-start">
                <iconify-icon class="text-luxury-gold text-xl mr-4 mt-1" icon="mdi:check-circle"></iconify-icon>
                <p class="leading-relaxed">{{ t(item) }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-slate-50">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">{{ t(data.calendarTitle) }}</h2>
          <p class="text-gray-500 italic">{{ t(data.calendarSubtitle) }}</p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <div class="calendar-grid">
            <div
              v-for="(header, idx) in data.calendarHeaders"
              :key="t(header)"
              class="calendar-header"
              :class="idx === 0 || idx === 6 ? 'bg-luxury-gold' : ''"
            >
              {{ t(header) }}
            </div>

            <div
              v-for="cell in data.calendarCells"
              :key="cell.dayLabel"
              class="calendar-day transition-colors group"
              :class="cell.kind === 'course'
                ? 'bg-blue-50 hover:bg-blue-100 col-span-5 flex flex-col items-center justify-center text-sg-blue'
                : 'bg-orange-50 hover:bg-orange-100'"
            >
              <template v-if="cell.kind === 'course'">
                <span class="text-lg font-bold tracking-widest mb-1 group-hover:scale-105 transition-transform">{{ cell.dayLabel }}</span>
                <span class="text-sm font-medium text-center">{{ t(cell.title) }}</span>
              </template>
              <template v-else>
                <span class="text-xs text-luxury-gold font-bold">{{ cell.dayLabel }}</span>
                <br />
                <p class="text-sm font-bold mt-2 text-sg-blue">{{ t(cell.title) }}</p>
                <p v-if="cell.desc" class="text-[10px] text-gray-500 mt-1 leading-relaxed">{{ t(cell.desc) }}</p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="bg-sg-blue rounded-3xl p-16 text-white flex flex-col md:flex-row justify-between items-center overflow-hidden relative">
          <div class="absolute -right-20 -bottom-20 opacity-10">
            <iconify-icon class="text-[400px]" icon="ph:coin-vertical-bold"></iconify-icon>
          </div>
          <div class="relative z-10 w-full md:w-2/3 mb-10 md:mb-0">
            <h2 class="text-4xl font-bold mb-6">{{ t(data.pricingTitle) }}</h2>
            <ul class="space-y-4 text-blue-100 text-lg">
              <li v-for="item in data.pricingItems" :key="t(item.text)" class="flex items-start">
                <iconify-icon
                  class="mr-3 mt-1"
                  :class="item.type === 'include' ? 'text-luxury-gold' : item.type === 'gift' ? 'text-gray-300' : 'text-red-400'"
                  :icon="item.type === 'include' ? 'ph:check-circle-bold' : item.type === 'gift' ? 'ph:info-bold' : 'ph:x-circle-bold'"
                ></iconify-icon>
                <span :class="item.type !== 'include' ? 'text-sm' : ''">{{ t(item.text) }}</span>
              </li>
            </ul>
          </div>
          <div class="relative z-10 text-center w-full md:w-1/3 flex justify-end">
            <div class="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 w-full max-w-sm">
              <p class="text-luxury-gold font-bold mb-2">ALL-INCLUSIVE</p>
              <p class="text-6xl font-black mb-4 italic">{{ t(data.price) }}</p>
              <p class="text-xs text-blue-200 mb-8">{{ t(data.priceNote) }}</p>
              <button
                type="button"
                @click="openContactModal"
                class="bg-luxury-gold hover:bg-[#d49552] text-white w-full py-4 rounded-xl font-bold transition-all shadow-xl"
              >
                {{ t(data.pricingCta) }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue"
import type { Ref } from "vue"
import { pickText, type I18nText, type Lang } from "@/i18n/types"
import type { MiniStudyPageData } from "@/types/miniStudy"

const data: MiniStudyPageData = {
  hero: {
    bg: "/img/28day.jpeg",
    eyebrow: { zh: "28天真实插班", en: "28-Day Immersion" },
    title: { zh: "狮城微留学", en: "Singapore Mini Study" },
    desc: {
      zh: "像当地学生一样生活，在全英环境中快速突破语言瓶颈，全真体验新加坡中小学精英教育体系。",
      en: "Live like a local student, break through the language barrier, and experience Singapore's school system first-hand.",
    },
  },

  familyTitle: { zh: "适合怎样的家庭？", en: "Who Is This For?" },
  familyDesc: {
    zh: "微留学不仅仅是一次旅行，它是一次低成本的留学预演，特别适合以下需求的家庭。",
    en: "More than a trip, this is a low-risk overseas study rehearsal for families with clear education goals.",
  },
  familyCards: [
    {
      icon: "ph:globe-stand-bold",
      title: { zh: "计划低龄留学的家庭", en: "Families Planning Early Overseas Study" },
      desc: {
        zh: "在正式决定前，让孩子提前测试自己对新加坡教育环境的适应能力。",
        en: "Test whether your child can adapt to Singapore's learning environment before making a long-term decision.",
      },
    },
    {
      icon: "ph:chats-bold",
      title: { zh: "需快速提升口语的学生", en: "Students Needing Spoken English Growth" },
      desc: {
        zh: "28天全英社交+全英课堂，强迫式开口，告别哑巴英语。",
        en: "Daily full-English interaction and classes help students speak more naturally and confidently.",
      },
    },
    {
      icon: "ph:certificate-bold",
      title: { zh: "提升升学竞争力的学生", en: "Students Building Admissions Competitiveness" },
      desc: {
        zh: "海外插班经历是履历亮点，有助于申请国际学校。",
        en: "A real overseas classroom experience becomes a meaningful highlight in future school applications.",
      },
    },
    {
      icon: "ph:house-line-bold",
      title: { zh: "想体验寄宿家庭生活的家庭", en: "Families Curious About Homestay Life" },
      desc: {
        zh: "与当地家庭同吃同住，深入了解新加坡社会文化与教养方式。",
        en: "Live with a local host family and understand Singaporean culture and daily routines more deeply.",
      },
    },
  ],

  schoolTitle: { zh: "学校介绍", en: "School Overview" },
  schoolSubtitle: {
    zh: "一人一课表，定制化教学；2-4个月稳步提级，新加坡纪录认证",
    en: "Personalized schedules, tailored teaching and recognized academic progression",
  },
  featureTitle: { zh: "核心特色", en: "Core Features" },
  features: [
    {
      title: { zh: "全定制课程", en: "Personalized Curriculum" },
      desc: {
        zh: "按孩子学习水平、风格、记忆模式定制课表，匹配个人学习节奏。",
        en: "A personalized schedule based on level, learning style and pace.",
      },
    },
    {
      title: { zh: "独有的教学系统™", en: "Proprietary Teaching System" },
      desc: {
        zh: "精准评估-夯实基础-靶向补漏-多维掌握-科学复习，全程动态优化。",
        en: "Assessment, foundation-building, targeted reinforcement and scientific review in one dynamic system.",
      },
    },
    {
      title: { zh: "顶尖师资", en: "Top Faculty" },
      desc: {
        zh: "数学博士、注册教师、教育心理学家领衔，教师均有10+年教学经验。",
        en: "Led by experienced teachers, subject specialists and educational experts with 10+ years of teaching experience.",
      },
    },
    {
      title: { zh: "能力培养", en: "Capability Building" },
      desc: {
        zh: "兼顾应试提分与终身学习力，打造自主学习能力。",
        en: "Improve both academic scores and long-term independent learning ability.",
      },
    },
  ],

  gainsTitle: { zh: "孩子的收获", en: "What Students Gain" },
  gains: [
    { zh: "专属课表提升学习效率，逐步建立自主学习能力。", en: "Higher study efficiency through tailored schedules and stronger self-learning habits." },
    { zh: "学科成绩更快提升，建立学习自信。", en: "Faster subject improvement and stronger academic confidence." },
    { zh: "节省时间投入兴趣活动，形成更好的学习节奏。", en: "Better time management for both study and personal interests." },
    { zh: "更轻松应对国际课程与未来升学挑战。", en: "Stronger readiness for international curricula and future admissions." },
  ],

  facultyTitle: { zh: "师资力量", en: "Faculty Strength" },
  facultyDesc: {
    zh: "由数学博士、教育心理学家及名校背景教师组成，擅长根据孩子程度定制教学方案。",
    en: "Led by academic experts and experienced teachers who tailor strategies to each student's needs.",
  },

  authorityTitle: { zh: "权威认证", en: "Official Accreditation" },
  authorities: [
    {
      title: { zh: "美国大学理事会授权", en: "College Board Authorization" },
      desc: {
        zh: "K-12 学校和官方认证考试中心，学生可在校内参加 SAT 和 AP 考试。",
        en: "An authorized K-12 and official test center where students can take SAT and AP exams on campus.",
      },
    },
    {
      title: { zh: "剑桥国际认证", en: "Cambridge International Accreditation" },
      desc: {
        zh: "剑桥国际考试授权中心，可在校内参加 IGCSE 与 A-Level。",
        en: "An accredited Cambridge center supporting IGCSE and A-Level exam pathways.",
      },
    },
    {
      title: { zh: "文凭项目", en: "Diploma Pathways" },
      desc: {
        zh: "可选修剑桥 ICE 与 AICE 国际教育证书项目。",
        en: "Students may pursue Cambridge ICE and AICE diploma pathways.",
      },
    },
  ],

  prepareTitle: { zh: "入学准备", en: "Pre-Enrollment Preparation" },
  prepareSubtitle: {
    zh: "完善的准备，只为给孩子最安心的留学体验",
    en: "Thorough preparation for a reassuring overseas learning experience",
  },
  prepareBlocks: [
    {
      icon: "mdi:file-document-multiple",
      title: { zh: "申请材料", en: "Application Materials" },
      items: [
        { zh: "学生及家长的护照复印件", en: "Passport copies of the student and parents" },
        { zh: "最近成绩单或当前年级完成证明", en: "Recent transcripts or proof of current grade completion" },
        { zh: "入学后参加英语水平测试，用于匹配最合适的课程安排", en: "An English placement test after arrival to match the best-fit academic plan" },
      ],
    },
    {
      icon: "mdi:home-heart",
      title: { zh: "寄宿家庭", en: "Host Family" },
      items: [
        { zh: "寄宿家庭受政府严格监管，满足安全与居住标准", en: "Government-regulated host families meeting safety and housing requirements" },
        { zh: "家庭成员通常为新加坡本地人或永久居民", en: "Host families are typically local Singaporeans or permanent residents" },
        { zh: "居住空间合规，家庭成员人数受限", en: "Housing space is regulated and occupancy is controlled" },
        { zh: "会定期安排校外活动并向家长反馈孩子情况", en: "Regular off-campus activities and ongoing feedback to parents" },
      ],
    },
  ],

  calendarTitle: { zh: "28天深度研学日程表", en: "28-Day Study Calendar" },
  calendarSubtitle: { zh: "每一分钟的规划都服务于孩子的成长逻辑", en: "Every day is structured around meaningful growth" },
  calendarHeaders: [
    { zh: "周日", en: "Sun" },
    { zh: "周一", en: "Mon" },
    { zh: "周二", en: "Tue" },
    { zh: "周三", en: "Wed" },
    { zh: "周四", en: "Thu" },
    { zh: "周五", en: "Fri" },
    { zh: "周六", en: "Sat" },
  ],
  calendarCells: [
    { dayLabel: "D1", title: { zh: "入境新加坡", en: "Arrive in Singapore" }, desc: { zh: "接机、介绍概况、入住寄宿家庭", en: "Airport pickup, orientation and move into host family" }, kind: "weekend" },
    { dayLabel: "D2-6", title: { zh: "新加坡本地国际学校全真课程", en: "Full School Immersion" }, kind: "course", span: 5 },
    { dayLabel: "D7", title: { zh: "City Walk", en: "City Walk" }, desc: { zh: "参观地标、了解历史文化、品尝美食", en: "Landmarks, history and local food" }, kind: "weekend" },
    { dayLabel: "D8", title: { zh: "自由活动", en: "Free Day" }, kind: "weekend" },
    { dayLabel: "D9-13", title: { zh: "新加坡本地国际学校全真课程", en: "Full School Immersion" }, kind: "course", span: 5 },
    { dayLabel: "D14", title: { zh: "新加坡动物园", en: "Singapore Zoo" }, kind: "weekend" },
    { dayLabel: "D15", title: { zh: "自由活动", en: "Free Day" }, kind: "weekend" },
    { dayLabel: "D16-20", title: { zh: "新加坡本地国际学校全真课程", en: "Full School Immersion" }, kind: "course", span: 5 },
    { dayLabel: "D21", title: { zh: "影城及圣淘沙", en: "Sentosa & Theme Park" }, kind: "weekend" },
    { dayLabel: "D22", title: { zh: "自由活动", en: "Free Day" }, kind: "weekend" },
    { dayLabel: "D23-27", title: { zh: "新加坡本地国际学校全真课程", en: "Full School Immersion" }, kind: "course", span: 5 },
    { dayLabel: "D28", title: { zh: "荣誉返程", en: "Return Home" }, desc: { zh: "返回温暖的家", en: "Head home with growth and memories" }, kind: "weekend" },
  ],

  pricingTitle: { zh: "28天微留学 · 费用标准", en: "28-Day Mini Study · Pricing" },
  pricingItems: [
    { type: "include", text: { zh: "包含：28天27晚住宿，及接送机各一次", en: "Included: 28 nights accommodation and one airport pickup/drop-off" } },
    { type: "include", text: { zh: "包含：寄宿家庭餐饮，上学日早餐及晚餐，非上学日全天饮食", en: "Included: host family meals, breakfast and dinner on school days, full-day meals on non-school days" } },
    { type: "include", text: { zh: "包含：课程费", en: "Included: tuition fees" } },
    { type: "include", text: { zh: "包含：每日上学车辆接送，外出日车辆接送", en: "Included: school-day transfers and scheduled outing transport" } },
    { type: "gift", text: { zh: "赠送：周末行程为赠送项目，如不参加没有退费", en: "Gifted: weekend activities are complimentary and non-refundable if unused" } },
    { type: "exclude", text: { zh: "不包含：环球影城、动物园等门票", en: "Excluded: attraction tickets such as Universal Studios and the Zoo" } },
  ],
  price: { zh: "¥ 38,600", en: "¥ 38,600" },
  priceNote: { zh: "* 不包含机票", en: "* Flights not included" },
  pricingCta: { zh: "索取详细日程单", en: "Get Detailed Schedule" },
}

const openContactModal = inject("openContactModal") as (() => void) | undefined
const injectedLang = inject("lang") as Ref<Lang> | undefined
const lang = computed<Lang>(() => injectedLang?.value ?? "zh")

/**
 * 功能：按当前语言取文案（对模板暴露）。
 */
const t = (text: I18nText) => pickText(text, lang.value)
</script>

<style scoped>
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  background-color: #ffffff;
}

.calendar-header {
  background-color: #005a9c;
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  padding: 0.9rem 0.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.25);
}

.calendar-header:last-child {
  border-right: none;
}

.calendar-day {
  min-height: 7rem;
  padding: 0.75rem 0.65rem;
  border-right: 1px solid #e5e7eb;
  border-top: 1px solid #e5e7eb;
  line-height: 1.45;
}

.calendar-day:nth-child(7n) {
  border-right: none;
}

@media (max-width: 1200px) {
  .calendar-grid {
    grid-template-columns: repeat(7, minmax(140px, 1fr));
    overflow-x: auto;
  }

  .calendar-day {
    min-height: 7.5rem;
  }
}
</style>

