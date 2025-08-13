import React from "react";
import Sidebar, { SidebarClose } from "@/components/Sidebar";
import { FaBars, FaRightToBracket, FaWhatsapp } from "react-icons/fa6";
import { menu as m } from "@/lib/content";
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
        {m.mainMenu.map((item, i) => (
          <SidebarClose key={i} asChild>
            <Link href={item.url} key={i} className="btn-gray">
              {item.label}
            </Link>
          </SidebarClose>
        ))}
        <SidebarClose asChild>
          <Link href="/contact" className="btn-border">
            <FaWhatsapp className="text-lg" />
            Hubungi Kami
          </Link>
        </SidebarClose>
        {!session?.user ? (
          <SidebarClose asChild>
            <Link href="/signin" className="btn text-center flex items-center justify-center gap-2">
              <FaRightToBracket className="" />
              Sign In
            </Link>
          </SidebarClose>
        ) : null}
      </nav>
    </Sidebar>
  );
}
