"use client";

import { signUp } from "@/actions/auth";
import InputForm from "@/components/form/InputForm";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(signUp, null);

  return (
    <form action={formAction} className="space-y-4">
      {state?.message ? <p className="text-sm text-red-500 bg-red-50 py-2 px-3 rounded">{state.message}</p> : null}
      <InputForm
        id="name"
        label="Name"
        placeholder="Your Name"
        defaultValue={state?.values?.name as string}
        error={state?.error?.properties?.name?.errors}
      />
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
      <InputForm
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="********"
        error={state?.error?.properties?.confirmPassword?.errors}
      />

      <button type="submit" className="btn w-full" disabled={isPending}>
        {isPending ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}
