/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			xs: '375px',
			...defaultTheme.screens,
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				White: 'hsl(0, 0%, 100%)',
				LightPink: 'hsl(275, 100%, 97%)',
				GrayishPurple: 'hsl(292, 16%, 49%)',
				DarkPurple: 'hsl(292, 42%, 14%)',
			},
		},
	},
	plugins: [],
};
