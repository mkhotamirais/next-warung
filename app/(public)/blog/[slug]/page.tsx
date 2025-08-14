export const revalidate = 60;
export const dynamicParams = true; // izinkan slug baru di-generate on demand (opsional)

import React from "react";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/actions/data";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export async function generateStaticParams() {
  const slugs = await prisma.blog.findMany({ select: { slug: true } });
  return slugs.map((slug) => ({ slug: slug.slug }));
}

export default async function BlogId({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const blog = await getBlogBySlug(slug);

  if (!blog) return notFound();

  return (
    <section className="py-4">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3 border space-y-3">
            <h1 className="h1">{blog.title}</h1>
            <div className="flex flex-wrap gap-2 items-center text-sm text-gray-600">
              <Link href="" className="link">
                {blog.BlogCategory.name}
              </Link>
              <span>•</span>
              <span>{moment(blog.createdAt).fromNow()}</span>
            </div>

            <Image
              src={blog.imageUrl || ""}
              alt={blog.title}
              width={500}
              height={500}
              className="w-full h-72 object-cover object-center"
            />
            <p className="mt-4">{blog.content}</p>
          </div>
          <div className="md:w-1/3 border">right</div>
        </div>
      </div>
    </section>
  );
}
