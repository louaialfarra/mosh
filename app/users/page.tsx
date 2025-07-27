import React from "react";

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await res.json();

  interface user {
    id: number;
    name: string;
    email: string;
  }

  return (
    <>
      <h1>users</h1>
      <table className="table table-bordered">
        <thead>
          <tr className="text-black dark:text-white">
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user: user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*   <ul>
        {usersData.map((user: user) => (
          <li key={user.id}>
            <div
              className="container flex space"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="username">{user.name}</div>
              <div className="userEmail"> {user.email}</div>
            </div>
          </li>
        ))}
      </ul>*/}
    </>
  );
};

export default Users;
