import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userType, setUserType] = useState("Patient");

  return (
    <AppContext.Provider
      value={{
        loginStatus,
        setLoginStatus,
        userType,
        setUserType,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
