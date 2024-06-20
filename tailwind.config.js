/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('/asset/button_show.avif')",
      },
      screens: {
        sm: '640px', 
        md: '768px', 
        lg: '1024px', 
        xl: '1280px', 
      },
    },
  },
  plugins: [],
};
