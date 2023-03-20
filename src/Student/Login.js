import React, { useState } from "react";
import { Link } from "react-router-dom";




export default function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="container">
      
      
      <div className="row">
      <div className="col-6 offset-3 auth-form-container">
       <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <Link type="submit" className="logbtn btn btn-primary col-12 mt-3 " to="/addstudent">Log In</Link>
        </form>
        
        {/* <button
          className="link-btn"
          onClick={() => props.onFormSwitch("student/register")}
        >
          Don't have an account? Register here.
        </button> */}
        <Link type="submit" className="link-btn" to="/register"> Don't have an account? Register here.</Link>
        <br></br>
    
      </div>
    </div>
    </div>
   
  );
}
