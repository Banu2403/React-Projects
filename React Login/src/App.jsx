import { Link } from "react-router-dom";
import "./index.css";

export default function App() {
  return (
    <div className="home">
      <h1 style={{ color: "#e200b9ff", fontSize: "50px" }}>Welcome to <br /> AI Company</h1>
      <div className="buttons">
        <Link to="/login" className="btn blue">Login</Link>
        <Link to="/signup" className="btn pink">Sign Up</Link>
      </div>
    </div>
  );
}