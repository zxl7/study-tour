<template>
  <div class="page-container">
    <!-- 项目专属Banner -->
    <header class="relative pt-20 h-[500px] flex items-center text-white overflow-hidden">
      <img alt="Camp Banner" class="absolute inset-0 w-full h-full object-cover" src="/img/Camp_Banner.jpg" />
      <div class="absolute inset-0 bg-sg-blue/80"></div>
      <div class="relative z-10 max-w-[1440px] mx-auto px-8 w-full text-center">
        <div class="flex justify-center gap-4 mb-6">
          <span class="bg-luxury-gold text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider shadow-lg">7天6晚</span>
          <span class="bg-white text-sg-blue px-4 py-1.5 rounded-full text-sm font-bold tracking-wider shadow-lg">适龄 3-15岁</span>
        </div>
        <h1 class="text-5xl font-bold mb-8 tracking-widest">新加坡成长营</h1>
        <p class="text-2xl max-w-3xl mx-auto text-blue-50 font-light leading-relaxed">
          别让孩子的假期只停留在屏幕里
          <br />
          <span class="font-bold text-luxury-gold mt-2 block">带娃实地来新加坡，看不一样的世界</span>
        </p>
      </div>
    </header>

    <!-- 项目亮点：痛点与解决方案 -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">补习班太枯燥，纯旅游没收获？</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p class="text-gray-500 text-lg italic">不如来新加坡成长营，给孩子一个真正有价值的假期</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 特点 1 -->
          <div class="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center border border-slate-100 group">
            <div class="w-full h-40 rounded-2xl overflow-hidden mb-6 relative">
              <img src="/img/School_Campus.jpg" alt="School Campus" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 class="text-2xl font-bold text-sg-blue mb-4">本地学校/正规营地</h3>
            <p class="text-gray-500 leading-relaxed">甄选新加坡顶尖国际学校与官方认证营地，共享世界级教育硬件设施与学术资源，沉浸式体验名校氛围。</p>
          </div>
          <!-- 特点 2 -->
          <div class="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center border border-slate-100 group">
            <div class="w-full h-40 rounded-2xl overflow-hidden mb-6 relative">
              <img src="/img/English_Environment.jpg" alt="English Environment" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 class="text-2xl font-bold text-sg-blue mb-4">沉浸式英文环境</h3>
            <p class="text-gray-500 leading-relaxed">全天候英语母语导师陪伴，打破哑巴英语，让孩子在真实的自然交流场景中建立语言自信。</p>
          </div>
          <!-- 特点 3 -->
          <div class="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center border border-slate-100 group">
            <div class="w-full h-40 rounded-2xl overflow-hidden mb-6 relative">
              <img src="/img/Study_and_Play.jpg" alt="Study and Play" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 class="text-2xl font-bold text-sg-blue mb-4">研学+游玩+能力提升</h3>
            <p class="text-gray-500 leading-relaxed">科学配比学习与探索时间，玩中学、学中玩，全面提升孩子的独立思考能力与跨文化交际能力。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 您在身边，我们护航 -->
    <section class="py-24 bg-white overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-sg-blue mb-6">您在身边，我们为您护航</h2>
            <div class="w-20 h-1 bg-luxury-gold mb-8"></div>
            <p class="text-gray-600 text-xl mb-12 leading-relaxed border-l-4 border-sg-blue pl-6 italic">
              第一次出国，我们陪您和孩子一起迈出第一步。
              <br />
              孩子在安全中成长，您亲身旁陪伴，第一次远行，本该如此。
            </p>
            <ul class="space-y-10">
              <li class="flex items-start">
                <div class="w-14 h-14 bg-sg-blue/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 text-sg-blue">
                  <iconify-icon class="text-3xl" icon="ph:airplane-tilt-bold"></iconify-icon>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-sg-blue mb-2">机酒全含，领队同机</h4>
                  <p class="text-gray-500 text-lg">孩子往返机票已含，专属客轮同机穿梭，安心从第一刻开始。</p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="w-14 h-14 bg-sg-blue/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 text-sg-blue">
                  <iconify-icon class="text-3xl" icon="ph:car-profile-bold"></iconify-icon>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-sg-blue mb-2">私享专人接送</h4>
                  <p class="text-gray-500 text-lg">配备私享专人接送，每日酒店专属车辆接送孩子上下学。</p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="w-14 h-14 bg-sg-blue/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 text-sg-blue">
                  <iconify-icon class="text-3xl" icon="ph:buildings-bold"></iconify-icon>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-sg-blue mb-2">高星酒店，家长同住</h4>
                  <p class="text-gray-500 text-lg">孩子与家长同住，起居皆在星级酒店，配套齐全，无忧操心。</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="relative">
            <!-- 图片与悬浮卡片 -->
            <img src="/img/Family_Travel.jpg" alt="Family Travel" class="rounded-3xl shadow-2xl w-full object-cover h-[600px]" />
            <div class="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-sm border border-gray-100 z-10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center text-white">
                  <iconify-icon icon="ph:shield-check-bold" class="text-2xl"></iconify-icon>
                </div>
                <h4 class="font-bold text-xl text-sg-blue">360° 安全保障</h4>
              </div>
              <p class="text-gray-500 leading-relaxed">让家长的每一次陪伴都轻松愉悦，见证孩子的每一个成长瞬间。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 学校介绍 -->
    <section class="py-24 bg-slate-50 relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <iconify-icon class="absolute top-10 right-10 text-[400px] text-sg-blue" icon="ph:student-bold"></iconify-icon>
      </div>

      <div class="max-w-[1440px] mx-auto px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-sg-blue mb-6 tracking-widest">学校介绍</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p class="text-gray-500 text-xl">携手新加坡四大知名国际学校，定制专属菁英课程</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- School 1: 斯坦福 -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <div class="h-64 overflow-hidden relative">
              <img src="/img/sitanfu.jpg" alt="Stamford" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-sg-blue/90 via-sg-blue/40 to-transparent"></div>
              <h3 class="absolute bottom-6 left-8 text-2xl font-bold text-white tracking-wide">新加坡斯坦福美国国际学校</h3>
            </div>
            <div class="p-8 relative">
              <div class="absolute -top-6 right-8 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center text-white shadow-lg">
                <iconify-icon class="text-2xl" icon="ph:buildings-bold"></iconify-icon>
              </div>
              <p class="text-gray-600 text-lg leading-relaxed mt-2">
                新加坡斯坦福美国国际学校（Stamford American International School, SAIS） 是新加坡顶尖的美式国际学校之一，以双课程体系
                <strong class="text-sg-blue">（IB + AP）</strong>
                、顶级设施和多元文化著称。 耗资3亿新币打造，含奥运泳池、3图书馆、攀岩墙、科技中心。提供10种母语课程（含中文）95%毕业生进全球前100大学
              </p>
            </div>
          </div>

          <!-- School 2: 瑞士学校 -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <div class="h-64 overflow-hidden relative">
              <img src="/img/ruishi.jpg" alt="Swiss School" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-sg-blue/90 via-sg-blue/40 to-transparent"></div>
              <h3 class="absolute bottom-6 left-8 text-2xl font-bold text-white tracking-wide">新加坡瑞士学校</h3>
            </div>
            <div class="p-8 relative">
              <div class="absolute -top-6 right-8 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center text-white shadow-lg">
                <iconify-icon class="text-2xl" icon="ph:tree-evergreen-bold"></iconify-icon>
              </div>
              <p class="text-gray-600 text-lg leading-relaxed mt-2">
                新加坡瑞士学校（Swiss School in Singapore, SSiS） 是新加坡历史最悠久的国际学校之一，以
                <strong class="text-sg-blue">纯正瑞士教育、三语环境（德/法/英）和小而美的温馨氛围</strong>
                著称。是UWCSEA（东南亚世界联合书院） 的联盟校，小学毕业可直升。
              </p>
            </div>
          </div>

          <!-- School 3: UWC -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <div class="h-64 overflow-hidden relative">
              <img src="/img/uwc.jpg" alt="UWC" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-sg-blue/90 via-sg-blue/40 to-transparent"></div>
              <h3 class="absolute bottom-6 left-8 text-2xl font-bold text-white tracking-wide">UWC 世界联合书院</h3>
            </div>
            <div class="p-8 relative">
              <div class="absolute -top-6 right-8 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center text-white shadow-lg">
                <iconify-icon class="text-2xl" icon="ph:globe-hemisphere-east-bold"></iconify-icon>
              </div>
              <p class="text-gray-600 text-lg leading-relaxed mt-2">
                被誉为
                <strong class="text-sg-blue">“藤校收割机”</strong>
                的新加坡东南亚联合世界书院（UWCSEA）是全球规模最大的UWC校区，K-12全龄IB体系与全球105国生源构成“联合国式”多元社区，以强学术+全人教育为核心。
              </p>
            </div>
          </div>

          <!-- School 4: XCL -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <div class="h-64 overflow-hidden relative">
              <img src="/img/XCL.jpg" alt="XCL" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-sg-blue/90 via-sg-blue/40 to-transparent"></div>
              <h3 class="absolute bottom-6 left-8 text-2xl font-bold text-white tracking-wide">XCL 加慧世界书院</h3>
            </div>
            <div class="p-8 relative">
              <div class="absolute -top-6 right-8 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center text-white shadow-lg">
                <iconify-icon class="text-2xl" icon="ph:star-bold"></iconify-icon>
              </div>
              <p class="text-gray-600 text-lg leading-relaxed mt-2">
                个性化菁英教育的
                <strong class="text-sg-blue">典范学府</strong>
                。学校提供丰富多彩且极具挑战的学术、艺术及体育特色课程，旨在精准发掘并放大每一个孩子身上独一无二的闪光点。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 课程设置 -->
    <section class="py-24 bg-sg-blue relative overflow-hidden">
      <!-- 装饰背景线条 -->
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
          <h2
            class="text-5xl font-bold text-white mb-6 tracking-widest"
            >
            课程设置
          </h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p class="text-blue-100 text-xl max-w-2xl mx-auto">多维度沉浸式体验，全面激发孩子潜能</p>
        </div>

        <!-- 课程网格布局 (十字交叉型) -->
        <div class="relative max-w-6xl mx-auto">
          <!-- 中心核心标识 (仅在桌面端显示为中心，移动端隐藏或在顶部) -->
          <div
            class="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-3xl shadow-[0_0_50px_rgba(229,166,99,0.3)] items-center justify-center z-20 border-4 border-luxury-gold rotate-45">
            <div class="text-center -rotate-45">
              <iconify-icon class="text-5xl text-luxury-gold mb-2" icon="ph:books-bold"></iconify-icon>
              <h3 class="text-xl font-bold text-sg-blue">
                核心
                <br />
                课程
              </h3>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-16 relative z-10">
            <!-- 课程 1: STEAM -->
            <div class="bg-white/10 backdrop-blur-md rounded-[40px] p-8 border border-white/20 hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 group -mb-16">
              <div class="h-56 rounded-3xl overflow-hidden mb-8 relative border-4 border-white/50">
                <img src="/img/STEAM_Education.jpg" alt="STEAM Education" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute top-4 left-4 bg-sky-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">STEAM</div>
              </div>
              <div class="text-center lg:text-left px-4">
                <p class="text-white text-xl leading-relaxed">编码机器人、虚拟现实、3D打印和工程</p>
              </div>
            </div>

            <!-- 课程 2: 综合活动 -->
            <div class="bg-white/10 backdrop-blur-md rounded-[40px] p-8 border border-white/20 hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 group -mb-16">
              <div class="h-56 rounded-3xl overflow-hidden mb-8 relative border-4 border-white/50">
                <img src="/img/游玩.jpg" alt="Comprehensive Activities" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute top-4 right-4 lg:left-4 lg:right-auto bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">综合活动</div>
              </div>
              <div class="text-center lg:text-left px-4">
                <p class="text-white text-xl leading-relaxed">木材制作、园艺、烘焙、运动</p>
              </div>
            </div>

            <!-- 课程 3: 多重冒险 -->
            <div class="bg-white/10 backdrop-blur-md rounded-[40px] p-8 border border-white/20 hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 group mt-16">
              <div class="h-56 rounded-3xl overflow-hidden mb-8 relative border-4 border-white/50">
                <img src="/img/学习活动2.png" alt="Adventure" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute bottom-4 left-4 bg-teal-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">多重冒险</div>
              </div>
              <div class="text-center lg:text-right px-4">
                <p class="text-white text-xl leading-relaxed">射箭、跑酷、定向越野、攀岩、无人机</p>
              </div>
            </div>

            <!-- 课程 4: 英语强化 -->
            <div class="bg-white/10 backdrop-blur-md rounded-[40px] p-8 border border-white/20 hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 group mt-16">
              <div class="h-56 rounded-3xl overflow-hidden mb-8 relative border-4 border-white/50">
                <img src="/img/学习活动1.png" alt="English Immersion" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute bottom-4 right-4 lg:left-4 lg:right-auto bg-indigo-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">英语强化</div>
              </div>
              <div class="text-center lg:text-right px-4">
                <p class="text-white text-xl leading-relaxed">语言游戏、趣味活动、听说读写</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7天每日行程 -->
    <section class="py-24 bg-slate-50 overflow-hidden">
      <div class="max-w-[1200px] mx-auto px-8 relative">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">7天深度研学日程表</h2>
          <p class="text-gray-500">每一分钟的规划都服务于孩子的成长逻辑</p>
        </div>
        <div class="relative">
          <div class="timeline-line"></div>
          <!-- Day 1 -->
          <div class="flex items-center justify-between mb-16 relative">
            <div class="w-5/12 text-right pr-12">
              <h4 class="text-3xl font-bold text-sg-blue mb-2" style="font-family: Georgia, serif">Day.1</h4>
              <p class="text-luxury-gold font-bold mb-3 text-2xl tracking-wide">大学城</p>
              <p class="text-gray-500 leading-relaxed">初抵狮城，入住营地。随后探访新加坡顶级学府（如新加坡国立大学/南洋理工大学），感受世界级大学的学术氛围与校园文化。</p>
            </div>
            <div class="timeline-dot"></div>
            <div class="w-5/12 pl-12">
              <div class="w-64 h-64 rounded-full overflow-hidden border-[8px] border-white shadow-xl">
                <img alt="Day 1 University" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://loremflickr.com/800/800/singapore,university,campus" />
              </div>
            </div>
          </div>
          <!-- Day 2 -->
          <div class="flex items-center justify-between mb-16 relative flex-row-reverse">
            <div class="w-5/12 text-left pl-12">
              <h4 class="text-3xl font-bold text-sg-blue mb-2" style="font-family: Georgia, serif">Day.2</h4>
              <p class="text-luxury-gold font-bold mb-3 text-2xl tracking-wide">甘榜格南 & 小印度</p>
              <p class="text-gray-500 leading-relaxed">开启多元文化探索之旅。穿梭于甘榜格南的阿拉伯风情街道，随后前往小印度体验色彩斑斓的异域文化，感受新加坡种族和谐的魅力。</p>
            </div>
            <div class="timeline-dot"></div>
            <div class="w-5/12 pr-12 flex justify-end">
              <div class="w-64 h-64 rounded-full overflow-hidden border-[8px] border-white shadow-xl">
                <img
                  alt="Day 2 Kampong Glam & Little India"
                  class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  src="https://loremflickr.com/800/800/singapore,kampong-glam,little-india" />
              </div>
            </div>
          </div>
          <!-- Day 3 -->
          <div class="flex items-center justify-between mb-16 relative">
            <div class="w-5/12 text-right pr-12">
              <h4 class="text-3xl font-bold text-sg-blue mb-2" style="font-family: Georgia, serif">Day.3</h4>
              <p class="text-luxury-gold font-bold mb-3 text-2xl tracking-wide">动物园</p>
              <p class="text-gray-500 leading-relaxed">前往世界闻名的新加坡动物园（或夜间野生动物园）。采用开放式理念设计，让孩子们在近乎自然的生态环境中观察野生动物，学习生物多样性保护。</p>
            </div>
            <div class="timeline-dot"></div>
            <div class="w-5/12 pl-12">
              <div class="w-64 h-64 rounded-full overflow-hidden border-[8px] border-white shadow-xl">
                <img alt="Day 3 Zoo" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://loremflickr.com/800/800/singapore,zoo,animal" />
              </div>
            </div>
          </div>
          <!-- Day 4 -->
          <div class="flex items-center justify-between mb-16 relative flex-row-reverse">
            <div class="w-5/12 text-left pl-12">
              <h4 class="text-3xl font-bold text-sg-blue mb-2" style="font-family: Georgia, serif">Day.4</h4>
              <p class="text-luxury-gold font-bold mb-3 text-2xl tracking-wide">艺术科学博物馆</p>
              <p class="text-gray-500 leading-relaxed">参观形似莲花的艺术科学博物馆。在这里，艺术、科学、设计、媒体与技术完美交融，激发孩子们的创新思维与跨学科认知。</p>
            </div>
            <div class="timeline-dot"></div>
            <div class="w-5/12 pr-12 flex justify-end">
              <div class="w-64 h-64 rounded-full overflow-hidden border-[8px] border-white shadow-xl">
                <img
                  alt="Day 4 ArtScience Museum"
                  class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  src="https://loremflickr.com/800/800/singapore,museum,architecture" />
              </div>
            </div>
          </div>
          <!-- Day 5 -->
          <div class="flex items-center justify-between mb-16 relative">
            <div class="w-5/12 text-right pr-12">
              <h4 class="text-3xl font-bold text-sg-blue mb-2" style="font-family: Georgia, serif">Day.5</h4>
              <p class="text-luxury-gold font-bold mb-3 text-2xl tracking-wide">环球影城</p>
              <p class="text-gray-500 leading-relaxed">畅游东南亚首个好莱坞电影主题公园——新加坡环球影城。在七大主题区中尽情释放天性，体验沉浸式的欢乐与刺激。</p>
            </div>
            <div class="timeline-dot"></div>
            <div class="w-5/12 pl-12">
              <div class="w-64 h-64 rounded-full overflow-hidden border-[8px] border-white shadow-xl">
                <img
                  alt="Day 5 Universal Studios"
                  class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  src="https://loremflickr.com/800/800/theme-park,roller-coaster,singapore" />
              </div>
            </div>
          </div>
          <!-- Day 6 -->
          <div class="flex items-center justify-between mb-16 relative flex-row-reverse">
            <div class="w-5/12 text-left pl-12">
              <h4 class="text-3xl font-bold text-sg-blue mb-2" style="font-family: Georgia, serif">Day.6</h4>
              <p class="text-luxury-gold font-bold mb-3 text-2xl tracking-wide">城市环游</p>
              <p class="text-gray-500 leading-relaxed">打卡新加坡地标建筑：鱼尾狮公园、滨海湾金沙、市政区历史建筑等。在城市漫步中，全面了解新加坡的发展奇迹与城市规划。</p>
            </div>
            <div class="timeline-dot"></div>
            <div class="w-5/12 pr-12 flex justify-end">
              <div class="w-64 h-64 rounded-full overflow-hidden border-[8px] border-white shadow-xl">
                <img alt="Day 6 City Tour" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://loremflickr.com/800/800/singapore,city,skyline,merlion" />
              </div>
            </div>
          </div>
          <!-- Day 7 -->
          <div class="flex items-center justify-between relative">
            <div class="w-5/12 text-right pr-12">
              <h4 class="text-3xl font-bold text-sg-blue mb-2" style="font-family: Georgia, serif">Day.7</h4>
              <p class="text-luxury-gold font-bold mb-3 text-2xl tracking-wide">星耀樟宜机场</p>
              <p class="text-gray-500 leading-relaxed">参观将自然与现代建筑完美结合的星耀樟宜（Jewel Changi），观赏震撼的室内瀑布雨漩涡。带着满满的收获，登机返程。</p>
            </div>
            <div class="timeline-dot"></div>
            <div class="w-5/12 pl-12">
              <div class="w-64 h-64 rounded-full overflow-hidden border-[8px] border-white shadow-xl">
                <img
                  alt="Day 7 Jewel Changi"
                  class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  src="https://loremflickr.com/800/800/airport,architecture,singapore" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 食宿标准 -->
    <section class="py-24 bg-white">
      <div class="max-w-[1440px] mx-auto px-8">
        <h2 class="text-4xl font-bold text-sg-blue mb-16 text-center">星级服务标准 · 全方位保障</h2>
        <div class="grid grid-cols-2 gap-12">
          <div class="relative rounded-3xl overflow-hidden group">
            <img alt="Hotel" class="w-full h-80 object-cover" src="/img/Hotel.jpg" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
              <h4 class="text-2xl font-bold mb-2">住宿：四星级酒店/学生公寓</h4>
              <p class="text-sm opacity-80">2人标准间，配备24小时保安及中文生活老师。确保孩子在舒适的环境中休息，恢复精力。</p>
            </div>
          </div>
          <div class="relative rounded-3xl overflow-hidden group">
            <img alt="Food" class="w-full h-80 object-cover" src="/img/Food.jpg" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
              <h4 class="text-2xl font-bold mb-2">饮食：多元狮城美食+中餐</h4>
              <p class="text-sm opacity-80">体验娘惹菜、海南鸡饭等特色美食，并合理搭配营养均衡的中式餐食，适应中国孩子的口味。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 费用说明 -->
    <!-- <section class="py-24 bg-sg-blue text-white">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="mb-10 md:mb-0">
            <h2 class="text-4xl font-bold mb-4">项目费用及报名</h2>
            <p class="text-blue-100 italic">2026年夏季早鸟价开启中</p>
          </div>
          <div class="bg-white text-sg-blue p-10 rounded-2xl shadow-2xl text-center">
            <p class="text-gray-400 mb-2 uppercase tracking-widest text-sm">官方统一售价</p>
            <p class="text-5xl font-bold text-luxury-gold mb-6 italic">
              ¥ 19,800
              <span class="text-lg">/人</span>
            </p>
            <ul class="text-left text-sm space-y-3 mb-8 text-gray-600">
              <li class="flex items-center">
                <iconify-icon class="text-green-500 mr-2" icon="ph:check-circle-fill"></iconify-icon>
                新加坡期间交通、食宿
              </li>
              <li class="flex items-center">
                <iconify-icon class="text-green-500 mr-2" icon="ph:check-circle-fill"></iconify-icon>
                课程研发及场地使用费
              </li>
              <li class="flex items-center">
                <iconify-icon class="text-green-500 mr-2" icon="ph:check-circle-fill"></iconify-icon>
                官方导游及老师陪同费用
              </li>
              <li class="flex items-center">
                <iconify-icon class="text-green-500 mr-2" icon="ph:check-circle-fill"></iconify-icon>
                最高标准研学旅游意外保险
              </li>
            </ul>
            <button class="w-full bg-luxury-gold hover:bg-[#d49552] text-white py-4 rounded-xl font-bold text-xl shadow-lg transition-all">立即抢占名额</button>
          </div>
        </div>
      </div>
    </section> -->
    <!-- 页脚复用 -->
  </div>
</template>

<script setup lang="ts">
// GrowthCamp page component
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
