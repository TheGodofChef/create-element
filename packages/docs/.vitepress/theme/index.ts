import DefaultTheme from 'vitepress/theme'
import { type App } from 'vue'
import EricUI, { zhCn } from 'create-element'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'

import '@vitepress-preview/component/style.css'
import 'create-element/dist/index.css'

export default {
	...DefaultTheme,
	enhanceApp({ app }: { app: App }) {
		app.component('demo-preview', ElementPlusContainer)
		app.use(EricUI, { locale: zhCn })
	},
}
