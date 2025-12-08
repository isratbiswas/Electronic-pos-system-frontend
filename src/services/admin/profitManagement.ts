/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { serverFetch } from "@/lib/server-fetch"

export const profitManagement = async() =>{
  try {
      const res = await serverFetch.get('/sales/profit', {
        cache:"force-cache",
        next: {tags: ["profit-sales"]}
    })
    const result =await res.json()
    return result
  } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}