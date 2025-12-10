"use client"

import { IDailySales } from "@/types/product";

 interface  IDailySaleProps{
    dailySales: IDailySales[]
 }

const DailySale = ({dailySales = [] } : IDailySaleProps) => {
    console.log(dailySales, 'dlkfj');
    return (
    <div className="space-y-2">
      {dailySales.map((sale, index) => (
        <div key={index} className="p-2 border rounded shadow">
          <p>Date: {sale.date}</p>
          <p>Total Sales: ${sale.totalSales}</p>
          <p>Orders: {sale.orders}</p>
        </div>
      ))}
    </div>
    );
};

export default DailySale;