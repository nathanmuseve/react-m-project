
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
    <div className=" bg-teal-400 p-6">
      <p className="text-center text-md text-white">Ready to get started? <Link className="px-4 py-2 bg-gray-50 text-black text-sm rounded-md" to="/contact-us">Contact Us</Link></p>
    </div>

    <div className="flex gap-6 justify-between items-center flex-wrap bg-gray-900 pl-10 pr-10 pt-6">
    <div className="">
    <p className="t text-slate-400 font-bold py-2" >NATIVE X</p>
        <p className="text-sm  text-slate-400 font-medium">With lots Lorem ipsum dolor sit amet.</p>
        <div className="flex py-5">
        <p className="text-teal-400 font-800 pr-5"><FontAwesomeIcon icon={faTwitter} /></p>
        <p className="text-white pr-5"><FontAwesomeIcon icon={faFacebookSquare}/></p>
        <p className="text-white pr-5"><FontAwesomeIcon icon={faInstagramSquare}/></p>
        <p className="text-white pr-5"><FontAwesomeIcon icon={faLinkedinIn}/></p>
        </div>
      </div>

      <div>
        <p className=" text-sm text-slate-400">Company</p>
        <div className="py-3">
        <p><Link className=" text-sm text-slate-300 pr-5" to="/">About</Link></p>
        <p className=" text-sm text-slate-300 pr-5 pt-1" ><Link to="/why-kenya">Why Kenya</Link></p>
        <p className=" text-sm text-slate-300 pr-5 pt-1" ><Link to="/our-history">Our History</Link></p>
        <p className="text-sm text-slate-300 pr-5 pt-1" ><Link to="/prices">Prices</Link></p>
        <p className=" text-sm text-slate-300 pt-1" ><Link to="/contact-us">Contact Us</Link></p>
        </div>
      </div>

      <div className="py-3">
        <p className=" text-sm text-slate-400" >Product</p>
        <p className=" text-sm text-slate-300 pt-1">Join as a Partner</p>
        <p className=" text-sm text-slate-300 pt-1">Join us Developer</p>
        <Link className=" text-sm text-slate-300 pt-1" to="/">FAQ</Link>
      </div>

      <div className="py-3">
        <p className=" text-sm text-slate-400">Services</p>
        <p className=" text-sm text-slate-300 pt-1">Recruitment</p>
        <p className=" text-sm text-slate-300 pt-1">Auditing</p>
        <p className=" text-sm text-slate-300 pt-1">Testing</p>
      </div>

      <div className="py-3">
        <p className=" text-sm text-slate-400">Legal</p>
        <p className=" text-sm text-slate-300 pt-1">Privacy Policy</p>
        <p className=" text-sm text-slate-300 pt-1">Terms of Service</p>
        <p className=" text-sm text-slate-300 pt-1">Return Policy</p>
      </div>
    </div>
    </div>
  )
}
