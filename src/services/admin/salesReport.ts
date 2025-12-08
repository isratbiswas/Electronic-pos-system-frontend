/* eslint-disable @typescript-eslint/no-explicit-any */

"use server"

import { serverFetch } from "@/lib/server-fetch"

export const  getMonthlySales = async() =>{
  try {
      const res = await serverFetch.get("/sales/monthly",{
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
export const  getDailySales = async() =>{
  try {
      const res = await serverFetch.get("/sales/daily",{
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
