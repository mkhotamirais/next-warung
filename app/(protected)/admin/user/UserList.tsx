"use client";

import { roles } from "@/lib/utils";
import { UserProps } from "@/types/types";
import Link from "next/link";
import UserRoleSelect from "./UserRoleSelect";

export default function UserList({ users }: { users: UserProps[] | undefined }) {
  const sortedUsers = users?.sort((a, b) => roles.indexOf(a.role) - roles.indexOf(b.role));

  return (
    <div>
      {sortedUsers?.map((user) => (
        <div key={user.id} className="mb-1 p-2 bg-gray-50 border border-gray-300 rounded-md space-y-1">
          <div className="text-sm">{user.email}</div>
          <div>
            <UserRoleSelect user={user} />
            <span>{user.name}</span>
          </div>
          <div>
            <span>Phone</span>
            <span>: {user.phone || "-"}</span>
          </div>
          <div>
            <Link href={`/admin/user/${user.id}`} className="link">
              {user.name}&apos;s Blogs
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
