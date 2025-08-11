import React from "react";
import Logo from "../Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { auth } from "@/auth";
import NavUser from "./NavUser";

export default async function Header() {
  const session = await auth();

  return (
    <header className="h-16 bg-white border-b border-gray-200 z-30 sticky top-0">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <NavDesktop session={session} />
          <div className="md:hidden">{session?.user ? <NavUser session={session} /> : null}</div>
          <NavMobile session={session} />
        </div>
      </div>
    </header>
  );
}
