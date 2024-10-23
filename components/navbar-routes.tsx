"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/dashboard/admin");

  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        {isAdminPage ? (
          <Link href="/dashboard">
            <Button
              size="sm"
              variant="ghost"
              style={{ color: "rgb(3, 105, 161)" }}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
