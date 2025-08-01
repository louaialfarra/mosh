import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hi there</h1>
      <Link href={"/users"}>
        <button className="btn btn-primary">Clickme</button>
      </Link>
    </main>
  );
}
