import Message from "../components/Message.js";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import {auth, db} from "../utils/firebase.js";
import {toast} from "react-toastify";



export default function Details() {
    const router = useRouter();
    const routeData = router.query;
    const [message, setmessage] = useState("");
    const [allMessage, setAllMessage] = useState([]);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
