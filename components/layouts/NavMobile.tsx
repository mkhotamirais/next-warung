import React from "react";
import Sidebar, { SidebarClose } from "@/components/Sidebar";
import { FaBars } from "react-icons/fa6";
import * as c from "@/lib/content";
import Link from "next/link";
import { Session } from "next-auth";

export default function NavMobile({ session }: { session: Session | null }) {
  const trigger = (
    <div className="border p-2 rounded border-gray-200">
      <FaBars />
    </div>
  );
  return (
    <Sidebar trigger={trigger} className="md:hidden">
      <nav className="flex flex-col gap-1 mt-4">
        {c.mainMenu.map((item, i) => (
          <SidebarClose key={i} asChild>
            <Link
              href={item.url}
              key={i}
              className="py-2 px-3 block text-sm text-left text-gray-600 rounded hover:bg-gray-200"
            >
              {item.label}
            </Link>
          </SidebarClose>
        ))}
        {!session?.user ? (
          <SidebarClose asChild>
            <Link href="/signin" className="btn">
              Sign In
            </Link>
          </SidebarClose>
        ) : null}
      </nav>
    </Sidebar>
  );
}
