import type { StoryObj, Meta, ArgTypes } from '@storybook/vue3'
import { fn } from '@storybook/test'
import {
	CtDropdown,
	CtDropdownItem,
	CtButtonGroup,
	CtButton,
} from 'create-element'
import 'create-element/dist/theme/Dropdown.css'
import 'create-element/dist/theme/Button.css'

type Story = StoryObj<typeof CtDropdown> & { argTypes?: ArgTypes }

const meta: Meta<typeof CtDropdown> = {
	title: 'Example/Dropdown',
	component: CtDropdown,
	subcomponents: { CtDropdownItem, CtButtonGroup, CtButton },
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['primary', 'success', 'warning', 'danger', 'info', ''],
		},
		size: {
			control: { type: 'select' },
			options: ['large', 'default', 'small', ''],
		},
		hideOnClick: {
			control: 'boolean',
		},
		splitButton: {
			control: 'boolean',
		},
	},
	args: {
		'onVisible-change': fn(),
	},
}

export const Default: Story = {
	args: {
		size: 'small',
		splitButton: true,
		type: 'primary',
		items: [
			{
				label: 'Option A',
				command: 'a',
			},
			{
				label: 'Option B',
				command: 'b',
			},
			{
				label: 'Option C',
				command: 'c',
				divided: true,
			},
		],
	},
	render: (args) => ({
		components: { CtDropdown, CtDropdownItem, CtButtonGroup, CtButton },
		setup() {
			return {
				args,
			}
		},
		template: `
      <ct-dropdown v-bind="args">dropdown</ct-dropdown>
    `,
	}),
}

export default meta
