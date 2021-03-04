import React from "react";

import Title from "./Title";

const {
  REACT_APP_CLIENT_ID,
  REACT_APP_AUTHORIZE_URL,
  REACT_APP_REDIRECT_URL,
  REACT_APP_SCOPES,
} = process.env;

const handleLogin = () => {
  window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&scope=${REACT_APP_SCOPES}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
};

const Home = () => {
  return (
    <div className="login">
      <Title></Title>
      <p>Stay updated on the latest releases from your favorite artists!</p>
      <input type="submit" value="Log in" onClick={handleLogin} />
    </div>
  );
};

export default Home;
