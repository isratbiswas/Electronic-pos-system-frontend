import { z } from "zod";

/** Cart Item (Frontend) */
export const cartItemSchema = z.object({
  product: z.string(), // ObjectId as string
  quantity: z.number().min(0, "Quantity cannot be negative"),
  price: z.number().min(0, "Price cannot be negative"),
});

/** Cart (Frontend) */
export const orderZodSchema = z.object({
  customerId: z.string(),
  customerName: z.string(),
  barcode: z.string(),
  items: z.array(cartItemSchema).min(1, "Cart cannot be empty"), // optional, ensures at least 1 item
  totalAmount: z.number().min(0, "Total amount cannot be negative"),
  totalSellAmount: z
    .number()
    .min(0, "Total sell amount cannot be negative")
    .optional(),
  paymentAmount: z.number().min(0, "Payment amount cannot be negative"),
  changeAmount: z.number().min(0, "Change amount cannot be negative"),
});
