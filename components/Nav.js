import Link from "next/link.js";

export default function Nav() {
  return (
    <nav className=" flex justify-between items-center py-10">
      <Link href="/">
        <button className="text-lg font-medium">Creative Thoughts</button>
      </Link>
      <ul className="flex items-center gap-10">
        <Link href={"/auth/login"}>
          <a className="py-2 px-4 bg-cyan-500 rounded-lg text-white font-medium ml-8">
            Join Now
          </a>
        </Link>
      </ul>
    </nav>
  );
}
