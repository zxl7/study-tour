<template>
  <footer class="bg-gray-900 text-gray-400 py-8">
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
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-sm">教育移民</h4>
          <ul class="space-y-4">
            <li><router-link class="hover:text-luxury-gold transition-all" to="/ep-pass">人才准证 EP</router-link></li>
            <li><router-link class="hover:text-luxury-gold transition-all" to="/family-office">家族办公室</router-link></li>
            <li><router-link class="hover:text-luxury-gold transition-all" to="/self-employed-pass">自雇准证办理</router-link></li>
            <li><router-link class="hover:text-luxury-gold transition-all" to="/pr-application">PR 永居申请</router-link></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-sm">关于我们</h4>
          <ul class="space-y-4">
            <li><router-link class="hover:text-luxury-gold transition-all" to="/about">集团简介</router-link></li>
            <li><router-link class="hover:text-luxury-gold transition-all" to="/terms">服务条款</router-link></li>
            <li><router-link class="hover:text-luxury-gold transition-all" to="/privacy">隐私政策</router-link></li>
            <li><router-link class="hover:text-luxury-gold transition-all" to="/partnership">合作咨询</router-link></li>
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
</template>
