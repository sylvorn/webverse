import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/client/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Licenses",
    href: "/client/licenses",
    icon: "billing",
    label: "Licenses",
  },
  {
    title: "Account",
    icon: "user",
    label: "account",
    children: [
      {
        title: "Profile",
        href: "/client/profile",
        icon: "userPen",
        label: "profile",
      },
      {
        title: "Log Out",
        href: "/client/logout",
        icon: "login",
        label: "Log Out",
      },
    ],
  },
];
