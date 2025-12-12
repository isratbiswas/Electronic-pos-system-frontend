/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IUser } from "@/types";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserShield,
  FaEdit,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { updateProfile } from "@/services/auth/auth.service";
import { toast } from "sonner";
import EditProfileModal from "./EditProfileModal";
import { revalidate } from "@/lib/revalidate";
import { getUserInfo } from "@/services/auth/getUserInfo";

interface MyProfileProps {
  userInfo: IUser;
  onEdit?: () => void; // optional edit handler
}

const MyProfile = ({ userInfo, onEdit }: MyProfileProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (data: Partial<IUser>) => {
    try {
      const result = await updateProfile(data);
      if (result.success) {
        toast.success(result.message || "Product updated successfully");
        const updatedProfile = await getUserInfo();
        // setProducts(updatedList.data)
        await revalidate(updatedProfile);
        setOpen(false);
      } else {
        toast.error(result.message || "Failed to update product");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="flex justify-center py-10 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>

            <Button
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
              onClick={() => setOpen(true)}
            >
              <FaEdit /> Edit
            </Button>
          </div>

          <div className="space-y-4 mt-6">
            {/* Name */}
            <div className="flex items-center gap-3">
              <FaUser className="text-indigo-600 text-xl" />
              <p className="text-gray-700 font-semibold">{userInfo?.name}</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <p className="text-gray-700">{userInfo?.email}</p>
            </div>

            {/* Role */}
            <div className="flex items-center gap-3">
              <FaUserShield className="text-green-600 text-xl" />
              <p className="text-gray-700 capitalize">{userInfo?.role}</p>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-600 text-xl" />
              <p className="text-gray-700">{userInfo?.address}</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <FaPhone className="text-purple-600 text-xl" />
              <p className="text-gray-700">{userInfo?.phone}</p>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <EditProfileModal
          userInfo={userInfo}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default MyProfile;
