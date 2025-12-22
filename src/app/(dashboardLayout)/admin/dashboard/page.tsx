import Manager from "@/components/modules/Dashboard/Manager/Manager";
import DailySalesAreaChart from "@/components/modules/salesChart/DailySalesLineChart";
import { getProducts } from "@/services/admin/productManagement";
import { getDailySales, getMonthlySales } from "@/services/admin/salesReport";

const Admin = async () => {
  const dailySalesProduct = await getDailySales();
  const dailySales = dailySalesProduct?.data ?? [];
  console.log(dailySalesProduct, "daily");
  const monthlySales = await getMonthlySales();
  const allProduct = await getProducts();
  const products = allProduct?.data ?? [];

  return (
    <div>
      <Manager monthlySale={monthlySales?.data ?? []} products={products} />
      <DailySalesAreaChart data={dailySales} />
    </div>
  );
};

export default Admin;
