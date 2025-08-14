import { Suspense } from "react";
import BlogSection from "./(sections)/BlogSection";
import HeroSection from "./(sections)/HeroSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogSection />
      </Suspense>
    </>
  );
}
