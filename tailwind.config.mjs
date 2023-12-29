import { nextui } from "@nextui-org/react"
import { darkTheme } from "./src/themes/darkTheme"

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {},
	},
	darkMode: 'media',
	plugins: [nextui({
		themes: {
			dark: darkTheme,
			light: darkTheme,
		}
	})],
}
