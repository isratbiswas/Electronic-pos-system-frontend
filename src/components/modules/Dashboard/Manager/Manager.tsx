"use client";

import { IMonthlySales, IProduct } from "@/types/product";
import React from "react";
import { FaBox, FaDollarSign, FaShoppingCart } from "react-icons/fa";

interface MonthlyProps {
  monthlySale: IMonthlySales[];
  products: IProduct[];
}

const Manager = ({ monthlySale = [], products = [] }: MonthlyProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {/* Orders Card */}
      <div className="flex items-center p-6 bg-white shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-full mr-4">
          <FaShoppingCart size={20} />
        </div>
        <div>
          <p className="text-sm text-gray-400 font-medium">Orders</p>
          <p className="text-xl font-bold text-gray-800">
            {monthlySale.reduce((sum, sale) => sum + sale.orders, 0)}
          </p>
        </div>
      </div>

      {/* Total Sales Card */}
      <div className="flex items-center p-6 bg-white shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition">
        <div className="p-3 bg-green-50 text-green-600 rounded-full mr-4">
          <FaDollarSign size={20} />
        </div>
        <div>
          <p className="text-sm text-gray-400 font-medium">Total Sales</p>
          <p className="text-xl font-bold text-gray-800">
            ${monthlySale.reduce((sum, sale) => sum + sale.totalSales, 0)}
          </p>
        </div>
      </div>

      {/* Total Products Card */}
      <div className="flex items-center p-6 bg-white shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition">
        <div className="p-3 bg-yellow-50 text-yellow-600 rounded-full mr-4">
          <FaBox size={20} />
        </div>
        <div>
          <p className="text-sm text-gray-400 font-medium">Total Products</p>
          <p className="text-xl font-bold text-gray-800">{products.length}</p>
        </div>
      </div>

      {/* Optional: Add another card like Customers or Revenue */}
      <div className="flex items-center p-6 bg-white shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition">
        <div className="p-3 bg-purple-50 text-purple-600 rounded-full mr-4">
          <FaBox size={20} /> {/* Change icon as needed */}
        </div>
        <div>
          <p className="text-sm text-gray-400 font-medium mt-2">Customers</p>
          <p className="text-xl font-bold text-gray-800">18</p>
        </div>
      </div>
    </div>
  );
};

export default Manager;
