"use client";

import { search } from "@/actions/action";
import { useRef, useEffect, useActionState, useState } from "react";
import { LuLoader, LuSearch } from "react-icons/lu";

export default function SearchForm({ open }: { open: boolean }) {
  const openRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (open && openRef.current) {
      setTimeout(() => openRef.current?.focus(), 50);
    }
  }, [open]);

  const [, formAction, pending] = useActionState(search, null);

  return (
    <form action={formAction} className="relative w-full sm:w-80">
      <input
        ref={openRef}
        type="search"
        placeholder="Cari Produk.."
        className="bg-white w-full py-3 px-4 pr-10 rounded-full border border-gray-400"
        autoFocus
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        type="submit"
        className="absolute border-black right-0 top-0 w-12 h-full flex justify-center items-center rounded-full"
        aria-label="Search Produt"
      >
        {pending ? <LuLoader /> : <LuSearch />}
      </button>
    </form>
  );
}
