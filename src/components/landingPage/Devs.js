
export default function Devs({image,title,desc}) {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="">{image}</div>
          <div>
            <h2 className="font-bold text-slate-700">{title}</h2>
            <p className="text-sm text-slate-500">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
