import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#0F172A',
        secondary: '#E2E8F0',
        gray: '#94A3B8',
        blue: '#38BDF8',
      }
    },
  },
  plugins: [],
};
export default config;
