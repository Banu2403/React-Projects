import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup info:", form);
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-box">
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

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

        <button type="submit" className="btn pink">Sign Up</button>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="link">Login</Link>
        </p>
      </form>
    </div>
  );
}