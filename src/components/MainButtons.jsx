export default function MainButtons() {
  const items = [
    { id: 'skills',    icon: 'code',     title: '기술 스택',    desc: '보유 기술과 자격증 확인하기' },
    { id: 'projects',  icon: 'project',  title: '프로젝트',     desc: '최신 프로젝트와 성과 보기' },
    { id: 'experience',icon: 'briefcase',title: '경력·학력',    desc: '업무 경험과 교육 배경' },
    { id: 'contact',   icon: 'mail',     title: '연락하기',     desc: '협업 제안 및 연락처' },
  ]
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {items.map(x => (
        <a key={x.id} href={`#${x.id}`} className="glass block rounded-2xl p-5 hover:ring-2 ring-blue-400 transition">
          <div className="text-lg font-semibold">{x.title}</div>
          <div className="text-sm opacity-80 mt-1">{x.desc}</div>
        </a>
      ))}
    </div>
  )
}
