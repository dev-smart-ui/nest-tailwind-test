interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  website: string;
}

const columns = ["ID", "Name", "Username", "Email", "City", "Website"];

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: IUser[] = await data.json();

  return (
    <div className="container mx-auto px-3 py-8">
      <h1 className="text-2xl font-bold mb-6">User List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column} className="border border-gray-300 px-4 py-2 text-left">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href={`mailto:${user.email}`} className="text-blue-500 hover:underline">
                    {user.email}
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">{user.address.city}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user.website}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
