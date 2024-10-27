import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, createApp } from 'vue'
import { withInstall, makeInstaller } from '../install'

const AppComp = defineComponent({
  setup() {
    return () => <div>App</div>
  }
})

const compA = withInstall(defineComponent({
  name: 'CompA',
  setup() {
    return () => <div>CompA</div>
  }
})) 

const compB = withInstall(defineComponent({
  name: 'CompB',
  setup() {
    return () => <div>CompB</div>
  }
})) 

describe('install', () => {
   it('withInstall shoule be worked', () => {
    const wrapper = mount(() => <div id="app"></div>)
    const app = createApp(AppComp)

    app.use(compA).use(compB).mount(wrapper.element)

    expect(compA.install).toBeDefined()
    expect(compB.install).toBeDefined()
    expect(app._context.components['CompA']).toBeTruthy()
    expect(app._context.components['CompB']).toBeTruthy()
   })

   it('makeInstaller shoule be worked', () => {
    const wrapper = mount(() => <div id="app"></div>)
    const app = createApp(AppComp)
    const installer = makeInstaller([compA, compB])

    app.use(installer).mount(wrapper.element)

    expect(installer).toBeDefined()
    expect(wrapper.findComponent(compA)).toBeTruthy()
    expect(wrapper.findComponent(compB)).toBeTruthy()
   })
})