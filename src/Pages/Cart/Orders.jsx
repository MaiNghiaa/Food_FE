import React from "react";
import { NavLink } from "react-router-dom";

const Orders = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Đơn hàng đã đặt</h1>
      <div className="nav-link py-3 text-blue-400 text-sm flex gap-1">
        <NavLink to="/">{""}Home</NavLink>
      </div>
      {/* Chờ xử lý */}
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2"> chờ xử lý</h2>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <p className="text-gray-700">Đơn hàng số #123456</p>
        </div>
        {/* Thêm các đơn hàng khác chờ xử lý tại đây */}
      </div>

      {/* Đang xử lý */}
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Đơn hàng đang xử lý</h2>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <p className="text-gray-700">Đơn hàng số #789012</p>
        </div>
        {/* Thêm các đơn hàng khác đang xử lý tại đây */}
      </div>

      {/* Đã giao */}
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Đơn hàng đã giao</h2>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <p className="text-gray-700">Đơn hàng số #345678</p>
        </div>
        {/* Thêm các đơn hàng khác đã giao tại đây */}
      </div>
    </div>
  );
};

export default Orders;
