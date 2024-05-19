import Image from "next/image";
import ProductCard from "./Components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>Hello there</h1>
      <Link href="/users" >User page</Link>
      <ProductCard />
    </main>
  );
}
