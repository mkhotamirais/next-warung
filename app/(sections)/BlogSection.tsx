import { content as c } from "@/lib/content";
import { getBlogs } from "@/actions/data";
import BlogCard1 from "@/components/BlogCard1";
import { Suspense } from "react";

const { title, description } = c.blog;

export default async function BlogSection() {
  const blogs = await getBlogs(3);

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
