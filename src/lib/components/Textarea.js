import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, AreaField } from './SharedTwElements';

const Textarea = forwardRef(function Textarea(props, inputRef) {
	const {
		label = '',
		name = '',
		color = 'primary',
		error = false,
		width = 'fill',
		height = 'lg',
		...textAreaProps
	} = props;
	return (
		<Wrapper width={width}>
			<Label htmlFor={name} color={color} error={error}>
				{label}
			</Label>
			<AreaField
				data-testid={'textarea'}
				id={name}
				name={name}
				error={error}
				ref={inputRef}
				color={color}
				height={height}
				{...textAreaProps}
			/>
		</Wrapper>
	);
});

Textarea.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	error: PropTypes.bool,
	width: PropTypes.oneOf(['quarter', 'third', 'half', 'twothirds', 'fill']),
	height: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl']),
	color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

export default Textarea;
