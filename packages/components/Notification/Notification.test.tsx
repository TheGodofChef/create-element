import { describe, test, expect } from 'vitest'
import { notification } from './methods'
import { rAF } from '@create-element/utils'

function getTopValue(element: Element) {
  const style = window.getComputedStyle(element)
  const topValue = style.getPropertyValue('top')
  return Number.parseFloat(topValue)
}

describe('Notification', () => {
  test('notification() function', async () => {
    const handler = notification({ message: 'Hello World', duration: 0 })
    await rAF()
    expect(document.querySelector('.ct-notification')).toBeTruthy()
    handler.close()
    await rAF()
    expect(document.querySelector('.ct-notification')).toBeFalsy()
  })

  test('call notification() function more than once', async () => {
    notification({ message: 'Hello World', duration: 0 })
    notification({ message: 'Hello World', duration: 0 })
    await rAF()
    expect(document.querySelectorAll('.ct-notification').length).toBe(2)
    notification.closeAll()
    await rAF()
    expect(document.querySelectorAll('.ct-notification').length).toBe(0)
  })

  
  test('notification offset', async () => {
    notification({message: 'hello msg', duration: 0, offset: 100})
    notification({message: 'hello msg', duration: 0, offset: 50})
    await rAF()

    const elements = document.querySelectorAll('.ct-notification')
    expect(elements.length).toBe(2)
 
    expect(getTopValue(elements[0])).toBe(100)
    expect(getTopValue(elements[1])).toBe(150)
  })
})