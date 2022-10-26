import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const getData = async () => {
    if (loading) return;
    if (!user) return route.push("/auth/login");
  };
  useEffect(() => {
    getData();
  }, [user, loading, error]);

  return (
    <div>
      <h1>Your posts</h1>
      <div>posts</div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}
