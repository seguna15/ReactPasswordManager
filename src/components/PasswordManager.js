//import './App.css';
import {useState, useEffect} from "react";
import Axios from 'axios';

function PasswordManager() {
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [passwordList, setPasswordList] = useState([])

  useEffect(() => {
    Axios.get("https://super-erratic-taleggio.glitch.me/showPasswords").then(
      (response) => {
        setPasswordList(response.data);
      }
    );
  }, []);

  const addPassword = () => {
    Axios.post("https://super-erratic-taleggio.glitch.me/addPassword", {
      password: password,
      title: title,
    });
    window.location.reload(false);
  };

  const decryptPassword = (encryption) => {
    Axios.post("https://super-erratic-taleggio.glitch.me/decryptpassword", {
      password: encryption.password,
      iv: encryption.iv,
    }).then((response) => {
      setPasswordList(
        passwordList.map((val) => {
          return val.id == encryption.id
            ? {
                id: val.id,
                password: val.password,
                title: response.data,
                iv: val.iv,
              }
            : val;
        })
      );
    });
  }
  return (
    <div className="wrapper">
      <h2 className="page-title">Password Manager</h2>
      <div className="AddingPassword">
        <input
          type="text"
          placeholder="Ex. password123"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Ex. Facebook"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button onClick={addPassword}>Add Password</button>
      </div>

      <div className="Passwords">
        {passwordList.map((val, key) => {
          return (
            <div
              className="password"
              onClick={() => {
                decryptPassword({
                  password: val.password,
                  iv: val.iv,
                  id: val.id,
                });
              }}
              key={key}
            >
              <h3>{val.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PasswordManager;
