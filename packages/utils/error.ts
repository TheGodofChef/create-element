import { isString } from 'lodash-es'

class CtUIError extends Error {
	constructor(msg: string) {
		super(msg)
		this.name = 'CtUIError'
	}
}

function createCtUIError(scope: string, msg: string) {
	return new CtUIError(`[${scope}]:${msg}`)
}

export function throwError(scope: string, msg: string) {
	throw createCtUIError(scope, msg)
}

export function debugWarn(error: Error): void
export function debugWarn(scope: string, msg: string): void
export function debugWarn(scope: string | Error, msg?: string): void {
	if (process.env.NODE_ENV !== 'production') {
		const err = isString(scope) ? createCtUIError(scope, msg!) : scope
		console.warn(err)
	}
}
