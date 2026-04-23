import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// 引入第三方依赖的 JS 资源
import '@/assets/js/tailwindcss.3.4.3.js'
import '@/assets/js/iconify-icon.min.1.0.7.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
