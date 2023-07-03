/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../apps/web/**/*.{js,jsx,ts,tsx}',
    '../../apps/web/*.{js,jsx,ts,tsx}',
    "../../packages/ui/**/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
