import { describe, it, test, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import type { PopconfirmProps } from './types'
import { withInstall } from '@create-element/utils'
import { each, get } from 'lodash-es'
import { CtPopconfirm } from '.'

import Popconfirm from './Popconfirm.vue'

const onConfirm = vi.fn()
const onCancel = vi.fn()

describe('Popconfirm/index.ts', () => {
	it('should be exported with withInstall()', () => {
		expect(CtPopconfirm.install).toBeDefined()
	})
	it('component should be exported', () => {
		expect(CtPopconfirm).toBe(Popconfirm)
	})

	it('should enhance CtPopconfirm component', () => {
		const enhancedAlert = withInstall(Popconfirm)
		expect(enhancedAlert).toBe(CtPopconfirm)
	})

	it('should apply specific enhance', () => {
		const enhancedAlert = withInstall(Popconfirm)
		expect(enhancedAlert).toHaveProperty('install')
	})
})

describe('Popconfirm.vue', () => {
	const props = {
		title: 'Test Title',
		confirmButtonText: 'Confirm',
		cancelButtonText: 'Cancel',
		confirmButtonType: 'primary',
		cancelButtonType: 'info',
		icon: 'check-circle',
		iconColor: 'green',
		hideIcon: false,
		hideAfter: 500,
		width: 200,
	} as PopconfirmProps

	beforeEach(() => {
		vi.useFakeTimers()
		vi.clearAllMocks()
	})

	it('should accept all props', () => {
		const wrapper = mount(Popconfirm, {
			props,
		})

		each(props, (value, key) => {
			expect(get(wrapper.props(), key)).toBe(value)
		})
	})

	it('should render slot content correctly', () => {
		const slotContent = 'Test Slot Content'
		const wrapper = mount(Popconfirm, {
			props,
			slots: {
				default: slotContent,
			},
		})

		expect(wrapper.text()).toContain(slotContent)
	})

	it('popconfirm emits', async () => {
		const wrapper = mount(() => (
			<div>
				<div id="outside"></div>
				<Popconfirm 
					title='Test Title'
					hideIcon={true}
					onConfirm={onConfirm}
					onCancel={onCancel}
				>
					<button id="trigger">trigger</button>
				</Popconfirm>
			</div>
		))

		const triggerNode = wrapper.find('#trigger')
		expect(triggerNode.exists()).toBeTruthy()

		triggerNode.trigger("click");
    await vi.runAllTimers();
    expect(wrapper.find(".ct-popconfirm").exists()).toBeTruthy();
		
    const confirmButton = wrapper.find(".ct-popconfirm__confirm");
    expect(confirmButton.exists()).toBeTruthy();

    await vi.runAllTimers();
    confirmButton.trigger("click");
    expect(wrapper.find(".ct-popconfirm").exists()).toBeFalsy();
    expect(onConfirm).toBeCalled();

		
		triggerNode.trigger("click");
    await vi.runAllTimers();
    expect(wrapper.find(".ct-popconfirm").exists()).toBeTruthy();
		
		const cancelBtn = wrapper.find(".ct-popconfirm__cancel")
		expect(cancelBtn.exists()).toBeTruthy()

		cancelBtn.trigger("click")
		await vi.runAllTimers()
		expect(wrapper.find(".ct-popconfirm").exists()).toBeFalsy()
		expect(onCancel).toBeCalled()
	})
})
