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
export interface IProfitItem {
    productName: string;
    purchasePrice: number;
    soldPrice: number;
    quantity: number;
    profit:number;
    loss: number;
}
export interface IProfit {
    _id:string;
   totalProfit:number;
   totalLoss:number;
   items: IProfitItem[]
}

export interface IDailySales{
     date: string;
    totalSales: number;
    orders:number
}