import makeInstaller from './makeInstaller'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from './components'
import pringLogo from './pringLogo'
import '@create-element/theme/index.css'

pringLogo()

library.add(fas)
const installer = makeInstaller(components)

export * from '@create-element/components'
export * from '@create-element/locale'
export default installer
