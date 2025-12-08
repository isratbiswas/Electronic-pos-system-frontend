
export type TRole = "ADMIN" | "MANAGER" | "CASHIER";

export interface IResponse<T>{
    statusCode: number,
    success:boolean;
    message: string;
    data:T;
}

export interface IUser {
    _id:string;
    name: string;
    email: string;
    role: TRole;
    phone?:string;
    address: string;
    createdAt: string;
    updatedAt: string;
}