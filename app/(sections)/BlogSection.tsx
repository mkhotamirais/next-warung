import { getBlogs } from "@/actions/data";
import BlogCard1 from "@/components/BlogCard1";
import { smartTrim } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default async function BlogSection() {
  const blogs = await getBlogs(3);

  return (
    <section className="py-4">
      <div className="container">
        <div className="mb-4">
          <h2 className="h2">Blog</h2>
          <div>halo</div>
        </div>
        <div className="grid sm:grid-cols-3 gap-2 lg:gap-8">
          {blogs?.map((blog) => (
            <BlogCard1 key={blog.id} blog={blog} content={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
