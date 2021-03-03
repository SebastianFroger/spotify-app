import React from "react";
import LogoutButton from "./Logout";
import Title from "./Title";

export default function Header() {
  return (
    <div className="header content">
      <Title></Title>
      <LogoutButton />
    </div>
  );
}
