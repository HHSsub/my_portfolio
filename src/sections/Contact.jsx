export default function Contact({ data }) {
  return (
    <div className="glass rounded-2xl p-6 mt-6 text-center">
      <div className="text-xl font-bold mb-4">연락하기</div>
      <div className="max-w-md mx-auto space-y-3">
        <a className="block py-3 rounded-lg bg-slate-800 hover:bg-slate-700"
           href={data.profile.github} target="_blank" rel="noreferrer">
          <i className="fab fa-github mr-2"></i>GitHub 방문하기
        </a>
        <a className="block py-3 rounded-lg bg-blue-600 hover:bg-blue-700"
           href={`mailto:${data.profile.email}`}>
          <i className="fas fa-envelope mr-2"></i>이메일 보내기
        </a>
      </div>
    </div>
  )
}
