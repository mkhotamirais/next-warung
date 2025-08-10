import { Metadata } from "next";
import UserList from "./UserList";

export const metadata: Metadata = {
  title: "Admin User",
  description: "Manage users in the admin panel",
};

export default function AdminUser() {
  return (
    <section>
      <div className="container">
        <h1 className="h1">User List</h1>
        <UserList />
      </div>
    </section>
  );
}
