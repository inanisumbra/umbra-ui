import { fireEvent, render } from '@testing-library/react';
import { Textarea } from '../../lib';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());

const setup = (props) => {
	const utils = render(<Textarea {...props} />);
	const textarea = utils.getByTestId('textarea');
	return {
		textarea,
		...utils,
	};
};

test('Textarea should render correctly', () => {
	const { asFragment } = setup({
		label: '',
		name: '',
		error: false,
		width: 'fill',
		color: 'primary',
		height: 'lg',
	});
	expect(asFragment()).toMatchSnapshot();
});

test('Textarea should update internal value when onChange fired', () => {
	const { textarea } = setup({
		label: '',
		name: '',
		error: false,
		width: 'fill',
		color: 'primary',
		height: 'lg',
	});

	fireEvent.change(textarea, {
		target: {
			value: 'test',
		},
	});

	expect(textarea.value).toBe('test');
});
