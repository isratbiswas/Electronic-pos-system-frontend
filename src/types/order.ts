export interface ICartItem {
  product: string;
  quantity: number;
  price: number;
}

export interface IOrderPayload  {
  _id:string,
  customerId:string,
  customerName: string,
  // name:string,
  // category:string,
  barcode:string,
  items: ICartItem[];
  totalAmount: number;
  totalSellAmount: number;
  paymentAmount: number;
  changeAmount: number;
  createdAt: string
}