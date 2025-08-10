import { getBlogById, getBlogCategories } from "@/actions/data";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import EditBlogForm from "./EditBlogForm";

export default async function EditBlog({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const [blogCategories, blog] = await Promise.all([getBlogCategories(), getBlogById(id)]);

  if (!blogCategories?.length || !blog) redirect("/admin/blog-category");

  return (
    <section className="py-4">
      <div className="container">
        <div className="max-w-lg">
          <h1 className="h1 mb-4">Update Blog</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <EditBlogForm blogCategories={blogCategories} blog={blog} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
