export default function Contact({ data }) {
  const email = data?.profile?.email || 'mailto:contact@example.com'
  const github = data?.profile?.github || 'https://github.com/HHSsub'

  return (
    <div className="glass rounded-2xl p-6">
      <div className="text-xl font-bold mb-4">연락하기</div>
      <div className="flex gap-4">
        <a className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700" href={`mailto:${email.replace('mailto:', '')}`}>이메일</a>
        <a className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600" href={github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  )
}
