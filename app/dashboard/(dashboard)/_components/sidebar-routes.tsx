"use client";

import {
  BarChart,
  Compass,
  Layout,
  List,
  UserCog,
  Building2,
  ShieldQuestion,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const routes = [
  {
    icon: Building2,
    label: "Dashboard",
    href: "/dashboard/dashboard",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.includes("/dashboard/admin");

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
