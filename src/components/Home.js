import React from "react";
import { connect } from "react-redux";
//import { Button } from "react-bootstrap";
import Header from "./Header";

const Home = (props) => {
  return (
    <div className="login">
      <Header></Header>
      <input type="submit" value="Login to spotify" />

      {/* <Button variant="info" type="submit">
        Login to spotify
      </Button> */}
    </div>
  );
};

// todo: use this when adding store
// export default connect()(Home);
export default Home;
