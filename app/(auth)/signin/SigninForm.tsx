"use client";

import { signInCredential } from "@/actions/auth";
import Button from "@/components/Button";
import InputForm from "@/components/form/InputForm";
import { useActionState } from "react";

export default function SigninForm() {
  const [state, formAction, isPending] = useActionState(signInCredential, null);

  return (
    <form action={formAction} className="space-y-4">
      {state?.message ? <p className="text-sm text-red-500 bg-red-50 py-2 px-3 rounded">{state.message}</p> : null}
      <InputForm
        id="email"
        label="Email"
        type="email"
        placeholder="example@email.com"
        defaultValue={state?.values?.email as string}
        error={state?.error?.properties?.email?.errors}
      />
      <InputForm
        id="password"
        label="Password"
        type="password"
        placeholder="********"
        error={state?.error?.properties?.password?.errors}
      />

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
