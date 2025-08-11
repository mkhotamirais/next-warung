import React, { Suspense } from "react";
import BlogCategoryList from "./List";
import { getBlogCategories } from "@/actions/data";

export default async function BlogCategory() {
  const blogCategories = await getBlogCategories();

  if (!blogCategories?.length) return <h2 className="h2 container">No Blog Category</h2>;

  return (
    <section className="py-4">
      <div className="container">
        <div className="space-y-4 max-w-lg">
          <h1 className="h1">Blog Category</h1>
          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <BlogCategoryList blogCategories={blogCategories} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
