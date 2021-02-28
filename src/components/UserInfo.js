import { useState, useEffect } from "react";
import { fetchUser } from "../utils/fetchData";

export default function UserInfo() {
  const [userName, setUserName] = useState();
  const [isLoading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    fetchUser().then((res) => {
      setUserName(res.display_name);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading user info...</p>;
  }

  return (
    <div>
      <p>{userName}</p>
    </div>
  );
}
