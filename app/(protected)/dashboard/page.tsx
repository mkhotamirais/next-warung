import { auth } from "@/auth";
import React from "react";

export default async function Dashboard() {
  const session = await auth();
  return (
    <section>
      <div className="container">
        <h1>Dashboard</h1>
        <p>Hi, {session?.user?.name}</p>
      </div>
    </section>
  );
}
