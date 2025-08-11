"use client";

import { useGlobal } from "@/lib/useGlobal";
import { useState, useEffect } from "react";

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const { openLayer, setOpenLayer, openMoreBlogOption, setOpenMoreBlogOption } = useGlobal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <div
        onClick={() => {
          setOpenLayer(false);
          if (openMoreBlogOption) {
            setOpenMoreBlogOption(null);
          }
        }}
        className={`${openLayer ? "visible oacity-100" : "invisible opacity-0"} fixed inset-0 z-40`}
      ></div>
      {children}
    </>
  );
}
