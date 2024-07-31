import { Link } from "react-router-dom";
import OurGetStaeted from "./OurGetStaeted";
import OurPricing from "./OurPricing";
import Footer from "./Footer";

export default function Prices() {
  return (
    <div>
      <div className="">
        <h2 className="font-bold text-center p-3">Our Pricing</h2>
        <p className="text-sm text-slate-500 text-center pb-12">How much does an external development team cost in kenya?</p>
      </div>

      <div className="flex gap-8 justify-center items-center flex-wrap ">
        <OurPricing
          title="Junior developer"
          price="NOK 46,500"
          month="Per Month"
          desc="A junior developer normally has two to four years of relevant experience."
          button="Get In Touch"
        />
        <OurPricing
          title="Senior developer"
          price="NOK 62,000"
          month="Per Month"
          desc="A senior developer normally has 7 years of relevant experience or more."
          button="Get In Touch"
        />
        <OurPricing
          title="Lead developer"
          price="NOK 89,900"
          month="Per Month"
          desc="A lead developer typically has more than  ten years of relevant experience."
          button="Get In Touch"
        />
      </div>

      {/* How to get Started  */}
      <div className="bg-gray-100 mt-6 pt-3">
      <div className="flex gap-6 mb-12 justify-center items-center">
        <div className="mt-8">
          <OurGetStaeted
            quiz="?"
            title="How to get started"
            desc="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Interger Lorem ipsum dolor sit, amet. consectetur adipisicing elit. Provident quasi id quam?"
          />
          <div className="flex justify-between ml-12 mt-6">
            <p className="text-sm font-semibold text-teal-400 hover:text-teal-600">Click to learn more</p>
            <p className="text-teal-500 font-semibold pr-2 ">&rarr;</p>
          </div>
        </div>
        <OurGetStaeted
          quiz="?"
          title="How to get started"
          desc="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Interger Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quasi id quam?"
        />
      </div>
      <div className="flex gap-6">
        <OurGetStaeted
          quiz="?"
          title="How to get started"
          desc="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Interger Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quasi id quam?"
        />
        <OurGetStaeted
          quiz="?"
          title="How to get started"
          desc="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Interger Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quasi id quam?"
        />
      </div>
      <p className="text-center p-5">Haven't got your answer?<Link className="text-teal-400 hover:text-teal-600 " to="/contact-us">Contact our support now</Link> </p>
      </div>

      <Footer />
    </div>
  )
}
