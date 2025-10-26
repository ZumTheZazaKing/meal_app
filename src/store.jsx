import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("auth_token"));
  const [api, setApi] = useState();

  useEffect(() => {
    setApi(
      token
        ? axios.create({
            baseURL: import.meta.VITE_BASE_API_URL,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        : axios.create({
            baseURL: import.meta.VITE_BASE_API_URL,
          })
    );
  }, [token]);

  return (
    <StoreContext.Provider value={{ token, setToken, api }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
