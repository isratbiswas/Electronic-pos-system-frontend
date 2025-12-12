/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { ICartItem } from "@/types/order";
import { orderZodSchema } from "@/zod/order.validation";

export const createOrder = async (
  _prev: any,
  formData: FormData
): Promise<any> => {
  try {
    //    const items : ICartItem[]= cartItems;
    const payload = {
      customerId: formData.get("customerId"),
      customerName: formData.get("customerName"),
      // name: formData.get("name"),
      // category:formData.get("category"),
      totalAmount: Number(formData.get("totalAmount")),
      paymentAmount: Number(formData.get("paymentAmount")),
      changeAmount: Number(formData.get("changeAmount")),
      barcode: formData.get("barcode"),
      items: JSON.parse(formData.get("items")?.toString() || "[]"),
    };
    console.log(payload.items, "items");
    console.log(payload, "order-1");

    if (zodValidator(payload, orderZodSchema).success === false) {
      return zodValidator(payload, orderZodSchema);
    }

    const validatedPayload = zodValidator(payload, orderZodSchema).data;

    console.log(validatedPayload, "order-2");
    const res = await serverFetch.post("/sell/sell-product", {
      body: JSON.stringify(validatedPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    console.log(result, "order-3");
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
};

export const getOrders = async () => {
  try {
    const response = await serverFetch.get("/sell/all-orders ", {
      cache: "no-store",
      next: { tags: ["order-list"] },
    });
    // console.log(response, "mira-order");
    const result = await response.json();
    // console.log(result, "hero-order");
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
};
