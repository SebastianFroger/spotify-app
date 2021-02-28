import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { fetchUser } from "../utils/fetchData";
import { handleLogout } from "../utils/functions";
import userIcon from "../images/user-solid.svg";

export default function LogoutButton() {
  // const history = useHistory();
  const [userImg, setUserImg] = useState("Username");

  useEffect(() => {
    fetchUser()
      .then((res) => {
        setUserImg(res.images[0].url);
      })
      .catch(() => {
        setUserImg(userIcon);
        console.log("could not fetch user img");
      });
  }, []);

  // const handleLogout = () => {
  //   localStorage.clear();
  //   history.push("/");
  // };

  return (
    <div className="log-out-btn">
      <img src={userImg} alt="user img" />
      <p onClick={handleLogout}>Log out</p>
    </div>
  );
}
