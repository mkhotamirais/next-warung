import React from "react";
import BlogSection from "./(sections)/BlogSection";
import HeroSection from "./(sections)/HeroSection";
import { getBlogs } from "@/actions/data";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <>
      <HeroSection />
      <BlogSection blogs={blogs} />
    </>
  );
}
