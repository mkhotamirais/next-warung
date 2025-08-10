import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="bg-white shadow rounded-md max-w-md mx-auto p-6">{children}</div>
      </div>
    </section>
  );
}
