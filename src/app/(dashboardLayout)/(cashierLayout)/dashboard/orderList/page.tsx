import GetAllOrders from "@/components/modules/orders/GetAllOrders";
import { getOrders } from "@/services/cashier/ordersManagement";

const GetAllOrder = async () => {
  const orders = await getOrders();

  const orderlist = orders?.data ?? [];
  console.log(orderlist, "server get orders");
  return (
    <div>
      <GetAllOrders orderlist={orderlist} />
    </div>
  );
};

export default GetAllOrder;
