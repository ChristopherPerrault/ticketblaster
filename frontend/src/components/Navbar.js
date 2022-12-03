import React from "react";
import NavButton from "./NavButton";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
function Navbar() {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<KeyboardDoubleArrowRightIcon fontSize="small" />} className="nav">
      <NavButton to="/" label="Home" />
      <NavButton to="/about" label="About Us" />
      <NavButton to="/events" label="Events" />
      <NavButton to="/account" label="My Account" />
      <NavButton to="/register" label="Register" />
      <NavButton to="/login" label="Login" />
    </Breadcrumbs>
  );
}
export default Navbar;
