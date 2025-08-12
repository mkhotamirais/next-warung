import React, { Suspense } from "react";
import BlogDetail from "./BlogDetail";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/actions/data";

export default async function BlogId({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const blog = await getBlogBySlug(slug);

  if (!blog) return notFound();

  return (
    <section className="py-4">
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogDetail blog={blog} />
        </Suspense>
      </div>
    </section>
  );
}
