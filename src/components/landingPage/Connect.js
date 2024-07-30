
export default function Connect() {
  return (
    <div>
      <div className="">
        <div className="container relative bg-gray-500 ">
          <div className="absolute translate-x-40 translate-y-40 bg-gray-300">
            <img className="w-16 rounded-sm shadow-sm" src={require("./images/printer.jpg")} alt="" />
          </div>
        </div>
        <div className="absolute">
          <img className="w-6 h-10 rounded-sm shadow-sm translate-x-32 translate-y-40 " src={require("./images/dotted.jpg")} alt="" />
          <img className="w-16 rounded-sm shadow-sm translate-x-48 translate-y-56" src={require("./images/manag.webp")} alt="" />
          <img className="w-16 rounded-sm shadow-sm right-3 translate-x-16 translate-y-16" src={require("./images/manag1.jpg")} alt="" />
          <img className="w-16 rounded-sm shadow-sm translate-x-12 translate-y-20" src={require("./images/manag2.webp")} alt="" />
          <img className="w-16 rounded-sm shadow-sm translate-x-10 translate-y-32" src={require("./images/manag3.jpg")} alt="" />
          <img className="w-16 rounded-sm shadow-sm translate-x-32 translate-y-40" src={require("./images/manag4.webp")} alt="" />
          <img className="w-16 rounded-sm shadow-sm translate-x-64 translate-y-32" src={require("./images/manag5.jpg")} alt="" />
          <img className="w-16 rounded-sm shadow-sm" src={require("./images/manag6.webp")} alt="" />
          <img className="w-16 rounded-sm shadow-sm" src={require("./images/manag7.jpg")} alt="" />
          <img className="w-16 rounded-sm shadow-sm" src={require("./images/manag8.jpg")} alt="" />
        </div>
      </div>

      <div className="">
        <h1>Connecting Devs with Companies.</h1>
        <p>We share common trends and strategies for improving income.</p>
      </div>
    </div>
  )
}
