import { describe, test, expect } from 'vitest'
import { nextTick } from 'vue'
import { message, closeAll } from './methods'

export const rAF = async () => {
  return new Promise((res) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        res(null)
        await nextTick()
      })
    })
  })
}

function getTopValue(element: Element) {
  const style = window.getComputedStyle(element)
  const topValue = style.getPropertyValue('top')
  return Number.parseFloat(topValue)
}

describe('Message', () => {
  test('message() function', async () => {
    const handler = message({message: 'hello msg', duration: 0})
    await rAF()
    expect(document.querySelector('.ct-message')).toBeTruthy()
    handler.close()
    await rAF()
    expect(document.querySelector('.ct-message')).toBeFalsy()
  })

  test('call message() function more than once', async() => {
    message({message: 'hello msg', duration: 0})
    message({message: 'hello msg1', duration: 0})
    await rAF()
    expect(document.querySelectorAll('.ct-message').length).toBe(2)
    closeAll()
    await rAF()
  })

})