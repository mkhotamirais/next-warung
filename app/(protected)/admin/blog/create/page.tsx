import CreateBlogForm from "./CreateBlogForm";
import { getBlogCategories } from "@/actions/data";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function CreateBlog() {
  const blogCategories = await getBlogCategories();
  if (!blogCategories?.length) redirect("/admin/blog-category");

  return (
    <section className="py-4">
      <div className="container">
        <div className="max-w-lg">
          <h1 className="h1 mb-4">Create Blog</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <CreateBlogForm blogCategories={blogCategories} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
