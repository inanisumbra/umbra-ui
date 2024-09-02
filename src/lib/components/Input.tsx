import { forwardRef, InputHTMLAttributes } from 'react';
import { Wrapper, Label, Field , ColorProp, InputRef, WidthProp } from './SharedTwElements';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    error?: boolean;
    width: WidthProp;
    color: ColorProp;
}

const InputInner = ({label, name, color, error, width, ...inputProps}:InputProps, inputRef:InputRef) => 
	(
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

const Input = forwardRef(InputInner);

export default Input;
