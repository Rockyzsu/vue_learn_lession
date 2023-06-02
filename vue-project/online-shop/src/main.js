import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './utils/axios'
import { Tabbar,TabbarItem,Button,Toast } from 'vant'
//require('./mock/index')
import './mock'
const app = createApp(App)
app.config.globalProperties.$toast = Toast;
app.config.globalProperties.$axios=axios;
app.use(Button)
app.use(Toast)
app.use(Tabbar)
app.use(TabbarItem)
app.use(router)
app.mount('#app')
