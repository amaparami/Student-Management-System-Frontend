import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    loadStudent();
  }, []);
  const loadStudent = async () => {
    const result = await axios.get("http://localhost:8080/student");
    setStudent(result.data);
  };
  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/student/${id}`);
    loadStudent();
  };

  return (
    <div className="container">
       <div className="container homepage">
          
       

      <div className="pt-4">
        {/* ------------------------------------------------------------------------ */}
        {/* <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
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
        </div> */}
        {/* ------------------------------------------------------------------------ */}
        {/* <div>
          <h1>STUDENT MANAGEMENT SYASTEM</h1>
          <h3> GENERAL SIR JOHN KOTELAWALA DEFENSE UNIVERSITY</h3>
        </div> */}
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Address</th>
              <th scope="col">Birthday</th>
              <th scope="col">Degree Program</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((student, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>

                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.address}</td>
                <td>{student.birthday}</td>
                <td>{student.degreeProgram}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/Viewstudent/${student.studentID}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-success mx-2"
                    to={`/Editstudent/${student.studentID}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteStudent(student.studentID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
