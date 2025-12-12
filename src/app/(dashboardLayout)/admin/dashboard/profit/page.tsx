import ProfitLossManage from "@/components/modules/Admin/ProfitManage";
import { profitManagement } from "@/services/admin/profitManagement";

const ProfitPage = async () => {
  const profit = await profitManagement();
  console.log(profit, "pros");
  return (
    <div>
      <ProfitLossManage profits={profit?.data ?? []} />
    </div>
  );
};

export default ProfitPage;
