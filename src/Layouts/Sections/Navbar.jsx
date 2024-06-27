import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#b22830] border-t-[10px] border-[#53382c] pt-14px pb-3 relative top-0 shadow-md ">
      <div className="container mx-auto flex items-end justify-between">
        <NavLink className="flex items-end justify-center" to="/">
          <div className="max-w-[110px] min-h-[86px] mr-5">
            <img src="./highlandWhiteLogo.png" alt="" className="w-full" />
          </div>
        </NavLink>
        <button
          className="block lg:hidden mx-2"
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="hidden lg:flex lg:items-center lg:justify-between w-full">
          <ul className="flex flex-col lg:flex-row lg:space-x-4 text-center my-2 lg:my-0 lg:m-auto text-base font-bold ">
            <li className="nav-item p-2.5 hover:bg-[#53382c]  text-white">
              <NavLink className="nav-link" to="/">
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item p-2.5 hover:bg-[#53382c]  text-white">
              <NavLink className="nav-link" to="/products">
                Thực đơn
              </NavLink>
            </li>
            <li className="nav-item p-2.5 hover:bg-[#53382c]  text-white">
              <NavLink className="nav-link" to="/about">
                Về chúng tôi
              </NavLink>
            </li>
            <li className="nav-item p-2.5 hover:bg-[#53382c]  text-white">
              <NavLink className="nav-link" to="/contact">
                Tin tức
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-center">
            <NavLink
              to="/login"
              className="btn text-white hover:border-[#CC9554] btn-outline-dark m-2 border-2 border-white px-4 py-2 rounded-md hover:bg-[#CC9554] hover:text-white transition duration-300"
            >
              <i className="fa fa-sign-in-alt mr-1"></i> Đăng nhập
            </NavLink>
            <NavLink
              to="/register"
              className="btn text-white hover:border-[#CC9554] btn-outline-dark m-2 border-2 border-white px-4 py-2 rounded-md hover:bg-[#CC9554] hover:text-white transition duration-300"
            >
              <i className="fa fa-user-plus mr-1"></i> Đăng kí
            </NavLink>
            <NavLink
              to="/cart"
              className="btn text-white hover:border-[#CC9554] btn-outline-dark m-2 border-2 border-white px-4 py-2 rounded-md hover:bg-[#CC9554] hover:text-white transition duration-300"
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
