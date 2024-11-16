import Form from './Form.vue'
import FormItem from './FormItem.vue'
import { withInstall } from '@create-element/utils'

export const CtForm = withInstall(Form)
export const CtFormItem = withInstall(FormItem)

export * from './types'
export * from './hooks'
