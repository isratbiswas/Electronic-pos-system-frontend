"use server";
import { getNavItemsByRole } from "@/lib/navItems.config";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { IUser } from "@/types";
import { getDefaultDashboardRoute } from "@/lib/auth-utils";

const DashboardNavbar = async () => {
  const userInfo = await getUserInfo();
  const user = userInfo?.data ?? [];
  const navItems = getNavItemsByRole(user.role);
  const dashboardHome = getDefaultDashboardRoute(user.role);
  return (
    <div>
      <DashboardNavbarContent
        userInfo={user}
        navItems={navItems}
        dashboardHome={dashboardHome}
      />
    </div>
  );
};

export default DashboardNavbar;

// "use client"; // top of file

// import React, { useEffect, useState } from 'react';

// import { getUserInfo } from '@/services/auth/getUserInfo';
// import DashboardNavbarContent from './DashboardNavbarContent';

// const DashboardNavbar = () => {
//     const [userInfo, setUserInfo] = useState(null);

//     useEffect(() => {
//         const fetchUser = async () => {
//             const data = await getUserInfo();
//             setUserInfo(data);
//             console.log(data, "navbar");
//         };
//         fetchUser();
//     }, []);

//     if (!userInfo) return <div>Loading...</div>;

//     return (
//         <div>
//             <DashboardNavbarContent userInfo={userInfo} />
//         </div>
//     );
// };

// export default DashboardNavbar;
