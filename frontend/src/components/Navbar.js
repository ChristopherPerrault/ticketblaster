import React, { useContext } from "react";
import { LoggedInContext } from "../App";
import NavButton from "./NavButton";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AboutMenu from "./AboutMenu";

function Navbar() {
  //const [isAdmin, setIsAdmin] = useContext(LoggedInContext);
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const storageAdminBoolean = sessionStorage.getItem("admin");  
  //if (storageAdminBoolean === true) {
  //  isAdmin = true;}
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<KeyboardDoubleArrowRightIcon fontSize="small" />}
      className="nav"
    >
      <NavButton to="/" label="Home" />
      <AboutMenu />
      {isLoggedIn ? <NavButton to="/account" label="My Account" /> : null}
     {/* {isAdmin ? <NavButton to="/admin" label="Admin" /> : null} */}
      <NavButton to="/contact" label="Contact" />
    </Breadcrumbs>
  );
}
export default Navbar;
//  <NavButton to="/admin" label="Admin" />