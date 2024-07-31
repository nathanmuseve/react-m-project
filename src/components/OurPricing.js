import { Link } from "react-router-dom";

export default function OurPricing({title, price, month, desc, button}) {
  return (
    <div>
    {/* Prices  */}
      <div className="w-64 shadow p-5 rounded-md">
        <h3 className="font-bold bg-gray-300 w-32 text-xs text-center text-slate-600 rounded-sm font-sans uppercase py-1 ml-5 ">{title}</h3>
        <h2 className="font-bold text-center text-lg p-3">{price}</h2>
        <p className="text-center text-sm text-slate-500
        ">{month}</p>
        <p className="font-extralight text-slate-600 p-3">{desc}</p>
        <Link className="bg-teal-400 w-64  p-3 px-16 m-0  shadow-sm rounded-sm hover:bg-teal-600 text-white text-sm font-thin" to="/contact-us">{button}</Link>
      </div>


    </div>
  )
}
