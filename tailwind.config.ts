import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			boxShadow: {
				"custom-pink": "0px 0px 40px 0px #FD0479",
				"text-shadow": "0px 0px 53.5px #FD0479",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				moveRotateEllipse: {
					"0%": {
						transform: "translate(-10%, -5%) rotate(0deg)",
					},
					"12.5%": {
						transform: "translate(-5%, -7.5%) rotate(45deg)",
					},
					"25%": {
						transform: "translate(0%, -10%) rotate(90deg)",
					},
					"37.5%": {
						transform: "translate(5%, -7.5%) rotate(135deg)",
					},
					"50%": {
						transform: "translate(10%, -5%) rotate(180deg)",
					},
					"62.5%": {
						transform: "translate(5%, -2.5%) rotate(225deg)",
					},
					"75%": {
						transform: "translate(0%, 0%) rotate(270deg)",
					},
					"87.5%": {
						transform: "translate(-5%, -2.5%) rotate(315deg)",
					},
					"100%": {
						transform: "translate(-10%, -5%) rotate(360deg)",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"move-rotate-ellipse": "moveRotateEllipse 12s infinite ease-in-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
