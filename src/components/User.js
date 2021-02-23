import { useState, useEffect, React } from "react";
import { fetchUser } from "../utils/fetchData";

export default function User() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchUser().then((res) => {
      setUser(res.display_name);
    });
  }, []);

  return <p>Welcome {user}</p>;
}
