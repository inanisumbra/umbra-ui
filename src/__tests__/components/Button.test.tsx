import { fireEvent, render } from '@testing-library/react';
import { Button, ButtonProps } from '../../lib';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());

const setup = (props: ButtonProps) => {
	const utils = render(<Button {...props} />);
	const button = utils.getByTestId('button');
	return {
		button,
		...utils,
	};
};

test('Button should render correctly', () => {
	const { asFragment } = setup({
		label: 'Label',
		width: 'fill',
		variant: 'contained',
		color: 'primary',
		disabled: false
	});
	expect(asFragment()).toMatchSnapshot();
});

test('calls "onClick" prop on button click', () => {
	// Render new instance in every test to prevent leaking state
	const onClick = jest.fn();
	const { button } = setup({
		onClick, label: 'Label',
		width: 'fill',
		variant: 'contained',
		color: 'primary',
		disabled: false
	});

	fireEvent.click(button);
	expect(onClick).toHaveBeenCalled();
});
