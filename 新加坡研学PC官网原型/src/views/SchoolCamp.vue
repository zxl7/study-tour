<template>
  <div class="page-container">
    <!-- 项目专属Banner -->
    <header class="relative pt-20 h-[500px] flex items-center text-white overflow-hidden">
      <img alt="School Banner" class="absolute inset-0 w-full h-full object-cover" src="/img/School_Banner.jpg" />
      <div class="absolute inset-0 bg-teal-900/60"></div>
      <div class="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <h1 class="text-5xl font-bold mb-6">探秘新加坡顶级国际学校</h1>
        <p class="text-2xl text-teal-50 italic mb-8">UWC / SAS / Stamford / Tanglin 深度学术探访营</p>
        <div class="flex space-x-4">
          <span class="bg-white/20 px-4 py-1 rounded-full border border-white/40">IB/AP课程对接</span>
          <span class="bg-white/20 px-4 py-1 rounded-full border border-white/40">全球顶尖师资</span>
          <span class="bg-white/20 px-4 py-1 rounded-full border border-white/40">名校录取分析</span>
        </div>
      </div>
    </header>
    <!-- 国际学校插班课程 -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">国际学校插班课程</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <div class="flex justify-center gap-4 mb-8">
            <span class="bg-blue-50 text-sg-blue px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">课程年龄：适龄3-15岁</span>
            <span class="bg-blue-50 text-sg-blue px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">开课时间：3-4周，6-7周，四周，12周</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- 综合活动 -->
          <div class="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-luxury-gold text-white rounded-xl flex items-center justify-center mr-4">
                <iconify-icon class="text-2xl" icon="ph:basketball-bold"></iconify-icon>
              </div>
              <h3 class="text-2xl font-bold text-sg-blue">综合活动</h3>
            </div>
            <p class="text-gray-600 mb-8 leading-relaxed">通过一系列活动（木材制作、园艺、烘焙等），激发孩子们的创造力和动手能力，在实践中探索未知，培养独立解决问题的能力。</p>
            <div class="grid grid-cols-2 gap-4">
              <img src="/img/Activity_1.jpg" alt="Activity" class="w-full h-40 object-cover rounded-xl shadow-md" />
              <img src="/img/Activity.jpg" alt="Activity" class="w-full h-40 object-cover rounded-xl shadow-md" />
            </div>
          </div>

          <!-- 多重冒险 -->
          <div class="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-luxury-gold text-white rounded-xl flex items-center justify-center mr-4">
                <iconify-icon class="text-2xl" icon="ph:compass-bold"></iconify-icon>
              </div>
              <h3 class="text-2xl font-bold text-sg-blue">多重冒险</h3>
            </div>
            <p class="text-gray-600 mb-8 leading-relaxed">勇敢者的游戏！包含射箭、跑酷、定向越野、攀岩、无人机驾驶等，全方位锻炼孩子的体能、反应力与团队协作精神。</p>
            <div class="grid grid-cols-2 gap-4">
              <img src="/img/活动2.jpg" alt="Adventure" class="w-full h-40 object-cover rounded-xl shadow-md" />
              <img src="/img/XCL.jpg" alt="Adventure" class="w-full h-40 object-cover rounded-xl shadow-md" />
            </div>
          </div>

          <!-- 英语强化 -->
          <div class="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-luxury-gold text-white rounded-xl flex items-center justify-center mr-4">
                <iconify-icon class="text-2xl" icon="ph:translate-bold"></iconify-icon>
              </div>
              <h3 class="text-2xl font-bold text-sg-blue">英语强化</h3>
            </div>
            <p class="text-gray-600 mb-8 leading-relaxed">语言游戏、趣味互动活动、听说读写全面提升。在全英文母语环境中，让孩子告别哑巴英语，建立跨文化交流的自信心。</p>
            <div class="grid grid-cols-2 gap-4">
              <img src="/img/English.jpg" alt="English" class="w-full h-40 object-cover rounded-xl shadow-md" />
              <img src="/img/English_1.jpg" alt="English" class="w-full h-40 object-cover rounded-xl shadow-md" />
            </div>
          </div>

          <!-- 创意STEAM -->
          <div class="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-luxury-gold text-white rounded-xl flex items-center justify-center mr-4">
                <iconify-icon class="text-2xl" icon="ph:flask-bold"></iconify-icon>
              </div>
              <h3 class="text-2xl font-bold text-sg-blue">创意STEAM</h3>
            </div>
            <p class="text-gray-600 mb-8 leading-relaxed">编程机器人、虚拟现实(VR)、3D打印、趣味科学工程。融合科学、技术、工程、艺术与数学，培养未来科技领袖的创新思维。</p>
            <div class="grid grid-cols-2 gap-4">
              <img src="/img/STEAM.jpg" alt="STEAM" class="w-full h-40 object-cover rounded-xl shadow-md" />
              <img src="/img/STEAM_1.jpg" alt="STEAM" class="w-full h-40 object-cover rounded-xl shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 国际学校同步课程 -->
    <section class="py-16 bg-sg-blue relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">国际学校同步课程</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 人工智能 -->
          <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-white">
            <div class="flex items-center mb-6">
              <iconify-icon class="text-3xl text-luxury-gold mr-3" icon="ph:robot-bold"></iconify-icon>
              <h3 class="text-2xl font-bold">人工智能</h3>
            </div>
            <p class="text-blue-100 mb-6 leading-relaxed">结合编程与AI技术，启发逻辑思维。让孩子在动手操作中，了解前沿科技的原理与应用，培养计算思维与解决问题的能力。</p>
            <img src="/img/AI.jpg" alt="AI" class="w-full h-48 object-cover rounded-xl shadow-lg" />
          </div>

          <!-- 小小探索家活动 -->
          <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-white">
            <div class="flex items-center mb-6">
              <iconify-icon class="text-3xl text-luxury-gold mr-3" icon="ph:magnifying-glass-bold"></iconify-icon>
              <h3 class="text-2xl font-bold">小小探索家活动</h3>
            </div>
            <p class="text-blue-100 mb-6 leading-relaxed">针对低龄段儿童设计的趣味探索课程。通过丰富多彩的室内外互动游戏、自然观察、艺术启蒙，激发孩子的好奇心与想象力。</p>
            <img src="/img/Explorer.jpg" alt="Explorer" class="w-full h-48 object-cover rounded-xl shadow-lg" />
          </div>

          <!-- 创意编程 -->
          <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-white">
            <div class="flex items-center mb-6">
              <iconify-icon class="text-3xl text-luxury-gold mr-3" icon="ph:code-bold"></iconify-icon>
              <h3 class="text-2xl font-bold">创意编程</h3>
            </div>
            <p class="text-blue-100 mb-6 leading-relaxed">适合不同基础的进阶式编程课程。从图形化编程启蒙到高级代码语言学习，培养数字时代的核心技能与创新创造能力。</p>
            <img src="/img/Coding.jpg" alt="Coding" class="w-full h-48 object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
    <!-- 行程样例 -->
    <section class="py-24 bg-slate-50 relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-bold text-sg-blue mb-4">行程样例</h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p class="text-gray-500 italic text-lg">8天7晚 · 新加坡国际学校全真体验营</p>
        </div>

        <div class="relative max-w-5xl mx-auto">
          <!-- 时间轴中心线 -->
          <div class="timeline-line"></div>

          <div class="space-y-16">
            <!-- Day 1 -->
            <div class="flex flex-col md:flex-row items-center justify-between relative group">
              <div class="hidden md:block w-5/12 text-right pr-12">
                <div class="grid grid-cols-2 gap-2">
                  <img src="/img/Arrival_1.jpg" alt="Arrival" class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                  <img src="/img/City.jpg" alt="City" class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <!-- 时间轴节点 -->
              <div class="timeline-dot"></div>
              <div class="w-full md:w-5/12 pl-20 md:pl-12">
                <h3 class="text-3xl font-bold text-luxury-gold mb-2" style="font-family: serif">Day 1</h3>
                <h4 class="text-xl font-bold text-sg-blue mb-3">【开启名校探秘之旅，从这里梦开始】</h4>
                <p class="text-gray-600 leading-relaxed">集合出发，乘机飞往享有"花园城市"美誉的新加坡。接机后入住，小营员们签到破冰，随后享用欢迎晚宴，感受特色南洋之美。</p>
              </div>
            </div>

            <!-- Day 2 -->
            <div class="flex flex-col md:flex-row-reverse items-center justify-between relative group">
              <div class="hidden md:block w-5/12 text-left pl-12">
                <div class="grid grid-cols-2 gap-2">
                  <img src="/img/Tour_6.jpg" alt="Tour" class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                  <img src="/img/Tour_7.jpg" alt="Tour" class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <div class="timeline-dot"></div>
              <div class="w-full md:w-5/12 pl-20 md:pr-12 md:pl-0 text-left md:text-right">
                <h3 class="text-3xl font-bold text-luxury-gold mb-2" style="font-family: serif">Day 2</h3>
                <h4 class="text-xl font-bold text-sg-blue mb-3">【上午探索多元，下午体验自然与城市发展】</h4>
                <p class="text-gray-600 leading-relaxed">
                  上午：走上跨越历史的多元文化街区，体验当地异域风情，探访新加坡河畔、鱼尾狮公园、国会区，感受城市新旧交融。了解新加坡历史。
                  <br />
                  下午：参访新加坡水务管理中心(Marina Barrage)，探索世界领先的城市水资源管理系统，培养可持续发展观念。漫步滨海湾花园及超级树，感受自然与科技融合之美。
                </p>
              </div>
            </div>

            <!-- Day 3 -->
            <div class="flex flex-col md:flex-row items-center justify-between relative group">
              <div class="hidden md:block w-5/12 text-right pr-12">
                <div class="grid grid-cols-2 gap-2">
                  <img src="/img/School_building_1.jpg" alt="School building" class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                  <img src="/img/Students_in_classroom.jpg" alt="Students in classroom" class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <div class="timeline-dot"></div>
              <div class="w-full md:w-5/12 pl-20 md:pl-12">
                <h3 class="text-3xl font-bold text-luxury-gold mb-2" style="font-family: serif">Day 3</h3>
                <h4 class="text-xl font-bold text-sg-blue mb-3">【上午学校学习，下午走进新加坡科学艺术博物馆】</h4>
                <p class="text-gray-600 leading-relaxed">
                  上午：国际学校课程体验。
                  <br />
                  下午：走进新加坡科学艺术博物馆，这是世界上首个艺术科学相结合的博物馆，外形像一朵盛开的莲花。在这里探索艺术科学的交汇，观赏独特的多媒体数字艺术展览。启发孩子对科学艺术的跨界融合认知，拓宽全球视野，对内心的艺术共鸣。
                </p>
              </div>
            </div>

            <!-- Day 4 -->
            <div class="flex flex-col md:flex-row-reverse items-center justify-between relative group">
              <div class="hidden md:block w-5/12 text-left pl-12">
                <div class="grid grid-cols-2 gap-2">
                  <img
                    src="https://loremflickr.com/800/800/singapore,zoo,animal"
                    alt="Culture"
                    class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                  <img src="/img/Night_Safari_1.jpg" alt="Night Safari" class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <div class="timeline-dot"></div>
              <div class="w-full md:w-5/12 pl-20 md:pr-12 md:pl-0 text-left md:text-right">
                <h3 class="text-3xl font-bold text-luxury-gold mb-2" style="font-family: serif">Day 4</h3>
                <h4 class="text-xl font-bold text-sg-blue mb-3">【上午学校学习，下午夜间动物园】</h4>
                <p class="text-gray-600 leading-relaxed">
                  上午：国际学校课程体验。
                  <br />
                  下午：探访全球首座夜间野生动物园，乘坐游览车穿梭丛林，近距离观察夜行动物习性，了解热带雨林生态保护。聆听丛林夜行动物的故事，体验神秘大自然，在欢声笑语中完成自然生态课堂。
                </p>
              </div>
            </div>

            <!-- Day 5 -->
            <div class="flex flex-col md:flex-row items-center justify-between relative group">
              <div class="hidden md:block w-5/12 text-right pr-12">
                <div class="grid grid-cols-2 gap-2">
                  <img
                    src="https://picsum.photos/seed/schoollibrary/400/300"
                    alt="School library or classroom"
                    class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                  <img
                    src="https://picsum.photos/seed/studentswalking/400/300"
                    alt="Students walking in school"
                    class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <div class="timeline-dot"></div>
              <div class="w-full md:w-5/12 pl-20 md:pl-12">
                <h3 class="text-3xl font-bold text-luxury-gold mb-2" style="font-family: serif">Day 5</h3>
                <h4 class="text-xl font-bold text-sg-blue mb-3">【上午学校学习，下午名校参访营结业】</h4>
                <p class="text-gray-600 leading-relaxed">
                  上午：国际学校课程体验。
                  <br />
                  下午：走进新加坡第一学府、亚洲排名第一的大学——新加坡国立大学（NUS）进行深度参访，感受浓厚学术氛围。由名校留学生带领，了解大学生活，树立名校梦想。在庄重的结业仪式中，获得校方颁发的结业证书。
                </p>
              </div>
            </div>

            <!-- Day 6 -->
            <div class="flex flex-col md:flex-row-reverse items-center justify-between relative group">
              <div class="hidden md:block w-5/12 text-left pl-12">
                <div class="grid grid-cols-2 gap-2">
                  <img
                    src="https://picsum.photos/seed/universalstudios/400/300"
                    alt="Universal Studios"
                    class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                  <img src="https://picsum.photos/seed/play/400/300" alt="Play" class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <div class="timeline-dot"></div>
              <div class="w-full md:w-5/12 pl-20 md:pr-12 md:pl-0 text-left md:text-right">
                <h3 class="text-3xl font-bold text-luxury-gold mb-2" style="font-family: serif">Day 6</h3>
                <h4 class="text-xl font-bold text-sg-blue mb-3">【上午环球影城，晚上星耀樟宜购物】</h4>
                <p class="text-gray-600 leading-relaxed">
                  全天：畅游东南亚唯一的环球影城，在各大主题乐园（如侏罗纪公园、变形金刚、木乃伊复仇记等）尽情玩耍。在游乐中释放童真，通过团队协作挑战各种项目，度过充满欢笑与刺激的一天，让身心在紧张学习后彻底放松。
                </p>
              </div>
            </div>

            <!-- Day 7 -->
            <div class="flex flex-col md:flex-row items-center justify-between relative group">
              <div class="hidden md:block w-5/12 text-right pr-12">
                <div class="grid grid-cols-2 gap-2">
                  <img
                    src="https://picsum.photos/seed/jewelchangi/400/300"
                    alt="Jewel Changi"
                    class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                  <img src="/img/Flight_1.jpg" alt="Flight" class="rounded-xl object-cover h-32 w-full shadow-md group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <div class="timeline-dot"></div>
              <div class="w-full md:w-5/12 pl-20 md:pl-12">
                <h3 class="text-3xl font-bold text-luxury-gold mb-2" style="font-family: serif">Day 7</h3>
                <h4 class="text-xl font-bold text-sg-blue mb-3">【满载而归，分享成长经历】</h4>
                <p class="text-gray-600 leading-relaxed">前往世界闻名的星耀樟宜机场，观赏震撼的室内瀑布（雨漩涡）。在商场选购伴手礼。结束充实而难忘的新加坡游学之旅，搭乘航班返回温馨的家。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 新加坡特色美食 & 合作酒店 -->
    <section class="py-24 bg-white relative overflow-hidden">
      <!-- 装饰背景图案 -->
      <div class="absolute top-0 left-0 w-1/3 h-full bg-blue-50/50 rounded-r-[200px] z-0"></div>
      <div class="absolute top-1/4 -left-20 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl z-0"></div>

      <div class="max-w-[1440px] mx-auto px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <!-- 左侧文本与特色美食 -->
          <div class="lg:col-span-7">
            <div class="mb-16">
              <p class="text-sg-blue font-bold tracking-widest uppercase mb-2 text-xl">SPECIALTY CUISINE</p>
              <h2 class="text-5xl font-bold text-sg-blue mb-6">新加坡特色美食</h2>
              <p class="text-gray-600 text-lg leading-relaxed">体验地道南洋风味，在世界非物质文化遗产“小贩中心”中品味多元文化的交融。从米其林推荐到街头小吃，让味蕾也来一场深度游学。</p>
            </div>

            <!-- 美食圆形展示区 -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              <div class="text-center group">
                <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-luxury-gold shadow-lg mb-4">
                  <img src="/img/Bak_Kut_Teh.jpeg" alt="Bak Kut Teh" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 class="font-bold text-sg-blue">新加坡肉骨茶</h4>
              </div>
              <div class="text-center group">
                <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-luxury-gold shadow-lg mb-4">
                  <img src="/img/Chicken_Rice.jpeg" alt="Chicken Rice" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 class="font-bold text-sg-blue">新加坡海南鸡饭</h4>
              </div>
              <div class="text-center group">
                <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-luxury-gold shadow-lg mb-4">
                  <img src="/img/Chilli_Crab.jpg" alt="Chilli Crab" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 class="font-bold text-sg-blue">新加坡辣椒螃蟹</h4>
              </div>
              <div class="text-center group">
                <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-luxury-gold shadow-lg mb-4">
                  <img src="/img/Laksa.jpg" alt="Laksa" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 class="font-bold text-sg-blue">新加坡Laksa</h4>
              </div>
            </div>

            <!-- 合作酒店 -->
            <div>
              <p class="text-sg-blue font-bold tracking-widest uppercase mb-2 text-xl">COOPERATIVE HOTELS</p>
              <h2 class="text-4xl font-bold text-sg-blue mb-8">合作酒店</h2>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-all duration-300">
                  <img src="https://www.google.com/s2/favicons?sz=128&domain=marinabaysands.com" alt="Marina Bay Sands Logo" class="h-10 w-10 mx-auto object-contain mb-3" />
                  <div class="font-bold text-sm text-gray-700">滨海湾金沙</div>
                </div>
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-all duration-300">
                  <img src="https://www.google.com/s2/favicons?sz=128&domain=rwsentosa.com" alt="Resorts World Sentosa Logo" class="h-10 w-10 mx-auto object-contain mb-3" />
                  <div class="font-bold text-sm text-gray-700">名胜世界</div>
                </div>
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-all duration-300">
                  <img src="https://www.google.com/s2/favicons?sz=128&domain=shangri-la.com" alt="Shangri-La Logo" class="h-10 w-10 mx-auto object-contain mb-3" />
                  <div class="font-bold text-sm text-gray-700">香格里拉</div>
                </div>
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-all duration-300">
                  <img src="https://www.google.com/s2/favicons?sz=128&domain=fullertonhotel.com" alt="The Fullerton Logo" class="h-10 w-10 mx-auto object-contain mb-3" />
                  <div class="font-bold text-sm text-gray-700">The Fullerton</div>
                </div>
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-all duration-300">
                  <img src="https://www.google.com/s2/favicons?sz=128&domain=hotelboss.sg" alt="Hotel Boss Logo" class="h-10 w-10 mx-auto object-contain mb-3" />
                  <div class="font-bold text-sm text-gray-700">HOTEL BOSS</div>
                </div>
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-all duration-300">
                  <img src="https://www.google.com/s2/favicons?sz=128&domain=all.accor.com" alt="ibis styles Logo" class="h-10 w-10 mx-auto object-contain mb-3" />
                  <div class="font-bold text-sm text-gray-700">ibis styles</div>
                </div>
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-all duration-300">
                  <img src="https://www.google.com/s2/favicons?sz=128&domain=accor.com" alt="Mercure Logo" class="h-10 w-10 mx-auto object-contain mb-3" />
                  <div class="font-bold text-sm text-gray-700">Mercure</div>
                </div>
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-all duration-300">
                  <img src="https://www.google.com/s2/favicons?sz=128&domain=hotel81.com.sg" alt="Hotel 81 Logo" class="h-10 w-10 mx-auto object-contain mb-3" />
                  <div class="font-bold text-sm text-gray-700">HOTEL 81</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧大图与老巴刹介绍 -->
          <div class="lg:col-span-5 relative">
            <div class="h-full w-full rounded-[40px] overflow-hidden shadow-2xl relative">
              <img src="/img/Lau_Pa_Sat.jpg" alt="Lau Pa Sat" class="w-full h-full object-cover min-h-[600px]" />
              <div class="absolute inset-0 bg-gradient-to-t from-sg-blue/90 via-sg-blue/40 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-10 text-white">
                <p class="font-bold text-luxury-gold tracking-widest mb-2 text-sm">世界非物质文化遗产</p>
                <h3 class="text-4xl font-bold mb-4">
                  小贩中心文化
                  <br />
                  新加坡老巴刹
                </h3>
                <div class="w-12 h-1 bg-luxury-gold mb-6"></div>
                <p class="text-white/90 leading-relaxed text-sm">
                  老巴刹地处金融区的核心地带，其突出醒目的八边形外观和装饰型柱子最早是由建筑师哥里门所设计。这位知名的爱尔兰建筑师在殖民地时代还为新加坡设计了许多著名建筑，当中的一些重要建筑迄今还巍然伫立，每天都有络绎不绝的人前去品尝美食。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24 bg-teal-900 text-white">
      <div class="max-w-[1440px] mx-auto px-8 text-center">
        <h2 class="text-4xl font-bold mb-10 text-luxury-gold">国际学校体验营 · 收费明细</h2>
        <div class="bg-white text-gray-800 p-12 rounded-3xl max-w-2xl mx-auto shadow-2xl">
          <p class="text-5xl font-black text-sg-blue mb-4">
            ¥ xxxx
            <span class="text-lg">/人</span>
          </p>
          <div class="grid grid-cols-2 gap-6 text-left mb-10">
            <div class="flex items-center">
              <iconify-icon class="text-teal-600 mr-2" icon="ph:check-circle-bold"></iconify-icon>
              至少4所名校深度探访
            </div>
            <div class="flex items-center">
              <iconify-icon class="text-teal-600 mr-2" icon="ph:check-circle-bold"></iconify-icon>
              招生官1对1申请指导
            </div>
            <div class="flex items-center">
              <iconify-icon class="text-teal-600 mr-2" icon="ph:check-circle-bold"></iconify-icon>
              五星级配套酒店/交通
            </div>
            <div class="flex items-center">
              <iconify-icon class="text-teal-600 mr-2" icon="ph:check-circle-bold"></iconify-icon>
              留学入学能力测评
            </div>
          </div>
          <button class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl text-xl shadow-lg transition-all">立即在线申请</button>
        </div>
      </div>
    </section>
    <!-- 底部 -->
  </div>
</template>

<script setup lang="ts">
// SchoolCamp page component
</script>

<style scoped>
.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2rem;
  width: 2px;
  background: linear-gradient(to bottom, rgba(229, 166, 99, 0.2), rgba(229, 166, 99, 0.65), rgba(229, 166, 99, 0.2));
  z-index: 1;
}

.timeline-dot {
  position: absolute;
  left: 2rem;
  width: 1.25rem;
  height: 1.25rem;
  transform: translateX(-50%);
  border-radius: 9999px;
  background-color: #e5a663;
  border: 4px solid #ffffff;
  box-shadow: 0 8px 16px rgba(0, 90, 156, 0.15);
  z-index: 10;
}

@media (min-width: 768px) {
  .timeline-line {
    left: 50%;
    transform: translateX(-50%);
  }

  .timeline-dot {
    left: 50%;
  }
}
</style>

<style scoped>
.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2rem;
  width: 2px;
  background: linear-gradient(to bottom, rgba(229, 166, 99, 0.2), rgba(229, 166, 99, 0.65), rgba(229, 166, 99, 0.2));
  z-index: 1;
}

.timeline-dot {
  position: absolute;
  left: 2rem;
  width: 1.25rem;
  height: 1.25rem;
  transform: translateX(-50%);
  border-radius: 9999px;
  background-color: #e5a663;
  border: 4px solid #ffffff;
  box-shadow: 0 8px 16px rgba(0, 90, 156, 0.15);
  z-index: 10;
}

@media (min-width: 768px) {
  .timeline-line {
    left: 50%;
    transform: translateX(-50%);
  }

  .timeline-dot {
    left: 50%;
  }
}
</style>
