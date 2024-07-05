import React from "react";
import { Link } from "react-router-dom";

export default function SideBarAdmin() {
  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col h-screen ">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav className="mt-4 flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              to="/admin"
              className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              to="/admin/Donhang"
              className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            >
              Đơn hàng
            </Link>
          </li>
          <li>
            <Link
              to="/admin/products"
              className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            >
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link
              to="admin/News"
              className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            >
              Tin tức
            </Link>
          </li>
          <li>
            <Link
              to="/admin/typeFood"
              className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            >
              Loại đồ ăn
            </Link>
          </li>
          <li>
            <Link
              to="/admin/Managermentcustomers"
              className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            >
              Quản lý tài khoản
            </Link>
          </li>
          <li>
            <div>
              <button className="block py-2 px-4 hover:bg-gray-700 transition duration-200">
                Logout
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
