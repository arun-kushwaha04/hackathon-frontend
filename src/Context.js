import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <AppContext.Provider
      value={{
        loginStatus,
        setLoginStatus,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
