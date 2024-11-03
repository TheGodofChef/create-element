import { describe, it, expect } from 'vitest'
import { rAF } from '@create-element/utils'
import { Loading } from './service'

describe('Loading', () => {
	it('should create Loading instance', () => {
		const instance = Loading()
		expect(instance).toBeTruthy()
	})

	it('should render mask', async () => {
		Loading()
		await rAF()
		expect(document.querySelector('.ct-loading__mask')).toBeTruthy()
	})

	it('should close loading and remove it from DOM', async () => {
		const instance = Loading()

		await rAF()
		expect(document.querySelector('.ct-loading')).toBeTruthy()
		instance.close()
		await rAF()

		expect(document.querySelector('.ct-loading')).toBeFalsy()
	})
})
