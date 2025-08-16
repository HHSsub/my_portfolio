import { useEffect, useState } from 'react'

export default function Header() {
  const subtitle = '데이터로 세상을 읽고, 코드로 미래를 만듭니다'
  const [typing, setTyping] = useState('')

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setTyping(subtitle.slice(0, i++))
      if (i > subtitle.length) clearInterval(id)
    }, 70)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="text-center mb-10">
      <div className="flex items-center justify-center gap-6 mb-4">
        <img
          src="/interactive-portfolio/assets/profile.jpg"
          className="w-20 h-20 rounded-full object-cover ring-2 ring-white/40"
          alt="Profile"
        />
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">황회선 <span className="opacity-80">(Hwang Hoe Sun)</span></h1>
          <h2 className="text-lg md:text-2xl text-blue-100 mt-1">데이터분석가 & 개발자</h2>
        </div>
      </div>
      <p className="typing text-blue-200 min-h-6">{typing}</p>
    </div>
  )
}
