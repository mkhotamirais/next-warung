import Link from "next/link";
import { Suspense } from "react";
import List from "./List";
import { getBlogByUserId, getBlogs } from "@/actions/data";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Button from "@/components/Button";

export default async function AdminBlog() {
  const session = await auth();
  if (!session || !session.user) redirect("/profile");
  // const blogs = await getBlogs();

  let blogs = null;
  if (session?.user?.role === "admin") {
    blogs = await getBlogs();
  }

  if (session?.user?.role === "editor") {
    blogs = await getBlogByUserId();
  }

  return (
    <section className="py-4">
      <div className="container">
        <div className="max-w-lg">
          <div className="flex items-center justify-between mb-4">
            <h1 className="h1">Blog</h1>
            <Button as={Link} href="/admin/blog/create" className="btn">
              Create Blog
            </Button>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <List blogs={blogs} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
