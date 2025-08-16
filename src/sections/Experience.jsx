export default function Experience({ data }) {
  return (
    <div className="glass rounded-2xl p-6 mt-6">
      <div className="text-xl font-bold mb-4">경력 & 학력</div>
      <div className="space-y-3">
        {data.experience.map((e,i)=>(
          <div key={i} className="p-4 rounded-xl bg-white/90 text-slate-800">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">{e.company}</div>
                <div className="text-blue-600">{e.role}</div>
              </div>
              <div className="text-sm opacity-60">{e.period}</div>
            </div>
            <div className="mt-1 opacity-80">{e.description}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl card">
        <div className="font-semibold text-purple-300 mb-1"><i className="fas fa-graduation-cap mr-2"></i>학력</div>
        <div className="flex justify-between">
          <div>
            <div className="font-semibold">{data.education.university}</div>
            <div className="opacity-90">{data.education.major}</div>
            <div className="text-sm opacity-70">{data.education.period}</div>
          </div>
          <div className="text-right text-purple-200">{data.education.gpa}</div>
        </div>
      </div>
    </div>
  )
}
