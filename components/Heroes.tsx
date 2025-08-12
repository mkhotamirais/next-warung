import React from "react";

export default function Heroes({ title, description }: { title: string; description: string }) {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container !max-w-4xl text-center">
        <h1 className="h1 mb-4">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
