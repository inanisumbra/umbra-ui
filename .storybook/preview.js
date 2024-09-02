import { GlobalStyles } from '../src/lib';

export const decorators = [
	(Story) => (
		<>
			<GlobalStyles />
			<Story />
		</>
	),
];
export const tags = ['autodocs'];
