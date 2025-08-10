import React from "react";
import { FaG } from "react-icons/fa6";
import { signIn } from "@/auth";
import { cookies } from "next/headers";

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
      <button type="submit" className="btn flex items-center w-full gap-2 justify-center">
        <FaG /> Login With Google
      </button>
    </form>
  );
}
