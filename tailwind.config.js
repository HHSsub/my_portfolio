/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',   // ← 여기를 틀리면 프로덕션에서 유틸이 싹 빠집니다
  ],
  theme: { extend: {} },
  plugins: [],
}
