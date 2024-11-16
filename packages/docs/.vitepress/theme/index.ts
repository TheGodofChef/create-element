import { type App } from 'vue'
import { ElementPlusContainer } from 'vitepress-preview-component'
import DefaultTheme from 'vitepress/theme'
import CtElement, { zhCn } from 'create-element'

import 'vitepress-preview-component/style.css'
import 'create-element/dist/index.css'

export default {
	...DefaultTheme,
	enhanceApp({ app }: { app: App }) {
		app.component('demo-preview', ElementPlusContainer)
		app.use(CtElement, { locale: zhCn })
	},
}
