import { NavLink, Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <div className="after">
      <header className="flex  justify-between items-center  bg-gray-800 top-0 sticky w-full p-3 mb-3 z-50">
      <p className="text-teal-500  opacity-60 font-bold py-2 " >NATIVEX</p>
        <nav className="pr-24">
          <NavLink className="text-teal-400 capitalize pr-4 text-sm font-sans font-bold hover:text-teal-400 hover:underline hover:transition-all " to="/">About</NavLink>
          <NavLink  className="text-white capitalize pr-4 text-sm font-sans font-bold hover:text-teal-400 hover:underline hover:transition-all" to="why-kenya">WhyKenya</NavLink>
          <NavLink className="text-white capitalize pr-4 text-sm font-sans font-bold hover:text-teal-400 hover:underline hover:transition-all" to="our-history">OurHistory</NavLink>
          <NavLink className="text-white capitalize pr-4 text-sm font-sans font-bold hover:text-teal-400 hover:underline hover:transition-all" to="prices">Prices</NavLink>
          <NavLink className="text-white-400  capitalize pr-4 text-sm font-sans font-bold hover:text-teal-400 hover:underline hover:transition-all" to="groups">Groups</NavLink>
          <NavLink className="text-white capitalize pr-4 text-sm font-sans font-bold hover:text-teal-400 hover:underline hover:transition-all" to="connect" >Connect </NavLink>
        </nav>
        <NavLink className="text-black capitalize px-7 py-2 text-sm font-sans  rounded-md bg-teal-400 hover:bg-teal-600 hover:text-white hover:transition-all" to="contact-us" >Contact Us</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
