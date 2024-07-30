import { Link, Outlet } from "react-router-dom";
import Alvin from "./components/landingPage/Alvin";
import Britty from "./components/landingPage/Britty";
import Cynthia from "./components/landingPage/Cynthia";
import Fideli from "./components/landingPage/Fideli";
import James from "./components/landingPage/James";
import Shem from "./components/landingPage/Shem";

export default function Groups() {
  return (
    <div>
    <p className="bg-sky-300 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rem soluta nesciunt, voluptatem, voluptas earum, nam id aliquid dolore itaque est! Consectetur fugit delectus molestiae fugiat placeat pariatur voluptatibus aperiam?
    Aliquam ullam, excepturi fugiat aperiam temporibus provident delectus modi iure commodi quod illum quae maiores rerum molestias quas architecto, deleniti nostrum obcaecati quos quasi possimus officiis. Ullam aperiam modi commodi!
    Praesentium sequi expedita quasi beatae ad ea, nihil quod soluta adipisci excepturi eum voluptas eius culpa minus aperiam cupiditate dignissimos sit cum qui explicabo. Ducimus in itaque sint eaque architecto.</p>
      <div className="flex bg-gray-500 p-3 m-0 my-5">
        <Link className="p-3 bg-teal-300 rounded-lg m-2 text-lg text-white " to="alvin" element={<Alvin />}> Alvin</Link>
        <Link className="p-3 bg-teal-300 rounded-lg m-2 text-lg text-white" to="britty" element={<Britty />}> Britty</Link>
        <Link className="p-3 bg-teal-300 rounded-lg m-2 text-lg text-white" to="cynthia" element={<Cynthia />}> Cynthia</Link>
        <Link className="p-3 bg-teal-300 rounded-lg m-2 text-lg text-white" to="fidel" element={<Fideli />}> Fidel</Link>
        <Link className="p-3 bg-teal-300 rounded-lg m-2 text-lg text-white" to="james" element={<James />}> James</Link>
        <Link className="p-3 bg-teal-300 rounded-lg m-2 text-lg text-white" to="shem" element={<Shem />}> Shem</Link>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
