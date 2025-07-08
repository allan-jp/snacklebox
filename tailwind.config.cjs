
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange:      '#FF6A00',
          orangeLight: '#FFB347',
          blueLight:   '#CDE8FF',
        },
      },
    },
  },
  plugins: [],
};
