import ProjectCard from '../components/ProjectCard'

export default function Projects({ data }) {
  const items = Array.isArray(data?.projects) ? data.projects : []
  return (
    <div className="glass rounded-2xl p-6 mt-6">
      <div className="text-xl font-bold mb-4">프로젝트 & 성과</div>
      <div className="grid lg:grid-cols-2 gap-4">
        {items.map((p, i) => (<ProjectCard key={i} p={p} />))}
        {!items.length && <div className="opacity-70">표시할 프로젝트가 없습니다.</div>}
      </div>
    </div>
  )
}
