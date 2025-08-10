"use client";

import React from "react";
import Link from "next/link";
import * as c from "@/lib/content";
import NavUser from "./NavUser";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavDesktop({ session }: { session: Session | null }) {
  const pathName = usePathname();

  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-1">
        {c.mainMenu.map((item) => (
          <Link
            href={item.url}
            key={item.label}
            className={clsx(
              "py-2 px-3 text-sm text-gray-600 rounded hover:bg-gray-200",
              pathName === item.url ? "bg-gray-200" : ""
            )}
          >
            {item.label}
          </Link>
        ))}
        <div className="pl-4">
          {session?.user ? (
            <NavUser session={session} />
          ) : (
            <Link href="/signin" className="btn">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
