import React from "react";
import ProfileForm from "./ProfileForm";
import { getProfile } from "@/actions/data";

export default async function Profile() {
  const user = await getProfile();
  return (
    <section className="py-4">
      <div className="container">
        <div className="max-w-xl">
          <h1 className="h2 mb-4">Profile</h1>
          <ProfileForm user={user} />
        </div>
      </div>
    </section>
  );
}
