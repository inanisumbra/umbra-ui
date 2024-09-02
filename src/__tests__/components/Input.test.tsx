import { fireEvent, render } from '@testing-library/react';
import { Input, InputProps } from '../../lib';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());

const setup = (props:InputProps) => {
	const utils = render(<Input {...props} />);
	const input = utils.getByTestId('input') as HTMLInputElement;
	return {
		input,
		...utils,
	};
};

test('Input should render correctly', () => {
	const { asFragment } = setup({
		label: 'Label',
		name: 'name',
		width: 'fill',
		color: 'primary',
		error: false
	});
	expect(asFragment()).toMatchSnapshot();
});

test('Input should update internal value when onChange fired', () => {
	const { input } = setup({
		label: 'Label',
		name: 'name',
		width: 'fill',
		color: 'primary',
		error: false
	});

	fireEvent.focus(input);

	fireEvent.change(input, {
		target: {
			value: 'test',
		},
	});

	expect(input.value).toBe('test');
});
