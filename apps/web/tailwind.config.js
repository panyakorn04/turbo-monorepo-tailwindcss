/** @type {import('tailwindcss').Config} */
  const sharedConfig = require('../../packages/tailwind-config/tailwind.config.js');

  module.exports = {
    ...sharedConfig,
    content: [
      '../../apps/web/**/*.{js,jsx,ts,tsx}',
      '../../apps/web/*.{js,jsx,ts,tsx}',
    ],
  };