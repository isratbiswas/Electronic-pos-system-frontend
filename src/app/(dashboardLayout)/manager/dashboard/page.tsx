import Manager from "@/components/modules/Dashboard/Manager/Manager";
import DailySalesAreaChart from "@/components/modules/salesChart/DailySalesLineChart";
import { getDailySales, getMonthlySales } from "@/services/admin/salesReport";

const ManagerDashBoardPage = async () => {
  const dailySalesProduct = await getDailySales();
  const dailySales = dailySalesProduct?.data ?? [];
  console.log(dailySalesProduct, "daily");
  const monthlySales = await getMonthlySales();

  return (
    <div>
      <Manager monthlySale={monthlySales?.data ?? []} />
      <DailySalesAreaChart data={dailySales} />
    </div>
  );
};

export default ManagerDashBoardPage;
