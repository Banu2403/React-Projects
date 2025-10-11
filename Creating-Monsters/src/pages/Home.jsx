import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Creating Monster</h1>
      <Link to="/create">
        <button className="btn pink">Create</button>
      </Link>
    </div>
  );
}