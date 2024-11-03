import { describe, test, expect } from 'vitest'
import { message, closeAll } from './methods'
import { rAF } from '@create-element/utils'

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

  test('message offset', async () => {
    message({message: 'hello msg', duration: 0, offset: 100})
    message({message: 'hello msg', duration: 0, offset: 50})
    await rAF()

    const elements = document.querySelectorAll('.ct-message')
    expect(elements.length).toBe(2)

    expect(getTopValue(elements[0])).toBe(100)
    expect(getTopValue(elements[1])).toBe(150)
  })
})