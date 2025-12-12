import DailySale from "@/components/modules/sales/DailySale";
import DailySalesAreaChart from "@/components/modules/salesChart/DailySalesLineChart";
import { getDailySales } from "@/services/admin/salesReport";


const DailySalePage = async() => {
    const dailySalesProduct = await getDailySales()
    const dailySales = dailySalesProduct?.data ?? []
    console.log(dailySalesProduct, 'daily');
    return (
        <div>
            <DailySale dailySales={dailySales}/>
            <DailySalesAreaChart data={dailySales}/>
        </div>
    );
};

export default DailySalePage;