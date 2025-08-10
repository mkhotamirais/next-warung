"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaSpinner, FaTrash } from "react-icons/fa6";
import { useBlogCategory } from "./useBlogCategory";
import { useTransition } from "react";

export default function Delete({ id }: { id: string }) {
  const [pending, startTransition] = useTransition();
  const { setSuccessMsg, setErrorMsg, setErrors } = useBlogCategory();
  const router = useRouter();

  const handleDelete = () => {
    startTransition(async () => {
      const res = await fetch(`/api/blog-category/${id}`, { method: "DELETE" });

      const result = await res.json();

      if (result?.errors || result?.error || result?.message) {
        setErrors(undefined);
        setErrorMsg(null);
        setSuccessMsg(null);
      }

      if (result?.error) {
        setErrorMsg(result.error);
        return;
      }
      setSuccessMsg(result.message);

      router.refresh();
    });
  };

  return (
    <button type="button" onClick={handleDelete} aria-label="Delete" className="text-red-500 p-2 border rounded">
      {pending ? <FaSpinner className="animate-spin" /> : <FaTrash />}
    </button>
  );
}
