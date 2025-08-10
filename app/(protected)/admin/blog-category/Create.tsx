"use client";

import InputForm from "@/components/form/InputForm";
import { useRouter } from "next/navigation";
import { useBlogCategory } from "./useBlogCategory";
import { useState, useTransition } from "react";

export default function Create() {
  const { setSuccessMsg, setErrorMsg, errors, setErrors } = useBlogCategory();
  const [pending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const router = useRouter();

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      const res = await fetch("/api/blog-category", { method: "POST", body: JSON.stringify({ name }) });

      const result = await res.json();

      if (result?.errors || result?.error || result?.message) {
        setErrors(undefined);
        setErrorMsg(null);
        setSuccessMsg(null);
      }

      if (result?.errors) {
        setErrors(result.errors.properties);
        return;
      }

      if (result?.error) {
        setErrorMsg(result.error);
        return;
      }
      setSuccessMsg(result.message);
      setName("");

      router.refresh();
    });
  };

  return (
    <>
      <form onSubmit={handleCreate} className="space-y-4 p-3 border border-gray-200 mb-4">
        <InputForm
          id="name"
          label="Create Blog Category"
          placeholder="Blog Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors?.name?.errors}
        />
        <button type="submit" className="btn">
          {pending ? "Creating..." : "Create Blog Category"}
        </button>
      </form>
    </>
  );
}
