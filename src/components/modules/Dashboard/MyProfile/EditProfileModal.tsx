/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IUser } from "@/types";
import { useState } from "react";

interface Props {
  userInfo: IUser;
  onClose: () => void;
  onSubmit: (data: Partial<IUser>) => void | Promise<void>;
}

const EditProfileModal = ({ userInfo, onClose, onSubmit }: Props) => {
  const [form, setForm] = useState({
    name: userInfo?.name || "",
    address: userInfo?.address || "",
    phone: userInfo?.phone || "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <div className="space-y-3">
          {Object.keys(form).map((key) => (
            <Input
              key={key}
              name={key}
              value={(form as any)[key]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder={key}
            />
          ))}
        </div>
        <div className="flex justify-end gap-3 mt-5">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-indigo-600 text-white"
            onClick={() => onSubmit(form)}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
