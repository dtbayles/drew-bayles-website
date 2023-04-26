import { createTheme } from '@mui/material/styles';

function pxToRem(number, baseNumber = 16) {
	return `${number / baseNumber}rem`;
}

const baseProperties = {
	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	fontFamily2: '"Roboto Slab", sans-serif',
	fontWeightLighter: 100,
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 600,
	fontWeightBold: 700,
};

export default createTheme({
	typography: {
		h1: {
			fontFamily: baseProperties.fontFamily2,
			fontSize: pxToRem(48),
			fontWeight: baseProperties.fontWeightBold,
			lineHeight: 1.25,
		},

		h2: {
			fontFamily: baseProperties.fontFamily2,
			fontSize: pxToRem(36),
			fontWeight: baseProperties.fontWeightRegular,
			lineHeight: 1.3,
		},

		h3: {
			fontFamily: baseProperties.fontFamily2,
			fontSize: pxToRem(30),
			lineHeight: 1.375,
		},

		h4: {
			fontFamily: baseProperties.fontFamily,
			fontSize: pxToRem(24),
			lineHeight: 1.375,
		},
		// add more overrides for other variants as needed
	},
});