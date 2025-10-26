import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const isAuth = !!localStorage.getItem("auth_token");

  const logout = () => {
    const token = localStorage.getItem("auth_token");
    axios
      .post(
        import.meta.env.VITE_BASE_API_URL + "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        let data = res.data;
        if (data.status != 200) return console.error("Logout failed");

        localStorage.removeItem("auth_token");
        navigate("/login");
      });
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <div className="bg-zinc-100 shadow p-3 flex justify-between">
      <div>
        {isAuth && (
          <button className="cursor-pointer text-zinc-500">
            <FaBookmark size={24} />
          </button>
        )}
      </div>
      {isAuth ? (
        <button
          onClick={logout}
          className="tracking-wide text-zinc-500 cursor-pointer"
        >
          LOGOUT
        </button>
      ) : (
        <button
          onClick={login}
          className="tracking-wide text-zinc-500 cursor-pointer"
        >
          LOGIN
        </button>
      )}
    </div>
  );
};
export default Header