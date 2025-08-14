import React from "react";
import BlogCard2 from "@/components/BlogCard2";
import BlogCard1 from "@/components/BlogCard1";
import { getBlogs } from "@/actions/data";

export default async function List() {
  const blogs = await getBlogs();
  return (
    <div className="">
      <div className="hidden sm:block">
        {blogs?.map((blog) => (
          <BlogCard2 key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="block sm:hidden">
        {blogs?.map((blog) => (
          <BlogCard1 key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
