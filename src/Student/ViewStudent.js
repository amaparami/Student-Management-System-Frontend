import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewStudent() {
  const [Student, setStudent] = useState({
    firstName: "",
    lastName: "",
    address: "",
    birthday: "",
    degreeProgram: "",
  });

  const {studentID} = useParams();

  useEffect(() => {
    loadStudent();
  }, );

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/student/${studentID}`);
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Student Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Student id : {Student.studentID}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name:</b>
                  {Student.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name:</b>
                  {Student.lastName}
                </li>
                <li className="list-group-item">
                  <b>Address:</b>
                  {Student.address}
                </li>
                <li className="list-group-item">
                  <b>Birthday:</b>
                  {Student.birthday}
                </li>
                <li className="list-group-item">
                  <b>Degree Program:</b>
                  {Student.degreeProgram}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/home"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}