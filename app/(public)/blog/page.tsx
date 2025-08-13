import { content as c } from "@/lib/content";
import { getBlogs } from "@/actions/data";
import List from "./List";
import { Suspense } from "react";
import Heroes from "@/components/Heroes";
import { Metadata } from "next";

const { title, description } = c.blog;

export const metadata: Metadata = {
  title,
  description,
};

export default async function Blog() {
  const blogs = await getBlogs();
  return (
    <>
      <Heroes title={title} description={description} />
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Suspense fallback={<div>Loading...</div>}>
                <List blogs={blogs} />
              </Suspense>
            </div>
            <div>right</div>
          </div>
        </div>
      </section>
    </>
  );
}
