
// "use client"

// import { IUser } from "@/types";
// import { useRouter } from "next/navigation";
// import { useState, useTransition } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { Loader2, Save } from "lucide-react";

// interface MyProfileProps {
//     userInfo: IUser;
// }
// const MyProfile = ({userInfo}: MyProfileProps) => {
//     const router = useRouter();
//     const [isPending, startTransition] = useTransition();
//     const [error, setError] = useState<string | null>(null);
//     const [success, setSuccess] = useState<string | null>(null)

//    const getProfileData = () => {
//     if(userInfo.role === "ADMIN"){
//         return userInfo.admin;
//     } else if(userInfo.role === "MANAGER"){
//         return userInfo.manage;
//     }
//     else if(userInfo.role === "CASHIER"){
//         return userInfo.cashier;
//     }
//     return null;
//    }
//   const profileData = getProfileData();
//   const handleSubmit= async(e:React.FormEvent<HTMLFormElement>) =>{
//     e.preventDefault();
//     setError(null)
//     setSuccess(null)
//     const  formData = new FormData(e.currentTarget);
//     startTransition(async () =>{
//         const result = await updateMyProfile(formData);
//         if(result.success){
//             setSuccess(result.message)
//             router.refresh();
//         } else {
//         setError(result.message);
//       }
//     })
//   }

//     return (
//          <div className="space-y-6">
//       {/* Page Header */}
//       <div>
//         <h1 className="text-3xl font-bold">My Profile</h1>
//         <p className="text-muted-foreground mt-1">
//           Manage your personal information
//         </p>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="grid gap-6 lg:grid-cols-3">
//           {/* Profile Card */}
//           <Card className="lg:col-span-1">
//             <CardHeader>
//               <CardTitle>Profile Picture</CardTitle>
//             </CardHeader>
//             <CardContent className="flex flex-col items-center space-y-4">
            

//               <div className="text-center">
//                 <p className="font-semibold text-lg">{userInfo.name}</p>
//                 <p className="text-sm text-muted-foreground">
//                   {userInfo.email}
//                 </p>
//                 <p className="text-xs text-muted-foreground mt-1 capitalize">
//                   {userInfo.role.replace("_", " ")}
//                 </p>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Profile Information Card */}
//           <Card className="lg:col-span-2">
//             <CardHeader>
//               <CardTitle>Personal Information</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {error && (
//                 <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-md text-sm">
//                   {error}
//                 </div>
//               )}

//               {success && (
//                 <div className="bg-green-500/10 text-green-600 px-4 py-3 rounded-md text-sm">
//                   {success}
//                 </div>
//               )}

//               <div className="grid gap-4 md:grid-cols-2">
//                 {/* Common Fields for All Roles */}
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Full Name</Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     defaultValue={profileData?.name || userInfo.name}
//                     required
//                     disabled={isPending}
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={userInfo.email}
//                     disabled
//                     className="bg-muted"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="contactNumber">Contact Number</Label>
//                   <Input
//                     id="contactNumber"
//                     name="contactNumber"
//                     defaultValue={profileData?.contactNumber || ""}
//                     required
//                     disabled={isPending}
//                   />
//                 </div>

//                 {/* Doctor-Specific Fields */}
//                 {userInfo.role === "ADMIN" && userInfo.admin && (
//                   <>
//                     <div className="space-y-2">
//                       <Label htmlFor="address">Address</Label>
//                       <Input
//                         id="address"
//                         name="address"
//                         defaultValue={userInfo.admin.address || ""}
//                         disabled={isPending}
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="phone">
//                         Phone Number
//                       </Label>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         defaultValue={userInfo.admin.phone || ""}
//                         required
//                         disabled={isPending}
//                       />
//                     </div>

                  

                  
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Qualification</Label>
//                       <Input
//                         id="email"
//                         name="email"
//                         defaultValue={userInfo.admin.email || ""}
//                         required
//                         disabled={isPending}
//                       />
//                     </div>
//                   </>
//                 )}

//                 {/* Patient-Specific Fields */}
//                 {userInfo.role === "PATIENT" && userInfo.patient && (
//                   <div className="space-y-2 md:col-span-2">
//                     <Label htmlFor="address">Address</Label>
//                     <Input
//                       id="address"
//                       name="address"
//                       defaultValue={userInfo.patient.address || ""}
//                       disabled={isPending}
//                     />
//                   </div>
//                 )}
//               </div>

//               <div className="flex justify-end pt-4">
//                 <Button type="submit" disabled={isPending}>
//                   {isPending ? (
//                     <>
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       Updating...
//                     </>
//                   ) : (
//                     <>
//                       <Save className="mr-2 h-4 w-4" />
//                       Save Changes
//                     </>
//                   )}
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </form>
//     </div>
//     );
// };

// export default MyProfile;