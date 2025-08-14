import { Suspense } from "react";
import BlogSection from "./(sections)/BlogSection";
import HeroSection from "./(sections)/HeroSection";
import { getBlogs } from "@/actions/data";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogSection blogs={blogs} />
      </Suspense>
    </>
  );
}
