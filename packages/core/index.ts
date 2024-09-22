import { makeInstaller } from '@create-element/utils'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from './components'
import '@create-element/theme/index.css'

library.add(fas)
const installer = makeInstaller(components)

export * from '@create-element/components'
export default installer
