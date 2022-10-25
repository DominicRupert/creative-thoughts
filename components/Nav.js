import Link from "next/link.js";
import { auth } from "../utils/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";

export default function Nav() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <nav className=" flex justify-between items-center py-10">
      <Link href="/">
        <button className="text-lg font-medium">Creative Thoughts</button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link href={"/auth/login"}>
            <a className="py-2 px-4 bg-cyan-500 rounded-lg text-white font-medium ml-8">
              Join Now
            </a>
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href="/post">
              <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-mg textx-sm">
                Post
              </button>
            </Link>
            <Link href="/dashboard">
              <h1>Dashboard</h1>
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
