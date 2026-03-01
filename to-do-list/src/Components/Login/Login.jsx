function Login() {
  return (
    <>
      <div className="min-h-screen bg-[#ffb703] flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-[#023047]/10 border-2 border-[#023047]/20 rounded-2xl px-4 py-8 sm:px-8 sm:py-10 shadow-lg">
          {/* App Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#023047] tracking-tight text-center mb-6 sm:mb-8">
            Application Name
          </h1>

          {/* Form */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Username */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="username"
                className="text-[#023047] font-semibold text-sm"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                className="w-full px-4 py-2.5 rounded-lg border-2 border-[#023047] bg-[#ffb703] text-[#023047] placeholder-[#023047]/40 font-medium focus:outline-none focus:ring-2 focus:ring-[#023047] transition-all duration-200 text-base"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-[#023047] font-semibold text-sm"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 rounded-lg border-2 border-[#023047] bg-[#ffb703] text-[#023047] placeholder-[#023047]/40 font-medium focus:outline-none focus:ring-2 focus:ring-[#023047] transition-all duration-200 text-base"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#023047] text-[#ffb703] py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-[#023047]/85 transition-colors duration-200 mt-2"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
