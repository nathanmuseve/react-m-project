import { NavLink, Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <div>
      <header>
        <nav className="">
          <NavLink to="/">Home</NavLink>
          <NavLink to="why-kenya">WhyKenya</NavLink>
          <NavLink to="our-history">OurHistory</NavLink>
          <NavLink to="prices">Prices</NavLink>
          <NavLink to="contact-us">Contact Us</NavLink>
        </nav>
        <main>
          <Outlet /> 
        </main>
      </header>
    </div>
  )
}
