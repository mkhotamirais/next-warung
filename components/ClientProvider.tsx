"use client";

import { useGlobal } from "@/lib/useGlobal";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const { openLayer, setOpenLayer, openMoreBlogOption, setOpenMoreBlogOption } = useGlobal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Image src="/logo-warungota.png" width={100} height={100} alt="logo" className="animate-bounce size-16" />
          <p>Loading...</p>
        </div>
      </div>
    );
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
