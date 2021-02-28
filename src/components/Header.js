import React from "react";
import LogoutButton from "./Logout";
import { ReactComponent as Logo } from "../images/logo-solid.svg";

export default function Header() {
  return (
    <div className="header content">
      <h1>
        <Logo className="logo-img"></Logo>pdatify
      </h1>
      <LogoutButton />
    </div>
  );
}
