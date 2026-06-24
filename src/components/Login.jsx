import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import loginImage from "../assets/login-image.png";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please create an account first");
      return;
    }

    if (
      user.email === email &&
      user.password === password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful");

      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (

    // CHANGED: flex-col on mobile, row on desktop
    <div className="flex flex-col lg:flex-row min-h-screen">

      {/* CHANGED: full width on mobile, half width on desktop */}
      <div className="w-full lg:w-1/2 border-r-2 border-gray-400 p-4 md:p-10 flex justify-center items-center">

        {/* CHANGED: responsive width and padding */}
        <div className="border shadow-xl w-full max-w-lg rounded-2xl p-6 md:p-10 bg-white">

          <h1 className="flex justify-center text-3xl md:text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="flex justify-center text-center mt-2">
            Login to your account..
          </p>

          <div className="mt-8">
            <form className="flex flex-col pt-4">

              {/* CHANGED: removed pl-26 */}
              <label className="text-lg md:text-xl font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                className="border border-r-4 rounded-lg w-full px-3 py-2"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* CHANGED: removed pl-26 */}
              <label className="text-lg md:text-xl font-medium text-gray-700 mb-2 mt-5">
                Password
              </label>

              <input
                className="border border-r-4 rounded-lg w-full px-3 py-2"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* CHANGED: responsive layout */}
              <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">

                <label className="text-sm md:text-base">
                  <input
                    type="checkbox"
                    className="mr-2"
                  />
                  Remember me
                </label>

                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Forgot Password?
                </a>

              </div>

              {/* CHANGED: full width button */}
              <button
                type="button"
                onClick={handleLogin}
                className="border border-blue-700 bg-blue-500 text-white rounded-2xl w-full h-12 mt-8 hover:bg-blue-700 transition"
              >
                Login
              </button>

            </form>
          </div>

          <div className="flex justify-center mt-6">
            <p>OR</p>
          </div>

          <div className="flex justify-center mt-6">

            {/* CHANGED: full width button */}
            <button
              type="button"
              className="border border-gray-300 bg-white rounded-2xl w-full h-12 hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                className="w-5"
                alt="Google"
              />

              Continue with Google
            </button>

          </div>

          <div className="flex justify-center items-center mt-5 flex-wrap">

            <span className="text-base md:text-xl">
              Don't have an account?
            </span>

            <Link
              to="/signup"
              className="text-base md:text-xl text-blue-600 hover:text-blue-800 ml-2"
            >
              Sign Up
            </Link>

          </div>

        </div>
      </div>

      {/* CHANGED: hide image on mobile */}
      <div className="hidden sm:flex w-1/2 justify-center items-center">

        <img
          className="h-full w-full object-cover"
          src={loginImage}
          alt="Login"
        />

      </div>

    </div>
  );
};

export default Login;