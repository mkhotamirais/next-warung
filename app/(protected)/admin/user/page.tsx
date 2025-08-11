import { Metadata } from "next";
import UserList from "./UserList";
import { getUsers } from "@/actions/data";

export const metadata: Metadata = {
  title: "Admin User",
  description: "Manage users in the admin panel",
};

export default async function AdminUser() {
  const users = await getUsers();
  if (!users?.length) return <h2 className="h2 container">No users found</h2>;

  return (
    <section className="py-4">
      <div className="container">
        <div className="max-w-lg">
          <h1 className="h1 mb-4">User List</h1>
          <UserList users={users} />
        </div>
      </div>
    </section>
  );
}
