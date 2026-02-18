import type { Config } from "tailwindcss"

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
        ivory: {
          50: "#FEFDFB",
          100: "#FBF8F1",
          200: "#F5EFE0",
          300: "#EDE4CC",
        },
        charcoal: {
          700: "#2A2A2A",
          800: "#1E1E1E",
          900: "#141414",
        },
        gold: {
          400: "#D4A853",
          500: "#C9952E",
          600: "#B8860B",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
