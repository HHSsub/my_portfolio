export default function MainButtons({ current, onPick }) {
  const items = [
    { key: 'skills',   icon: 'fa-code',       title: '기술 스택',  desc: '보유 기술과 자격증 확인하기' },
    { key: 'projects', icon: 'fa-project-diagram', title: '프로젝트', desc: '최신 프로젝트와 성과 보기' },
    { key: 'experience', icon: 'fa-briefcase',  title: '경력·학력', desc: '업무 경험과 교육 배경' },
    { key: 'contact',  icon: 'fa-envelope',   title: '연락하기',   desc: '협업 제안 및 연락처' }
  ]
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map(it => (
        <button key={it.key}
          onClick={() => onPick(it.key)}
          className={`p-6 rounded-xl text-left transition card hover:translate-y-[-4px] hover:shadow-xl
                     ${current===it.key ? 'ring-2 ring-blue-400' : ''}`}>
          <div className="flex items-center mb-2">
            <i className={`fas ${it.icon} text-xl mr-3`}></i>
            <div className="text-xl font-bold">{it.title}</div>
          </div>
          <div className="text-sm opacity-80">{it.desc}</div>
        </button>
      ))}
    </div>
  )
}
