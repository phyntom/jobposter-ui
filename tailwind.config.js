/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
import typography from '@tailwindcss/typography';
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 30%',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(), typography],
};
