import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login info:", form);
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button type="submit" className="btn blue">Login</button>

        <p>
          Don’t you have an account?{" "}
          <Link to="/signup" className="link">Sign up</Link>
        </p>
      </form>
    </div>
  );
}