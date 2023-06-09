

import { createApp } from 'vue'
import App from './Crawler.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App)
app.use(VueAxios,axios)
app.config.globalProperties.$axios=axios;

app.mount('#app')
