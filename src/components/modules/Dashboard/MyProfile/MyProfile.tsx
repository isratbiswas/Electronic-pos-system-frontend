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
import { getUserInfo } from "@/services/auth/getUserInfo";

interface MyProfileProps {
  userInfo: IUser;
}

const MyProfile = ({ userInfo: initialUserInfo }: MyProfileProps) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<IUser>(initialUserInfo);

  const handleSubmit = async (data: Partial<IUser>) => {
    try {
      const result = await updateProfile(data);

      if (result.success) {
        toast.success(result.message || "Profile updated successfully");

        if (result.data) {
          setUser(result.data);
        } else {
          const updatedProfile = await getUserInfo();
          setUser(updatedProfile);
        }

        setOpen(false);
      } else {
        toast.error(result.message || "Failed to update profile");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <>
      {/* Full Width Profile Page */}
      <section className="w-full min-h-screen bg-gray-50 px-6 py-10">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-indigo-600">My Profile</h2>

          <Button
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={() => setOpen(true)}
          >
            <FaEdit /> Edit Profile
          </Button>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
          <ProfileRow
            label="Name"
            icon={<FaUser className="text-indigo-600" />}
            value={user?.name}
          />

          <ProfileRow
            label="Email"
            icon={<FaEnvelope className="text-blue-600" />}
            value={user?.email}
          />

          <ProfileRow
            label="Role"
            icon={<FaUserShield className="text-green-600" />}
            value={user?.role}
            capitalize
          />

          <ProfileRow
            label="Phone"
            icon={<FaPhone className="text-purple-600" />}
            value={user?.phone}
          />

          {/* Full width row */}
          <div className="md:col-span-2">
            <ProfileRow
              label="Address"
              icon={<FaMapMarkerAlt className="text-red-600" />}
              value={user?.address}
            />
          </div>
        </div>
      </section>

      {open && (
        <EditProfileModal
          userInfo={user}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default MyProfile;

/* ---------- Reusable Row ---------- */

const ProfileRow = ({
  icon,
  label,
  value,
  capitalize,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
  capitalize?: boolean;
}) => (
  <div className="flex items-start gap-4 bg-white p-5 rounded-lg border">
    <div className="text-xl mt-1">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p
        className={`text-gray-800 font-medium ${
          capitalize ? "capitalize" : ""
        }`}
      >
        {value || "—"}
      </p>
    </div>
  </div>
);
