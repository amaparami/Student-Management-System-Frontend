import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3 auth-form-container">
          <h2>Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="full Name"
            />
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
            <button type="submit" className="btn btn-primary mt-3 col-12">Register</button>
          </form>
           {/* <button
            className="link-btn"
            onClick={() => props.onFormSwitch("student/login")}
          >
            Already have an account? Login here.
          </button>  */}
          <Link type="submit" className="link-btn" to="/login"> Already have an account? Login here</Link>
          <br></br>
        </div>
      </div>
    </div>
  );
}
