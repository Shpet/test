import { createApp } from 'vue'
import App from '@/App'
import store from '@/store/store'

createApp(App)
.use(store)
.mount('#app')
