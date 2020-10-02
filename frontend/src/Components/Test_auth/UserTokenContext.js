import React, { useState, createContext, useEffect } from "react";

export const UserTokenContext = createContext();

export const UserTokenProvider = (props) => {
  const [userToken, setUserToken] = useState(props.token);

  return (
    <UserTokenContext.Provider value={[userToken, setUserToken]}>
      {props.children}
    </UserTokenContext.Provider>
  );
};
