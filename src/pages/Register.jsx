import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-zinc-200 w-screen h-screen flex items-center justify-center">
      <div className="flex items-center gap-3 flex-col">
        <h2 className="text-xl font-semibold text-zinc-600 tracking-wider uppercase">
          Register
        </h2>
        <div className="rounded bg-zinc-100 shadow-sm p-5 flex flex-col gap-4 w-[80vw] sm:w-[300px]">
          <div className="flex flex-col gap-2">
            <label>Username</label>
            <input type="text" className="bg-zinc-200 rounded p-2" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input type="text" className="bg-zinc-200 rounded p-2" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Confirm Password</label>
            <input type="text" className="bg-zinc-200 rounded p-2" />
          </div>
          <button className="text-white bg-blue-500 p-2 rounded cursor-pointer transition hover:bg-blue-600">
            REGISTER
          </button>
        </div>
        <div className="flex justify-end w-[80vw] sm:w-[300px] text-zinc-500">
          <div className="text-end">
            Have an account?&nbsp;
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
