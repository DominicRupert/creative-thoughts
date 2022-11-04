import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Message from "../components/Message";
import {BsTrash2Fill} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    if (loading) return;
    if (!user) return route.push("/auth/login");
    console.log("run");
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, where("user", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };
  useEffect(() => {
    getData();
  }, [user, loading, error]);

  return (
    <div>
      <h1>Your posts</h1>
      <div>
        {posts.map((post) => {
          return(

          <Message {...post} key={post.id}>
            <div>
              <button><BsTrash2Fill/>Delete</button>
              <button><AiFillEdit/>Edit</button>
            </div>
          </Message>
          );
        })}
      </div>
      <div>posts</div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}
