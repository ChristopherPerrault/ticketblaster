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
      <NavButton to="/events" label="Events" />
      {isLoggedIn ? <NavButton to="/account" label="My Account" /> : null}
    </Breadcrumbs>
  );
}
export default Navbar;
