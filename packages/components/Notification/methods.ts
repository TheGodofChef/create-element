import { shallowReactive, isVNode, render, h } from 'vue'
import type {
	NotificationInstance,
	NotificationProps,
	CreateNotificationProps,
	NotificationHandler,
	NotificationFn,
	Notification,
	NotificationType,
	NotificationParams,
} from './types'
import { NotificationTypes } from './types'
import { useId, useZIndex } from '@create-element/hooks'
import { each, findIndex, get, set, isString } from 'lodash-es'
import NotificationConstructor from './Notification.vue'

const instances: NotificationInstance[] = shallowReactive([])
const { nextZIndex } = useZIndex()

export const notificationDefaults = {
	type: 'info',
	duration: 2000,
	offset: 20,
	transitionName: 'fade',
	showClose: true,
} as const

const normalizeOptions = (
	opts: NotificationParams
): CreateNotificationProps => {
	const result =
		!opts || isVNode(opts) || isString(opts) ? { message: opts } : opts
	return { ...notificationDefaults, ...result } as CreateNotificationProps
}

const createNotification = (
	props: CreateNotificationProps
): NotificationInstance => {
	const id = useId().value
	const container = document.createElement('div')

	const destroy = () => {
		const idx = findIndex(instances, { id })
		if (idx === -1) return

		instances.splice(idx, 1)
		render(null, container)
	}

	const _props: NotificationProps = {
		...props,
		id,
		zIndex: nextZIndex(),
		onDestory: destroy,
	}
	const vnode = h(NotificationConstructor, _props)

	render(vnode, container)
	document.body.appendChild(container.firstElementChild!)

	const vm = vnode.component!
	const handler: NotificationHandler = {
		close: () => {
			vm.exposed!.close()
		},
	}
	const instance: NotificationInstance = {
		props: _props,
		id,
		vm,
		vnode,
		handler,
	}
	instances.push(instance)
	return instance
}

export const notification: NotificationFn & Partial<Notification> = function (
	options = {}
) {
	const normalized = normalizeOptions(options)
	const instance = createNotification(normalized)

	return instance.handler
}

export function closeAll(type: NotificationType) {
	each(instances, (instance) => {
		if (type) {
			instance.props.type === type && instance.handler.close()
			return
		}
		instance.handler.close()
	})
}

export function getLastBottomOffset(this: NotificationProps) {
	const idx = findIndex(instances, { id: this.id })
	if (idx <= 0) return 0

	return get(instances, [idx - 1, 'vm', 'exposed', 'bottomOffset', 'value'])
}
each(NotificationTypes, (type) => {
	set(notification, type, (opts: NotificationParams) => {
		const normalized = normalizeOptions(opts)
		return notification({ ...normalized, type })
	})
})
notification.closeAll = closeAll

export default notification as Notification
