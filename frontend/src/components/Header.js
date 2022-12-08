import React, { useContext } from "react";
import { LoggedInContext } from "../App";
import "./Header.css";
import Navbar from "./Navbar";
import logo from "../assets/images/logo.jpg";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";
import LogInButton from "./LogInButton";

function Header() {
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
            {" "}
            <RegisterButton to="/register" />
            &emsp;
            <LogInButton to="/login" />{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
