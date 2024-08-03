import News from "./News";

export default function Alvin() {
  return (
    <div>
      <div className="px-10 items-centre justify-centre">
        <h1 className="text-center py-3 font-bold" >News that helps</h1>
        <p className="text-center pb-3 text-slate-500">with lots of unique blocks you can easily build a page 
          without <br></br>coding.Build your next landing page
        </p>
      </div>

      <div className="flex mx-auto gap-6 flex-wrap justify-center items-centre">
      <div>
        <News 
        image = "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        title = "career"
        par = "how to win any job you want .Get started with 5 steps."
        />
      </div>
      
      <div>
      <News 
        image = "https://media.istockphoto.com/id/1592210966/photo/happy-black-man-running-in-park-with-music-smile-and-mockup-in-nature-garden-and-workout.webp?b=1&s=170667a&w=0&k=20&c=h79DobqKJHR1IEQ0FRCNP52vq-5mN2Bv-qQFhIyFGgQ="
        title = "Life style"
        par = "10 ways to reduce your office work depression."
        />
      </div>

      <div>
      <News 
        image = "https://media.istockphoto.com/id/1513343950/photo/a-young-black-business-woman-working-on-her-laptop-computer.webp?b=1&s=170667a&w=0&k=20&c=usTu_mcC4DcRIC10xZU3Jz27EvGINWKRl0NwJxCwtRM="
        title = "career"
        par = "Why should you work as ateam even on small projects"
        />
      </div>
      </div>
    </div>
  )
}
