import Link from "next/link";
import { Suspense } from "react";
import List from "./List";
import { getBlogs } from "@/actions/data";

export default async function AdminBlog() {
  const blogs = await getBlogs();
  return (
    <section className="py-4">
      <div className="container">
        <div className="max-w-lg">
          <div className="flex items-center justify-between mb-4">
            <h1 className="h1">Blog</h1>
            <Link href="/admin/blog/create" className="btn">
              Create Blog
            </Link>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <List blogs={blogs} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
