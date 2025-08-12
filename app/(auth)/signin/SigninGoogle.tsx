import React from "react";
import { FaG } from "react-icons/fa6";
import { signIn } from "@/auth";
import { cookies } from "next/headers";
import Button from "@/components/Button";

export default function SigninGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        const cookieStore = await cookies();
        const lastUrl = cookieStore.get("last_visited")?.value || "/";
        await signIn("google", { redirectTo: lastUrl });
      }}
    >
      <Button type="submit" className="w-full" icon={<FaG />}>
        Login With Google
      </Button>
    </form>
  );
}
