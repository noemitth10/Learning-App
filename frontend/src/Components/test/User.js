import React from "react";

const User = ({ username, password }) => {
  return (
    <div>
      <h3>{username}</h3>
      <p>{password}</p>
    </div>
  );
};
export default User;
