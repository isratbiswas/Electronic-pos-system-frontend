import { z } from "zod";

/** Cart Item (Frontend) */
export const cartItemSchema = z.object({
  product: z.string(),      // ObjectId as string
  quantity: z.number(),
  price: z.number(),
});

/** Cart (Frontend) */
export const orderZodSchema = z.object({
  customerId: z.string(),
  customerName: z.string(),
  // name: z.string(),
  barcode: z.string(),
  items: z.array(cartItemSchema),
  totalAmount: z.number(),
  totalSellAmount: z.number().optional(),
  paymentAmount: z.number(),
  changeAmount: z.number(),
});