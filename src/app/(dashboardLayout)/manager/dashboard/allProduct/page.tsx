import AllProduct from "@/components/modules/Admin/AllProduct";
import { getProducts } from "@/services/admin/productManagement";



const GetProducts = async() => {
    const products = await getProducts();
    
    return (
        <div>
            <AllProduct products={products?.data ?? []}/>
        </div>
    );
};

export default GetProducts;