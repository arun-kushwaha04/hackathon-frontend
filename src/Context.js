import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("loggedIn")
  );
  const [userType, setUserType] = useState("patient");
  const [filterArray, setFilterArray] = useState(["rating"]);
  const [specialization, setSepcialization] = useState("");

  return (
    <AppContext.Provider
      value={{
        loginStatus,
        setLoginStatus,
        userType,
        setUserType,
        filterArray,
        setFilterArray,
        specialization,
        setSepcialization,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
