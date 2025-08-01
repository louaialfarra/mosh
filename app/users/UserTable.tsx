import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const usersData: User[] = await res.json();

    const sortedUsers = sort(usersData).asc(
      sortOrder === "email" ? (user) => user.email : (user) => user.name
    );

    return (
      <>
        <table className="table table-bordered">
          <thead>
            <tr className="text-black dark:text-white">
              <th>
                <Link href="/users?sortOrder=name">name</Link>
              </th>
              <th>
                <Link href="/users?sortOrder=email">email</Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user: User) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  } catch (error) {
    return <div>Error loading users: {String(error)}</div>;
  }
};

export default UserTable;
