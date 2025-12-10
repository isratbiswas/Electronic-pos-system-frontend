/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from '@/types/product';


const Product = ({product}:any) => {
    return (
        <div>
            <h3>{product.name}</h3>
        </div>
    );
};

export default Product;