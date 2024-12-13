import Sidebar from "@/sections/layout/sidebar";
import Header from "@/sections/layout/header";
import { navItems } from "@/constant/admin";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Sylvorn | Admin Dashboard",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar navItems={navItems} />
      <main className="w-full flex-1 overflow-hidden">
        <Header navItems={navItems} />
        {children}
      </main>
    </div>
  );
}
