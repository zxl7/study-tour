<template>
  <div class="app-layout">
    <nav class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
      <div class="max-w-[1440px] mx-auto h-full flex items-center justify-between px-8">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-sg-blue flex items-center justify-center rounded">
            <iconify-icon class="text-white text-2xl" icon="mdi:school"></iconify-icon>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-sg-blue tracking-wider">盛昌利民 · 狮城研学</span>
            <span class="text-[10px] text-luxury-gold tracking-widest uppercase font-semibold">Elite Education Global</span>
          </div>
        </div>
        <div class="flex items-center space-x-10 font-medium">
          <router-link class="nav-link text-gray-600 hover:text-sg-blue" exact-active-class="text-sg-blue" to="/">首页</router-link>
          <router-link class="nav-link text-gray-600 hover:text-sg-blue" active-class="text-sg-blue" to="/growth-camp">新加坡成长营</router-link>
          <router-link class="nav-link text-gray-600 hover:text-sg-blue" active-class="text-sg-blue" to="/mini-study">新加坡微留学</router-link>
          <router-link class="nav-link text-gray-600 hover:text-sg-blue" active-class="text-sg-blue" to="/ep-pass">人才准证EP</router-link>
          <router-link class="nav-link text-gray-600 hover:text-sg-blue" active-class="text-sg-blue" to="/school-camp">国际学校体验营</router-link>
        </div>
        <div class="flex items-center space-x-4">
          <div class="text-right mr-4 border-r pr-4 border-gray-200">
            <p class="text-xs text-gray-400">全国服务咨询热线</p>
            <p class="text-lg font-bold text-sg-blue">400-888-2026</p>
          </div>
          <button class="bg-luxury-gold hover:bg-[#d49552] text-white px-6 py-2.5 rounded shadow-lg transition-all font-semibold">立即预约咨询</button>
        </div>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view />
    </main>
    
    <footer class="bg-gray-900 text-gray-400 py-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="grid grid-cols-5 gap-12 mb-16">
          <div class="col-span-2">
            <div class="flex items-center space-x-2 mb-8">
              <div class="w-10 h-10 bg-sg-blue flex items-center justify-center rounded">
                <iconify-icon class="text-white text-2xl" icon="mdi:school"></iconify-icon>
              </div>
              <span class="text-xl font-bold text-white tracking-wider">盛昌利民 · 狮城研学</span>
            </div>
            <p class="leading-relaxed mb-8 pr-12">作为海南领先的精英教育咨询机构，我们致力于整合全球优质教育资源，为中国家庭提供全方位的研学、升学及移民规划服务。</p>
            <div class="flex space-x-4">
              <a class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sg-blue transition-all" href="#"><iconify-icon icon="ri:wechat-fill"></iconify-icon></a>
              <a class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sg-blue transition-all" href="#"><iconify-icon icon="ri:douyin-fill"></iconify-icon></a>
              <a class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sg-blue transition-all" href="#"><iconify-icon icon="ri:instagram-fill"></iconify-icon></a>
            </div>
          </div>
          <div>
            <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-sm">研学项目</h4>
            <ul class="space-y-4">
              <li><router-link class="hover:text-luxury-gold transition-all" to="/growth-camp">新加坡成长营</router-link></li>
              <li><router-link class="hover:text-luxury-gold transition-all" to="/mini-study">新加坡微留学</router-link></li>
              <li><router-link class="hover:text-luxury-gold transition-all" to="/school-camp">国际学校体验营</router-link></li>
              <li><a class="hover:text-luxury-gold transition-all" href="#">青少年领袖营</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-sm">教育移民</h4>
            <ul class="space-y-4">
              <li><router-link class="hover:text-luxury-gold transition-all" to="/ep-pass">人才准证 EP</router-link></li>
              <li><a class="hover:text-luxury-gold transition-all" href="#">家族办公室</a></li>
              <li><a class="hover:text-luxury-gold transition-all" href="#">自雇准证办理</a></li>
              <li><a class="hover:text-luxury-gold transition-all" href="#">PR 永居申请</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-sm">关于我们</h4>
            <ul class="space-y-4">
              <li><a class="hover:text-luxury-gold transition-all" href="#">集团简介</a></li>
              <li><a class="hover:text-luxury-gold transition-all" href="#">服务条款</a></li>
              <li><a class="hover:text-luxury-gold transition-all" href="#">隐私政策</a></li>
              <li><a class="hover:text-luxury-gold transition-all" href="#">合作咨询</a></li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t border-gray-800 text-sm flex justify-between items-center">
          <p>© 2026 盛昌利民 Elite Education Global. All Rights Reserved.</p>
          <div class="flex space-x-6">
            <span>新加坡会计与企业管制局(ACRA)注册号：2016XXXXXXG</span>
            <span>京ICP备XXXXXXX号</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
/**
 * Layout.vue
 * 纯函数式组件思想：UI 视图仅受状态驱动，提供统一的基础布局。
 */
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
}
</style>
