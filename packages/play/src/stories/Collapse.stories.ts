import type { Meta, StoryObj } from '@storybook/vue3'
import { CtCollapse, CtCollapseItem } from 'create-element'
import 'create-element/dist/theme/Collapse.css'

type Story = StoryObj<typeof CtCollapse>

const meta: Meta<typeof CtCollapse> = {
	title: 'Example/Collapse',
	component: CtCollapse,
	subcomponents: { CtCollapseItem },
	tags: ['autodocs'],
}

export const Default: Story = {
	render: (args) => ({
		components: {
			CtCollapse,
			CtCollapseItem,
		},
		setup() {
			return {
				args,
			}
		},
		template: `
    <ct-collapse v-bind="args">
      <ct-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </ct-collapse-item>
      <ct-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </ct-collapse-item>
      <ct-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </ct-collapse-item>
    </ct-collapse>
    `,
	}),
	args: {
		accordion: true,
		modelValue: ['a'],
	},
}

export default meta
