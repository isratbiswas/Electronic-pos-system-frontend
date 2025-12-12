"use server";

import { getUserInfo } from "@/services/auth/getUserInfo";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import { NavSection } from "@/types/dashboard.interface";

const DashboardSideBar = async () => {
  const user = await getUserInfo();
  const userInfo = user?.data ?? [];
  const navItems: NavSection[] = [];
  const dashboardHome = getDefaultDashboardRoute(userInfo.role);
  console.log(dashboardHome, userInfo.role, "hel");
  return (
    <div>
      <DashboardSidebarContent
        userInfo={userInfo}
        navItems={navItems}
        dashboardHome={dashboardHome}
      />
    </div>
  );
};

export default DashboardSideBar;
