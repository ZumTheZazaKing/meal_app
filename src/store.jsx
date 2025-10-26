import { createContext, useContext, useState } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("auth_token"));

  return (
    <StoreContext.Provider value={{ token, setToken }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
