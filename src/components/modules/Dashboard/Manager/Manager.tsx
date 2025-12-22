"use client";

import { IMonthlySales } from "@/types/product";
import React from "react";

interface MonthlyProps {
  monthlySale: IMonthlySales[];
}

const Manager = ({ monthlySale = [] }: MonthlyProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {monthlySale.map((sale, index) => (
        <React.Fragment key={index}>
          {/* Orders Card */}
          <div className="p-4 border rounded shadow text-center">
            <p className="text-sm text-gray-500">Orders</p>
            <p className="text-lg font-bold">{sale.orders}</p>
          </div>

          {/* Total Sales Card */}
          <div className="p-4 border rounded shadow text-center">
            <p className="text-sm text-gray-500">Total Sales</p>
            <p className="text-lg font-bold">${sale.totalSales}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Manager;
