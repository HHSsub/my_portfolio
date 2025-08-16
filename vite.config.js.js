import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ GitHub Pages에서 사용자/조직 페이지가 아닌 "프로젝트 페이지"로 배포 시
// 반드시 base를 '/<레포명>/' 로 설정
export default defineConfig({
  plugins: [react()],
  base: '/my_portfolio/'
})
