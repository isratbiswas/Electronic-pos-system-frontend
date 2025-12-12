/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { serverFetch } from "@/lib/server-fetch";
import { IUser } from "@/types"
import { getCookie } from "./tokenHandlers";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getUserInfo = async(): Promise<IUser | any>  => {
     let userInfo: IUser | any;
     try {
        const response = await serverFetch.get("/user/me", {
          
            next: {tags: ["user-info"], revalidate: 180}
        })
        console.log(response);
        const result =  await response.json();
        console.log(result, "user-res");
        if(!result){
            throw new Error ("you are not permitted")
        }
        // if(result.success){
        //     const accessToken = await getCookie("accessToken");
        //     if(!accessToken){
        //         throw new Error("No access token found")
        //     }
        //     const verifiedToken =jwt.verify(accessToken, process.env.JWT_SECRET as string) as JwtPayload; 
        //     console.log(verifiedToken);
        //   const  userInfo ={
        //         name: verifiedToken.name ,
        //         email: verifiedToken.email,
        //         role: verifiedToken.role,
        //         phone: verifiedToken.phone,
        //         address: verifiedToken.address

        //     }
        //     console.log(userInfo) , "haire";
        // }
        // userInfo ={
        //     name: result.data.admin?.name || result.data.manager?.name || result.data.cashier?.name || "Unknown User",
        //     ...result.data
        // }
        return result;
     } catch (error: any) {
        console.log(error);
       
        
     }
}