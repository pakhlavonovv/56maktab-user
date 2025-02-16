/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Barcha komponentlar uchun
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Next.js App Router ishlatsa
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
