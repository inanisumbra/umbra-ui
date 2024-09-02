import { fireEvent, render } from '@testing-library/react';
import { TextArea, TextAreaProps } from '../../lib';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());

const setup = (props:TextAreaProps) => {
	const utils = render(<TextArea {...props} />);
	const textarea = utils.getByTestId('textarea') as HTMLTextAreaElement;
	return {
		textarea,
		...utils,
	};
};

test('TextArea should render correctly', () => {
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

test('TextArea should update internal value when onChange fired', () => {
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
