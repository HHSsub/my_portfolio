import { useEffect, useState } from 'react'
import Header from './components/Header'
import MainButtons from './components/MainButtons'
import SearchQA from './components/SearchQA'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  const BASE = import.meta.env.BASE_URL
  const [data, setData] = useState({
    skills: [],
    projects: [],
    experience: [],
    education: [],
    certs: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`${BASE}data/portfolio.json`)
        if (!res.ok) throw new Error(`fetch portfolio.json ${res.status}`)
        const json = await res.json()
        if (!cancelled) {
          setData({
            skills: json?.skills ?? [],
            projects: json?.projects ?? [],
            experience: json?.experience ?? [],
            education: json?.education ?? [],
            certs: json?.certs ?? []
          })
        }
      } catch (e) {
        console.error('portfolio.json load error:', e)
        if (!cancelled) {
          setData({ skills: [], projects: [], experience: [], education: [], certs: [] })
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [BASE])

  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <Header />
      <MainButtons />
      <SearchQA />
      {loading ? (
        <div className="mt-8 opacity-75">데이터 불러오는 중...</div>
      ) : (
        <>
          <section id="skills" className="mt-10"><Skills data={data} /></section>
          <section id="projects" className="mt-10"><Projects data={data} /></section>
          <section id="experience" className="mt-10"><Experience data={data} /></section>
          <section id="contact" className="mt-10"><Contact /></section>
        </>
      )}
    </div>
  )
}
