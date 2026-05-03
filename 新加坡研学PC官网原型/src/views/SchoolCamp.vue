<template>
  <MarketingPage :data="data" />
</template>

<script setup lang="ts">
import MarketingPage from "@/components/MarketingPage.vue"
import type { MarketingPageData } from "@/types/marketing"

const data: MarketingPageData = {
  hero: {
    bg: "/img/School_Banner.jpg",
    title: { zh: "探秘新加坡顶级国际学校", en: "Explore Top International Schools in Singapore" },
    subtitle: {
      zh: "UWC / SAS / Stamford / Tanglin 深度学术探访营",
      en: "UWC / SAS / Stamford / Tanglin Academic Immersion",
    },
    tags: [
      { zh: "IB/AP课程对接", en: "IB/AP Alignment" },
      { zh: "全球顶尖师资", en: "Top Faculty" },
      { zh: "名校录取分析", en: "Admissions Insights" },
    ],
  },

  courseSection: {
    title: { zh: "国际学校插班课程", en: "International School Bridging Courses" },
    badges: [
      { zh: "课程年龄：适龄3-15岁", en: "Age: 3–15" },
      { zh: "开课时间：3-4周，6-7周，四周，12周", en: "Duration: 3–4 / 6–7 / 4 / 12 weeks" },
    ],
    cards: [
      {
        icon: "ph:basketball-bold",
        title: { zh: "综合活动", en: "Integrated Activities" },
        desc: {
          zh: "通过一系列活动（木材制作、园艺、烘焙等），激发孩子们的创造力和动手能力，在实践中探索未知，培养独立解决问题的能力。",
          en: "Hands-on activities (woodwork, gardening, baking, etc.) to spark creativity and problem-solving.",
        },
        images: { left: "/img/Activity_1.jpg", right: "/img/Activity.jpg" },
      },
      {
        icon: "ph:compass-bold",
        title: { zh: "多重冒险", en: "Multi Adventures" },
        desc: {
          zh: "包含射箭、跑酷、定向越野、攀岩、无人机驾驶等，全方位锻炼体能、反应力与团队协作精神。",
          en: "Archery, parkour, orienteering, climbing, drone piloting—build fitness and teamwork.",
        },
        images: { left: "/img/活动2.jpg", right: "/img/XCL.jpg" },
      },
      {
        icon: "ph:translate-bold",
        title: { zh: "英语强化", en: "English Enhancement" },
        desc: {
          zh: "语言游戏、趣味互动活动、听说读写全面提升。在全英文母语环境中建立跨文化交流自信。",
          en: "Immersive English with games and interactive practice across listening/speaking/reading/writing.",
        },
        images: { left: "/img/English.jpg", right: "/img/English_1.jpg" },
      },
      {
        icon: "ph:flask-bold",
        title: { zh: "创意STEAM", en: "Creative STEAM" },
        desc: {
          zh: "编程机器人、VR、3D打印、趣味科学工程，融合科学、技术、工程、艺术与数学，培养创新思维。",
          en: "Robotics, VR, 3D printing and hands-on science—integrating STEAM for innovation mindset.",
        },
        images: { left: "/img/STEAM.jpg", right: "/img/STEAM_1.jpg" },
      },
    ],
  },

  syncSection: {
    title: { zh: "国际学校同步课程", en: "In-School Synchronous Curriculum" },
    cards: [
      {
        icon: "ph:robot-bold",
        title: { zh: "人工智能", en: "Artificial Intelligence" },
        desc: {
          zh: "结合编程与AI技术，启发逻辑思维，培养计算思维与解决问题的能力。",
          en: "Hands-on AI + coding to build computational thinking and problem-solving.",
        },
        image: "/img/AI.jpg",
      },
      {
        icon: "ph:magnifying-glass-bold",
        title: { zh: "小小探索家活动", en: "Young Explorer Program" },
        desc: {
          zh: "通过室内外互动游戏、自然观察、艺术启蒙，激发孩子好奇心与想象力。",
          en: "Indoor/outdoor exploration and art-inspired activities to spark curiosity and imagination.",
        },
        image: "/img/Explorer.jpg",
      },
      {
        icon: "ph:code-bold",
        title: { zh: "创意编程", en: "Creative Coding" },
        desc: {
          zh: "从图形化编程启蒙到进阶代码语言学习，培养数字时代核心技能。",
          en: "From block-based coding to advanced programming fundamentals—core skills for the digital era.",
        },
        image: "/img/Coding.jpg",
      },
    ],
  },

  timelineSection: {
    title: { zh: "行程样例", en: "Sample Itinerary" },
    subtitle: { zh: "8天7晚 · 新加坡国际学校全真体验营", en: "8D7N · Singapore School Immersion Camp" },
    days: [
      {
        day: "Day 1",
        title: { zh: "开启名校探秘之旅，从这里梦开始", en: "Kick off the school immersion journey" },
        desc: {
          zh: "集合出发飞往新加坡。接机后入住，小营员签到破冰，随后享用欢迎晚宴，感受特色南洋之美。",
          en: "Arrive in Singapore, check in, ice-breaking, and welcome dinner to begin the journey.",
        },
        images: ["/img/Arrival_1.jpg", "/img/City.jpg"],
      },
      {
        day: "Day 2",
        title: { zh: "上午探索多元，下午体验自然与城市发展", en: "Culture in the morning, sustainability in the afternoon" },
        desc: {
          zh: "上午：探访新加坡河畔、鱼尾狮公园、国会区等。下午：参访 Marina Barrage，漫步滨海湾花园与超级树。",
          en: "Explore Marina Bay landmarks; visit Marina Barrage and Gardens by the Bay.",
        },
        images: ["/img/Tour_6.jpg", "/img/Tour_7.jpg"],
      },
      {
        day: "Day 3",
        title: { zh: "上午学校学习，下午走进科学艺术博物馆", en: "School learning + ArtScience Museum" },
        desc: {
          zh: "上午：国际学校课程体验。下午：走进科学艺术博物馆，探索艺术与科学的交汇。",
          en: "Morning school experience; afternoon at ArtScience Museum to explore art + science fusion.",
        },
        images: ["/img/School_building_1.jpg", "/img/Students_in_classroom.jpg"],
      },
      {
        day: "Day 4",
        title: { zh: "上午学校学习，下午夜间动物园", en: "School learning + Night Safari" },
        desc: {
          zh: "下午：探访夜间野生动物园，了解热带雨林生态保护，完成自然生态课堂。",
          en: "Visit Night Safari and learn about rainforest ecology and conservation.",
        },
        images: ["/img/Culture_1.jpg", "/img/Night_Safari_1.jpg"],
      },
      {
        day: "Day 5",
        title: { zh: "上午学校学习，下午名校参访营结业", en: "NUS visit and graduation" },
        desc: {
          zh: "下午：参访新加坡国立大学（NUS），了解大学生活，参与结业仪式。",
          en: "Visit NUS to experience campus life and attend the graduation ceremony.",
        },
        images: ["/img/Day_1_University.jpg", "/img/School_Campus.jpg"],
      },
      {
        day: "Day 6",
        title: { zh: "上午环球影城，晚上星耀樟宜购物", en: "Universal Studios + Jewel Changi" },
        desc: {
          zh: "全天：畅游环球影城，在游乐中释放童真，通过团队协作挑战各种项目。",
          en: "Enjoy Universal Studios and unwind with team challenges; evening shopping at Jewel Changi.",
        },
        images: ["/img/4.jpg", "/img/play.jpg"],
      },
      {
        day: "Day 7",
        title: { zh: "满载而归，分享成长经历", en: "Return home with unforgettable memories" },
        desc: {
          zh: "前往星耀樟宜机场，观赏室内瀑布雨漩涡。选购伴手礼，返回温馨的家。",
          en: "Visit Jewel Changi, shop for souvenirs and fly back home.",
        },
        images: ["/img/Day_7_Jewel_Changi.jpg", "/img/Flight_1.jpg"],
      },
    ],
  },

  cuisineHotelSection: {
    eyebrow: { zh: "特色美食", en: "SPECIALTY CUISINE" },
    title: { zh: "新加坡特色美食", en: "Singapore Signature Foods" },
    desc: {
      zh: "体验地道南洋风味，在世界非物质文化遗产“小贩中心”中品味多元文化的交融。",
      en: "Taste authentic local flavors in the UNESCO-listed hawker culture—where cultures meet.",
    },
    cuisines: [
      { name: { zh: "新加坡肉骨茶", en: "Bak Kut Teh" }, image: "/img/Bak_Kut_Teh.jpeg" },
      { name: { zh: "新加坡海南鸡饭", en: "Hainanese Chicken Rice" }, image: "/img/Chicken_Rice.jpeg" },
      { name: { zh: "新加坡辣椒螃蟹", en: "Chilli Crab" }, image: "/img/Chilli_Crab.jpg" },
      { name: { zh: "新加坡 Laksa", en: "Laksa" }, image: "/img/Laksa.jpg" },
    ],
    hotelsTitle: { zh: "合作酒店", en: "Cooperative Hotels" },
    hotels: [
      { name: { zh: "滨海湾金沙", en: "Marina Bay Sands" }, faviconDomain: "marinabaysands.com" },
      { name: { zh: "名胜世界", en: "Resorts World Sentosa" }, faviconDomain: "rwsentosa.com" },
      { name: { zh: "香格里拉", en: "Shangri-La" }, faviconDomain: "shangri-la.com" },
      { name: { zh: "The Fullerton", en: "The Fullerton" }, faviconDomain: "fullertonhotel.com" },
      { name: { zh: "HOTEL BOSS", en: "HOTEL BOSS" }, faviconDomain: "hotelboss.sg" },
      { name: { zh: "ibis styles", en: "ibis styles" }, faviconDomain: "all.accor.com" },
      { name: { zh: "Mercure", en: "Mercure" }, faviconDomain: "accor.com" },
      { name: { zh: "HOTEL 81", en: "HOTEL 81" }, faviconDomain: "hotel81.com.sg" },
    ],
    highlightImage: "/img/Lau_Pa_Sat.jpg",
    highlightTitle: { zh: "小贩中心文化 · 新加坡老巴刹", en: "Hawker Culture · Lau Pa Sat" },
    highlightDesc: {
      zh: "老巴刹地处金融区核心地带，其醒目的八边形外观由爱尔兰建筑师哥里门所设计，每天都有络绎不绝的人前来品尝美食。",
      en: "Located in the CBD, Lau Pa Sat is iconic for its octagonal architecture and vibrant food scene.",
    },
  },

  pricingSection: {
    title: { zh: "国际学校体验营 · 收费明细", en: "School Camp · Pricing" },
    price: { zh: "¥ xxxx", en: "¥ xxxx" },
    unit: { zh: "/人", en: "/person" },
    features: [
      { zh: "至少4所名校深度探访", en: "Visit at least 4 top schools" },
      { zh: "招生官1对1申请指导", en: "1-on-1 admissions guidance" },
      { zh: "五星级配套酒店/交通", en: "Premium hotel & transportation" },
      { zh: "留学入学能力测评", en: "Study readiness assessment" },
    ],
    cta: { zh: "立即在线申请", en: "Apply Now" },
  },
}
</script>
