import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'left': { 
          '0%, 100%': { transform: 'translateX(-100%)'},
          '50%': { transform: 'translateX(0)'}
        },
        'right': {
          '0%, 10%': { transform: 'translateX(100%)'},
          '90%': { transform: 'translateX(0)'}
        }
      },
      animation: {
        'trans-left': 'left 1.5s infinite',
        'trans-right': 'right 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
export default config;
