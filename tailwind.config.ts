import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      colors: {
        brand: {
          green: {
            main: "#D1E500",
            light: "#F4FF80",
          },
          light: "#FAFAFA",
        },
        dark: {
          main: "#1A1A1A",
          secondary: "#2e2f36",
          tertiary: "#999999",
          low: "#BEBEBE",
        },
      },
    },
  },
  plugins: [],
}
export default config
