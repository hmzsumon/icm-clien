import { withUt } from 'uploadthing/tw';
import type { Config } from 'tailwindcss';
import flowbite from 'flowbite-react/tailwind';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'node_modules/flowbite-react/lib/esm/**/*.js',
		flowbite.content(),
	],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'icm-green': '#34E834',
				'icm-black-2': '#1D232A',
			},
		},
	},
	plugins: [flowbite.plugin()],
};
export default withUt(config);
