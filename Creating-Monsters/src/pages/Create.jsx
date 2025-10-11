import { Link } from "react-router-dom";

export default function Create() {
  return (
    <div className="container">
      <h1>Create</h1>

      <Link to="/Submit">
        <button className="btn blue">Submit</button>
      </Link>
    </div>
  );
}