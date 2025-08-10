"use client";

import { BlogProps } from "@/types/blog";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useBlog } from "./useBlog";

export default function Delete({ blog }: { blog: BlogProps }) {
  const [pending, startTransition] = useTransition();
  const { setSuccessMsg, setErrorMsg, setErrors } = useBlog();
  const router = useRouter();

  const handleDelete = () => {
    startTransition(async () => {
      const res = await fetch(`/api/blog/${blog.id}`, {
        method: "DELETE",
        body: JSON.stringify({ imageUrl: blog.imageUrl }),
      });
      const result = await res.json();

      if (result?.errors || result?.error || result?.message) {
        setSuccessMsg(null);
        setErrorMsg(null);
        setErrors(undefined);
      }
      setSuccessMsg(result.message);

      router.refresh();
    });
  };
  return (
    <button type="button" disabled={pending} className="btn !bg-red-500" onClick={handleDelete}>
      {pending ? "loading..." : "Delete"}
    </button>
  );
}
