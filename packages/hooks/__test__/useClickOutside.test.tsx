import { describe, expect, it, vi} from 'vitest'
import { ref, defineComponent } from 'vue'
import {mount} from '@vue/test-utils'

import useClickOutside from '../useClickOutside'

describe('hooks/useClickOutside', () => {
  it('should add "click-outside" listener', async () => {
    const target = ref<HTMLElement | void>()
    const btnRef = ref<HTMLElement | void>()

    const handler = vi.fn()
    
    mount(
      defineComponent({
        setup() {
          useClickOutside(target, handler)
          return () => (
            <div ref={target}>
              <button ref={btnRef}>Click me</button>
            </div>
          )
        }
      })
    )

    await btnRef.value?.click()
    expect(handler).not.toHaveBeenCalled()

    await document.body.click()
    expect(handler).toHaveBeenCalledOnce()
  })
})