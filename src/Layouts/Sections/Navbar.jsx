import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white py-3 sticky top-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink className="text-2xl font-bold px-2" to="/">
          React Ecommerce
        </NavLink>
        <button
          className="block lg:hidden mx-2"
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="hidden lg:flex lg:items-center lg:justify-between w-full">
          <ul className="flex flex-col lg:flex-row lg:space-x-4 text-center my-2 lg:my-0 lg:m-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-center">
            <NavLink
              to="/login"
              className="btn btn-outline-dark m-2 border-2 border-gray-800 px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition duration-300"
            >
              <i className="fa fa-sign-in-alt mr-1"></i> Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-outline-dark m-2 border-2 border-gray-800 px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition duration-300"
            >
              <i className="fa fa-user-plus mr-1"></i> Register
            </NavLink>
            <NavLink
              to="/cart"
              className="btn btn-outline-dark m-2 border-2 border-gray-800 px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition duration-300"
            >
              <i className="fa fa-cart-shopping mr-1"></i> Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
