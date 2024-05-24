import Image from "next/image";
import ProductCard from "./Components/ProductCard";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export  default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="">
      <h1>Hello there { session?.user?.name?.split(" ")[1]}</h1>
      <Link href="/users" >User page</Link>
      <ProductCard />
    </main>
  );
}
