// describe分组, expect断言
import { describe, expect, it } from 'vitest'
import {
	debugWarn,
	throwError,
	withInstall,
	makeInstaller,
	typeIconMap,
} from '../'
import { each } from 'lodash-es'

describe('utils/index', () => {
	it('debugWarn should be export', () => {
		expect(debugWarn).toBeDefined()
	})
	it('throwError should be export', () => {
		expect(throwError).toBeDefined()
	})
	it('withInstall should be export', () => {
		expect(withInstall).toBeDefined()
	})
	it('makeInstaller should be export', () => {
		expect(makeInstaller).toBeDefined()
	})
	it('typeIconMap should be worked', () => {
		expect(typeIconMap).toBeDefined()
		each(
			[
				['info', 'circle-info'],
				['success', 'check-circle'],
				['warning', 'circle-exclamation'],
				['danger', 'circle-xmark'],
				['error', 'circle-xmark'],
			],
			([type, icon]) => {
				expect(typeIconMap.get(type)).toBe(icon)
			}
		)
	})
})
