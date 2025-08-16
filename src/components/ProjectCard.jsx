import { text } from '../utils/safe'

export default function ProjectCard({ p }) {
  if (!p) return null
  const techText = Array.isArray(p.tech) ? p.tech.join(' · ') : text(p.tech)
  return (
    <div className="rounded-xl p-4 bg-slate-900/50 border border-white/10">
      <div className="flex items-start justify-between gap-3">
        <div className="text-base font-semibold">{text(p.title) || '제목 없음'}</div>
        {p.period && <div className="text-xs opacity-70">{text(p.period)}</div>}
      </div>
      {p.description && <p className="text-sm opacity-90 mt-2">{text(p.description)}</p>}
      {techText && <p className="text-xs opacity-70 mt-2">기술: {techText}</p>}
      {p.link && (
        <a className="text-sm mt-3 inline-block text-blue-400 hover:underline" href={p.link} target="_blank" rel="noreferrer">
          자세히 보기
        </a>
      )}
    </div>
  )
}
