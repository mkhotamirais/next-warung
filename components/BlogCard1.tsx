import { smartTrim } from "@/lib/utils";
import { BlogProps } from "@/types/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard1({ blog, content = true }: { blog: BlogProps; content?: boolean }) {
  return (
    <div className="mb-6">
      <Link href={`/blog/${blog.slug}`}>
        <Image
          src={blog?.imageUrl || "/logo-warungota.png"}
          alt={blog.title}
          width={500}
          height={500}
          className="w-full h-56 rounded-t object-cover object-center bg-gray-100"
        />
      </Link>
      <div className="mt-4 min-h-48 flex flex-col space-y-2">
        <h3 className="h3 mb-2">{smartTrim(blog.title, 56)}</h3>
        <div className="flex flex-wrap gap-2 items-center text-sm text-gray-600">
          <Link href="" className="link">
            {blog.BlogCategory.name}
          </Link>
          <span>•</span>
          <span>{moment(blog.createdAt).fromNow()}</span>
        </div>
        {content ? <p>{smartTrim(blog.content, 210)}</p> : null}
      </div>
    </div>
  );
}
