
export default function News({image, title,par}){
    return (
        <div>
        <div className="bg-gray-50 w-48 shadow">
        <img className="w-48 rounded-t-md  m-2"src={image} alt="news help" />
        <h2 className="text-slate-500 ">{title}</h2>
        <p className="font-bold">{par}</p>
        </div>
        </div>
    )
}