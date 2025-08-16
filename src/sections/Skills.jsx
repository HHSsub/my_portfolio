export default function Skills({ data }) {
  return (
    <div className="glass rounded-2xl p-6 mt-6">
      <div className="text-xl font-bold mb-4"><i className="fas fa-code mr-2"></i>기술 스택 & 역량</div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl card">
          <div className="font-semibold text-blue-300 mb-2">기술적 역량</div>
          <div className="flex flex-wrap gap-2">
            {data.skills.technical.map((s,i)=>(<span key={i} className="text-xs px-2 py-1 bg-slate-800 rounded">{s}</span>))}
          </div>
        </div>
        <div className="p-4 rounded-xl card">
          <div className="font-semibold text-purple-300 mb-2">소프트 스킬</div>
          <div className="flex flex-wrap gap-2">
            {data.skills.soft.map((s,i)=>(<span key={i} className="text-xs px-2 py-1 bg-slate-800 rounded">{s}</span>))}
          </div>
        </div>
      </div>
      <div className="mt-6 p-4 rounded-xl card">
        <div className="font-semibold text-emerald-300 mb-2"><i className="fas fa-certificate mr-2"></i>자격증</div>
        <div className="grid sm:grid-cols-2 gap-2">
          {data.certifications.map((c,i)=>(<div key={i} className="text-sm opacity-90">• {c}</div>))}
        </div>
      </div>
    </div>
  )
}
