import React, { useContext } from "react";
import { LoggedInContext } from "../App";
import NavButton from "./NavButton";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AboutMenu from "./AboutMenu";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<KeyboardDoubleArrowRightIcon fontSize="small" />} className="nav">
      <NavButton to="/" label="Home" />
      <AboutMenu />
      {isLoggedIn ? <NavButton to="/account" label="My Account" /> : null}
      <NavButton to="/contact" label="Contact" />
    </Breadcrumbs>
  );
}
export default Navbar;
