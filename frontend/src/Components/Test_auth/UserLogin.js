import React, { useState, createContext, useEffect } from "react";
import { UserContext, UserProvider } from "./UserContext";
import UserList from "./UserList";

const UserLogin = () => {
  const [users, setUsers] = useState([]);
  const [userToken, setUserToken] = useState([]);

  var username;
  var password;

  const loginUser = (event) => {
    fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(username, password),
    })
      .then((data) => data.json())
      .then((data) => {
        setUserToken(data.token);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              name="username"
              placeholder="username"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="password"
            ></input>
          </div>
        </div>
      </div>
      <div className="form-footer">
        <button onClick={loginUser} type="button" className="btn">
          Login
        </button>
      </div>
    </div>
  );
};
export default UserLogin;
