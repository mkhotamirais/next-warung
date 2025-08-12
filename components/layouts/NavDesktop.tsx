"use client";

import React from "react";
import Link from "next/link";
import * as c from "@/lib/content";
import NavUser from "./NavUser";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Button from "../Button";
import { FaRightToBracket, FaWhatsapp } from "react-icons/fa6";

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
        <Button as={Link} href="/contact" variant="outline" icon={<FaWhatsapp className="text-lg " />} className="mx-2">
          Hubungi Kami
        </Button>
        <div className="">
          {session?.user ? (
            <NavUser session={session} />
          ) : (
            <Button as={Link} href="/signin" icon={<FaRightToBracket />}>
              Sign In
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
}
