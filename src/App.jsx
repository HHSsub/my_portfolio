import { useEffect, useState } from 'react'
import Header from './components/Header'
import MainButtons from './components/MainButtons'
import SearchQA from './components/SearchQA'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

// 메뉴 흐름/타이포/카드 구조는 제공 디자인을 충실히 반영
export default function App() {
  const [tab, setTab] = useState('home')
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/interactive-portfolio/data/portfolio.json').then(r=>r.json()).then(setData)
  }, [])

  return (
    <div className={tab==='home' ? 'gradient-bg min-h-dvh' : 'bg-slate-100 min-h-dvh'}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
      <div className="max-w-6xl mx-auto px-4 py-10">
        {tab!=='home' && (
          <button onClick={()=>setTab('home')}
                  className="mb-6 text-blue-300 hover:text-blue-200">
            <i className="fas fa-home mr-2"></i>홈으로 돌아가기
          </button>
        )}

        {tab==='home' && (
          <>
            <Header/>
            <MainButtons current={tab} onPick={setTab}/>
            <SearchQA/>
            <div className="mt-6 text-sm opacity-80 text-center">
              위 버튼을 눌러 영역별 상세를 확인하세요. (반응형 UI)
            </div>
          </>
        )}

        {data && tab==='skills' && <Skills data={data}/>}
        {data && tab==='projects' && <Projects data={data}/>}
        {data && tab==='experience' && <Experience data={data}/>}
        {data && tab==='contact' && <Contact data={data}/>}
      </div>
    </div>
  )
}
