# 🎨 상호작용형 포트폴리오 (Interactive Portfolio)
**황회선 (Hwang Hoe Sun) · 데이터 분석가 & 개발자**

이 레포는 개인의 포트폴리오 웹사이트입니다.  
React + Vite + Tailwind 기반으로 제작되었으며, GitHub Pages로 손쉽게 배포할 수 있도록 구성되어 있습니다.

---

## 🚀 주요 특징
- **반응형 UI**  
  모바일부터 데스크탑까지 자연스럽게 대응하는 레이아웃
- **메인 페이지 (Genspark 스타일 반영)**  
  - 상단: 이름 + 프로필 이미지 + 타이핑 애니메이션 소개 문구  
  - 중앙: 4개의 주요 버튼 → (스킬 / 프로젝트 / 경력·학력 / 연락하기) 섹션으로 이동  
  - 하단: “AI에게 질문하기” (간단 검색 기반 데모)
- **데이터 중심 구조**  
  - `public/data/portfolio.json` → 스킬, 프로젝트, 경력, 학력, 자격증 정보  
  - `public/data/qna_seed.json` → Q&A 데모 시드 데이터  
  → 데이터만 수정하면 UI는 자동으로 갱신
- **Fuse.js 검색 기반 Q&A**  
  입력된 질문을 검색 후 “LLM 느낌”의 답변 생성  
  (향후 OpenAI 등 LLM API 연동 가능)
- **컴포넌트 구조화**  
  → Header, MainButtons, SearchQA, ProjectCard 등 모듈화
- **자동 배포 파이프라인**  
  GitHub Actions + GitHub Pages 설정 → main 브랜치 push 시 자동 빌드/배포

---

## 📂 폴더 구조
```plaintext
my_portfolio/
└─ interactive-portfolio/
   ├─ public/
   │   ├─ assets/
   │   │   └─ profile.jpg            ← 프로필 사진
   │   └─ data/
   │       ├─ portfolio.json         ← 프로젝트/타임라인/스킬 데이터
   │       └─ qna_seed.json          ← Q&A 시드 데이터
   │
   ├─ src/
   │   ├─ components/
   │   │   ├─ Header.jsx             ← 상단 헤더(이름/타이핑 효과/사진)
   │   │   ├─ MainButtons.jsx        ← 메인 버튼 UI (스킬/프로젝트/경력/연락)
   │   │   ├─ ProjectCard.jsx        ← 프로젝트 카드 컴포넌트
   │   │   └─ SearchQA.jsx           ← AI 질문/검색 박스(데모)
   │   ├─ sections/
   │   │   ├─ Skills.jsx             ← 스킬/자격증 섹션
   │   │   ├─ Projects.jsx           ← 프로젝트 섹션
   │   │   ├─ Experience.jsx         ← 경력·학력 섹션
   │   │   └─ Contact.jsx            ← 연락하기 섹션
   │   ├─ App.jsx                    ← 전체 앱 라우팅/구성
   │   ├─ main.jsx                   ← React 엔트리 포인트
   │   └─ index.css                  ← 전역 스타일 (Tailwind)
   │
   ├─ .github/workflows/
   │   └─ gh-pages.yml               ← GitHub Pages 자동 배포 설정
   │
   ├─ index.html                     ← 루트 HTML
   ├─ package.json                   ← 프로젝트 설정 및 의존성
   ├─ postcss.config.js              ← PostCSS 설정
   ├─ tailwind.config.js             ← Tailwind 설정
   ├─ vite.config.js                 ← Vite 설정 (base 경로 필수)
   ├─ README.md                      ← 이 문서
   │
   └─ tools/
       └─ build_portfolio_json.py    ← CSV → JSON 변환 스크립트
```

---

## 🛠️ 기술 스택
- **프론트엔드**: React, Vite  
- **스타일링**: Tailwind CSS  
- **검색/간단 Q&A**: Fuse.js  
- **배포**: GitHub Pages (자동화: GitHub Actions)  
- **데이터 관리**: JSON 기반 → (CSV → JSON 변환 파이썬 스크립트 포함)

---

## 📊 주요 기능
1. **메인 페이지**
   - 이름, 프로필 이미지, 타이핑 효과 소개문구
   - 버튼 4개 → (스킬 / 프로젝트 / 경력·학력 / 연락하기)
   - 하단: 검색 기반 Q&A (데모)

2. **스킬 (Skills.jsx)**  
   - 기술 스택, 소프트 스킬, 자격증 카드

3. **프로젝트 (Projects.jsx)**  
   - 카드 UI 기반 표시  
   - JSON 자동 렌더링  
   - 기간, 설명, 기술스택, 링크 포함

4. **경력·학력 (Experience.jsx)**  
   - 회사/역할/기간/설명  
   - 학력 + 평점 표시

5. **연락하기 (Contact.jsx)**  
   - GitHub 링크 + 이메일 버튼

---

## 🔄 데이터 수정 방법
- **프로필 사진 교체**  
  → `public/assets/profile.jpg` 교체  

- **프로젝트/스킬/경력 수정**  
  → `public/data/portfolio.json` 수정  
  (필요시 `tools/build_portfolio_json.py`로 CSV → JSON 변환 가능)  

- **Q&A 데모 답변 수정**  
  → `public/data/qna_seed.json` 수정  

---

## 💻 로컬 실행
1) 의존성 설치
npm install

2) 개발 서버 실행
npm run dev

접속: http://localhost:5173

---

## 🌍 GitHub Pages 배포
- 레포 이름이 `my_portfolio`라면 **Vite base 경로는 반드시 `/my_portfolio/`로 설정**해야 함.  

### 1) vite.config.js 설정
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
plugins: [react()],
base: '/my_portfolio/' // ← 레포명과 동일하게 설정
})


### 2) 정적 파일/데이터 경로 깨짐 방지
const BASE = import.meta.env.BASE_URL

// 이미지
<img src={${BASE}assets/profile.jpg} alt="profile" />

// JSON 데이터
fetch(${BASE}data/portfolio.json)
fetch(${BASE}data/qna_seed.json)


### 3) 자동 배포 (GitHub Actions)
- `.github/workflows/gh-pages.yml` 포함되어 있음  
- main 브랜치 push → 자동 빌드 & Pages 반영  

### 4) Pages 설정 확인
- GitHub → Settings → Pages → Build and deployment → Source: **GitHub Actions**

---

## 🔌 LLM 연동 포인트
- `src/components/SearchQA.jsx` 텍스트 생성 부분을 실제 LLM API 호출로 교체 가능  
- 검색 결과 N개를 근거 문서로 프롬프트에 포함하여 **OpenAI/Claude** 등 연동  

---

## 🧰 CSV → JSON 변환 (선택)
python tools/build_portfolio_json.py --csv path/to/your.csv --out public/data/portfolio.json

- CSV 컬럼명(제목/기간/설명/스택/링크 등) 한·영 혼용 매핑 지원  
- 변환 후 `Projects.jsx`에서 자동 표시  

---

## 👤 저자
- **황회선 (Hwang Hoe Sun)**  
  산업공학 기반 데이터 분석가 & 개발자  
- GitHub: [HWANG-HOE-SUN](https://github.com/HWANG-HOE-SUN)  
- Email: hhoesun@gmail.com  

---

## 📜 라이선스
이 프로젝트는 **개인 포트폴리오 용도**로 제작되었습니다.  
코드 일부 참고는 가능하나, **디자인 및 개인 데이터(사진/이력/성과)는 무단 사용 금지**합니다.  
