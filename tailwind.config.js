/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 어떤 페이지 or 컴포넌트에서 tailwind를 사용할지 말해준다.
    "./pages/**/*.tsx", 
    "./components/**/*.{js, jsx, ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
