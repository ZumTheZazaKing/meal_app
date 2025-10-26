import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const login = () => {
    axios
      .post(import.meta.env.VITE_BASE_API_URL + "/login", input)
      .then((res) => {
        let data = res.data;
        if (data.status != 200) {
          return setError(Object.values(data.messages)[0]);
        }

        localStorage.setItem("auth_token", data.access_token);
        navigate("/");
      });
  };

  return (
    <div className="bg-zinc-200 w-screen h-screen flex items-center justify-center">
      <div className="flex items-center gap-3 flex-col">
        <h2 className="text-xl font-semibold text-zinc-600 tracking-wider uppercase">
          Login
        </h2>
        <div className="rounded bg-zinc-100 shadow-sm p-5 flex flex-col gap-4 w-[80vw] sm:w-[300px]">
          <div className="flex flex-col gap-2">
            <label>Username</label>
            <input
              value={input.username}
              onChange={handleChange}
              type="text"
              name="username"
              className="bg-zinc-200 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
              value={input.password}
              onChange={handleChange}
              name="password"
              type="password"
              className="bg-zinc-200 rounded p-2"
            />
          </div>
          <button
            onClick={login}
            className="text-white bg-blue-500 p-2 rounded cursor-pointer transition hover:bg-blue-600"
          >
            LOGIN
          </button>
          {error && <div className="text-red-500 text-center">{error}</div>}
        </div>
        <div className="flex justify-end w-[80vw] sm:w-[300px] text-zinc-500">
          <div className="text-end">
            Don't have an account?&nbsp;
            <Link to="/register" className="underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
