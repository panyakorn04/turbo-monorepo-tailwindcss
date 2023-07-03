/** @type {import('tailwindcss').Config} */
const sharedConfig = require("../../packages/tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: [
    "../../packages/ui/**/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/*.{js,ts,jsx,tsx,mdx}",
  ],
};
