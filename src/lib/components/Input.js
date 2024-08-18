import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, Field } from './SharedTwElements';

const Input = forwardRef(function Input(props, inputRef) {
	const {
		label = '',
		name = '',
		color = 'primary',
		error = false,
		width = 'fill',
		...inputProps
	} = props;
	return (
		<Wrapper width={width}>
			<Label htmlFor={name} color={color} error={error}>
				{label}
			</Label>
			<Field
				data-testid={'input'}
				id={name}
				name={name}
				error={error}
				ref={inputRef}
				color={color}
				{...inputProps}
			/>
		</Wrapper>
	);
});

Input.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	error: PropTypes.bool,
	width: PropTypes.oneOf(['quarter', 'third', 'half', 'twothirds', 'fill']),
	color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

export default Input;
