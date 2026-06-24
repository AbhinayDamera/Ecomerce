import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from "../assets/login-image.png";

const Signup = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account Created Successfully");

    navigate("/login");
  };

  return (

    <div className="flex flex-col lg:flex-row min-h-screen">

      {/* Form Section */}
      <div className="w-full lg:w-1/2 border-r-2 p-4 md:p-10 flex justify-center items-center">

        <div className="shadow-xl w-full max-w-lg rounded-2xl p-6 md:p-10 bg-white">

          <h1 className="flex justify-center text-3xl md:text-4xl font-bold">
            Create Account
          </h1>

          <p className="flex justify-center text-center mt-2">
            Sign up to continue shopping
          </p>

          <form className="flex flex-col mt-6">

            <label className="text-lg md:text-xl font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              className="border border-gray-300 rounded-lg w-full px-3 py-2"
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="text-lg md:text-xl font-medium text-gray-700 mb-2 mt-4">
              Email
            </label>

            <input
              className="border border-gray-300 rounded-lg w-full px-3 py-2"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-lg md:text-xl font-medium text-gray-700 mb-2 mt-4">
              Password
            </label>

            <input
              className="border border-gray-300 rounded-lg w-full px-3 py-2"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="text-lg md:text-xl font-medium text-gray-700 mb-2 mt-4">
              Confirm Password
            </label>

            <input
              className="border border-gray-300 rounded-lg w-full px-3 py-2"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="mt-5">
              <label className="text-sm md:text-base">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                I agree to Terms and Conditions
              </label>
            </div>

            <button
              type="button"
              onClick={handleSignup}
              className="border border-blue-700 bg-blue-500 text-white rounded-2xl w-full h-12 mt-8 hover:bg-blue-700 transition"
            >
              Create Account
            </button>

          </form>

          <div className="flex justify-center mt-6">
            <p>OR</p>
          </div>

          <div className="flex justify-center mt-6">
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
              Already have an account?
            </span>

            <Link
              to="/login"
              className="text-base md:text-xl text-blue-600 hover:text-blue-800 ml-2"
            >
              Login
            </Link>
          </div>

        </div>

      </div>

      {/* Hide Image on Mobile */}
      <div className="hidden md:flex w-1/2 justify-center items-center">

        <img
          className="h-full w-full object-cover"
          src={loginImage}
          alt="Signup"
        />

      </div>

    </div>
  );
};

export default Signup;