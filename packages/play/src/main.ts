import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'create-element/dist/index.css'

import CtElement from 'create-element'
createApp(App).use(CtElement).mount('#app')
