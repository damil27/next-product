"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";




const Navbar = () => {
  const { status, data: session } = useSession();


  return (
    <div className="bg-slate-500 flex p-5 text-white space-x-5 ">
      <Link href="/" className="">
        Home
      </Link>
      <Link href="/users" className="">
        User
      </Link>
      <Link href="/upload">upload</Link>
      {status === "authenticated" && (
        <div>
          {session.user?.name?.split(" ")[1]}
          <Link className="ml-5" href="api/auth/signout">
            Sign out{" "}
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
