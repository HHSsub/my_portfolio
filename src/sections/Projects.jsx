import ProjectCard from '../components/ProjectCard'

export default function Projects({ data }) {
  // 이 파일은 외부에서 data를 props로 받는 구조라 경로 수정 불필요.
  // (portfolio.json fetch는 다른 곳에서 수행)
  return (
    <div className="glass rounded-2xl p-6 mt-6">
      <div className="text-xl font-bold mb-4">프로젝트 & 성과</div>
      <div className="grid lg:grid-cols-2 gap-4">
        {data?.projects?.map((p, i) => (<ProjectCard key={i} p={p} />))}
      </div>
    </div>
  )
}
