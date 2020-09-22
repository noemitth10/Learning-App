import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import Test from "./Test";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useContext(UserContext);

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const AddUser = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [
      ...prevUsers,
      { username: username, password: password },
    ]);
    console.log(username, password);
    console.log(users);
  };

  return (
    <div>
      <form onSubmit={AddUser}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={updateUsername}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={updatePassword}
        />
        <button>Submit</button>
      </form>
      <Test />
    </div>
  );
};
export default AddUser;
