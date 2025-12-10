/* eslint-disable @typescript-eslint/no-explicit-any */

"use server"

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { IProduct } from "@/types/product";
import { productValidationZodSchema } from "@/zod/product.validation";

export const createProduct = async(_prevState: any, formData:FormData) : Promise<any> => {
 try {

       const payload = {
        name:formData.get("name"),
        category:formData.get("category"),
         purchasePrice: Number(formData.get("purchasePrice")),
         stock: Number(formData.get("stock")),
         productAvailable:formData.get("productAvailable"),
         barcode: formData.get("barcode")
    }
    console.log(payload, "product-1");

      if (zodValidator(payload, productValidationZodSchema).success === false) {
                return zodValidator(payload,productValidationZodSchema);
            }

     const validatedPayload = zodValidator(payload, productValidationZodSchema).data;
    //   if (!validatedPayload?.success && validatedPayload?.errors) {
    //     return {
    //         success: false,
    //         message: "Validation failed",
    //         formData: payload,
    //         errors: validatedPayload.errors,
    //     }
    // }
    console.log(validatedPayload, "product-2");
     const res = await serverFetch.post("/product/create-product",{
        body: JSON.stringify(validatedPayload),
        headers: {
            "Content-Type" : "application/json"
        }
     })

     const result = await res.json()
     console.log(result, "product-3");
    
 }catch (error: any) {
        console.log(error);
        return {
            success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`,
          
        }

    }
}

export  const getProducts = async() =>{
    try {
        const response = await serverFetch.get("/product/all-products", {
            cache : "no-store",
            next: {tags: ["product-list"]}
        })
        console.log(response, "mira");
        const result = await response.json();
        console.log(result, "hero");
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
} 
export  const updateProducts = async(id:string,payload: Partial<IProduct>) =>{
    try {
        
        const response = await serverFetch.patch(`/product/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        const result = await response.json();
        console.log(result, "updated");
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
} 
export  const deleteProduct = async(id:string) =>{
    try {
        const response = await serverFetch.delete(`/product/${id}`)
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
} 
export  const getProduct = async(id:string) =>{
    try {
        const response = await serverFetch.get(`/product/${id}`, {
            cache : "force-cache",
            next: {tags: ["product-list"]}
        })
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
} 

export const  getLowStock  = async() =>{
  try {
      const res = await serverFetch.get("/product/low-stock",{
         cache: "force-cache",
         next:  {tags:["monthly-sales"]}
       })
          const result = await res.json();
          return result
  } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }

}