import Sidebar from "@/sections/layout/sidebar";
import { NavItem } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Yuganata Technologies | Admin Dashboard",
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Users",
    href: "/admin/employee",
    icon: "user",
    label: "Users",
  },
  {
    title: "Service",
    href: "/admin/product",
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
        href: "/logout",
        icon: "login",
        label: "Log Out",
      },
    ],
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar navItems={navItems} />
      <main className="w-full flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
