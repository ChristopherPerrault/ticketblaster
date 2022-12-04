import React, { useContext } from "react";
import { LoggedInContext } from "../App";
import NavButton from "./NavButton";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<KeyboardDoubleArrowRightIcon fontSize="small" />} className="nav">
      <NavButton to="/" label="Home" />
      <NavButton to="/about" label="About Us" />
      <NavButton to="/events" label="Events" />
      {isLoggedIn ? <NavButton to="/account" label="My Account" /> : null}
    </Breadcrumbs>
  );
}
export default Navbar;
