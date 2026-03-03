import GetAllOrders from "@/components/modules/orders/GetAllOrders";
import { getOrders } from "@/services/cashier/ordersManagement";

const GetAllOrder = async () => {
  const orders = await getOrders({
    page: 1,
    limit: 10,
  });

  const orderlist = orders?.data ?? [];
  console.log(orderlist, "server get orders");
  return (
    <div>
      <GetAllOrders orderlist={orderlist} initialMeta={orderlist?.meta} />
    </div>
  );
};

export default GetAllOrder;
