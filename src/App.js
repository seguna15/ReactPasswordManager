import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import PasswordManager from './components/PasswordManager'
import PasswordGenerator from './components/PasswordGenerator'
import PasswordStrength from "./components/PasswordStrength";

function App() {  
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <ul className="nav-group">
            <li className="nav-group-item">
              <Link to={"/"} className="nav-link">
                {" "}
                Password Generator{" "}
              </Link>
            </li>
            <li className="nav-group-item">
              <Link to={"/passwordmanager"} className="nav-link">
                Password Manager
              </Link>
            </li>
            <li className="nav-group-item">
              <Link to={"/passwordstrength"} className="nav-link">
                Password Strength Checker
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <h1>Welcome to Password Service</h1>
        <Routes>
          <Route exact path="/" element={<PasswordGenerator />} />
          <Route path="/passwordmanager" element={<PasswordManager />} />
          <Route path="/passwordstrength" element={<PasswordStrength />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
