"use client";

import { changeUserRoleByUserId } from "@/actions/user";
import { roles } from "@/lib/utils";
import { UserProps } from "@/types/types";

export default function UserRoleSelect({ user }: { user: UserProps }) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const role = e.target.value;
    changeUserRoleByUserId(user.id, role);
  };

  return (
    <select
      name="user-role"
      id="user-role"
      className="badge w-18 mr-2 inline-block"
      title="user-role"
      value={user.role}
      onChange={handleChange}
    >
      {roles?.map((role) => (
        <option key={role} value={role} className="text-left">
          {role}
        </option>
      ))}
    </select>
  );
}
