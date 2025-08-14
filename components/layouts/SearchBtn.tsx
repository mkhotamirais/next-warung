"use client";

import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import SearchForm from "./SearchForm";

export default function SearchBtn() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)} aria-label="Search" className="p-2">
        <LuSearch />
      </button>
      <div
        onClick={() => setOpen(false)}
        className={`${
          open ? "visible opacity-100" : "invisible opacity-0"
        } transition-all fixed inset-0 bg-black/50 z-40`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          <SearchForm open={open} />
        </div>
      </div>
    </div>
  );
}
