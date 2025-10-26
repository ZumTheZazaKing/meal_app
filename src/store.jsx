import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    getBookmarks();
  }, []);

  const getBookmarks = () => {
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    axios
      .get(import.meta.env.VITE_BASE_API_URL + "/bookmarks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let data = res.data;
        console.log(data);
        setBookmarks(data);
      });
  };

  return (
    <StoreContext.Provider
      value={{ bookmarks, getBookmarks, currentPage, setCurrentPage }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
