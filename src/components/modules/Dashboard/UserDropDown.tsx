"use client";

import LogoutButton from "@/components/shered/LogoutButton";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutUser } from "@/services/auth/logoutUser";
import { IUser } from "@/types";
import { User } from "lucide-react";
import Link from "next/link";

interface UserDropDownProps {
  userInfo: IUser;
}
const UserDropDown = ({ userInfo }: UserDropDownProps) => {
  const handleLogout = async () => {
    await logoutUser();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-1 border-purple-400 rounded-full"
        >
          <span className="text-xl text-[#E67E22] font-semibold">
            {(userInfo && userInfo?.name?.charAt(0).toUpperCase()) ||
              "Unknown User"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-lg font-medium">{userInfo && userInfo.name} </p>
            <p className="text-base text-muted-foreground">
              {" "}
              {userInfo && userInfo.email}
            </p>
            <p className="text-md text-primary capitalize">
              {userInfo && userInfo.role.toLocaleLowerCase()}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={"/my-profle"} className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer text-red-600"
        >
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
