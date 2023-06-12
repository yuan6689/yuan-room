import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from "./router/index"

import 'normalize.css/normalize.css'
import "./assets/css/index.css"

createApp(App).use(pinia).use(router).mount('#app')
