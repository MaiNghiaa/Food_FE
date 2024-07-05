import React from "react";

export default function AdminDashboard() {
  return (
    <div className="flex-1 bg-gray-100 p-10">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {/* Place your content for Admin Dashboard here */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p>Welcome to the Admin Dashboard!</p>
        {/* Example content */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <ul className="mt-2">
            <li className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">June 30, 2024</span>
              <span className="font-semibold">Updated product prices.</span>
            </li>
            <li className="flex items-center space-x-2 mt-1">
              <span className="text-sm text-gray-500">June 29, 2024</span>
              <span className="font-semibold">Processed new orders.</span>
            </li>
            {/* Add more activity items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}
