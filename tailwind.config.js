/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // (pages/ 라우터 쓰는 경우)
    "./components/**/*.{js,ts,jsx,tsx}", // 컴포넌트 폴더
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), // prose 클래스 쓰고 싶으면
  ],
};
