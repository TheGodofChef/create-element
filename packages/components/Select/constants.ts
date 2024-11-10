import type { InjectionKey } from 'vue'
import type { SelectContext } from './types'

export const SELECT_CTX_KEY: InjectionKey<SelectContext> =
	Symbol('selectContext')

export const POPPER_OPTIONS: any = {
	modifiers: [
		{
			name: 'offset',
			options: {
				offset: [0, 9],
			},
		},
		{
			name: 'sameWidth',
			enabled: true,
			fn: ({ state }: { state: any }) => {
				state.style.popper.width = `${state.rects.reference.width}px`
			},
			phase: 'beforeWrite',
			requires: ['computedStyles'],
		},
	],
} as const
