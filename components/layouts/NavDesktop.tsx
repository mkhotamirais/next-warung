import React from "react";
import Link from "next/link";
import * as c from "@/lib/content";

export default function NavDesktop() {
  return (
    <div className="hidden md:flex">
      <nav className="flex">
        {c.mainMenu.map((item) => (
          <Link href={item.url} key={item.label} className="py-2 px-3">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
