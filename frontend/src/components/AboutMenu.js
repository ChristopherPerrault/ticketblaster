import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./AboutMenu.css";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

export default function AboutMenu() {
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <div>
      <div>
        <p
          className="about"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onMouseOver={handleClick}
        >
          <NavLink className={({ isActive }) => isActive ? "activeMenu" : "inactiveMenu"}>
            <p>About</p>
          </NavLink>
        </p>
      </div>
      <div className="menu">
        <Menu
          id="basic-menu"
          anchorEl={anchor}
          open={open}
          onClick={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem style={{ backgroundColor: "#fd7545" }} onClick={handleClose}><NavButton to="/about" label="About Us" /></MenuItem>
          <MenuItem style={{ backgroundColor: "#fd7545" }} onClick={handleClose}> <NavButton to="/faq" label="FAQ" /></MenuItem>
        </Menu>
      </div>
    </div>
  );
}