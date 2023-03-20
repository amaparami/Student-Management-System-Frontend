import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditStudent() {
  let navigate = useNavigate();

  const { studentID } = useParams();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    address: "",
    birthday: "",
    degreeProgram: "",
}); 

  const {  firstName, lastName, address, birthday, degreeProgram} = student;

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadStudent();
  },[] );

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/student/${studentID}`, student);
    navigate("/home");
  };

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/student/${studentID}`);
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Student</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
              Last Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
              Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Birthday" className="form-label">
              Birthday
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Birthday"
                name="birthday"
                value={birthday}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="degreeProgram" className="form-label">
              Degree Program
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Degree Program"
                name="degreeProgram"
                value={degreeProgram}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary ">
              Edit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/home">
              Clear
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}