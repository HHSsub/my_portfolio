import { normalizeCategoryMap, text } from '../utils/safe'

export default function Skills({ data }) {
  // skills, certs 가 배열일 수도, 카테고리 객체일 수도, 객체 배열일 수도 있음
  const skillGroups = normalizeCategoryMap(data?.skills)
  const certGroups  = normalizeCategoryMap(data?.certs)

  return (
    <div className="glass rounded-2xl p-6">
      <div className="text-xl font-bold mb-4">기술 스택 & 자격</div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* 기술 */}
        <div className="rounded-xl p-4 bg-slate-900/50 border border-white/10">
          <div className="font-semibold mb-2">기술</div>

          {skillGroups.every(g => !g.items.length) ? (
            <div className="opacity-70 text-sm">등록된 기술이 없습니다.</div>
          ) : (
            skillGroups.map((g, gi) => (
              <div key={gi} className="mb-3">
                {g.heading && <div className="text-sm font-semibold mb-1">{text(g.heading)}</div>}
                <ul className="list-disc list-inside text-sm opacity-90 space-y-1">
                  {g.items.map((item, i) => (
                    <li key={i}>{text(item)}</li> {/* ← 객체여도 text()로 안전 변환 */}
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>

        {/* 자격증 */}
        <div className="rounded-xl p-4 bg-slate-900/50 border border-white/10">
          <div className="font-semibold mb-2">자격증</div>

          {certGroups.every(g => !g.items.length) ? (
            <div className="opacity-70 text-sm">등록된 자격이 없습니다.</div>
          ) : (
            certGroups.map((g, gi) => (
              <div key={gi} className="mb-3">
                {g.heading && <div className="text-sm font-semibold mb-1">{text(g.heading)}</div>}
                <ul className="list-disc list-inside text-sm opacity-90 space-y-1">
                  {g.items.map((item, i) => (
                    <li key={i}>{text(item)}</li> {/* ← 객체여도 text()로 안전 변환 */}
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
