/* eslint-disable @typescript-eslint/no-explicit-any */
import z from "zod";

const roleEnum =["ADMIN", "MANAGER", "CASHIER"] as const

export const registerValidationZodSchema = z.object({
    name: z.string().min(3, {message: "Name is required"}),
    address: z.string({message: "Address is optional"}).optional(),
    phone: z.string({message: "Valid phone number is required"}),
    role:z.enum(roleEnum, {
            message: "Role must be ADMIN, MANAGER, or CASHIER"
    }).optional(),
    email: z.email({message: "Valid email is required"}),
    password:z.string().min(6, {
        error:"Password is required and must be at least 6 characters long"
    }).max(10, {
        error: "Password must be at most 10 characters long",
    }),
    confirmPassword: z.string().min(6, {
        error: "Confirm Password is required and must be at least 6 characters long",
    }),
}).refine((data: any) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
});


export const loginValidationZodSchema = z.object({
    email: z.email({
        message: "Email is required",
    }),
    password: z.string("Password is required").min(6, {
        error: "Password is required and must be at least 6 characters long",
    }).max(100, {
        error: "Password must be at most 100 characters long",
    }),
});