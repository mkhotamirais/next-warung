"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useBlog } from "./useBlog";
import { BlogProps } from "@/types/types";
import Modal, { ModalClose } from "@/components/Modal";

interface DeleteProps {
  blog: BlogProps;
  closeMoreOptions: () => void;
}

export default function Delete({ blog, closeMoreOptions }: DeleteProps) {
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

      if (result?.error) setErrorMsg(result.error);
      if (result?.message) setSuccessMsg(result.message);

      router.refresh();
    });
    closeMoreOptions();
  };
  return (
    <Modal trigger={<div className="btn-danger w-full">Delete</div>} title="Delete Blog">
      <p>
        Delete <b>{blog.title}</b>, this action cannot be undone, are you sre?
      </p>
      <div className="flex gap-2 mt-4">
        <ModalClose asChild>
          <button type="button" disabled={pending} className="btn-danger" onClick={handleDelete}>
            {pending ? "loading..." : "Delete"}
          </button>
        </ModalClose>
        <ModalClose asChild>
          <button type="button" className="btn-gray">
            Cancel
          </button>
        </ModalClose>
      </div>
    </Modal>
  );
}
