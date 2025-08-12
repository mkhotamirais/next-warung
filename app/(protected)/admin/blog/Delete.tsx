"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useBlog } from "./useBlog";
import { BlogProps } from "@/types/types";
import Modal, { ModalClose } from "@/components/Modal";
import Button from "@/components/Button";

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
    <Modal
      trigger={
        <Button as={"div"} variant="danger">
          Delete
        </Button>
      }
      title="Delete Blog"
    >
      <p>
        Delete <b>{blog.title}</b>, this action cannot be undone, are you sre?
      </p>
      <div className="flex gap-2 mt-4">
        <ModalClose asChild>
          <Button type="button" variant="danger" disabled={pending} onClick={handleDelete}>
            {pending ? "loading..." : "Delete"}
          </Button>
        </ModalClose>
        <ModalClose asChild>
          <Button type="button" variant="gray">
            Cancel
          </Button>
        </ModalClose>
      </div>
    </Modal>
  );
}
