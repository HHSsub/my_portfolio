export default function ProjectCard({ p }) {
  return (
    <div className="p-5 rounded-xl bg-white/90 text-slate-800 shadow-md">
      <div className="flex justify-between items-start">
        <div className="text-lg font-semibold">{p.title}</div>
        <span className={`text-xs px-2 py-1 rounded-full
          ${p.category==='최신'?'bg-green-100 text-green-700':
            p.category==='바르카'?'bg-blue-100 text-blue-700':'bg-purple-100 text-purple-700'}`}>
          {p.category||'프로젝트'}
        </span>
      </div>
      <div className="opacity-80 mt-2">{p.description}</div>
      <div className="text-xs opacity-60 mt-1">{p.period}</div>
      {p.tech?.length>0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {p.tech.map((t,i)=>(<span key={i} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>))}
        </div>
      )}
      {p.status && (
        <div className={`mt-3 inline-block text-xs px-2 py-1 rounded
          ${p.status==='진행중'?'bg-yellow-100 text-yellow-800':'bg-emerald-100 text-emerald-700'}`}>
          {p.status}
        </div>
      )}
      {p.link && <a className="block mt-2 text-sm underline" href={p.link} target="_blank">링크</a>}
    </div>
  )
}
