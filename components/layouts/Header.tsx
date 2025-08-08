import React from "react";
import Logo from "../Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 z-50 sticky top-0">
      <div className="container flex items-center justify-between">
        <Logo />
        <NavDesktop />
        <NavMobile />
      </div>
    </header>
  );
}
