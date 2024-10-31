import Message from './methods'
import { withInstallFunction } from '@create-element/utils'

export const CtMessage = withInstallFunction(Message, '$message')

export * from './types'
