import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import User from "./User";

const Test = () => {
  const [users, setUsers] = useContext(UserContext);
  console.log(users);

  return (
    <div>
      {users.map((user) => (
        <User username={user.username} password={user.password} key={user.id} />
      ))}
    </div>
  );
};
export default Test;
