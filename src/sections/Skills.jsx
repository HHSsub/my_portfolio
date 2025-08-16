import { arr } from '../utils/safe'

export default function Skills({ data }) {
  const skills = arr(data?.skills)
  const certs  = arr(data?.certs)

  return (
    <div className="glass rounded-2xl p-6">
      <div className="text-xl font-bold mb-4">기술 스택 & 자격</div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl p-4 bg-slate-900/50 border border-white/10">
          <div className="font-semibold mb-2">기술</div>
          {skills.length ? (
            <ul className="list-disc list-inside text-sm opacity-90 space-y-1">
              {skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          ) : <div className="opacity-70 text-sm">등록된 기술이 없습니다.</div>}
        </div>

        <div className="rounded-xl p-4 bg-slate-900/50 border border-white/10">
          <div className="font-semibold mb-2">자격증</div>
          {certs.length ? (
            <ul className="list-disc list-inside text-sm opacity-90 space-y-1">
              {certs.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          ) : <div className="opacity-70 text-sm">등록된 자격이 없습니다.</div>}
        </div>
      </div>
    </div>
  )
}
