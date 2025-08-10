"use client";

import { Session } from "next-auth";
import Sidebar, { SidebarClose } from "@/components/Sidebar";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { adminMenu, editorMenu, userMenu } from "@/lib/content";
import Link from "next/link";

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

  let menu = userMenu;
  if (session?.user?.role === "admin") {
    menu = [...userMenu, ...editorMenu, ...adminMenu];
  } else if (session?.user?.role === "editor") {
    menu = [...userMenu, ...editorMenu];
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
          <button type="button" className="btn w-full" onClick={() => signOut({ redirectTo: "/signin" })}>
            Sign Out
          </button>
        </SidebarClose>
      </nav>
    </Sidebar>
  );
}
