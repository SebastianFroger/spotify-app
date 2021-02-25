import React from "react";
import LogoutButton from "./Logout";
import UserInfo from "./UserInfo";

export default function Header() {
  return (
    <div className="header">
      <h1>Spotify App</h1>
      <div>
        <UserInfo />
        <LogoutButton />
      </div>
    </div>
  );
}
