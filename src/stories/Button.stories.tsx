import { Button, widthStoriesController, colorStoriesController } from '../lib';
import { action } from '@storybook/addon-actions';
import { StoryFn, Meta } from "@storybook/react";

const variantStoriesController = {
	outlined: 'Outlined',
	contained: 'Contained',
};

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		width: {
			options: Object.keys(widthStoriesController),
			control: {
				type: 'select',
				labels: widthStoriesController,
			},
		},
		color: {
			options: Object.keys(colorStoriesController),
			control: {
				type: 'select',
				labels: colorStoriesController,
			},
		},
		variant: {
			options: Object.keys(variantStoriesController),
			control: {
				type: 'select',
				labels: variantStoriesController,
			},
		},
		onClick: { action: 'onClick' },
	},
	args: {
		onClick: action('onClick'),
		width: 'fill',
		disabled: false,
	},
} as Meta<typeof Button>;

const Template:StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
	label: 'Contained Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
	label: 'Outlined Button',
	variant: 'outlined',
};

