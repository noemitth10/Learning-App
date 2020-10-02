import React from "react";
import "../Demo_test/tests.css";
import "../Demo_lesson/lessons.css";

const User = ({ id, token, username, password }) => {
  return (
    <div>
      <div className="title-container">User Profile</div>
      <p>User id: {id}</p>
      <p>User name: {username}</p>
      <p> {token}</p>
      <p> {password}</p>
    </div>
  );
};
export default User;
