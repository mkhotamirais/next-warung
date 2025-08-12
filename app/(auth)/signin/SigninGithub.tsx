import React from "react";
import { FaGithub } from "react-icons/fa6";
import { signIn } from "@/auth";
import { cookies } from "next/headers";
import Button from "@/components/Button";

export default function SigninGithub() {
  return (
    <form
      action={async () => {
        "use server";
        const cookieStore = await cookies();
        const lastUrl = cookieStore.get("last_visited")?.value || "/";
        await signIn("github", { redirectTo: lastUrl });
      }}
    >
      <Button type="submit" className="w-full" icon={<FaGithub />}>
        Login With Gihub
      </Button>
    </form>
  );
}
