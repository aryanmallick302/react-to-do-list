import { useState } from "react";
import { Routes, Route, NavLink } from "react-router";
import Register from "../Register/Register";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((input) => ({ ...input, [name]: value }));
    // console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-100 px-8 py-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Enter your credentials to sign in
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Username */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="johndoe"
                  value={inputs.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={inputs.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-8 w-full bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium py-2.5 rounded-lg transition duration-150 cursor-pointer"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-5">
            Don't have an account?{" "}
            <span className="text-gray-700 font-medium cursor-pointer hover:underline">
              <NavLink to="/register">Register</NavLink>
            </span>
          </p>
        </div>
      </div>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default Login;
