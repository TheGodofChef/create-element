import notification from './methods'
import { withInstallFunction } from '@create-element/utils'

export const CtNotification = withInstallFunction(notification, '$notify')

export * from './types'
