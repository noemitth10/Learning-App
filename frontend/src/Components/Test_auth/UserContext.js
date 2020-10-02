import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserWithFetch();
  }, []);

  const getUserWithFetch = async () => {
    const response = await fetch("http://localhost:8000/api/user-list/");
    const jsonData = await response.json();
    setUsers(jsonData);
  };

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
