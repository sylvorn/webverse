"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconBriefcase, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Solutions",
      link: "/solutions",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  const isClientRoute = pathname.startsWith("/client");
  const shouldHideNavbarFooter = isAdminRoute || isClientRoute;
  if (shouldHideNavbarFooter) {
    return null;
  }

  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
