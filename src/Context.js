import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(true);
  const [userType, setUserType] = useState("patient");
  const [filterArray, setFilterArray] = useState(["rating"]);

  return (
    <AppContext.Provider
      value={{
        loginStatus,
        setLoginStatus,
        userType,
        setUserType,
        filterArray,
        setFilterArray,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
