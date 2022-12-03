import React from "react";
import { NavLink } from "react-router-dom";
import "./NavButton.css";

function NavButton(props) {
    return (
        <NavLink className={({ isActive }) => isActive ? "activeLink" : "inactiveLink"} to={props.to}>
            <p>
                <p>{props.label}</p>
            </p>
        </NavLink>
    )
}

export default NavButton;