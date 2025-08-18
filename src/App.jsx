import { useEffect, useState } from 'react'
import Header from './components/Header'
import MainButtons from './components/MainButtons'
import SearchQA from './components/SearchQA'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import { arr } from './utils/safe'

export default function App() {
  const BASE = import.meta.env.BASE_URL
  const [data, setData] = useState({
    profile: {},        // 혹시 profile 객체가 있더라도 안전
    skills: [],
    projects: [],
    experience: [],
    education: [],
    certs: []
  })
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('main') // 추가: 현재 활성 섹션 상태

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`${BASE}data/portfolio.json`, { cache: 'no-store' })
        if (!res.ok) throw new Error(`fetch portfolio.json ${res.status}`)
        const json = await res.json()

        // 콘솔에서 실제 들어온 구조 확인 (디버그용)
        console.log('[portfolio.json]', json)

        if (!cancelled) {
          setData({
            profile: json?.profile ?? {},
            skills: arr(json?.skills),
            projects: arr(json?.projects),
            experience: arr(json?.experience),
            education: arr(json?.education),
            certs: arr(json?.certs)
          })
        }
      } catch (e) {
        console.error('portfolio.json load error:', e)
        if (!cancelled) {
          setData({
            profile: {},
            skills: [],
            projects: [],
            experience: [],
            education: [],
            certs: []
          })
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [BASE])

  // 섹션 변경 함수
  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  // 메인 화면으로 돌아가기
  const handleBackToMain = () => {
    setActiveSection('main')
  }

  // 섹션 렌더링 함수
  const renderSection = () => {
    if (loading) {
      return (
        <div className="mt-8 opacity-75 text-center">
          <div className="animate-pulse">데이터 불러오는 중...</div>
        </div>
      )
    }

    switch (activeSection) {
      case 'skills':
        return <Skills data={data} />
      case 'projects':
        return <Projects data={data} />
      case 'experience':
        return <Experience data={data} />
      case 'contact':
        return <Contact data={data} />
      case 'main':
      default:
        return (
          <>
            <MainButtons onSectionChange={handleSectionChange} />
            <SearchQA />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-violet-700">
      <div className="max-w-5xl mx-auto px-5 py-10">
        <Header />
        
        {/* 뒤로가기 버튼 (메인이 아닐 때만 표시) */}
        {activeSection !== 'main' && (
          <div className="mb-6">
            <button 
              onClick={handleBackToMain}
              className="glass px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              메인으로 돌아가기
            </button>
          </div>
        )}

        {/* 현재 섹션 제목 (메인이 아닐 때만 표시) */}
        {activeSection !== 'main' && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">
              {activeSection === 'skills' && '기술 스택 & 자격증'}
              {activeSection === 'projects' && '프로젝트'}
              {activeSection === 'experience' && '경력 & 학력'}
              {activeSection === 'contact' && '연락하기'}
            </h2>
          </div>
        )}

        {/* 섹션 내용 렌더링 */}
        <div className="mt-6">
          {renderSection()}
        </div>
      </div>
    </div>
  )
}
