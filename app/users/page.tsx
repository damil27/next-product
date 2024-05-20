import React, { Suspense } from "react";
import Link from "next/link";
import UsersTable from "./new/UsersTable";


const UserPage = async () => {
 

  return (
    <div className="p-5">
      <h1>User Details here</h1>
      <Link href="users/new" className="btn">
        New
      </Link>
      <Suspense
        fallback={<span className="loading loading-ring loading-md"></span>}
      >
        <UsersTable />
      </Suspense>
    </div>
  );
};

export default UserPage;
