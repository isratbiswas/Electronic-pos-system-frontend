import MonthlySale from "@/components/modules/sales/MonthlySale";
import MonthlySalesLineChart from "@/components/modules/salesChart/MonthlySalesLineChart";
import { getMonthlySales } from "@/services/admin/salesReport";
import React from "react";

const AdminMonthlyPage = async () => {
  const monthlySales = await getMonthlySales();
  const monthlySale = monthlySales?.data ?? [];
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Monthly Sales Report</h1>
      <MonthlySalesLineChart data={monthlySale} />

      <MonthlySale monthlySale={monthlySale} />
    </div>
  );
};

export default AdminMonthlyPage;
