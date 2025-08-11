import InputForm from "@/components/form/InputForm";
import { UserProps } from "@/types/types";
import React from "react";
import { FaCamera } from "react-icons/fa6";

export default function ProfileForm({ user }: { user: UserProps | null | undefined }) {
  return (
    <form action="">
      <div className="">
        <label
          htmlFor="profile-image"
          className="cursor-pointer flex mx-auto bg-gray-50 border border-gray-200 rounded-full size-24 items-center justify-center"
        >
          <FaCamera className="text-2xl text-gray-200" />
          <input type="file" id="profile-image" name="profile-image" className="hidden" placeholder="profile photo" />
        </label>
        <div className="text-center text-red-500 text-sm">message</div>
      </div>
      <InputForm id="name" label="Name" defaultValue={user?.name as string} placeholder="Name" />
      <InputForm id="email" label="Email" defaultValue={user?.email as string} placeholder="Email" />
      <InputForm id="phone" label="Phone" defaultValue={user?.phone as string} placeholder="Phone" />
    </form>
  );
}
