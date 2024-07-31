import Devs from "./Devs";

export default function Connect() {

  return (
    <div className="">
      <div className="bg-gray-100 flex flex-wrap justify-center items-center m-1">
        <div className="relative  w-1/3">
          <div className=" relative ">
            <div className="absolute translate-x-44 translate-y-40 bg-gray-300">
              <img className="w-16 rounded-md shadow-sm" src={require("./images/printer.jpg")} alt="" />
            </div>
          </div>
          <div className="">
            <img className="w-6 h-10 rounded-none shadow-sm translate-x-20 translate-y-36 " src={require("./images/dotted.jpg")} alt="" />
            <img className="w-10 h-10 rounded-md shadow-sm translate-x-64 translate-y-12" src={require("./images/manag.webp")} alt="" />
            <img className="w-10 h-10 rounded-md shadow-sm  translate-x-16 translate-y-6" src={require("./images/manag1.jpg")} alt="" />
            <img className="w-10 h-10 rounded-md shadow-sm translate-x-16 translate-y-20" src={require("./images/manag2.webp")} alt="" />
            <img className="w-10 h-10 rounded-md shadow-sm translate-x-20 translate-y-28" src={require("./images/manag3.jpg")} alt="" />
            <img className="w-10 h-10 rounded-md shadow-sm translate-x-36 translate-y-28" src={require("./images/manag4.webp")} alt="" />
            <img className="w-10 h-10 rounded-md shadow-sm translate-x-60 translate-y-16 absolute z-50" src={require("./images/manag5.jpg")} alt="" />
            <img className="w-10 h-10 rounded-md shadow-sm translate-x-72 -translate-y-12" src={require("./images/manag6.webp")} alt="" />
            <img className="w-10 h-10 rounded-md shadow-sm translate-x-40 -translate-y-64" src={require("./images/manag7.jpg")} alt="" />
            <img className="w-10 h-10 rounded-md shadow-sm translate-x-72 -translate-y-48" src={require("./images/manag8.jpg")} alt="" />
          </div>

          <div className="w-20 h-20 bg-teal-100 absolute left-48 top-60 rounded-md z-10"></div>
        </div>


        <div>
          <h1 className="font-bold text-slate-600 text-center p-4" >Connecting Devs with Companies</h1>
          <p className="text-sm text-slate-500 text-center p-4">We share common and stratagies for improving rental income.</p>

          <section className="container flex flex-wrap gap-5">
            <div className=" flex gap-3 mx-auto m-8 w-96 bg-gray-50 p-6">
              <article className="relative bg-teal-200 w-5 h-5 rounded-full ">
                <img className="w-8 h-8 rounded-none absolute translate-x-2 -translate-y-6" src={require("./images/lap.jpg")} alt="Dev Tools" />
              </article>
              <div className="">
                <Devs
                  title="Software Dev Personal"
                  desc="With lots of Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
              </div>
            </div>

            <div className=" flex gap-3 mx-auto m-8 w-96 bg-gray-50 p-6">
              <article className="relative bg-teal-200 w-5 h-5 rounded-full">
                <img className="w-8 h-8 rounded-none absolute translate-x-2 -translate-y-6" src={require("./images/typ.jpg")} alt="Dev Tools" />
              </article>
              <div className="">
                <Devs
                  title="IT Companies in Norweign"
                  desc="With lots of Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
