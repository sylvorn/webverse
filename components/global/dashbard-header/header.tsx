import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";

interface HeaderProps {
  navItems: NavItem[];
}

export default function Header({ navItems }: HeaderProps) {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn("block md:!hidden")}>
          <MobileSidebar items={navItems} />
        </div>
        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
