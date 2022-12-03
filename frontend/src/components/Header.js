import React from "react";
import "./Header.css"
import Navbar from "./Navbar";
import logo from "../assets/logo.jpg";

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img alt="Logo" title="TicketBlaster" src={logo} width="200px" />
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    )
}

export default Header;