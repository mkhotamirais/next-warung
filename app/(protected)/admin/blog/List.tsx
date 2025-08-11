"use client";

import Msg from "@/components/Msg";
import { useBlog } from "./useBlog";
import Image from "next/image";
import { BlogProps } from "@/types/blog";
import Delete from "./Delete";
import Link from "next/link";

export default function List({ blogs }: { blogs: BlogProps[] | undefined }) {
  const { successMsg, errorMsg } = useBlog();
  return (
    <div>
      {successMsg ? <Msg msg={successMsg} /> : null}
      {errorMsg ? <Msg msg={errorMsg} error /> : null}
      <h2 className="h2 mb-4">Blog List</h2>
      <div>
        {blogs?.map((blog) => (
          <div key={blog.id} className="mb-4">
            <div className="flex gap-4 mb-2">
              <Image src={blog?.imageUrl} alt={blog.title} width={200} height={200} className="w-40 h-40 rounded" />
              <div>
                <h3 className="h3">{blog.title}</h3>
                <p>{blog.content}</p>
                <p>{blog.BlogCategory.name}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href={`/admin/blog/edit/${blog.id}`} className="btn">
                Edit
              </Link>
              <Delete blog={blog} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
