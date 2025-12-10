"use client"

import { IProfit } from "@/types/product";

interface ProfitProps{
     profits: IProfit[];
}

const ProfitLossManage = ({profits =[]}: ProfitProps) => {
    console.log(profits, 'cli');
    return (
        <div className="space-y-6">
      {profits.map((profit, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Date: {profit._id}</h2>
          <h3 className="text-green-600">Total Profit: ${profit.totalProfit}</h3>
          <h3 className="text-red-600">Total Loss: ${profit.totalLoss}</h3>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Items:</h4>
            <table className="w-full table-auto border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">Product</th>
                  <th className="border px-2 py-1">Purchase Price</th>
                  <th className="border px-2 py-1">Sold Price</th>
                  <th className="border px-2 py-1">Quantity</th>
                  <th className="border px-2 py-1">Profit</th>
                  <th className="border px-2 py-1">Loss</th>
                </tr>
              </thead>
              <tbody>
                {profit.items.map((item, idx) => (
                  <tr key={idx}>
                    <td className="border px-2 py-1">{item.productName}</td>
                    <td className="border px-2 py-1">${item.purchasePrice}</td>
                    <td className="border px-2 py-1">${item.soldPrice}</td>
                    <td className="border px-2 py-1">{item.quantity}</td>
                    <td className="border px-2 py-1 text-green-600">${item.profit}</td>
                    <td className="border px-2 py-1 text-red-600">${item.loss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
    );
};

export default ProfitLossManage;