import React, { useState, useContext } from "react";
import { UserContext, UserProvider } from "./UserContext";
import User from "./User";
import UserLogin from "./UserLogin";

const UserList = () => {
  const [users, setUsers] = useContext(UserContext);
  const [userToken, setUserToken] = useState(null);

  return (
    <div>
      {users.map((user) => (
        <User
          id={user.id}
          token={user.token}
          username={user.username}
          password={user.password}
        />
      ))}
    </div>
  );
};
export default UserList;
