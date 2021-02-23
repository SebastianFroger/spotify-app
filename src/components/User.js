import { useState, useEffect, React } from "react";
import { getUser } from "../utils/fetchData";

export default function User() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser().then((res) => setUser(res.display_name));
  }, []);

  return <p>Welcome {user}</p>;
}
