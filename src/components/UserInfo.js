import { useState, useEffect } from "react";
import { fetchUser } from "../utils/fetchData";

export default function UserInfo() {
  const [userName, setUserName] = useState();
  const [imgUrl, setimgUrl] = useState();
  const [isLoading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    fetchUser().then((res) => {
      setUserName(res.display_name);
      setimgUrl(res.images[0].url);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading user info...</p>;
  }

  return (
    <div>
      <img className="userinfo" src={imgUrl} alt="user img" />
      <p>{userName}</p>
    </div>
  );
}
