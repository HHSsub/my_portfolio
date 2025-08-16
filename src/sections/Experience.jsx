export default function Experience({ data }) {
  const exps = Array.isArray(data?.experience) ? data.experience : []
  const edus = Array.isArray(data?.education) ? data.education : []

  return (
    <div className="glass rounded-2xl p-6">
      <div className="text-xl font-bold mb-4">경력 · 학력</div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl p-4 bg-slate-900/50 border border-white/10">
          <div className="font-semibold mb-2">경력</div>
          {exps.length ? exps.map((e, i) => (
            <div key={i} className="mb-3">
              <div className="text-sm font-semibold">{e.company || e.org || '회사'}</div>
              <div className="text-xs opacity-80">{e.role || e.title || ''} {e.period ? `· ${e.period}` : ''}</div>
              {e.desc && <div className="text-sm mt-1 opacity-90">{e.desc}</div>}
            </div>
          )) : <div className="opacity-70 text-sm">등록된 경력이 없습니다.</div>}
        </div>

        <div className="rounded-xl p-4 bg-slate-900/50 border border-white/10">
          <div className="font-semibold mb-2">학력</div>
          {edus.length ? edus.map((e, i) => (
            <div key={i} className="mb-3">
              <div className="text-sm font-semibold">{e.school || '학교'}</div>
              <div className="text-xs opacity-80">{[e.major, e.degree].filter(Boolean).join(' / ')} {e.period ? `· ${e.period}` : ''}</div>
              {e.desc && <div className="text-sm mt-1 opacity-90">{e.desc}</div>}
            </div>
          )) : <div className="opacity-70 text-sm">등록된 학력이 없습니다.</div>}
        </div>
      </div>
    </div>
  )
}
