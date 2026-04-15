<template>
  <div>
    <div class="bg-gray-900 text-white py-32 px-8 text-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
      <div class="relative z-10">
        <h1 class="text-5xl font-bold mb-6 text-luxury-gold">家族办公室</h1>
        <p class="text-gray-300 text-xl max-w-2xl mx-auto">为您实现财富传承与全球化资产配置，打造百年家族基业。</p>
      </div>
    </div>
    <div class="py-24 px-8 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-6 text-sg-blue">专业架构设计</h2>
        <p class="text-gray-600 leading-relaxed mb-8">结合新加坡得天独厚的税务优势与金融环境，为您量身定制安全、合规的家族财富管理中心（13O/13U）。</p>
        <ul class="space-y-4 text-gray-600 font-medium">
          <li class="flex items-center"><iconify-icon icon="ph:check-circle-fill" class="text-luxury-gold mr-3 text-xl"></iconify-icon> 资产保护与风险隔离</li>
          <li class="flex items-center"><iconify-icon icon="ph:check-circle-fill" class="text-luxury-gold mr-3 text-xl"></iconify-icon> 跨代财富平稳传承</li>
          <li class="flex items-center"><iconify-icon icon="ph:check-circle-fill" class="text-luxury-gold mr-3 text-xl"></iconify-icon> 优化全球税务筹划</li>
        </ul>
      </div>
      <div class="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl">
        <h2 class="text-2xl font-bold mb-6 text-sg-blue">专属服务团队</h2>
        <p class="text-gray-600 mb-6">我们联合新加坡本地顶尖律所、私人银行与资深税务师，提供全方位的保驾护航。</p>
        <button @click="openContactModal" class="w-full bg-luxury-gold text-white py-4 rounded-xl font-bold hover:bg-yellow-600 transition-colors shadow-lg">预约资深顾问咨询</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const openContactModal = inject('openContactModal') as () => void
</script>