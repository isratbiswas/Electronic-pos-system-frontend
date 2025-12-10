"use client";

import { IProfit } from "@/types/product";

interface ProfitProps {
  profits: IProfit[];
}

const ProfitLossManage = ({ profits = [] }: ProfitProps) => {
  return (
    <div className="space-y-8">
      {profits.map((profit, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">
              📅 Date: <span className="text-gray-600">{profit._id}</span>
            </h2>

            <div className="flex gap-4 text-sm sm:text-base">
              <p className="text-green-600 font-semibold">
                Profit: ${profit.totalProfit}
              </p>
              <p className="text-red-600 font-semibold">
                Loss: ${profit.totalLoss}
              </p>
            </div>
          </div>

          {/* Items Table */}
          <div className="mt-5">
            <h4 className="mb-3 text-sm sm:text-base font-semibold text-gray-700">
              Sold Items
            </h4>

            {/* Responsive Scroll */}
            <div className="overflow-x-auto rounded-lg border">
              <table className="min-w-[750px] w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-600">
                    <th className="px-3 py-2 text-left">Product</th>
                    <th className="px-3 py-2 text-left">Purchase</th>
                    <th className="px-3 py-2 text-left">Sold</th>
                    <th className="px-3 py-2 text-center">Qty</th>
                    <th className="px-3 py-2 text-center text-green-600">
                      Profit
                    </th>
                    <th className="px-3 py-2 text-center text-red-600">
                      Loss
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {profit.items.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="px-3 py-2 font-medium text-gray-800">
                        {item.productName}
                      </td>
                      <td className="px-3 py-2">
                        ${item.purchasePrice}
                      </td>
                      <td className="px-3 py-2">
                        ${item.soldPrice}
                      </td>
                      <td className="px-3 py-2 text-center">
                        {item.quantity}
                      </td>
                      <td className="px-3 py-2 text-center text-green-600 font-semibold">
                        ${item.profit}
                      </td>
                      <td className="px-3 py-2 text-center text-red-600 font-semibold">
                        ${item.loss}
                      </td>
                    </tr>
                  ))}

                  {profit.items.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-center py-6 text-gray-500"
                      >
                        No items found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}

      {profits.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No profit/loss data available
        </div>
      )}
    </div>
  );
};

export default ProfitLossManage;
