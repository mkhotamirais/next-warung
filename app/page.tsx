export const revalidate = 60;
export const dynamic = "force-static";

import { Suspense } from "react";
import BlogSection from "./(sections)/BlogSection";
import HeroSection from "./(sections)/HeroSection";
import { getBlogs } from "@/actions/data";

export default async function Home() {
  const blogs = await getBlogs(4);
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogSection blogs={blogs} />
      </Suspense>
    </>
  );
}
