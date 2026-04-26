<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="visible" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" @click="close">
        <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl w-full relative" @click.stop>
          <button @click="close" class="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
            <iconify-icon icon="ph:x-bold" class="text-xl"></iconify-icon>
          </button>
          
          <div class="text-center mb-10">
            <h3 class="text-3xl font-bold text-sg-blue mb-4">联系我们的教育顾问</h3>
            <p class="text-gray-500">扫描二维码或直接电话咨询，获取专属规划方案</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              v-for="a in advisors"
              :key="a.name"
              class="text-center bg-slate-50 p-3 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"
            >
              <h4 class="text-2xl font-bold text-gray-800 mb-2">{{ a.name }}</h4>
              <div class="flex items-center justify-center text-luxury-gold font-bold text-lg mb-3">
                <iconify-icon icon="ph:phone-fill" class="mr-2"></iconify-icon>
                {{ a.phone }}
              </div>

              <div v-if="a.qr" class="w-48 h-48 mx-auto bg-white p-2 rounded-xl shadow-sm">
                <img :src="a.qr" :alt="`${a.name} QR Code`" class="w-full h-full object-contain" />
              </div>
              <div
                v-else
                class="w-48 h-48 mx-auto bg-white p-2 rounded-xl shadow-sm flex items-center justify-center text-gray-400 text-sm"
              >
                暂无二维码
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const advisors = Object.freeze([
  { name: 'Jason', phone: '166 8978 0303', qr: '/img/QR_Code-J.jpg' },
  { name: 'Adela', phone: '173 3083 5386', qr: '/img/QR_Code-A.jpg' },
  { name: 'Joey', phone: '19907618131', qr: '/img/QR_Code-O.jpg' },
])

defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
