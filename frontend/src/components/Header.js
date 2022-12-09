import React, { useContext } from "react";
import { LoggedInContext } from "../App";
import "./Header.css";
import Navbar from "./Navbar";
import logo from "../assets/images/logo.jpg";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";
import LogInButton from "./LogInButton";
import DarkMode from "./DarkMode";

function Header() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);

  return (
    <div className="header">
      <div className="logo">
        <a href="/" title="Home">
          <img alt="Logo" src={logo} width="200px" />
        </a>
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="button">
        {isLoggedIn ? (
          <LogoutButton />
        ) : (
          <div>
            <DarkMode /> <RegisterButton to="/register" />
            &emsp;
            <LogInButton to="/login" />
          </div>
        )}
        <div className="theme-button"></div>
      </div>
    </div>
  );
}

export default Header;
