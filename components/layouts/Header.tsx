import React from "react";
import Logo from "../Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { auth } from "@/auth";
import NavUser from "./NavUser";
import { FaMagnifyingGlass, FaRightToBracket } from "react-icons/fa6";
import Button from "../Button";
import Link from "next/link";
import SearchBtn from "./SearchBtn";

export default async function Header() {
  const session = await auth();

  return (
    <header className="h-16 bg-white border-b border-gray-200 z-30 sticky top-0">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <NavDesktop session={session} />
          <SearchBtn />
          <div className="flex md:hidden">{session?.user ? <NavUser session={session} /> : null}</div>
          <div className="hidden md:flex">
            {session?.user ? (
              <NavUser session={session} />
            ) : (
              <Button as={Link} href="/signin" icon={<FaRightToBracket />}>
                Sign In
              </Button>
            )}
          </div>
          <NavMobile session={session} />
        </div>
      </div>
    </header>
  );
}
