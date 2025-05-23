import Sidebar from "@/components/global/dashbard-header/sidebar";
import Header from "@/components/global/dashbard-header/header";
import { navItems } from "@/constant/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Dashboard",
  description: "Sylvorn | Client Dashboard",
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
