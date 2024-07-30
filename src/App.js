import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import OurHistory from "./components/OurHistory";
import Contact from "./components/Contact";
import About from "./components/landingPage/About";
import WhyKenya from "./components/WhyKenya";
import Layouts from "./Layout/Layouts";
import Prices from "./components/Prices";
import NotFound from "./components/NotFound";

// style sheet 
import "./styles.css"
import "./globalStyles.css"

// Groups 
import Groups from "./Groups";
import Alvin from "./components/landingPage/Alvin";
import Britty from "./components/landingPage/Britty";
import Cynthia from "./components/landingPage/Cynthia";
import Fideli from "./components/landingPage/Fideli";
import James from "./components/landingPage/James";
import Shem from "./components/landingPage/Shem";
import Connect from "./components/landingPage/Connect";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route index element={<About />} />
        <Route path="why-kenya" element={<WhyKenya />} />
        <Route path="our-history" element={<OurHistory />} />
        <Route path="prices" element={<Prices />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="connect" element={<Connect />} />

        {/* Nested routes  */}
        <Route path="groups" element={<Groups />} > 
          <Route path="alvin" element={<Alvin />} />
          <Route path="britty" element={<Britty />} />
          <Route path="cynthia" element={<Cynthia />} />
          <Route path="fidel" element={<Fideli />} />
          <Route path="james" element={<James />} />
          <Route path="shem" element={<Shem />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
