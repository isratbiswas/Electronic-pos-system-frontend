/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { serverFetch } from "@/lib/server-fetch"
import { zodValidator } from "@/lib/zodValidator"
import { registerValidationZodSchema } from "@/zod/auth.validation"
import { loginUser } from "./loginUser"


export const registerUser = async (_currentState: any, formData:any) : Promise<any> => {
    console.log(formData, "israt-3");
    try {
        const payload = {
            name:formData.get('name'),
            address: formData.get("address"),
            email: formData.get('email'),
            password:formData.get("password"),
            phone: formData.get("phone"),
            confirmPassword: formData.get("confirmPassword"),
            // role:formData.get("role")
        }
        console.log(payload, "israt-2");
       
        console.log( "israt-0");
     if (zodValidator(payload, registerValidationZodSchema).success === false) {
            return zodValidator(payload,registerValidationZodSchema);
        }

        const validatedPayload = zodValidator(payload, registerValidationZodSchema).data;

        const res = await serverFetch.post("/user/register", {
            body: JSON.stringify(validatedPayload),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const result = await res.json();

   console.log(result,"miro");
   if(result.success){
    await loginUser(_currentState, formData)
   }
   return result

    }
     catch (error: any) {
        // Re-throw NEXT_REDIRECT errors so Next.js can handle them
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : "Registration Failed. Please try again."}` };
    }
    
    }
