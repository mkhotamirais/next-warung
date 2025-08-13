"use client";

import { Session } from "next-auth";
import Sidebar, { SidebarClose } from "@/components/Sidebar";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { menu as m } from "@/lib/content";
import Link from "next/link";
import Button from "../Button";

export default function NavUser({ session }: { session: Session }) {
  const trigger = (
    <>
      {session?.user?.image ? (
        <Image
          src={session?.user?.image as string}
          alt={session?.user?.name as string}
          width={32}
          height={32}
          className="size-8 rounded-full"
        />
      ) : (
        <div className="size-8 rounded-full flex items-center justify-center capitalize bg-gray-300 text-gray-700">
          {session?.user?.name?.charAt(0)}
        </div>
      )}
    </>
  );

  let menu = m.userMenu;
  if (session?.user?.role === "admin") {
    menu = [...m.userMenu, ...m.editorMenu, ...m.adminMenu];
  } else if (session?.user?.role === "editor") {
    menu = [...m.userMenu, ...m.editorMenu];
  }

  return (
    <Sidebar trigger={trigger} title={`Hi ${session?.user?.name}`} close>
      <nav className="flex flex-col gap-1 mt-4">
        {menu.map((item, i) => (
          <SidebarClose key={i} asChild>
            <Link href={item.url} className="py-2 px-3 block text-sm text-left text-gray-600 rounded hover:bg-gray-200">
              {item.label}
            </Link>
          </SidebarClose>
        ))}
        <SidebarClose asChild>
          <Button type="button" onClick={() => signOut({ redirectTo: "/signin" })}>
            Sign Out
          </Button>
        </SidebarClose>
      </nav>
    </Sidebar>
  );
}
