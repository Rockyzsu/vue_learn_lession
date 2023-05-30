import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button } from 'vant'
import { Tabbar,TabbarItem } from 'vant'
const app = createApp(App)

app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)
app.use(router)
app.mount('#app')
