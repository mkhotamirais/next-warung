import ClientProvider from "@/components/ClientProvider";
import React from "react";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return <ClientProvider>{children}</ClientProvider>;
}
