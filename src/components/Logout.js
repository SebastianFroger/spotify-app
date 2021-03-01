import { useState, useEffect } from "react";
import { fetchUserData } from "../utils/fetchData";
import { handleLogout } from "../utils/functions";
import userIcon from "../images/user-solid.svg";

export default function LogoutButton() {
  const [userImg, setUserImg] = useState("Username");

  useEffect(() => {
    fetchUserData()
      .then((res) => {
        setUserImg(res.images[0].url);
      })
      .catch(() => {
        setUserImg(userIcon);
        console.log("could not fetch user img");
      });
  }, []);

  return (
    <div className="log-out-btn">
      <img src={userImg} alt="user img" />
      <p onClick={handleLogout}>Log out</p>
    </div>
  );
}
