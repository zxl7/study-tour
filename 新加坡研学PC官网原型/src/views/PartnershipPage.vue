<template>
  <div class="bg-slate-50 min-h-[calc(100vh-80px)] py-16">
    <div class="max-w-[1200px] mx-auto px-8">
      <section class="rounded-3xl bg-white border border-slate-100 shadow-xl p-10 md:p-14">
        <h1 class="text-5xl font-bold text-sg-blue mb-6">合作咨询</h1>
        <p class="text-gray-600 text-lg leading-relaxed max-w-4xl mb-10">欢迎学校、机构与行业伙伴围绕研学项目、课程研发、渠道合作与活动运营开展协同共创。</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div class="rounded-2xl bg-blue-50 border border-blue-100 p-6">
            <h2 class="text-2xl font-bold text-sg-blue mb-3">合作方向</h2>
            <p class="text-gray-600">研学项目联营、课程共建、品牌活动、海外资源对接与长期渠道协作。</p>
          </div>
          <div class="rounded-2xl bg-blue-50 border border-blue-100 p-6">
            <h2 class="text-2xl font-bold text-sg-blue mb-3">对接流程</h2>
            <p class="text-gray-600">提交需求 → 初步沟通 → 方案确认 → 联合执行 → 复盘迭代。</p>
          </div>
        </div>

        <div class="rounded-2xl bg-sg-blue text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p class="text-blue-100 mb-2">商务合作邮箱</p>
            <p class="text-2xl font-bold">partnership@eliteeducation.global</p>
          </div>
          <router-link class="bg-luxury-gold hover:bg-[#d49552] px-7 py-3 rounded-xl font-bold transition-all" to="/">返回首页</router-link>
        </div>
      </section>
    </div>
  </div>
</template>
