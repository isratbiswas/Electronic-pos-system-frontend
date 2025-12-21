"use client";

import { IDailySales } from "@/types/product";
import { FaCalendarAlt, FaDollarSign, FaShoppingCart } from "react-icons/fa";

interface IDailySaleProps {
  dailySales: IDailySales[];
  topOnly?: boolean; // new prop to control top 3 display
}

const DailySale = ({ dailySales = [], topOnly = false }: IDailySaleProps) => {
  // Determine which sales to display
  const displaySales = topOnly
    ? [...dailySales].sort((a, b) => b.orders - a.orders).slice(0, 3)
    : dailySales;

  return (
    <div className="p-6 font-sans">
      {displaySales.length === 0 ? (
        <p className="text-gray-400 text-center text-lg">
          No sales data available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySales.map((sale, index) => (
            <div
              key={index}
              className="p-5 bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              {/* Date */}
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-200 dark:bg-purple-700 rounded-full mr-3">
                  <FaCalendarAlt className="text-purple-600 dark:text-purple-100" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Date
                  </p>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {sale.date}
                  </p>
                </div>
              </div>

              {/* Total Sales */}
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-200 dark:bg-green-700 rounded-full mr-3">
                  <FaDollarSign className="text-green-600 dark:text-green-100" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total Sales
                  </p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    ${sale.totalSales.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Orders */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-200 dark:bg-blue-700 rounded-full mr-3">
                    <FaShoppingCart className="text-blue-600 dark:text-blue-100" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Orders
                    </p>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                      {sale.orders}
                    </p>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    sale.orders > 15
                      ? "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-200"
                      : "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                  }`}
                >
                  {sale.orders > 15 ? "High" : "Normal"}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DailySale;
