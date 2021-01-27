import React from "react";
// import { connect } from "react-redux";
//import { Button } from "react-bootstrap";
import Header from "./Header";

const {
  REACT_APP_CLIENT_ID,
  REACT_APP_AUTHORIZE_URL,
  REACT_APP_REDIRECT_URL,
} = process.env;

const handleLogin = () => {
  window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
};

const Home = (props) => {
  return (
    <div className="login">
      <Header></Header>
      <input type="submit" value="Login to spotify" onClick={handleLogin} />

      {/* <Button variant="info" type="submit">
        Login to spotify
      </Button> */}
    </div>
  );
};

// todo: use this when adding store
// export default connect()(Home);
export default Home;
