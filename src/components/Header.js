import React from "react";
import User from "./User";

// TODO: could be a fragment???
const Header = () => {
  return (
    <div>
      <h1 className="header">Spotify App</h1>
      <User></User>
    </div>
  );
};

export default Header;
