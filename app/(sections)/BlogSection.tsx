"use client";

import { content as c } from "@/lib/content";
import BlogCard1 from "@/components/BlogCard1";
import { Suspense } from "react";
import { BlogProps } from "@/types/types";

const { title, description } = c.blog;

export default function BlogSection({ blogs }: { blogs: BlogProps[] | undefined | null }) {
  if (!blogs) return null;

  return (
    <section className="py-12">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="h2 mb-2">{title}</h2>
          <p>{description}</p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="grid sm:grid-cols-3 gap-2 lg:gap-8">
            {blogs?.map((blog) => (
              <BlogCard1 key={blog.id} blog={blog} content={false} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
}
