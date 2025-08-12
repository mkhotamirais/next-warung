import { getBlogs } from "@/actions/data";
import List from "./List";
import { Suspense } from "react";
import Heroes from "@/components/Heroes";

export default async function Blog() {
  const blogs = await getBlogs();
  return (
    <>
      <Heroes title="Blog" description="Lorem ipsum dolor sit amet" />
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
