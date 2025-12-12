"use client";

import { IOrderPayload } from "@/types/order";

interface IOrderProps {
  orderlist: IOrderPayload[];
}

const GetAllOrders = ({ orderlist = [] }: IOrderProps) => {
  // Convert date to readable Date + Time
  const formatDateTime = (date: string | Date) => {
    return new Date(date).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Header */}
   <div className="p-5 border-b bg-slate-950 text-center">
  <h2 className="text-2xl font-bold text-indigo-400 tracking-wide">
    All Orders
  </h2>
  <p className="text-gray-300 text-sm">
    Manage and view all customer orders
  </p>
</div>

        {/* Table Container */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr className="text-gray-600 uppercase text-xs font-semibold tracking-wide">
                <th className="px-6 py-3 text-left">Order ID</th>
                <th className="px-6 py-3 text-left">Customer ID</th>
                <th className="px-6 py-3 text-left">Customer Name</th>
                <th className="px-6 py-3 text-left">Bar Code</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Quantity</th>
                <th className="px-6 py-3 text-left">Total</th>
                <th className="px-6 py-3 text-left">Payment</th>
                <th className="px-6 py-3 text-left">Change</th>
                <th className="px-6 py-3 text-left">Date & Time</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {orderlist.length > 0 ? (
                orderlist.map((order, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-all text-gray-800"
                  >
                    <td className="px-6 py-4 font-medium">{order._id}</td>
                    <td className="px-6 py-4">{order.customerId}</td>
                    <td className="px-6 py-4">{order.customerName}</td>
                    <td className="px-6 py-4">{order.barcode}</td>
                    <td className="px-6 py-4">
  {order.items.map((item, i) => (
    <div key={i}>
      {item.price}
    </div>
  ))}
</td>

<td className="px-12 py-4">
  {order.items.map((item, i) => (
    <div key={i}>
      {item.quantity}
    </div>
  ))}
</td>


                    <td className="px-6 py-4 font-semibold text-green-600">
                      ${order.totalAmount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-blue-600">
                      ${order.paymentAmount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-red-500">
                      ${order.changeAmount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      {formatDateTime(order.createdAt)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards View */}
      <div className="md:hidden mt-6 space-y-4">
        {orderlist.map((order, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
          >
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Order ID:</span> {order._id}
            </p>
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Customer:</span>{" "}
              {order.customerName} ({order.customerId})
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-lg bg-green-50 border">
                <p className="text-xs font-semibold text-gray-500">Total</p>
                <p className="text-green-600 font-bold text-base">
                  ${order.totalAmount.toFixed(2)}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-blue-50 border">
                <p className="text-xs font-semibold text-gray-500">Payment</p>
                <p className="text-blue-600 font-bold text-base">
                  ${order.paymentAmount.toFixed(2)}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-red-50 border col-span-2">
                <p className="text-xs font-semibold text-gray-500">Change</p>
                <p className="text-red-500 font-bold text-base">
                  ${order.changeAmount.toFixed(2)}
                </p>
              </div>
            </div>

            <p className="mt-3 text-gray-500 text-xs">
              Date & Time: {formatDateTime(order.createdAt)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllOrders;
