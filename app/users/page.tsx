import React from "react";

import UserTable from "./UserTable";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

const Users = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;

  return (
    <>
      <h1>users {sortOrder}</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default Users;
