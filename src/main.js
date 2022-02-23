import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/services/axios'
import CInput from '@/components/CInput'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router)
app.use(store)
app.component('c-input', CInput)
app.mount('#app')
