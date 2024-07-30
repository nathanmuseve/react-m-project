import { NavLink, Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <div className="after">
      <header className="flex  justify-between items-center  bg-gray-800 top-0 sticky w-full p-3 mb-3">
      <img className="w-8 items-start left-0 " src={require("./logo1.png")} alt="logo" />
        <nav className="pr-24">
          <NavLink className="text-white capitalize pr-4 text-sm font-sans font-bold sm:text-sm " to="/">About</NavLink>
          <NavLink  className="text-white capitalize pr-4 text-sm font-sans font-bold" to="why-kenya">WhyKenya</NavLink>
          <NavLink className="text-white capitalize pr-4 text-sm font-sans font-bold" to="our-history">OurHistory</NavLink>
          <NavLink className="text-white capitalize pr-4 text-sm font-sans font-bold" to="prices">Prices</NavLink>
          <NavLink className="text-teal-400  capitalize pr-4 text-sm font-sans font-bold" to="groups">Groups</NavLink>
          <NavLink className="text-white capitalize pr-4 text-sm font-sans font-bold" to="contact-us" >Contact Us</NavLink>
        </nav>

      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
