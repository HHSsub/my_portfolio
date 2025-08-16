import { useEffect, useMemo, useState } from 'react'
import Fuse from 'fuse.js'

export default function SearchQA() {
  const [query, setQuery] = useState('')
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/interactive-portfolio/data/portfolio.json').then(r=>r.json()),
      fetch('/interactive-portfolio/data/qna_seed.json').then(r=>r.json()).catch(()=>[])
    ]).then(([portfolio, seeds]) => {
      const pdocs = [
        ...portfolio.projects.map((p,i)=>({id:`p_${i}`, title:p.title, text:[p.description,p.tech?.join(' '),p.period].join(' ')})),
        ...seeds.map((s,i)=>({id:`s_${i}`, title:s.q, text:s.a}))
      ]
      setDocs(pdocs)
      setLoading(false)
    })
  }, [])

  const fuse = useMemo(()=>new Fuse(docs, {keys:['title','text'], threshold:0.35}), [docs])
  const results = query? fuse.search(query).slice(0,5) : []
  const answer = !query ? '' :
    !results.length ? '관련 항목을 찾지 못했어요. 질문을 조금 다르게 표현해 주세요.' :
    `질문: "${query}"\n\n요약 답변:\n${results[0].item.text.slice(0,220)}...\n\n관련 근거:\n` +
    results.map(r=>`- ${r.item.title}`).join('\n')

  return (
    <div className="glass rounded-2xl p-5 mt-7">
      <div className="text-sm opacity-80 mb-1"><i className="fas fa-robot mr-2"></i>AI에게 질문하기 (데모)</div>
      <div className="flex gap-2">
        <input className="flex-1 rounded-lg px-4 py-3 bg-slate-900 outline-none"
               placeholder="예) 최근 6개월 동안 무슨 일 했나요?"
               value={query} onChange={e=>setQuery(e.target.value)} />
        <button className="px-4 rounded-lg bg-blue-600 hover:bg-blue-700">질의</button>
      </div>
      {loading ? <div className="mt-3 opacity-70">로딩중...</div> :
        <pre className="whitespace-pre-wrap text-sm mt-3 opacity-90">{answer}</pre>}
    </div>
  )
}
