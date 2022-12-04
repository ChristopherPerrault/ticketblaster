import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css"

export default function RegisterButton(props) {

    return (
        <NavLink to={props.to}>
            <button className="Button"><p>REGISTER</p></button>
        </NavLink>
    )
}