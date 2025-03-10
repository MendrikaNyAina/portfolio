import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";
const { fontFamily } = require('tailwindcss/defaultTheme');
// import recommendedPreset from "tailwindcss/recommended";
export default {
	darkMode: ["class"], //quand je met cette classe sur un élement, le mode dark va être activé
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				background1: 'var(--background1)',
				background2: 'var(--background2)',
				foreground: 'var(--foreground)',
				hover: 'var(--hover)',
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				border: 'hsl(var(--border))',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)'
				},
				"color-1": "var(--color-1)",
				"color-2": "var(--color-2)",
				"color-3": "var(--color-3)",
				"color-4": "var(--color-4)",
				"color-5": "var(--color-5)"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				jost: [
					'var(--font-jost)',
					...fontFamily.sans
				],
				wrestlemania: [
					'Wrestlemania',
					...fontFamily.serif
				],
				karantina: [
					'var(--font-karantina)',
					...fontFamily.serif
				]
			},
			fontSize: {
				test: '10rem'
			},
			// backgroundImage: {
			// 	'grid-pattern': ',
			// 	'grid-pattern-light': '
			// }
			animation: {
				rainbow: "rainbow var(--speed, 2s) infinite linear",
			},
			keyframes: {
				rainbow: {
					"0%": { "background-position": "0%" },
					"100%": { "background-position": "200%" },
				},
			},
		}
	},
	plugins: [tailwindAnimate],
	// presets:[recommendedPreset]
} satisfies Config;
