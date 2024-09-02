import {
	TextArea,
	widthStoriesController,
	heightStoriesController,
	colorStoriesController,
} from '../lib';
import { StoryFn, Meta } from "@storybook/react";

export default {
	title: 'Components/TextArea',
	component: TextArea,
	argTypes: {
		width: {
			options: Object.keys(widthStoriesController),
			control: {
				type: 'select',
				labels: widthStoriesController,
			},
		},
		height: {
			options: Object.keys(heightStoriesController),
			control: {
				type: 'select',
				labels: heightStoriesController,
			},
		},
		color: {
			options: Object.keys(colorStoriesController),
			control: {
				type: 'select',
				labels: colorStoriesController,
			},
		},
	},
	args: {
		error: false,
		width: 'fill',
		height: 'lg',
	},
} as Meta<typeof TextArea>;

const Template:StoryFn<typeof TextArea> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Primary Label',
	name: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Secondary Label',
	name: 'secondary',
	color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	label: 'Tertiary Label',
	name: 'tertiary',
	color: 'tertiary',
};

