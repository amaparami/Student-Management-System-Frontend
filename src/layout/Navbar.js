import React from "react";
import { Link } from "react-router-dom";
import logo from './kdu.png';

export default function Navbar() {
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src={logo} mx-2 width="60" height="50"/>
               Student Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to="/addstudent">
           Add Student
          </Link>
          
          
        </div>
      </nav>
      <div>
          <h1>STUDENT MANAGEMENT SYASTEM</h1>
          <h3> GENERAL SIR JOHN KOTELAWALA DEFENSE UNIVERSITY</h3>
           <br></br>
          
        </div>
        <div className="image"></div>
    </div>
  );
}
