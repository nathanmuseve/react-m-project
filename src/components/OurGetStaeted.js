
export default function OurGetStaeted({ quiz, title, desc, more }) {
  return (
    <div>
      {/* How to get Started  */}
      <div className="flex">
        <div><p className="text-center text-white w-5 h-5 rounded-full bg-teal-400 m-3">{quiz}</p></div>
        <div className="">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-slate-500">{desc}</p>
        </div>
      </div>
    </div>
  )
}
