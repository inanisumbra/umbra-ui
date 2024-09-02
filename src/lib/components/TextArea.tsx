import { forwardRef, TextareaHTMLAttributes } from 'react';
import { Wrapper, Label, AreaField, ColorProp, HeightProp, WidthProp, TextAreaRef } from './SharedTwElements';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	name: string;
	error?: boolean;
	width: WidthProp;
	height: HeightProp;
	color: ColorProp;
}

const TextAreaInner = ({
	label,
	name,
	color,
	error,
	width,
	height,
	...textAreaProps
}: TextAreaProps, inputRef: TextAreaRef) => (
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
)

const TextArea = forwardRef(TextAreaInner)

export default TextArea;
