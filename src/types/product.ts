import { ProductAvailability } from "@/constants";

export  interface IProduct {
    _id: string,
    name:string;
    category: string;
    purchasePrice:number;
    stock:number;
    barcode?:string;
    productAvailable?: ProductAvailability;
    // description: string;
    // images?: string
}