import AllProduct from "@/components/modules/Admin/AllProduct";
import { getProducts } from "@/services/admin/productManagement";
import { getUserInfo } from "@/services/auth/getUserInfo";

const CashierGetProducts = async () => {
  const products = await getProducts();
  const user = await getUserInfo();
  const userRole = user.data.role;

  return (
    <div>
      <AllProduct products={products?.data ?? []} userRole={userRole} />
    </div>
  );
};

export default CashierGetProducts;
