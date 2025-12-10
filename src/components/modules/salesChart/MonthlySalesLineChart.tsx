"use client";

import { IMonthlySales } from "@/types/product";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface Props {
    data: IMonthlySales[]
}

const MonthlySalesLineChart = ({data}: Props) => {
    // optional sort by date
    const chartData =[...data].sort(
        (a, b) =>new Date(a.date).getTime() - new Date(b.date).getTime()
    )
    return (
       <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Monthly Sales Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value}`} />
          <Legend />

          <Line
            type="monotone"
            dataKey="totalSales"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={{ r: 4 }}
            name="Total Sales"
          />

          <Line
            type="monotone"
            dataKey="orders"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ r: 3 }}
            name="Orders"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    );
};

export default MonthlySalesLineChart;