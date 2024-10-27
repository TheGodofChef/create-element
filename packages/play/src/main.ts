import { createApp } from 'vue'
import App from './App.vue'
import 'create-element/dist/index.css'

import CtElement, { zhCn } from 'create-element'
createApp(App).use(CtElement, { locale: zhCn }).mount('#app')
