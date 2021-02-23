import React from "react";
import Header from "./Header";

const Home = (props) => {
  const { CLIENT_ID, AUTHORIZE_URL, REDIRECT_URL, SCOPES } = process.env;

  const handleLogin = () => {
    window.location = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="login">
      <Header></Header>
      <input type="submit" value="Login to spotify" onClick={handleLogin} />
    </div>
  );
};

export default Home;
