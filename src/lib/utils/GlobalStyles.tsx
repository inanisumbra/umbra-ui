
import { Fragment } from 'react';
import { Global } from '@emotion/react';
import { GlobalStyles as BaseStyles, css } from 'twin.macro';
import '@fontsource/source-sans-pro';

const baseStyles = css`
	*,
	*:before,
	*:after {
		font-family: 'Source Sans Pro';
		box-sizing: border-box;
		outline: none;
		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button,
		&::-webkit-scrollbar {
			-webkit-appearance: none;
		}
	}
`;

const GlobalStyles = () => (
	<>
	  <BaseStyles />
	  <Global styles={baseStyles} />
	</>
  )
  
  export default GlobalStyles
