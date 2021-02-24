import { React, useState, useEffect } from "react";
import { fetchUser } from "../utils/fetchData";
import { useHistory } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    if (user !== undefined) return;

    fetchUser().then((res) => {
      setUser(res);
    });
  });

  let display = <UserNotLoggedIn />;
  if (user !== undefined) display = <UserLoggedIn name={user.display_name} />;

  return (
    <div>
      <h1 className="header">Spotify App</h1>
      {display}
    </div>
  );
}

function UserLoggedIn(props) {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <p>Welcome {props.name}</p>
      <input type="submit" value="Log out" onClick={handleLogout} />
    </div>
  );
}

function UserNotLoggedIn() {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
    REACT_APP_SCOPES,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&scope=${REACT_APP_SCOPES}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };
  return <input type="submit" value="Log in" onClick={handleLogin} />;
}
