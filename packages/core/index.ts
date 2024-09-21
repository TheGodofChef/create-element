import { makeInstaller } from '@create-element/utils'
import components from './components'
import '@create-element/theme/index.css'

const installer = makeInstaller(components)

export * from '@create-element/components'
export default installer