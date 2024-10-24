import type { Component, Ref, ComputedRef } from 'vue'

export type ButtonType = 'primary' | 'success' | 'waring' | 'danger' | 'info'
export type NativeType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'small' | 'default' | 'large'

export interface ButtonProps {
	/**
	 * 按钮类型
	 * @default primary
	 */
	type?: ButtonType
	/**
	 * 按钮大小
	 * @default default
	 */
	size?: ButtonSize

	nativeType?: NativeType
	disabled?: boolean
	loading?: boolean
	icon?: string
	circle?: boolean
	plain?: boolean
	round?: boolean
	tag?: string | Component
	useThrottle?: boolean
	autofocus?: boolean
	throttleDuration?: number
	loadingIcon?: string
}

export interface ButtonGroupProps {
	size?: ButtonSize
	type?: ButtonType
	disabled?: boolean
}

export interface ButtonGroupContext {
	size?: ButtonSize
	type?: ButtonType
	disabled?: boolean
}

export interface ButtonEmits {
	(e: 'click', val: MouseEvent): void
}

export interface ButtonInstance {
	ref: Ref<HTMLButtonElement | void>
	disabled: ComputedRef<boolean>
	size: ComputedRef<ButtonSize | ''>
	type: ComputedRef<ButtonType | ''>
}
