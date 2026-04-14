<template>
  <nav class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
    <div class="max-w-[1440px] mx-auto h-full flex items-center justify-between px-8">
      <router-link to="/home" class="flex items-center space-x-2 cursor-pointer transition-opacity hover:opacity-80">
        <div class="w-10 h-10 bg-sg-blue flex items-center justify-center rounded">
          <iconify-icon class="text-white text-2xl" icon="mdi:school"></iconify-icon>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-bold text-sg-blue tracking-wider">盛昌利民 · 狮城研学</span>
          <span class="text-[10px] text-luxury-gold tracking-widest uppercase font-semibold">Elite Education Global</span>
        </div>
      </router-link>
      <div class="flex items-center space-x-10 font-medium">
        <router-link class="nav-link text-gray-600 hover:text-sg-blue" active-class="text-sg-blue" to="/home">首页</router-link>
        <router-link class="nav-link text-gray-600 hover:text-sg-blue" active-class="text-sg-blue" to="/growth-camp">新加坡成长营</router-link>
        <router-link class="nav-link text-gray-600 hover:text-sg-blue" active-class="text-sg-blue" to="/mini-study">新加坡微留学</router-link>
        <router-link class="nav-link text-gray-600 hover:text-sg-blue" active-class="text-sg-blue" to="/ep-pass">人才准证EP</router-link>
        <router-link class="nav-link text-gray-600 hover:text-sg-blue" active-class="text-sg-blue" to="/school-camp">国际学校体验营</router-link>
      </div>
      <div class="flex items-center space-x-4">
        <div class="text-right mr-4 border-r pr-4 border-gray-200">
          <p class="text-xs text-gray-400">全国服务咨询热线</p>
          <p class="text-lg font-bold text-sg-blue">0898-65392581</p>
        </div>
        <button class="bg-luxury-gold hover:bg-[#d49552] text-white px-6 py-2.5 rounded shadow-lg transition-all font-semibold">立即预约咨询</button>
      </div>
    </div>
  </nav>
</template>
