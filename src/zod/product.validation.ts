import { ProductAvailability } from "@/constants";
import { z } from "zod";


export const productValidationZodSchema = z.object({
  name: z
    .string()
    .min(1, "Product name is required"),

  category: z
    .string()
    .min(1, "Category is required"),

  purchasePrice: z
    .number({ error: "Purchase price must be a number" })
    .positive("Purchase price must be greater than 0"),

  stock: z
    .number({ error: "Stock must be a number" })
    .min(0, "Stock cannot be negative")
    .default(0),

  productAvailable: z
    .nativeEnum(ProductAvailability)
    .default(ProductAvailability.IN_STOCK),

  barcode: z
    .string()
    .optional(),
});
