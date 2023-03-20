import React from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./Student/AddStudent";
import EditStudent from "./Student/EditStudent";
import ViewStudent from "./Student/ViewStudent";
import Login from "./Student/Login";
import Register from "./Student/Register";
import Main from "./pages/Main";

function App() {
  //  const [currentForm, setCurrentForm] = ('Login');

  //  const toggleForm = (formName) => {
  //    setCurrentForm(formName);
  // }

  return (
    <div className="App">
       {/* {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }  */}

      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/AddStudent" element={<AddStudent />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route
            exact
            path="/EditStudent/:studentID"
            element={<EditStudent />}
          />
          <Route
            exact
            path="/ViewStudent/:studentID"
            element={<ViewStudent />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
