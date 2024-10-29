import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Licenses",
    href: "/admin/licenses",
    icon: "billing",
    label: "Licenses",
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: "user",
    label: "Users",
  },
  {
    title: "Service",
    href: "/admin/services",
    icon: "product",
    label: "Service",
  },
  {
    title: "Account",
    icon: "user",
    label: "account",
    children: [
      {
        title: "Profile",
        href: "/admin/profile",
        icon: "userPen",
        label: "profile",
      },
      {
        title: "Log Out",
        href: "/admin/logout",
        icon: "login",
        label: "Log Out",
      },
    ],
  },
];
