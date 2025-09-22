@type {import('tailwindcss').Config} 
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "screen-xl": "1441px",
      },
    },
  },
  plugins: [],
};
