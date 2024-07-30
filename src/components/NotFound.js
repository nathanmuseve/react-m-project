import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
    <h1> Oops! 404 error! Page Not Found</h1>
    <p>The page you are looking for could not be found.Go back to <Link className="text-teal-400 underline" to="/">Home Page</Link>.</p>
    </div>
  )
}
