import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'fade-in':{
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        'bounce-click': {
          '0%': { transform: 'scale(1)'},
          '25%': { transform: 'scale(1.5)'},
          '50%': { transform: 'scale(1)'},
          '75%': { transform: 'scale(1.2)'},
          '100%': {transform: 'scale(1)'}
        }
      },
      animation:{
        'fade-in': 'fade-in 2s ease-in-out',
        'bounce-click': 'bounce-click 1s ease-in-out'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
