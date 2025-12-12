import { getLowStock } from "@/services/admin/productManagement";

const LowStockPage = async () => {
  const lowstock = await getLowStock();
  console.log(lowstock, "lowstock");
  return (
    <div>
      <h2>dlfjf</h2>
    </div>
  );
};

export default LowStockPage;
