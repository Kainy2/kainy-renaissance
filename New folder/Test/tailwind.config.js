/** @format */

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				PriBlue: "#0572BB",
				secondaryBlue: "#8EB4FF",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
