import React, { useState } from "react";


const zxcvbn = require("zxcvbn");
function PasswordStrength() {
  const [type, setType] = useState("input");
  const [score, setScore] = useState("null");

  const showHide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let currentType = type === "input" ? "password" : "input";
    setType(currentType);
  };

  const testStrengthPassword = (e) => {
    // we will get score property from zxcvbn
    if (e.target.value !== "") {
      let pass = zxcvbn(e.target.value);
      setScore(pass.score);
    } else {
      setScore("null");
    }
  };

  return (
    <div className="wrapper">
        <h2 className="page-title">Password Strength Checker</h2>
      <div className="AddingPassword">
        <div className="input-group">
          <label className="label-password">
            Password
            <input
              type={type}
              className="input-password"
              onChange={testStrengthPassword}
            />
            <span className="show-password" onClick={showHide}>
              {type === "input" ? "Hide" : "Show"}
            </span>
            <span className="strength-password" data-score={score} />
          </label>
        </div>
      </div>
    </div>
  );
}

export default PasswordStrength;
