<template>
  <div class="page-container">
    <header class="relative pt-20 h-[500px] flex items-center text-white overflow-hidden">
      <img :alt="t(data.hero.title)" class="absolute inset-0 w-full h-full object-cover" :src="data.hero.bg" />
      <div class="absolute inset-0 bg-sg-blue/80"></div>
      <div class="relative z-10 max-w-[1440px] mx-auto px-8 w-full text-center">
        <div class="flex justify-center gap-4 mb-6">
          <span class="bg-luxury-gold text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider shadow-lg">
            {{ t(data.hero.duration) }}
          </span>
          <span class="bg-white text-sg-blue px-4 py-1.5 rounded-full text-sm font-bold tracking-wider shadow-lg">
            {{ t(data.hero.age) }}
          </span>
        </div>
        <h1 class="text-5xl font-bold mb-8 tracking-widest">{{ t(data.hero.title) }}</h1>
        <p class="text-2xl max-w-3xl mx-auto text-blue-50 font-light leading-relaxed">
          {{ t(data.hero.subtitle) }}
          <br />
          <span class="font-bold text-luxury-gold mt-2 block">{{ t(data.hero.subtitleAccent) }}</span>
        </p>
      </div>
    </header>

    <section class="py-20 bg-slate-50">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">{{ t(data.highlightTitle) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p class="text-gray-500 text-lg italic">{{ t(data.highlightSubtitle) }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="item in data.highlights"
            :key="t(item.title)"
            class="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center border border-slate-100 group"
          >
            <div class="w-full h-40 rounded-2xl overflow-hidden mb-6 relative">
              <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 class="text-2xl font-bold text-sg-blue mb-4">{{ t(item.title) }}</h3>
            <p class="text-gray-500 leading-relaxed">{{ t(item.desc) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-sg-blue mb-6">{{ t(data.escortTitle) }}</h2>
            <div class="w-20 h-1 bg-luxury-gold mb-8"></div>
            <p class="text-gray-600 text-xl mb-12 leading-relaxed border-l-4 border-sg-blue pl-6 italic">
              {{ t(data.escortIntro) }}
            </p>
            <ul class="space-y-10">
              <li v-for="item in data.escortItems" :key="t(item.title)" class="flex items-start">
                <div class="w-14 h-14 bg-sg-blue/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 text-sg-blue">
                  <iconify-icon class="text-3xl" :icon="item.icon"></iconify-icon>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-sg-blue mb-2">{{ t(item.title) }}</h4>
                  <p class="text-gray-500 text-lg">{{ t(item.desc) }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative">
            <img :src="data.escortImage" alt="" class="rounded-3xl shadow-2xl w-full object-cover h-[600px]" />
            <div class="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-sm border border-gray-100 z-10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center text-white">
                  <iconify-icon icon="ph:shield-check-bold" class="text-2xl"></iconify-icon>
                </div>
                <h4 class="font-bold text-xl text-sg-blue">{{ t(data.escortBadgeTitle) }}</h4>
              </div>
              <p class="text-gray-500 leading-relaxed">{{ t(data.escortBadgeDesc) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-50 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <iconify-icon class="absolute top-10 right-10 text-[400px] text-sg-blue" icon="ph:student-bold"></iconify-icon>
      </div>
      <div class="max-w-[1440px] mx-auto px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-sg-blue mb-6 tracking-widest">{{ t(data.schoolsTitle) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p class="text-gray-500 text-xl">{{ t(data.schoolsSubtitle) }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            v-for="school in data.schools"
            :key="t(school.title)"
            class="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
          >
            <div class="h-64 overflow-hidden relative">
              <img :src="school.image" alt="" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-sg-blue/90 via-sg-blue/40 to-transparent"></div>
              <h3 class="absolute bottom-6 left-8 text-2xl font-bold text-white tracking-wide">{{ t(school.title) }}</h3>
            </div>
            <div class="p-8 relative">
              <div class="absolute -top-6 right-8 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center text-white shadow-lg">
                <iconify-icon class="text-2xl" :icon="school.icon"></iconify-icon>
              </div>
              <p class="text-gray-600 text-lg leading-relaxed mt-2">{{ t(school.desc) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-sg-blue relative overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-10">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" stroke-width="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div class="max-w-[1440px] mx-auto px-8 relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-5xl font-bold text-white mb-6 tracking-widest">{{ t(data.coursesTitle) }}</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p class="text-blue-100 text-xl max-w-2xl mx-auto">{{ t(data.coursesSubtitle) }}</p>
        </div>

        <div class="relative max-w-6xl mx-auto">
          <div
            class="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-3xl shadow-[0_0_50px_rgba(229,166,99,0.3)] items-center justify-center z-20 border-4 border-luxury-gold rotate-45"
          >
            <div class="text-center -rotate-45">
              <iconify-icon class="text-5xl text-luxury-gold mb-2" icon="ph:books-bold"></iconify-icon>
              <h3 class="text-xl font-bold text-sg-blue">
                {{ lang === "zh" ? "核心" : "Core" }}
                <br />
                {{ lang === "zh" ? "课程" : "Courses" }}
              </h3>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-16 relative z-10">
            <div
              v-for="(course, idx) in data.courses"
              :key="t(course.tag)"
              class="bg-white/10 backdrop-blur-md rounded-[40px] p-8 border border-white/20 hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 group"
              :class="idx < 2 ? '-mb-16' : 'mt-16'"
            >
              <div class="h-56 rounded-3xl overflow-hidden mb-8 relative border-4 border-white/50">
                <img :src="course.image" alt="" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div
                  class="absolute px-6 py-2 rounded-full font-bold text-lg shadow-lg text-white"
                  :class="[course.tagColor, idx % 2 === 0 ? 'top-4 left-4' : 'top-4 right-4 lg:left-4 lg:right-auto']"
                >
                  {{ t(course.tag) }}
                </div>
              </div>
              <div class="text-center px-4" :class="idx >= 2 ? 'lg:text-right' : 'lg:text-left'">
                <p class="text-white text-xl leading-relaxed">{{ t(course.desc) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-50 overflow-hidden">
      <div class="max-w-[1200px] mx-auto px-8 relative">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">{{ t(data.timelineTitle) }}</h2>
          <p class="text-gray-500">{{ t(data.timelineSubtitle) }}</p>
        </div>
        <div class="relative">
          <div class="timeline-line"></div>
          <div
            v-for="(item, idx) in data.timeline"
            :key="item.day"
            class="flex items-center justify-between mb-16 relative"
            :class="idx % 2 === 1 ? 'flex-row-reverse' : ''"
          >
            <div class="w-5/12" :class="idx % 2 === 1 ? 'text-left pl-12' : 'text-right pr-12'">
              <h4 class="text-3xl font-bold text-sg-blue mb-2" style="font-family: Georgia, serif">{{ item.day }}</h4>
              <p class="text-luxury-gold font-bold mb-3 text-2xl tracking-wide">{{ t(item.place) }}</p>
              <p class="text-gray-500 leading-relaxed">{{ t(item.desc) }}</p>
            </div>
            <div class="timeline-dot"></div>
            <div class="w-5/12" :class="idx % 2 === 1 ? 'pr-12 flex justify-end' : 'pl-12'">
              <div class="w-64 h-64 rounded-full overflow-hidden border-[8px] border-white shadow-xl">
                <img :src="item.image" alt="" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-[1440px] mx-auto px-8">
        <h2 class="text-4xl font-bold text-sg-blue mb-16 text-center">{{ t(data.hospitalityTitle) }}</h2>
        <div class="grid grid-cols-2 gap-12">
          <div v-for="item in data.hospitality" :key="t(item.title)" class="relative rounded-3xl overflow-hidden group">
            <img :alt="t(item.title)" class="w-full h-80 object-cover" :src="item.image" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
              <h4 class="text-2xl font-bold mb-2">{{ t(item.title) }}</h4>
              <p class="text-sm opacity-80">{{ t(item.desc) }}</p>
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
import type { GrowthCampPageData } from "@/types/growthCamp"

const data: GrowthCampPageData = {
  hero: {
    bg: "/img/Camp_Banner.jpg",
    duration: { zh: "7天6晚", en: "7D6N" },
    age: { zh: "适龄 3-15岁", en: "Age 3–15" },
    title: { zh: "新加坡成长营", en: "Singapore Growth Camp" },
    subtitle: {
      zh: "别让孩子的假期只停留在屏幕里",
      en: "Don't let holidays stay only on the screen",
    },
    subtitleAccent: {
      zh: "带娃实地来新加坡，看不一样的世界",
      en: "Bring your child to Singapore and explore a bigger world",
    },
  },

  highlightTitle: {
    zh: "补习班太枯燥，纯旅游没收获？",
    en: "Tuition is boring and pure travel brings little growth?",
  },
  highlightSubtitle: {
    zh: "不如来新加坡成长营，给孩子一个真正有价值的假期",
    en: "Give your child a truly meaningful holiday in Singapore",
  },
  highlights: [
    {
      image: "/img/School_Campus.jpg",
      title: { zh: "本地学校/正规营地", en: "Local Schools & Licensed Camps" },
      desc: {
        zh: "甄选新加坡顶尖国际学校与官方认证营地，共享世界级教育设施与学术资源。",
        en: "Selected international schools and licensed camps with world-class facilities and resources.",
      },
    },
    {
      image: "/img/English_Environment.jpg",
      title: { zh: "沉浸式英文环境", en: "Immersive English Environment" },
      desc: {
        zh: "全天候英语母语导师陪伴，在真实交流场景中建立语言自信。",
        en: "All-day English exposure with native-speaking mentors to build confidence naturally.",
      },
    },
    {
      image: "/img/Study_and_Play.jpg",
      title: { zh: "研学+游玩+能力提升", en: "Study + Play + Skill Growth" },
      desc: {
        zh: "科学配比学习与探索时间，全面提升独立思考与跨文化交际能力。",
        en: "Balanced study and exploration to build independence and cross-cultural communication.",
      },
    },
  ],

  escortTitle: { zh: "您在身边，我们为您护航", en: "Parents Stay Close, We Safeguard the Journey" },
  escortIntro: {
    zh: "第一次出国，我们陪您和孩子一起迈出第一步。孩子在安全中成长，您亲身陪伴，第一次远行，本该如此。",
    en: "For the first overseas trip, we help parents and children take the first step together—safe, supported and reassuring.",
  },
  escortItems: [
    {
      icon: "ph:airplane-tilt-bold",
      title: { zh: "机酒全含，领队同机", en: "Flights & Hotel Included" },
      desc: {
        zh: "孩子往返机票已含，专属领队同机出行，安心从第一刻开始。",
        en: "Round-trip flights included, with dedicated leaders accompanying the full journey.",
      },
    },
    {
      icon: "ph:car-profile-bold",
      title: { zh: "私享专人接送", en: "Private Daily Transfers" },
      desc: {
        zh: "每日酒店专属车辆接送孩子上下学。",
        en: "Private hotel-to-campus transfers every day.",
      },
    },
    {
      icon: "ph:buildings-bold",
      title: { zh: "高星酒店，家长同住", en: "Premium Hotel with Parents" },
      desc: {
        zh: "孩子与家长同住星级酒店，配套齐全，更安心。",
        en: "Children stay with parents in quality hotels for a more secure first experience.",
      },
    },
  ],
  escortImage: "/img/Family_Travel.jpg",
  escortBadgeTitle: { zh: "360° 安全保障", en: "360° Safety Support" },
  escortBadgeDesc: {
    zh: "让家长的每一次陪伴都轻松愉悦，见证孩子的每一个成长瞬间。",
    en: "Make every family moment easier and more memorable while witnessing each growth milestone.",
  },

  schoolsTitle: { zh: "学校介绍", en: "Partner Schools" },
  schoolsSubtitle: {
    zh: "携手新加坡四大知名国际学校，定制专属菁英课程",
    en: "In partnership with leading Singapore international schools",
  },
  schools: [
    {
      image: "/img/sitanfu.jpg",
      title: { zh: "新加坡斯坦福美国国际学校", en: "Stamford American International School" },
      icon: "ph:buildings-bold",
      desc: {
        zh: "顶尖美式国际学校之一，以 IB + AP 双课程体系、顶级设施和多元文化著称。",
        en: "A leading American international school known for IB + AP pathways, premium facilities and diversity.",
      },
    },
    {
      image: "/img/ruishi.jpg",
      title: { zh: "新加坡瑞士学校", en: "Swiss School in Singapore" },
      icon: "ph:tree-evergreen-bold",
      desc: {
        zh: "历史悠久，以瑞士教育、三语环境和温馨校园氛围著称。",
        en: "A long-established school known for Swiss education values, trilingual learning and warm culture.",
      },
    },
    {
      image: "/img/uwc.jpg",
      title: { zh: "UWC 世界联合书院", en: "UWC" },
      icon: "ph:globe-hemisphere-east-bold",
      desc: {
        zh: "全球顶尖 IB 学校之一，以强学术与全人教育闻名。",
        en: "One of the world's top IB schools with a strong academic and holistic education ethos.",
      },
    },
    {
      image: "/img/XCL.jpg",
      title: { zh: "XCL 加慧世界书院", en: "XCL World Academy" },
      icon: "ph:star-bold",
      desc: {
        zh: "提供个性化菁英教育，注重发掘每个孩子的独特潜能。",
        en: "Personalized education focused on discovering and amplifying each child's strengths.",
      },
    },
  ],

  coursesTitle: { zh: "课程设置", en: "Curriculum Design" },
  coursesSubtitle: { zh: "多维度沉浸式体验，全面激发孩子潜能", en: "Multi-dimensional immersion to unlock potential" },
  courses: [
    {
      image: "/img/STEAM_Education.jpg",
      tag: { zh: "STEAM", en: "STEAM" },
      tagColor: "bg-sky-500",
      desc: { zh: "编码机器人、虚拟现实、3D打印和工程", en: "Robotics, VR, 3D printing and engineering" },
    },
    {
      image: "/img/游玩.jpg",
      tag: { zh: "综合活动", en: "Integrated Activities" },
      tagColor: "bg-blue-500",
      desc: { zh: "木材制作、园艺、烘焙、运动", en: "Woodwork, gardening, baking and sports" },
    },
    {
      image: "/img/学习活动2.png",
      tag: { zh: "多重冒险", en: "Adventures" },
      tagColor: "bg-teal-500",
      desc: { zh: "射箭、跑酷、定向越野、攀岩、无人机", en: "Archery, parkour, orienteering, climbing and drones" },
    },
    {
      image: "/img/学习活动1.png",
      tag: { zh: "英语强化", en: "English Boost" },
      tagColor: "bg-indigo-500",
      desc: { zh: "语言游戏、趣味活动、听说读写", en: "Language games and practice across listening, speaking, reading and writing" },
    },
  ],

  timelineTitle: { zh: "7天深度研学日程表", en: "7-Day Immersive Schedule" },
  timelineSubtitle: { zh: "每一分钟的规划都服务于孩子的成长逻辑", en: "Every day is designed around meaningful growth" },
  timeline: [
    {
      day: "Day.1",
      place: { zh: "大学城", en: "University Town" },
      desc: {
        zh: "初抵狮城，入住营地。随后探访顶级学府，感受世界级大学的学术氛围。",
        en: "Arrive in Singapore, settle in and visit top universities to experience academic culture.",
      },
      image: "https://loremflickr.com/800/800/singapore,university,campus",
    },
    {
      day: "Day.2",
      place: { zh: "甘榜格南 & 小印度", en: "Kampong Glam & Little India" },
      desc: {
        zh: "穿梭多元文化街区，感受新加坡种族和谐与城市包容。",
        en: "Explore multicultural neighborhoods and experience Singapore's inclusive urban spirit.",
      },
      image: "https://loremflickr.com/800/800/singapore,kampong-glam,little-india",
    },
    {
      day: "Day.3",
      place: { zh: "动物园", en: "Zoo" },
      desc: {
        zh: "近距离观察野生动物，学习生物多样性保护。",
        en: "Observe wildlife up close and learn about biodiversity and conservation.",
      },
      image: "https://loremflickr.com/800/800/singapore,zoo,animal",
    },
    {
      day: "Day.4",
      place: { zh: "艺术科学博物馆", en: "ArtScience Museum" },
      desc: {
        zh: "通过艺术、科学、设计与技术的融合，激发孩子创新思维。",
        en: "Discover how art, science and technology come together to spark creativity.",
      },
      image: "https://loremflickr.com/800/800/singapore,museum,architecture",
    },
    {
      day: "Day.5",
      place: { zh: "环球影城", en: "Universal Studios" },
      desc: {
        zh: "在主题乐园中释放天性，收获欢乐与团队协作体验。",
        en: "Enjoy themed attractions while building confidence and teamwork.",
      },
      image: "https://loremflickr.com/800/800/theme-park,roller-coaster,singapore",
    },
    {
      day: "Day.6",
      place: { zh: "城市环游", en: "City Tour" },
      desc: {
        zh: "打卡鱼尾狮公园、滨海湾金沙等城市地标，理解城市规划与发展。",
        en: "Visit iconic landmarks and understand Singapore's planning and development story.",
      },
      image: "https://loremflickr.com/800/800/singapore,city,skyline,merlion",
    },
    {
      day: "Day.7",
      place: { zh: "星耀樟宜机场", en: "Jewel Changi" },
      desc: {
        zh: "观赏室内瀑布雨漩涡，带着收获与回忆返程。",
        en: "Visit the iconic indoor waterfall and head home with lasting memories.",
      },
      image: "https://loremflickr.com/800/800/airport,architecture,singapore",
    },
  ],

  hospitalityTitle: { zh: "星级服务标准 · 全方位保障", en: "Premium Service Standards" },
  hospitality: [
    {
      image: "/img/Hotel.jpg",
      title: { zh: "住宿：四星级酒店/学生公寓", en: "Accommodation: 4-Star Hotel / Student Apartment" },
      desc: {
        zh: "2人标准间，配备24小时保安及中文生活老师。",
        en: "Twin-room standard with 24-hour security and Chinese-speaking support staff.",
      },
    },
    {
      image: "/img/Food.jpg",
      title: { zh: "饮食：多元狮城美食+中餐", en: "Meals: Local Favorites + Chinese Cuisine" },
      desc: {
        zh: "体验娘惹菜、海南鸡饭等特色美食，并合理搭配中式餐食。",
        en: "A balanced mix of local Singaporean flavors and familiar Chinese meals.",
      },
    },
  ],
}

const injectedLang = inject("lang") as Ref<Lang> | undefined
const lang = computed<Lang>(() => injectedLang?.value ?? "zh")

/**
 * 功能：按当前语言取文案（对模板暴露）。
 */
const t = (text: I18nText) => pickText(text, lang.value)
</script>

<style scoped>
.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, rgba(229, 166, 99, 0.18), rgba(229, 166, 99, 0.55), rgba(229, 166, 99, 0.18));
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  background-color: #e5a663;
  box-shadow:
    0 0 0 6px #ffffff,
    0 6px 14px rgba(0, 90, 156, 0.15);
  flex-shrink: 0;
  z-index: 10;
}
</style>

