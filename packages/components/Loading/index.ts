import { Loading } from './service'
import { vLoading } from './directive'
import type { App } from 'vue'

export const CtLoading = {
	name: 'CtLoading',
	install(app: App) {
		app.directive('loading', vLoading)
		app.config.globalProperties.$loading = Loading
	},
	directive: vLoading,
	service: Loading,
}

export default CtLoading

export { vLoading, vLoading as CtLoadingDirective, Loading as CtLoadingService }

export * from './types'
