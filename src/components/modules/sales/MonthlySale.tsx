"use client"

import { IMonthlySales } from "@/types/product";

interface MonthlyProps {
    monthlySale: IMonthlySales[]
}
const MonthlySale = ({monthlySale = []} : MonthlyProps) => {
    return (
          <div className="space-y-2">
      {monthlySale.map((sale, index) => (
        <div key={index} className="p-2 border rounded shadow">
             
          <p>Date: {sale.date}</p>
          <p>Total Sales: ${sale.totalSales}</p>
          <p>Orders: {sale.orders}</p>
        </div>
      ))}
    </div>
    );
};

export default MonthlySale;