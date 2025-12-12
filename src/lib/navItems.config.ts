import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./auth-utils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
  const defualtDashboard = getDefaultDashboardRoute(role);
  return [
    {
      items: [
        {
          title: "Dashboard",
          href: defualtDashboard,
          icon: "LayoutDashboard",
          roles: ["CASHIER", "MANAGER", "ADMIN"],
        },
        {
          title: "My Profile",
          href: `/my-profile`,
          icon: "User",
          roles: ["CASHIER", "MANAGER", "ADMIN"],
        },
      ],
    },
  ];
};

export const adminNavItems: NavSection[] = [
  {
    items: [
      {
        title: "Home",
        href: "/",
        icon: "Home",
        roles: ["ADMIN"],
      },
      {
        title: "Create Product",
        href: "/admin/dashboard/createProduct",
        icon: "ShoppingBag",
        roles: ["ADMIN"],
      },
      {
        title: "All Product",
        href: "/admin/dashboard/allProduct",
        icon: "Store",
        roles: ["ADMIN"],
      },
      {
        title: "Sold Product",
        href: "/admin/dashboard/soldProduct",
        icon: "ShoppingCart",
        roles: ["ADMIN"],
      },
      {
        title: "Daily Sell Report",
        href: "/admin/dashboard/dailySales",
        icon: "ChartPie",
        roles: ["ADMIN"],
      },
      {
        title: "Monthly Sell Report",
        href: "/admin/dashboard/monthlySales",
        icon: "ChartPie",
        roles: ["ADMIN"],
      },

      {
        title: "Profit Loss Report",
        href: "/admin/dashboard/profit",
        icon: "ShoppingBag",
        roles: ["ADMIN"],
      },
    ],
  },
];
export const managerNavItems: NavSection[] = [
  {
    items: [
      {
        title: "Home",
        href: "/",
        icon: "Home",
        roles: ["MANAGER"],
      },
      {
        title: "Create Product",
        href: "/manager/dashboard/createProduct",
        icon: "ShoppingBag",
        roles: ["MANAGER"],
      },
      {
        title: "All Product",
        href: "/manager/dashboard/allProduct",
        icon: "Store",
        roles: ["MANAGER"],
      },

      {
        title: "Monthly Sell Report",
        href: "/manager/dashboard/monthlySales",
        icon: "ChartPie",
        roles: ["MANAGER"],
      },
      {
        title: "Sell Product",
        href: "/manager/dashboard/sellProduct",
        icon: "ShoppingCart",
        roles: ["MANAGER"],
      },
      {
        title: "Daily Sell Report",
        href: "/manager/dashboard/dailySales",
        icon: "ChartPie",
        roles: ["MANAGER"],
      },
    ],
  },
];
export const cashierNavItems: NavSection[] = [
  {
    items: [
      {
        title: "Home",
        href: "/",
        icon: "Home",
        roles: ["CASHIER"],
      },
      {
        title: "Order Create",
        href: "/dashboard/createOrders",
        icon: "Wallet",
        roles: ["CASHIER"],
      },
      {
        title: "Show All Order",
        href: "/dashboard/orderList",
        icon: "ShoppingCart",
        roles: ["CASHIER"],
      },
    ],
  },
];

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
  const commonNavItems = getCommonNavItems(role);
  switch (role) {
    case "ADMIN":
      return [...commonNavItems, ...adminNavItems];
    case "MANAGER":
      return [...commonNavItems, ...managerNavItems];
    case "CASHIER":
      return [...commonNavItems, ...cashierNavItems];
    default:
      return [];
  }
};
