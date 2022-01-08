module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontSize: {
				'f50': '3.125rem',
				'f25': '1.5625rem',
				'f24': '1.5rem',
				'f20': '1.25rem',
				'f18': '1.125rem',
				'f16': '1rem',
				'f14': '0.875rem',
			},
			colors: {
				'hero-dark': '#07152D',
				'home-cap': '#5648FF',
				'mcl-blue': '#5648FF',
				'mcl-black': '#07152D',
				'mcl-gray': '#262A53',
			},
			lineHeight: {
				'f50': '66px',
				'f24-low': '24px',
				'f24': '36px',
				'f24-high': '38px',
			},
			spacing: {
				'102': '30rem',
				'33': '8.75rem',
				'100': '28rem',
			},
			margin: {
				'88': '22.5rem',
			},
		},
	},
	plugins: [],
}
