import { getUsers } from "@/lib/data";

export default async function UserList() {
  const users = await getUsers();
  if (!users?.length) return <h1 className="h1">No users found</h1>;

  return (
    <div>
      <table className="w-full table-auto">
        <thead>
          {/* name, email, role, createdAt */}
          <tr className="text-left">
            <th>No</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user?.id}>
              <td>{i + 1}</td>
              <td>{user?.name}</td>
              <td>action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
