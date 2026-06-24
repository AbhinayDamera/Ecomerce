import React from 'react'
import logo from "../../assets/logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

const NavBar = ({ cart }) => {
  return (
    <div className="px-4 md:px-10">
      <div className="px-4 md:px-10 py-5 mt-4 bg-gray-200 rounded-2xl">

        {/* Main Navbar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div>
            <img
              className="w-32 md:w-40 lg:w-48 h-auto"
              src={logo}
              alt="Logo"
            />
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-auto">

            <i className="fa-solid fa-magnifying-glass text-blue-500 absolute left-4 top-1/2 -translate-y-1/2"></i>

            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
              className="w-full lg:w-[500px] bg-gray-100 rounded-xl pl-12 pr-12 py-3 outline-none"
            />

            <i className="fa-solid fa-bars text-blue-500 absolute right-4 top-1/2 -translate-y-1/2"></i>

          </div>

          {/* User + Cart */}
          <div className="flex flex-wrap items-center justify-center gap-6">

            <div className="flex items-center gap-2">
              <i className="fa-regular fa-user text-blue-500 text-xl"></i>

              <button className="font-medium">
                Sign Up/Sign In
              </button>
            </div>

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-cart-shopping text-blue-500 text-xl"></i>

              <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
                {cart.length}
              </span>

              <Link to="/cart">
                <button className="font-medium">
                  Cart
                </button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default NavBar;
