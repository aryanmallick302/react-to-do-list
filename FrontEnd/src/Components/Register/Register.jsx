import { useState } from "react";
import { NavLink } from "react-router";

function Register() {
  function log() {
    console.log(inputs);
  }
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-100 px-8 py-10">
            <p className="text-center">
              My name is <span className="text-red-600">{inputs.name}</span>. My
              email address is{" "}
              <span className="text-red-600">{inputs.email}</span>
            </p>
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                Fill in the details below to get started
              </p>
            </div>

            {/* Fields */}
            <div className="space-y-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={inputs.name}
                  placeholder="John Doe"
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={inputs.email}
                  placeholder="john@example.com"
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  required
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
                  value={inputs.password}
                  placeholder="••••••••"
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-8 w-full bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium py-2.5 rounded-lg transition duration-150 cursor-pointer"
            >
              Register
            </button>

            {/* Footer */}
            <p className="text-center text-xs text-gray-400 mt-5">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-gray-700 font-medium cursor-pointer hover:underline"
                type="submit"
              >
                Sign in
              </NavLink>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
